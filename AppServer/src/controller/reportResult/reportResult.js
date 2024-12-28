// reportResultsController.js

import prisma from "../../db/index.js"

// Controller to create new ReportResults
export const createReportResult = async (req, res) => {
    console.log(req.body);

  const { report_id, observations } = req.body; // Destructure report_id and observations from the request body
  

  // Validate the input
  if (!report_id || !Array.isArray(observations) || observations.length === 0) {
    return res.status(400).json({
      message: 'Invalid input. Please provide a report_id and an array of observations.',
    });
  }

  console.log("here");


  

  

  const data = []; // Initialize an empty array to store the mapped data

  for (const obs of observations) {
    data.push({
      report_id, // Use the report_id from the request body
      observation_name: obs.name,
      observation_value: obs.value,
    });
  }
  
  console.log(data); // Log the constructed data array
  

  try {
    // Create new report results
    const newReportResults = await prisma.reportResults.createMany({
      data: data
      
    });

    return res.status(201).json({
      message: 'Report results created successfully',
      data: newReportResults,
    });
  } catch (error) {
    console.error('Error creating report results:', error);
    return res.status(500).json({
      message: 'Error creating report results',
      error: error.message,
    });
  }
};