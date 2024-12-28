import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getClients = async (req, res) => {
    try {
        const clients = await prisma.client.findMany(); // Retrieving all entries
        res.status(200).json(clients); // Sending response
    } catch (error) {
        res.status(500).json({ error: error.message }); // Handling error
    }
};



export const getClientSubscriptions = async (req, res) => {
    try {
        const clientSubscriptions = await prisma.clientSubscription.findMany(); // Retrieving all entries
        res.status(200).json(clientSubscriptions); // Sending response
    } catch (error) {
        res.status(500).json({ error: error.message }); // Handling error
    }
};
