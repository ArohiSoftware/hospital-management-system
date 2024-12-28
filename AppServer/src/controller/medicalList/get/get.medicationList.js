import prisma from '../../../db/index.js'
export const getMedicationListByName = async (req, res) => {
    const { name } = req.params;
    try {
      const medications = await prisma.medication_list.findMany({
        where: {
          name: {
            contains: name,
            mode: 'insensitive',
          },
        },
        take: 5,
      });
  
      // Filter unique medication names
      const uniqueMedicationList = medications.filter((med, index, self) =>
        index === self.findIndex((m) => m.name === med.name)
      );
  
      res.json(uniqueMedicationList);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error retrieving medication suggestions' });
    }
  };