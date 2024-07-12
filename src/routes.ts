import { Router } from "express";

import { ListAppointmentController } from "./controllers/appointmentControllers/ListAppointmentController";
import { CreateAppointmentController } from "./controllers/appointmentControllers/CreateAppointmentController";
import { ListAvailableTimesController } from "./controllers/availableTimesController/ListAvailableTimesController";
import { UpdateAppointmentController } from "./controllers/appointmentControllers/UpdateAppointmentController";
import { DeleteAppointmentController } from "./controllers/appointmentControllers/DeleteAppointmentController";

const router = Router();

router.post("/agendamentos", new CreateAppointmentController().handle);
router.get("/agendamentos", new ListAppointmentController().handle);
router.get("/horarios-disponiveis", new ListAvailableTimesController().handle);
router.put("/agendamentos/:id", new UpdateAppointmentController().handle);
router.delete("/agendamentos/:id", new DeleteAppointmentController().handle);

export { router };
