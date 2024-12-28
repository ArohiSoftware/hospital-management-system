
import prisma from '../../../db/index.js';
import {  getCurrentDateInIST } from '../../../utils/dateConverter.js';

export const OPDTreatmentsController = async (req, res) => {
    const { appointment_id, patient_id, doctor_id, diagnosis, treatment_plan, report_file, follow_up_date,slot } = req.body;

    try {
      const existingTreatment = await prisma.oPDTreatments.findFirst({
        where: { appointment_id, patient_id, doctor_id, diagnosis, follow_up_date }
      });

      if (existingTreatment) {
        return res.status(400).json({ message: 'Treatment already exists for this appointment and doctor.' });
      }

      const newTreatment = await prisma.oPDTreatments.create({
        data: { appointment_id, patient_id, doctor_id, diagnosis, treatment_plan, report_file,follow_up_date:follow_up_date, slot:slot}
      });

      res.status(201).json({ msg: 'Successfully created OPD Treatment', data: newTreatment });
    } catch (error) {
      res.status(500).json({ message: 'Error creating OPD Treatment.', error: error.message });
    }
  }
