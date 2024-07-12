import { Request, Response } from "express";
import { UpdateAppointmentService } from "../../services/appointmentServices/UpdateAppointmentService";

class UpdateAppointmentController {
  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params; // Pegando o ID dos parâmetros da rota
      const {
        name,
        surname,
        dateOfBirth,
        appointmentDate,
        appointmentTime,
        appointmentStatus,
      } = req.body;

      if (!id) {
        return res.status(400).json({ error: "ID do agendamento não fornecido." });
      }

      const updateAppointmentService = new UpdateAppointmentService();

      const updatedAppointment = await updateAppointmentService.execute({
        id,
        name,
        surname,
        dateOfBirth,
        appointmentDate,
        appointmentTime,
        appointmentStatus,
      });

      return res.json(updatedAppointment);
    } catch (error) {
      console.error("Erro ao atualizar agendamento:", error);
      return res.status(500).json({ error: "Erro interno ao atualizar agendamento." });
    }
  }
}

export { UpdateAppointmentController };
