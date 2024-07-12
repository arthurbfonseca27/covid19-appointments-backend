import { Request, Response } from "express";
import { CreateAppointmentService } from "../../services/appointmentServices/CreateAppointmentService";

class CreateAppointmentController {
  async handle(req: Request, res: Response) {
    const createAppointmentService = new CreateAppointmentService();

    const usuario = await createAppointmentService.execute(req.body);

    return res.json(usuario);
  }
}

export { CreateAppointmentController };
