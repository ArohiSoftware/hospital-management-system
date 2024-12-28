import { Prisma, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
// Delete a subscription plan
export const deleteSubscriptionPlan = async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedPlan = await prisma.subscriptionPlan.delete({
        where: { id: parseInt(id) },
      });
  
      return res.status(200).json({ message: 'Subscription plan deleted successfully', deletedPlan });
    } catch (error) {
      console.error('Error deleting subscription plan:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };