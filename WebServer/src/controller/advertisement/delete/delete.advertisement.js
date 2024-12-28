import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export const deleteAdvertisement = async (req, res) => {
    try {
      const { id } = req.params;
  
      await prisma.advertisement.delete({
        where: { id :id },
      });
  
      res.status(204).send(); // No Content
    } catch (error) {
      console.error(error);
      if (error.code === 'P2025') {
        // Record not found
        res.status(404).json({ error: 'Advertisement not found' });
      } else {
        res.status(500).json({ error: 'Internal server error' });
      }
    }
  };