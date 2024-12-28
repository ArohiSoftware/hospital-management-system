import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getPlans = async (req, res) => {
    try {
      const plans = await prisma.subscriptionPlan.findMany();
      res.status(200).json(plans);
    } catch (err) {
      res.status(500).json({ error: 'Fetching plans failed' });
    }
  };