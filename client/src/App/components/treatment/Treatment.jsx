import React, { useState } from 'react';
import Navbar from "../Navbar/Navbar";
import Sidebar from "../SideBar/Sidebar";
import { useNavigate } from 'react-router-dom';

const Treatment = () => {
  const [formData, setFormData] = useState({
    appointmentId: '',
    patientId: '',
    doctorId: '',
    diagnosis: '',
    treatmentPlan: '',
    reportFile: null,
    followUpDate: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  // Generic change handler for all input fields
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  // Validation and submission handler
  const handleSubmit = (path) => {
    const { appointmentId, patientId, doctorId, diagnosis, followUpDate } = formData;
    
    if (!appointmentId || !patientId || !doctorId || !diagnosis || !followUpDate) {
      alert("Please fill in all required fields.");
      return;
    }

    console.log(formData);
    alert("Data Submitted");
     handleNavigation(path)
  };

  // Conditional navigation function
  const handleNavigation = (path) => {
    const hostname = window.location.pathname;

      navigate(hostname+path);

  };

  return (
    <div className="flex-1 p-6 rounded-lg my-10 pt-2 flex flex-col items-center justify-start">
      <form onSubmit={handleSubmit} className="mt-0 bg-opacity-60 rounded-lg p-6 w-full max-w-4xl">
        <h2 className="text-lg my-8 bg-[#E4D7D7] text-gray-600 font-bold py-1 px-2">Add New Treatment</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-1">Appointment ID</label>
            <input
              type="text"
              name="appointmentId"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              value={formData.appointmentId}
              onChange={handleChange}
              placeholder="Enter Appointment ID"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-1">Patient Name</label>
            <input
              type="text"
              name="patientId"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              value={formData.patientId}
              onChange={handleChange}
              placeholder="Enter Patient ID"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-1">Doctor ID</label>
            <input
              type="text"
              name="doctorId"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              value={formData.doctorId}
              onChange={handleChange}
              placeholder="Enter Doctor ID"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-1">Diagnosis</label>
            <input
              type="text"
              name="diagnosis"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              value={formData.diagnosis}
              onChange={handleChange}
              placeholder="Enter Diagnosis"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-1">Treatment Plan</label>
            <textarea
              name="treatmentPlan"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              rows="4"
              value={formData.treatmentPlan}
              onChange={handleChange}
              placeholder="Enter Treatment Plan"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-1">Report File</label>
            <input
              type="file"
              name="reportFile"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-1">Follow-up Date</label>
            <input
              type="date"
              name="followUpDate"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              value={formData.followUpDate}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2 ">Fill reports</label>
            <div className='flex space-x-3 justify-start'>
              <button
                type="button"
                onClick={() => {  handleSubmit('/medication-file'); }}
                className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Medication file
              </button>
              <button
                type="button"
                onClick={() => {  handleSubmit('/medical-report'); }}
                className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Medical Report
              </button>
              <button
                type="button"
                onClick={() => { handleSubmit('/lab-report'); }}
                className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Lab Report
              </button> 
            </div>
          </div>

          <div className="md:col-span-2 flex justify-between m-auto font-bold">
            <button
              type="button"
              onClick={() => {handleSubmit('/billing'); }}
              className="bg-red-400 text-white px-6 py-2 rounded hover:bg-green-600"
            >
              Billing
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Treatment;
