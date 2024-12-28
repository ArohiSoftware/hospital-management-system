import prisma from "../../../db/index.js";

export const createMainMedication = async (req, res) => {
  console.log("Working...");
  const {
    patient_id,
    PatientMedication_id,
    SurgeryRecords_id,
    treatment_type,
    doctorName,
    type,
    description,
    test_file,
    cost,
    paid,
    total_quantity,
    start_date,
    end_date,
    ODPtreatment_id,
    IPDtreatment_id,
    ANCtreatment_id,
  } = req.body;

  console.log(req.body);

  try {
    // Find the doctor by fullName
    const doctor = await prisma.staff.findFirst({
      where: {
        fullName: doctorName,
      },
    });
    

    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found." });
    }

    let patientMedication;

    // If PatientMedication_id exists, find it
    if (PatientMedication_id) {
      patientMedication = await prisma.patientMedication.findUnique({
        where: { id: Number(PatientMedication_id) },
      });
    }

    console.log(patientMedication);

    // If PatientMedication doesn't exist, create a new one
    if (!patientMedication) {
      patientMedication = await prisma.patientMedication.create({
        data: {
          doctor_id: doctor.id,
          Medication_count: 1, // Adjust this as per your logic
          cost: Number(cost),
          paid: Number(paid),
          type: "Default", // You might want to change this to a dynamic value
          description,
          start_date,
          end_date,
          ODPtreatment_id,
          IPDtreatment_id,
          ANCtreatment_id,
        },
      });
    }

    // Create MainMedication with the existing or newly created PatientMedication ID
    const newMainMedication = await prisma.mainMedication.create({
      data: {
        patient_id,
        PatientMedication_id: patientMedication.id,
        SurgeryRecords_id: Number(SurgeryRecords_id),
        treatment_type,
        doctor_id: doctor.id,
        type,
        description,
        test_file,
        cost: Number(cost),
        paid: Number(paid),
        total_quantity:Number(total_quantity),
        start_date,
        end_date,
      },
    });

    console.log(newMainMedication);

    // Return the created main medication
    return res.status(201).json(newMainMedication);
  } catch (error) {
    // Enhanced error logging
    console.error("Error creating MainMedication:", error);
    return res.status(500).json({ message: 'Error creating MainMedication.', error });
  }
};
