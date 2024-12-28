import React, { useEffect, useState } from 'react';
import Navbar from "../Navbar/Navbar";
import Sidebar from "../SideBar/Sidebar";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppointmentSearch } from '../../redux/actions/Appointment';
import { TreatmentOpd } from '../../redux/actions/Treatment';
import { toast } from 'react-toastify';
const Treatment = () => {
  const [formData, setFormData] = useState({
    appointment_id: '',
    patient_id: '',
    doctor_id: '',
    Doctor: '',
    slot:'',
    diagnosis: 'yes',
    treatment_plan: 'No',
    report_file: null,
    follow_up_date : '',
  });
  
  const [patientName, setPatientName] = useState('');
  const [patientNumber, setPatientNumber] = useState('');
  const [showPatientSuggestions, setShowPatientSuggestions] = useState(false);
  const [showMobileSuggestions, setShowMobileSuggestions] = useState(false); // For mobile number suggestions
  const [selectedPatient, setSelectedPatient] = useState(null); // To hold the full patient object

  const [patientSuggestions, setPatientSuggestions] = useState([]);
  const [mobileSuggestions, setMobileSuggestions] = useState([]); // Mobile number suggestions

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSelectPatient = (patient) => {
    formData.appointment_id=patient.id;
    formData.doctor_id=patient.doctor_id;
    formData.patient_id=patient.patient_id;
    setSelectedPatient(patient); // Store the full patient object
    setPatientName(patient.Petients.fullName); 
    setPatientNumber(patient.Petients.mobile_number); // Set the selected patient's mobile number
    setPatientSuggestions([]);
    setMobileSuggestions([]);
    setShowPatientSuggestions(false);
    setShowMobileSuggestions(false);
  };
  // useEffect(() => {
  //   // Set the default date to today's date (YYYY-MM-DD format)
  //   const today = new Date().toISOString().split('T')[0];
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     follow_up_date : today,
  //   }));
  // }, []);
  const fetchPatientSuggestions = async (query, type) => {
    if (!query.trim()) {
      type === 'name' ? setPatientSuggestions([]) : setMobileSuggestions([]);
      type === 'name' ? setShowPatientSuggestions(false) : setShowMobileSuggestions(false);
      return;
    }

    try {
      // Dispatch search based on the type (name or mobile)
      dispatch(
        AppointmentSearch(query, type, (result) => {
          console.log(result)
          setPatientSuggestions(result);
          if (type === 'name') {
            setShowPatientSuggestions(true);
            setShowMobileSuggestions(false);
          } else if (type === 'mobile') {
            setShowMobileSuggestions(true);
            setPatientSuggestions(false);
          }
        })
      );
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  const renderSuggestions = (suggestions, handleSelect, type) => {
    return (
      <ul
        className="absolute bg-white border border-gray-300 mt-1 rounded-lg shadow-lg z-10"
        style={{
          maxHeight: '200px',
          overflowY: 'auto',
        }}
      >
        {suggestions.map((suggestion, index) => (
          <li
            key={index}
            className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
            onMouseDown={() => handleSelect(suggestion)} // Use onMouseDown here
          >
            {type === 'name' ? suggestion.Petients.fullName : suggestion.Petients.mobile_number}
          </li>
        ))}
      </ul>
    );
  };

  const handlePatientChange = (e) => {
    setPatientName(e.target.value);
    fetchPatientSuggestions(e.target.value, 'name');
    setShowPatientSuggestions(true);
  };

  const handleMobileChange = (e) => {
    setPatientNumber(e.target.value);
    fetchPatientSuggestions(e.target.value, 'mobile');
    setShowMobileSuggestions(true);
  };

  const handlePatientFocus = () => {
    setShowPatientSuggestions(true);
  };

  const handlePatientBlur = () => {
    setShowPatientSuggestions(false);
  };

  const handleMobileFocus = () => {
    setShowMobileSuggestions(true);
  };

  const handleMobileBlur = () => {
    setShowMobileSuggestions(false);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (path) => {
    const { appointment_id,follow_up_date,diagnosis,doctor_id,patient_id,treatment_plan,slot } = formData;
    if(slot)
    {
  const [hours, minutes] = slot.split(":");
  const period = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12; // Convert "0" or "12+" hours to 12-hour format
  const formattedValue = `${formattedHours}:${minutes} ${period}`;
  formData.slot=formattedValue
    }
    if (!appointment_id|| !diagnosis || !doctor_id || !patient_id || !treatment_plan ) {
      toast.warning("Please fill in all required fields.");
      return;
    }
    dispatch(
      TreatmentOpd(formData, async (result) =>{
        console.log(result);
        toast(`successfull create a treatment ${patientName}`);
      navigate(window.location.pathname + path);
      })
    );
  

  };

  return (
    <div className="flex-1 rounded-lg pt-2 flex flex-col items-center justify-start">
      <form onSubmit={handleSubmit} className="mt-0 bg-opacity-60 rounded-lg p-6 w-full">
        <h2 className="text-lg my-8 bg-orange-500 shadow-lg shadow-orange-500/50 text-white text-center font-bold py-1 px-2">Add New Treatment</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">

          <div >
            <label className="block text-gray-700 text-sm font-bold mb-1">
              Patient Name:
              <input
                type="text"
                value={patientName}
                onChange={handlePatientChange}
                onFocus={handlePatientFocus}
                onBlur={handlePatientBlur}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
              {showPatientSuggestions && (
                renderSuggestions(patientSuggestions, handleSelectPatient, 'name')
              )}
            </label>
          </div>
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
              placeholder="Enter Appointment ID"
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
