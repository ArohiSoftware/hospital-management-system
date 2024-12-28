import { PrismaClient } from '@prisma/client';
import Uploadoncloudinary from '../../../File_upload/Cloudnaryfile.js';


const prisma = new PrismaClient();

export const createAdvertisement = async (req, res) => {
  try {
    const { title, description , section} = req.body;

    console.log("this is file", req.file)

    const imageUrl = await Uploadoncloudinary(req.file.path);
console.log(imageUrl)
    // Validate required fields
    // if (!title || !imageUrl ) {
    //   return res.status(400).json({ error: 'Missing required fields' });
    // }

    const newAdvertisement = await prisma.advertisement.create({
      data: {
        title,
        description,
        imageUrl,
        section
      },
    });
    // console.log(newAdvertisement)
    
    //converting bigint into string
    // const newadd = {
    //   ...newAdvertisement,
    //   id: newAdvertisement.id.toString()
    // };
    res.status(201).json(newAdvertisement);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
