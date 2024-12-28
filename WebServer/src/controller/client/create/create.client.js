import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createClient = async (req, res) => {
    try {
        const { name, phone, email, password, address, dob, hospital } = req.body; // Extracting parameters
        const client = await prisma.client.create({
            data: { name, phone, email, password, address, dob, hospital }, // Creating entry
        });
        client.id = client.id.toString()
        res.status(201).json(client); // Sending response
    } catch (error) {
        res.status(500).json({ error: error.message }); // Handling error
    }
};

export const createClientSubscription = async (req, res) => {
    try {
        const { clientId, startDate, endDate, paymentStatus, subscriptionStatus,
            //  subscriptionPlanId
        } = req.body;
        console.log(req.body)

        if (!clientId) {
            return res.status(400).json({ error: "Client ID is required." });
        }
        // if (!subscriptionPlanId) {
        //     return res.status(400).json({ error: "Subscription plan ID is required." });
        // }

        const existingClient = await prisma.client.findUnique({
            where: { id: clientId },
        });

        if (!existingClient) {
            return res.status(404).json({ error: "Client not found." });
        }
        // Check if client subscription already exists
        const existingSubscription = await prisma.clientSubscription.findUnique({
            where: { clientId: clientId },
        });

        if (existingSubscription) {
            return res.status(400).json({ error: "Client subscription already exists." });
        }
        // else{
        //     console.log("Client subscription does not exist, create a new one.");
        // }

        // Create a new subscription if client not exists
        const clientSubscription = await prisma.clientSubscription.create({
            data: {
                clientId,
                startDate,
                endDate,
                paymentStatus,
                subscriptionStatus,
                // subscriptionPlan: {
                //     connect: { id: subscriptionPlanId },
                // },
            },
        });

        res.status(201).json(clientSubscription);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

