import prismaClient from "../../prisma";

interface AppointmentRequest {
  name: string;
  surname: string;
  dateOfBirth: Date;
  appointmentDate: Date;
  appointmentTime: string; 
  appointmentStatus: boolean;
}

class CreateAppointmentService {
  async execute({
    name,
    surname,
    dateOfBirth,
    appointmentDate,
    appointmentTime,
    appointmentStatus,
  }: AppointmentRequest) {

    const existingAppointments = await prismaClient.appointment.count({
      where: {
        appointmentDate,
        appointmentTime
      },
    });

    if (existingAppointments >= 2) {
      throw new Error("Horário indisponível");
    }

    const appointment = await prismaClient.appointment.create({
      data: {
        name,
        surname,
        dateOfBirth,
        appointmentDate,
        appointmentTime,
        appointmentStatus,
      },
    });

    return appointment;
  }
}

export { CreateAppointmentService };
