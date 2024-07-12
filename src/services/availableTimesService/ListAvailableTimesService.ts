import prismaClient from "../../prisma";

class ListAvailableTimesService {
  async execute(appointmentDate: Date) {
    try {
      const startHour = 8;
      const endHour = 17;
      const maxAppointmentsPerTimeSlot = 2;
      const availableTimes: string[] = [];

      for (let hour = startHour; hour <= endHour; hour++) {
        const horario = `${String(hour).padStart(2, "0")}:00`;

        const appointmentForThisTime = await prismaClient.appointment.count({
          where: {
            appointmentDate,
            appointmentTime: horario,
          },
        });

        if (appointmentForThisTime < maxAppointmentsPerTimeSlot) {
          availableTimes.push(horario);
        }
      }

      return availableTimes;
    } catch (error) {
      throw new Error("Erro ao buscar horários disponíveis");
    }
  }
}

export { ListAvailableTimesService };
