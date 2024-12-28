import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Get all subscription plans
export const getAllSubscriptionPlans = async (req, res) => {
    try {
      const plans = await prisma.subscriptionPlan.findMany();
      return res.status(200).json(plans);
    } catch (error) {
      console.error('Error fetching subscription plans:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };
