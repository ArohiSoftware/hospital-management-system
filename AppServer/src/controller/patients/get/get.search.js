import prisma from "../../../db/index.js";

export const getPatientByName = async (req, res) => {
  const { name } = req.params;

  try {
    // Ensure 'name' is not empty or undefined
    if (!name || name.trim() === '') {
      return res.status(400).json({ error: 'Name is required' });
    }

    // Retrieve patients whose fullName starts with the provided 'name' value (case-insensitive)
    const patients = await prisma.petients.findMany({
      where: {
        fullName: {
          startsWith: name,       // Match names starting with the 'name' value
          mode: 'insensitive',    // Case-insensitive matching
        },
      },
    });

    // Return the matching patients
    res.json(patients);
  } catch (error) {
    console.error('Error fetching patients:', error);
    res.status(500).json({ error: 'Error retrieving patient suggestions' });
  }
};
