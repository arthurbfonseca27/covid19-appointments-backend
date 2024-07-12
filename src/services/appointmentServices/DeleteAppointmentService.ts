import prismaClient from "../../prisma";

interface DeleteAppointmentRequest {
  id: string;
}

class DeleteAppointmentService {
  async execute({ id }: DeleteAppointmentRequest) {
 
    const appointment = await prismaClient.appointment.findUnique({
      where: { id },
    });

    if (!appointment) {
      throw new Error("Agendamento não encontrado");
    }

    
    await prismaClient.appointment.delete({
      where: { id },
    });

    return { message: "Agendamento deletado com sucesso" };
  }
}

export { DeleteAppointmentService };
