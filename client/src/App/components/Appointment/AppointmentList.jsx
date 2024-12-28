import { useState, useEffect } from 'react';
import axiosInstanceApp from "../../axiosConfig";
import { GetAllAppointment } from '../../redux/actions/Appointment';
import { useDispatch } from 'react-redux';

export default function AppointmentList() {
  const [appointments, setAppointments] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredAppointments, setFilteredAppointments] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    // axiosInstanceApp.get('/opdAppointment/AllAppointment')
    //   .then(response => {
    //     setAppointments(response.data.data);
    //     setFilteredAppointments(response.data.data);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching appointments:', error);
    //   });
    dispatch(
      GetAllAppointment((result) => {
        console.log(result)
    setAppointments(result);
   setFilteredAppointments(result);
      })
    );
  }, []);

  useEffect(() => {
    const results = appointments.filter(appointment =>
      appointment.Petients.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.id.toString().includes(searchTerm)
    );
    setFilteredAppointments(results);
  }, [searchTerm, appointments]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>

      <div className="text-lg mt-10 my-3 bg-orange-500 shadow-lg shadow-orange-500/50 text-white text-center font-bold py-1 px-2">
      <h1 className="text-xl font-bold px-3 ">Appointment List</h1>

     </div>
     <div className="  flex justify-center max-w-screen-2xl mx-auto">
    <h2 className="text-2xl text-black font-bold mt-5 font-bold text-center mb-6 dark:text-white">Appointment Reports</h2>
   </div>
    <div className="bg-white opacity-70 p-6 rounded-lg shadow-md max-w-screen-2xl mx-auto dark:bg-[#515765]">
      <div className="flex justify-between items-center mb-6">
        
        
      </div>
      <div className="mb-4 flex justify-center  space-x-2">
     <input
      type="text"
      placeholder="Search Patient Name or Doctor's Name"
      className="w-2/5 p-2 border rounded-xl dark:text-white dark:bg-gray-800"
      value={searchTerm}
      onChange={handleSearch}
     />
     <button className="bg-green-500 shadow-lg shadow-green-500/50 text-white px-4 py-2 rounded-xl hover:bg-green-600 transition-colors">View</button>
    </div>
      
    </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 border-b text-left">ID</th>
                <th className="py-2 px-4 border-b text-left">Patient Name</th>
                <th className="py-2 px-4 border-b text-left">Doctor Name</th>
                <th className="py-2 px-4 border-b text-left">Appointment Date</th>
                <th className="py-2 px-4 border-b text-left">Appointment Type</th>
                <th className="py-2 px-4 border-b text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredAppointments.map((appointment) => (
                <tr key={appointment.id}>
                  <td className="py-2 px-4 border-b">{appointment.id}</td>
                  <td className="py-2 px-4 border-b">{appointment.Petients.fullName}</td>
                  <td className="py-2 px-4 border-b">{appointment.Staff.fullName}</td>
                  <td className="py-2 px-4 border-b">{new Date(appointment.appointment_date).toLocaleString()}</td>
                  <td className="py-2 px-4 border-b">{appointment.appointment_type}</td>
                  <td className="py-2 px-4 border-b">{appointment.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}