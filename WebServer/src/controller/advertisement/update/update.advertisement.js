import { PrismaClient } from '@prisma/client';
import Uploadoncloudinary from '../../../File_upload/Cloudnaryfile.js';

const prisma = new PrismaClient();

export const updateAdvertisement = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    console.log("Request body:", req.body);
    console.log("Uploaded file:", req.file);

    // Prepare the data to update
    const data = {};
    if (title) data.title = title;
    if (description) data.description = description;

    // If a new file is uploaded, handle the upload to Cloudinary
    if (req.file) {
      const imageUrl = await Uploadoncloudinary(req.file.path);
      console.log("Uploaded image URL:", imageUrl);
      data.imageUrl = imageUrl; // Add imageUrl to the data object
    }

    // Validate required fields
    if (Object.keys(data).length === 0) {
      return res.status(400).json({ error: 'No data provided for update' });
    }

    // Update the advertisement in the database
    const updatedAdvertisement = await prisma.advertisement.update({
      where: { id: id },
      data,
    });

    // Convert BigInt id to string
    // const updatedAdd = {
    //   ...updatedAdvertisement,
    //   id: updatedAdvertisement.id.toString(),
    // };

    res.status(200).json({message:"Advertise Updated succesfully"});
  } catch (error) {
    console.error("Update error:", error);
    if (error.code === 'P2025') {
      // Record not found
      res.status(404).json({ error: 'Advertisement not found' });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};
