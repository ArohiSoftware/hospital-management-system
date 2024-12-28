import {PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();  

  // Update a subscription plan
export const updateSubscriptionPlan = async (req, res) => {
    const { id } = req.params;
    const { planName, price, duration, features } = req.body;
  
    try {
      const updatedPlan = await prisma.subscriptionPlan.update({
        where: { id: parseInt(id) },
        data: {
          planName,
          price,
          duration,
          features
        },
      });
  
      return res.status(200).json(updatedPlan);
    } catch (error) {
      console.error('Error updating subscription plan:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };
  
