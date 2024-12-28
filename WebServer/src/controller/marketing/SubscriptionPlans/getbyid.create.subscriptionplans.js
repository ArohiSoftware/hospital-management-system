import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

  // Get a specific subscription plan by ID
export const getSubscriptionPlanById = async (req, res) => {
    const { id } = req.params;
    
    try {
      const plan = await prisma.subscriptionPlan.findUnique({
        where: { id: parseInt(id) }
      });
  
      if (!plan) {
        return res.status(404).json({ message: 'Subscription plan not found' });
      }
  
      return res.status(200).json(plan);
    } catch (error) {
      console.error('Error fetching subscription plan:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };