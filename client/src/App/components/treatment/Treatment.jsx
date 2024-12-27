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
    <div className="flex-1 rounded-lg pt-2 flex flex-col items-center justify-start">
      <form onSubmit={handleSubmit} className="mt-0 bg-opacity-60 rounded-lg p-6 w-full">
        <h2 className="text-lg my-8 bg-orange-500 shadow-lg shadow-orange-500/50 text-white text-center font-bold py-1 px-2">Add New Treatment</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div>
            <label className="block mb-1 text-sm font-medium dark:text-gray-100">Appointment ID</label>
            <input
              type="text"
              name="appointmentId"
              className="w-full p-2 border rounded bg-white dark:bg-gray-100 dark:bg-opacity-10 dark:text-white dark:border-gray-500"
              value={formData.appointmentId}
              onChange={handleChange}
              placeholder="Enter Appointment ID"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium dark:text-gray-100">Patient Name</label>
            <input
              type="text"
              name="patientId"
              className="w-full p-2 border rounded bg-white dark:bg-gray-100 dark:bg-opacity-10 dark:text-white dark:border-gray-500"
              value={formData.patientId}
              onChange={handleChange}
              placeholder="Enter Patient ID"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium dark:text-gray-100">Doctor ID</label>
            <input
              type="text"
              name="doctorId"
              className="w-full p-2 border rounded bg-white dark:bg-gray-100 dark:bg-opacity-10 dark:text-white dark:border-gray-500"
              value={formData.doctorId}
              onChange={handleChange}
              placeholder="Enter Doctor ID"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium dark:text-gray-100">Diagnosis</label>
            <input
              type="text"
              name="diagnosis"
              className="w-full p-2 border rounded bg-white dark:bg-gray-100 dark:bg-opacity-10 dark:text-white dark:border-gray-500"
              value={formData.diagnosis}
              onChange={handleChange}
              placeholder="Enter Diagnosis"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium dark:text-gray-100">Treatment Plan</label>
            <textarea
              name="treatmentPlan"
              className="w-full p-2 border rounded bg-white dark:bg-gray-100 dark:bg-opacity-10 dark:text-white dark:border-gray-500"
              rows="3"
              value={formData.treatmentPlan}
              onChange={handleChange}
              placeholder="Enter Treatment Plan"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium dark:text-gray-100">Report File</label>
            <div className="relative">
              <input
                type="file"
                name="reportFile"
                id="reportFile"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={handleChange}
              />
              <label
                htmlFor="reportFile"
                className="flex w-full justify-center bg-blue-500 shadow-lg shadow-blue-500/50 text-white py-2 rounded cursor-pointer hover:bg-blue-600 transition-colors"
              >
                Choose File
              </label>
              {formData.reportFile && (
                <span className="absolute mt-3 ml-0 text-sm text-gray-500">
                  {formData.reportFile.name}
                </span>
              )}
            </div>
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium dark:text-gray-100">Follow-up Date</label>
            <input
              type="date"
              name="followUpDate"
              className="w-full p-2 border rounded bg-white dark:bg-gray-100 dark:bg-opacity-10 dark:text-white dark:border-gray-500"
              value={formData.followUpDate}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium dark:text-gray-100">Fill reports</label>
            <div className='flex space-x-3 justify-between'>
              <button
                type="button"
                onClick={() => {  handleSubmit('/medication-file'); }}
                className="w-1/3 bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white px-4 py-2 rounded hover:bg-cyan-600 transition-colors"
              >
                Medication file
              </button>
              <button
                type="button"
                onClick={() => {  handleSubmit('/medical-report'); }}
                className="w-1/3 bg-blue-500 shadow-lg shadow-blue-500/50 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
              >
                Medical Report
              </button>
              <button
                type="button"
                onClick={() => { handleSubmit('/lab-report'); }}
                className="w-1/3 bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white px-4 py-2 rounded hover:bg-indigo-600 transition-colors"
              >
                Lab Report
              </button> 
            </div>
          </div>

          <div className="md:col-span-2 flex justify-between m-auto font-bold">
            <button
              type="button"
              onClick={() => {handleSubmit('/billing'); }}
              className="bg-red-500 shadow-lg shadow-red-500/50 text-white px-6 py-2 rounded hover:bg-red-600 transition-colors"
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
