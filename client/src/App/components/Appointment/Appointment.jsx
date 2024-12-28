import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { patientSearch } from '../../redux/actions/PatientSearching';
import axiosInstanceApp from '../../axiosConfig';
import { StaffSearch } from '../../redux/actions/StaffProfileAction';

const Appointment = () => {
  const [patientName, setPatientName] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [appointment_date, setAppointmentDate] = useState('');
  const [title, setReportTitle] = useState('Fever');
  const [appointment_type, setAppointmentType] = useState('New');
  const [description, setDescription] = useState('');
  const [status, setAppointmentStatus] = useState('PENDING');
  const [submitted, setSubmitted] = useState(false);
  const [patientSuggestions, setPatientSuggestions] = useState([]);
  const [doctorSuggestions, setDoctorSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showPatientSuggestions, setShowPatientSuggestions] = useState(false);
  const [showDoctorSuggestions, setShowDoctorSuggestions] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fetchPatientSuggestions = async (query) => {
    if (!query) {
      setPatientSuggestions([]);
      setShowPatientSuggestions(false);
      return;
    }
  
    setLoading(true);
    try {
      // Dispatch the action with form data and a callback
      dispatch(
        patientSearch(query, (result) => {
          console.log('Patient data:', result);
          setPatientSuggestions(result.map((patient) => patient.fullName));
          setShowPatientSuggestions(true);
        })
      );
    } catch (error) {
      console.error('Error fetching patient suggestions:', error);
    } finally {
      setLoading(false);
    }
  };
  

  const fetchDoctorSuggestions = async (query) => {
    if (!query.trim()) {
      setDoctorSuggestions([]);
      setShowDoctorSuggestions(false);
      return;
    }
  
    setLoading(true);
    try {
      dispatch(
        StaffSearch(query, (result) => {
          console.log("Patient data:", result);
          const suggestions = result?.map?.(doctor => doctor.fullName) || [];
          setDoctorSuggestions(suggestions);
          setShowDoctorSuggestions(true);
        })
      );
    } catch (error) {
      console.error("Error fetching doctor suggestions:", error);
      // Optionally show a toast or UI feedback
    } finally {
      setLoading(false);
    }
  };
  

  const handlePatientChange = (e) => {
    setPatientName(e.target.value);
    fetchPatientSuggestions(e.target.value);
    setShowPatientSuggestions(true);
  };

  const handleDoctorChange = (e) => {
    setDoctorName(e.target.value);
    fetchDoctorSuggestions(e.target.value);
    setShowDoctorSuggestions(true);
  };

  const handleSelectPatient = (patient) => {
    setPatientName(patient);
    setPatientSuggestions([]);
    setShowPatientSuggestions(false);
  };

  const handleSelectDoctor = (doctor) => {
    setDoctorName(doctor);
    setDoctorSuggestions([]);
    setShowDoctorSuggestions(false);
  };
  // render Suggestions function
  // render Suggestions function
// render Suggestions function
const renderSuggestions = (suggestions, handleSelect) => {
  return (
    <ul
      className="absolute bg-white border border-gray-300 mt-1 rounded-lg shadow-lg z-10"
      style={{
        maxHeight: '200px', // Limit the height of the suggestion box
        overflowY: 'auto',  // Enable scrolling
      }}
    >
      {suggestions.map((suggestion, index) => (
        <li
          key={index}
          className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
          onMouseDown={() => handleSelect(suggestion)} // Use onMouseDown here
        >
          {suggestion}
        </li>
      ))}
    </ul>
  );
};

  //Handel Submit function
  const handleSubmit = async (e) => {
    e.preventDefault();

    const appointmentData = {
      patientName,
      doctorName,
      appointment_date,
      title,
      appointment_type,
      description,
      status,
    };

    try {
      const response = await fetch('http://localhost:4000/api/opdAppointment/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(appointmentData),
      });

      console.log(response);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setSubmitted(true);

      const path = window.location.pathname;
      toast(`${patientName} Appointment created successfully!`)


      //clear all fields after the alert//
      setPatientName('');
      setDoctorName('');
      setAppointmentDate('');
      setReportTitle('Fever');
      setAppointmentType('New');
      setDescription('');
      setAppointmentStatus('PENDING');
      setPatientSuggestions([]);
      setDoctorSuggestions([]);


    } catch (error) {
      console.error('Error creating appointment:', error);
    }
  };

  const handlePatientFocus = () => {
    setShowPatientSuggestions(true);
  };

  const handlePatientBlur = () => {
    setShowPatientSuggestions(false);
  };

  const handleDoctorFocus = () => {
    setShowDoctorSuggestions(true);
  };

  const handleDoctorBlur = () => {
    setShowDoctorSuggestions(false);
    
  };

  return (

    <div className="flex-1 overflow-y-50 px-20 mt-10 rounded-lg m-4">
      <form onSubmit={handleSubmit} >
        <h1 className="text-2xl font-bold text-center mb-6 dark:text-white">Create Appointment</h1>

        <div className="flex flex-wrap -mx-3 mb-3">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 relative">
            <label className="block mb-2 text-sm font-medium dark:text-gray-100">
              Patient Name
              <input
                type="text"
                value={patientName}
                onChange={handlePatientChange}
                onFocus={handlePatientFocus}
                onBlur={handlePatientBlur}
                placeholder='Enter Patient Name'
                className="w-full p-2 mt-1 border rounded bg-white dark:bg-gray-100 dark:bg-opacity-10 dark:text-white dark:border-gray-500"
              />
              {showPatientSuggestions && (
                renderSuggestions(patientSuggestions, handleSelectPatient)
              )}
            </label>
          </div>

          <div className="w-full md:w-1/2 px-3 relative">
            <label className="block mb-2 text-sm font-medium dark:text-gray-100">
              Doctor Name
              <input
                type="text"
                value={doctorName}
                onChange={handleDoctorChange}
                onFocus={handleDoctorFocus}
                onBlur={handleDoctorBlur}
                placeholder="Enter Doctor's Name"
                className="w-full p-2 mt-1 border rounded bg-white dark:bg-gray-100 dark:bg-opacity-10 dark:text-white dark:border-gray-500"
              />
              {showDoctorSuggestions && (
                renderSuggestions(doctorSuggestions, handleSelectDoctor)
              )}
            </label>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-3">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block mb-2 text-sm font-medium dark:text-gray-100">
              Appointment Date
              <input
                type="date"
                value={appointment_date}
                onChange={(e) => setAppointmentDate(e.target.value)}
                className="w-full p-2 mt-1 border rounded bg-white dark:bg-gray-100 dark:bg-opacity-10 dark:text-white dark:border-gray-500"
              />
            </label>
          </div>

          <div className="w-full md:w-1/2 px-3">
            <label className="block mb-2 text-sm font-medium dark:text-gray-100">
              Report Title
              <select
                value={title}
                onChange={(e) => setReportTitle(e.target.value)}
                className="w-full p-2 mt-1 border rounded bg-white dark:bg-gray-700 dark:text-white dark:border-gray-500 dark:hover:bg-gray-700"
              >
                <option value="Fever">Fever</option>
                <option value="Cough">Cough</option>
                <option value="Headache">Headache</option>
              </select>
            </label>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-3">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block mb-2 text-sm font-medium dark:text-gray-100">
              Appointment Type
              <select
                value={appointment_type}
                onChange={(e) => setAppointmentType(e.target.value)}
                className="w-full p-2 mt-1 border rounded bg-white dark:bg-gray-700 dark:text-white dark:border-gray-500 dark:hover:bg-gray-700"
              >
                <option value="New">New</option>
                <option value="Follow-up">Follow-up</option>
              </select>
            </label>
          </div>

          <div className="w-full md:w-1/2 px-3">
            <label className="block mb-2 text-sm font-medium dark:text-gray-100">
              Status
              <select
                value={status}
                onChange={(e) => setAppointmentStatus(e.target.value)}
                className="w-full p-2 mt-1 border rounded bg-white dark:bg-gray-700 dark:text-white dark:border-gray-500 dark:hover:bg-gray-700"
              >
                <option value="PENDING">Pending</option>
                <option value="COMPLETED">Completed</option>
              </select>
            </label>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block mb-2 text-sm font-medium dark:text-gray-100">
              Description
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-2 mt-1 border rounded bg-white dark:bg-gray-100 dark:bg-opacity-10 dark:text-white dark:border-gray-500"
                placeholder='Enter Description'
                rows={4}
              />
            </label>
          </div>
        </div>

        <div className='flex justify-center'>
          <button
            type="submit"
            className="bg-blue-500 shadow-lg shadow-blue-500/50 text-white py-2 px-10 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Create Appointment
          </button>
        </div>
      </form>
    </div>
  );
};

export default Appointment;
