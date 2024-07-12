import prismaClient from "../../prisma";

interface UpdateAppointmentRequest {
  id: string;
  nome?: string;
  sobrenome?: string;
  dataNascimento?: Date;
  dataAgendamento?: Date;
  horarioAgendamento?: string; // formato "HH:mm"
  status?: boolean;
}

class UpdateAppointmentService {
  async execute({
    id,
    nome,
    sobrenome,
    dataNascimento,
    dataAgendamento,
    horarioAgendamento,
    status,
  }: UpdateAppointmentRequest) {
    // Verifique se o agendamento existe antes de tentar atualizá-lo
    const existingAppointment = await prismaClient.agendamento.findUnique({
      where: { id },
    });

    if (!existingAppointment) {
      throw new Error("Agendamento não encontrado.");
    }

    // Atualize o agendamento
    const appointment = await prismaClient.agendamento.update({
      where: { id },
      data: {
        nome,
        sobrenome,
        dataNascimento,
        dataAgendamento,
        horarioAgendamento,
        status,
      },
    });

    return appointment;
  }
}

export { UpdateAppointmentService };
