-- CreateTable
CREATE TABLE "appointments" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "dateOfBirth" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "appointmentDate" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "appointmentTime" TEXT NOT NULL,
    "appointmentStatus" BOOLEAN NOT NULL,

    CONSTRAINT "appointments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "appointments_appointmentDate_appointmentTime_idx" ON "appointments"("appointmentDate", "appointmentTime");
