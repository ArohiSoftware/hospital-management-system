import React, { useState, useEffect, useContext } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { MedicationContext } from './MainReport';

const TechnicianReportForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const context = useContext(MedicationContext);

  if (!context) {
    throw new Error("MedicationDetails must be used within a MedicationContext.Provider");
  }

  const { medications, setMedications } = context;

  const [formData, setFormData] = useState({
    technicianReportId: '',
    reportId: '',
    technicianId: '',
    createdAt: '',
    updatedAt: '',
    technicianNotes: '',
  });

  useEffect(() => {
    if (location.state?.formData) {
      setFormData(location.state.formData);
    } else if (id) {
      const existingMedication = medications.find(med => med.id === id);
      if (existingMedication) {
        setFormData(existingMedication);
      }
    }
  }, [id, medications, location.state]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);

    if (id) {
      setMedications(medications.map(med => med.id === id ? formData : med));
    } else {
      setMedications([...medications, formData]);
    }

    navigate('/');
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-8  mt-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-4 bg-gray-200 p-5 shadow-md rounded-md ">Technician Report</h1>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Technician Report ID</label>
            <input
              type="text"
              name="technicianReportId"
              value={formData.technicianReportId}
              onChange={handleInputChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Report ID</label>
            <input
              type="text"
              name="reportId"
              value={formData.reportId}
              onChange={handleInputChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Technician ID</label>
            <input
              type="text"
              name="technicianId"
              value={formData.technicianId}
              onChange={handleInputChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Created At</label>
            <input
              type="date"
              name="createdAt"
              value={formData.createdAt}
              onChange={handleInputChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Updated At</label>
            <input
              type="date"
              name="updatedAt"
              value={formData.updatedAt}
              onChange={handleInputChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">Technician Notes</label>
          <textarea
            name="technicianNotes"
            value={formData.technicianNotes}
            onChange={handleInputChange}
            rows="4"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter notes here"
          ></textarea>
        </div>

          <div className='flex justify-center align-middle'>
          <button
          type="submit"
          className=" py-2 px-4 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        > 
          Save
        </button>
          </div>
         
      </form>
    </div>
  );
};

export default TechnicianReportForm;
