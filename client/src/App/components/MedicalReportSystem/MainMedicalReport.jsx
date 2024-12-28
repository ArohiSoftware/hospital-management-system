import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2Icon } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { patientSearch } from '../../redux/actions/PatientSearching'; // Import your action

export default function MainMedicalReport() {
  const [reports, setReports] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [patientName, setPatientName] = useState('');
  const [patientSuggestions, setPatientSuggestions] = useState([]);
  const [showPatientSuggestions, setShowPatientSuggestions] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchReports = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // Simulating API call with setTimeout
        await new Promise(resolve => setTimeout(resolve, 1000));
        setReports([]); // Initialize with empty reports
      } catch (err) {
        setError('Failed to fetch reports. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchReports();
  }, []);

  const fetchPatientSuggestions = async (query) => {
    if (!query) {
      setPatientSuggestions([]);
      setShowPatientSuggestions(false);
      return;
    }

    try {
      dispatch(
        patientSearch(query, (result) => {
          console.log('Patient data:', result);
          setPatientSuggestions(result.map((patient) => patient.fullName));
          setShowPatientSuggestions(true);
        })
      );
    } catch (error) {
      console.error('Error fetching patient suggestions:', error);
    }
  };

  const handlePatientChange = (e) => {
    setPatientName(e.target.value);
    fetchPatientSuggestions(e.target.value);
    setShowPatientSuggestions(true);
  };

  const handleSelectPatient = (patient) => {
    setPatientName(patient);
    setPatientSuggestions([]);
    setShowPatientSuggestions(false);
  };

  const renderSuggestions = (suggestions, handleSelect) => {
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
            onMouseDown={() => handleSelect(suggestion)}
          >
            {suggestion}
          </li>
        ))}
      </ul>
    );
  };

  const handlePatientFocus = () => {
    setShowPatientSuggestions(true);
  };

  const handlePatientBlur = () => {
    setShowPatientSuggestions(false);
  };

  const handleAddNewFile = () => {
    const hostname = window.location.pathname;
    navigate(`${hostname}/new-report`);
  };

  const handleViewReports = async (query) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`http://localhost:4000/api/medicalreport/getMedicalReportByPateintName/${query}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: query }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data);
      setReports(data); // Set the fetched reports to state
      
    } catch (error) {
      console.error('Error fetching reports:', error);
      setError('Failed to fetch reports. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditReport = (report) => {
    const hostname = window.location.pathname;
    navigate(`${hostname}/report-result/${report.id}`, { state: { report } });
  };

  // Sorting reports based on lastModified date
  const sortedReports = [...reports].sort((a, b) => new Date(b.lastModified) - new Date(a.lastModified));
  const recentReports = sortedReports.slice(0, 3);

  return (
    <div className='p-8'>
      <div className="bg-[#E4D7D7] flex justify-between items-center w-full mx-auto py-2 px-4">
        <h1 className="text-xl font-bold">Main medical report</h1>
        <button onClick={handleAddNewFile} className="bg-green-400 text-white px-4 py-2 rounded-2xl">
          Add new file +
        </button>
      </div>
      <div className="flex justify-center max-w-5xl mx-auto">
        <h2 className="text-2xl text-black mb-1 font-bold mt-5">Reports</h2>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 relative">
          <label className="block mb-2">
            Patient Name:
          </label>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={patientName}
              onChange={handlePatientChange}
              onFocus={handlePatientFocus}
              onBlur={handlePatientBlur}
              className="flex-grow px-4 py-2 border border-gray-300 rounded-lg"
            />
            <button
              onClick={() => handleViewReports(patientName)}
              className="bg-green-400 text-white px-5 py-2 rounded-xl"
            >
              View
            </button>
          </div>
          {showPatientSuggestions && (
            renderSuggestions(patientSuggestions, handleSelectPatient)
          )}
        </div>
      </div>
      {recentReports.map((report, index) => (
        <div key={report.id} className="flex justify-between items-center bg-gray-100 p-4 rounded mb-2">
          <span className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            Medical report {index + 1} {/* This can be replaced with report.reportId or any other unique identifier */}
          </span>
          <button onClick={() => handleEditReport(report)} className="bg-green-400 text-white px-5 py-2 rounded-xl">
            Edit
          </button>
        </div>
      ))}
      {isLoading && (
        <div className="flex justify-center items-center py-4">
          <Loader2Icon className="animate-spin mr-2" />
          Loading...
        </div>
      )}
      {error && <div className="text-red-500 text-center py-4">{error}</div>}
    </div>
  );
}