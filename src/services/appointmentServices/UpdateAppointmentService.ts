import prismaClient from "../../prisma";

interface UpdateAppointmentRequest {
  id: string;
  name?: string;
  surname?: string;
  dateOfBirth?: Date;
  appointmentDate?: Date;
  appointmentTime?: string; 
  appointmentStatus?: boolean;
}

class UpdateAppointmentService {
  async execute({
    id,
    name,
    surname,
    dateOfBirth,
    appointmentDate,
    appointmentTime,
    appointmentStatus,
  }: UpdateAppointmentRequest) {
    
    const existingAppointment = await prismaClient.appointment.findUnique({
      where: { id },
    });

    if (!existingAppointment) {
      throw new Error("Agendamento não encontrado.");
    }
    
    const appointment = await prismaClient.appointment.update({
      where: { id },
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

export { UpdateAppointmentService };
