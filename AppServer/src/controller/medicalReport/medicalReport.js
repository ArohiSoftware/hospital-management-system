import prisma from '../../db/index.js'

// Create a new medical report
export const createMedicalReport = async (req, res) => {
  try {
    const {
      patient_id,
      doctor_id,
      MainReports_id,
      report_type,
      report_description,
      result_count,
      cost,
      paid,
      report_date,
      report_file,
      status,
    } = req.body;

    const newReport = await prisma.medicalReports.create({
      data: {
        patient_id,
        doctor_id,
        MainReports_id,
        report_type,
        report_description,
        result_count,
        cost,
        paid,
        report_date,
        report_file,
        status,
      },
    });

    res.status(201).json(newReport);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all medical reports
export const getAllMedicalReports = async (req, res) => {
  try {
    const reports = await prisma.medicalReports.findMany({
      include: {
        Patients: true,
        Staff: true,
        MainMedicalReports: true,
        ReportResults: true,
      },
    });
    res.status(200).json(reports);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a medical report by ID
export const getMedicalReportById = async (req, res) => {
  try {
    const { id } = req.params;

    const report = await prisma.medicalReports.findUnique({
      where: { report_id: parseInt(id, 10) },
      include: {
        Patients: true,
        Staff: true,
        MainMedicalReports: true,
        ReportResults: true,
      },
    });

    if (!report) {
      return res.status(404).json({ error: 'Medical report not found' });
    }

    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a medical report
export const updateMedicalReport = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const updatedReport = await prisma.medicalReports.update({
      where: { report_id: parseInt(id, 10) },
      data,
    });

    res.status(200).json(updatedReport);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a medical report
export const deleteMedicalReport = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.medicalReports.delete({
      where: { report_id: parseInt(id, 10) },
    });

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const getMedicalReportByPateintName = async (req, res) => {
    
    
    try {
        // Use req.params or req.query based on how you set up your route
        const { name } = req.params; // Change to req.query.name if using query parameters

        

        // Fetch the patient by full name
        const patient = await prisma.petients.findMany({
            where: {
                fullName: name
            }
        });

        console.log(patient);

        // Check if patient exists
        if (!patient) {
            return res.status(404).json({ error: "Patient not found" });
        }
        
        const medicalReport  = await prisma.medicalReports.findMany({
            where:{
                patient_id:patient[0].id
            }
        })
        // console.log(medicalReport);
        res.json(medicalReport);

    } catch (error) {
        console.error("Error fetching patient:", error);
        res.status(500).json({ error: error.message });
    }
};