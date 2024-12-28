import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const addLabReportDetail = async (req, res) => {
  const { detail_id,report_id, parameter_name, parameter_value, normal_range } = req.body;

  try {
    // Verify that the lab report exists
    const labReport = await prisma.labReports.findUnique({
      where: { id: report_id },
    });

    if (!labReport) {
      return res.status(404).json({ message: "Lab Report not found" });
    }

    // Create the new Lab Report Detail
    const newLabReportDetail = await prisma.labTestDetails.create({
      data: {
        detail_id,
        report_id,
        parameter_name,
        parameter_value,
        normal_range,
      },
    });

    res.status(201).json({
      msg: "Successfully added Lab Report Detail",
      newLabReportDetail,
    });
  } catch (error) {
    console.error("Error adding Lab Report Detail:", error.message);
    res.status(500).json({ message: "Error adding Lab Report Detail", error: error.message });
  }
};
