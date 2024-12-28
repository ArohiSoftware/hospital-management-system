import { Prisma, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Create a new subscription plan
export const createSubscriptionPlan = async (req, res) => {
  const { planName, price, duration, features } = req.body;
  
  try {
    const newPlan = await prisma.SubscriptionPlan.create({
      data: {
        planName,
        price,
        duration,
        features
      },
    });
    return res.status(201).json({data:newPlan,
      success:true
    });
  } catch (error) {
    console.error('Error creating subscription plan:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};