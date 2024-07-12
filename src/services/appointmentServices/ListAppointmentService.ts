import prismaClient from "../../prisma";

class ListAppointmentService {
  async execute() {
    const appointment = await prismaClient.appointment.findMany();

    return appointment;
  }
}

export { ListAppointmentService };
