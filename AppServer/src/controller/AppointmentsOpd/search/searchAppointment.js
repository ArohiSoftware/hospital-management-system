import prisma from "../../../db/index.js";

export const searchAppointments = async (req, res) => {
    const {
        searchTerm, filterBy
      } = req.body;
      console.log(searchTerm);
      try {
    
    
        const searchCriteria = filterBy === "name"
        ? { fullName: { startsWith: searchTerm, mode: "insensitive" } }
        : { mobile_number: { startsWith: searchTerm, mode: "insensitive" } };
        const appointments = await prisma.appointments_OPD.findMany({
          where: {
            Petients: { // Apply filter on Patient relation
              ...searchCriteria
            }
          },
          include: {
            Petients: true,
            Staff:true
          }
        });
        res.json({ msg: "success", data: appointments });
      } catch (err) {
        console.error("Error creating appointment:", err);
        res.status(500).json({
          error: "An error occurred while creating the appointment",
          details: err.message,
        });
      }
  }; 