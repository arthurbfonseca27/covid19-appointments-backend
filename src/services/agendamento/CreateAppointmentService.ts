import prismaClient from "../../prisma";

interface AppointmentRequest {
  nome: string;
  sobrenome: string;
  dataNascimento: Date;
  dataAgendamento: Date;
  horarioAgendamento: string; // formato "HH:mm"
  status: boolean;
}

class CreateAppointmentService {
  async execute({
    nome,
    sobrenome,
    dataNascimento,
    dataAgendamento,
    horarioAgendamento,
    status,
  }: AppointmentRequest) {
    // Verificar se já existem 2 agendamentos para a data e horário
    const existingAppointments = await prismaClient.agendamento.count({
      where: {
        dataAgendamento,
        horarioAgendamento
      },
    });

    if (existingAppointments >= 2) {
      throw new Error("Horário indisponível");
    }

    // Criar um novo agendamento
    const agendamento = await prismaClient.agendamento.create({
      data: {
        nome,
        sobrenome,
        dataNascimento,
        dataAgendamento,
        horarioAgendamento,
        status,
      },
    });

    return agendamento;
  }
}

export { CreateAppointmentService };
