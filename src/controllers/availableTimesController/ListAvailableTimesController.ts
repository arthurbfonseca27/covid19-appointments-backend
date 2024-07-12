import { Request, Response } from "express";
import { ListAvailableTimesService } from "../../services/availableTimesService/ListAvailableTimesService";

class ListAvailableTimesController {
  async handle(req: Request, res: Response) {
    const { appointmentDate } = req.query;

    try {
      if (!appointmentDate) {
        throw new Error("Parâmetro appointmentDate não fornecido");
      }

      const service = new ListAvailableTimesService();
      const availableTimes = await service.execute(
        new Date(appointmentDate as string)
      );

      res.status(200).json(availableTimes);
    } catch (error) {
      console.error("Erro ao buscar horários disponíveis:", error);
      res.status(500).json({ error: "Erro ao buscar horários disponíveis" });
    }
  }
}

export { ListAvailableTimesController };
