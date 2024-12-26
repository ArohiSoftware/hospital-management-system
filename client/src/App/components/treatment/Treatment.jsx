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
    if (slot) {
      // Check if the slot is already formatted
      const isFormatted = /\d{1,2}:\d{2} (AM|PM)/.test(slot);
      
      if (!isFormatted) {
        const [hours, minutes] = slot.split(":");
        const period = hours >= 12 ? "PM" : "AM";
        const formattedHours = hours % 12 || 12; // Convert "0" or "12+" hours to 12-hour format
        const formattedValue = `${formattedHours}:${minutes} ${period}`;
        formData.slot = formattedValue;
      }
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
    <div className="flex-1 rounded-lg  pt-2 flex flex-col items-center justify-start">
      <form onSubmit={handleSubmit} className="mt-0 bg-opacity-60 rounded-lg p-6 w-full ">
        <h2 className="text-lg my-8 bg-[#E4D7D7] text-gray-600 font-bold py-1 px-2">Add New Treatment</h2>
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
            <label className="block text-gray-700 text-sm font-bold mb-1">
              Patient Mobile Number:
              <input
                type="text"
                value={patientNumber}
                onChange={handleMobileChange}
                onFocus={handleMobileFocus}
                onBlur={handleMobileBlur}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
              {showMobileSuggestions && renderSuggestions(patientSuggestions, handleSelectPatient, 'mobile')}
            </label>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-1">Report id</label>
            <input
              type="text"
              readOnly
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              value={selectedPatient?.PetientReportData_id
                }
              onChange={handleChange}
              placeholder="Enter Appointment ID"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-1">Appointment ID</label>
            <input
              type="text"
              name="appointmentId"
              readOnly
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              value={selectedPatient?.id
                }
              onChange={handleChange}
              placeholder="Enter Appointment ID"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-1">Doctor ID</label>
            <input
              type="text"
              name="fullName"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              value={selectedPatient?.Staff.fullName}
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
              name="treatment_plan"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              rows="4"
              value={formData.treatment_plan}
              onChange={handleChange}
              placeholder="Enter Treatment Plan"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-1">Report File</label>
            <input
              type="file"
              name="report_file"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-1">Follow-up Date</label>
            <input
              type="date"
              name="follow_up_date"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              value={formData.follow_up_date}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-1">Follow-up Date</label>
            <input
              type="time"
              name="slot"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              value={formData.slot}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2 ">Fill reports</label>
            <div className='flex space-x-3 justify-start'>
              <button
                type="button"
                onClick={() => {  console.log("clicked"); }}
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
