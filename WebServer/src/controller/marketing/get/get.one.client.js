import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getMarketingById = async (req, res) => {
  try {
    const { id } = req.params;

    // Convert the id to an integer
    const intId = parseInt(id, 10);

    // Check if the conversion is successful
    if (isNaN(intId)) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }

    const marketing = await prisma.marketing.findUnique({
      where: { id: intId },
    });

    if (!marketing) {
      return res.status(404).json({ error: 'Marketing record not found' });
    }

    res.status(200).json(marketing);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

