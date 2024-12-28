import prisma from "../../../db/index.js";
export const getMainMedications= async (req, res) => {
    try {
        const mainMedications = await prisma.mainMedication.findMany({
            where: { id: parseInt(req.params.id) },
          });
                return res.status(200).json(mainMedications);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error retrieving MainMedications.', error });
    }
  }