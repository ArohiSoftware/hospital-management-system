import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { PlusIcon, MinusIcon } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useReportContext } from './ReportContext';

export default function ReportResult() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  console.log("location", location)
  console.log("report data", reportData)

  const { reportData } = useReportContext();

  const [currentReport, setCurrentReport] = useState(null);
  const [observations, setObservations] = useState([]);
  const [newObservation, setNewObservation] = useState({ name: '', value: '' });
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchReport = async () => {
      setIsLoading(true);
      try {
        // Check if report data is passed through the state
        if (location.state && location.state.report) {
          const reportFromState = location.state.report;
          setCurrentReport(reportFromState);
          setObservations(reportFromState.observations || []);
        } else if (reportData) {
          // Use report data from context if available
          setCurrentReport(reportData);
          setObservations(reportData.observations || []);
        }

        else {
          // Fallback to fetching from API if no context data
          await new Promise(resolve => setTimeout(resolve, 1000));
          const fetchedReport = {
            id: id,
            reportId: `KSFL${id}`,
            doctorId: `LOAI${id}`,
            treatmentId: `W349588YTH${id}`,
            mainReportId: 'OPD',
            reportDate: new Date().toISOString().split('T')[0],
            reportType: 'OPD',
            reportDescription: 'Fetched patient report',
            cost: '0',
            paid: '0',
            status: 'New',
            observations: [],
            lastModified: new Date()
          };
          setCurrentReport(fetchedReport);
          setObservations(fetchedReport.observations);
        }
      } catch (error) {
        console.log('Error fetching report:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReport();
  }, [id]);

  const handleAddObservation = () => {
    setShowPopup(true);
  };

  const handleSaveObservation = () => {
    if (newObservation.name && newObservation.value) {
      const updatedObservations = [...observations, newObservation];
      setObservations(updatedObservations);
      setNewObservation({ name: '', value: '' });
      setShowPopup(false);
    }
  };

  const handleDeleteObservation = (index) => {
    const updatedObservations = observations.filter((_, i) => i !== index);
    setObservations(updatedObservations);
  };

  const handleSubmit = async () => {
    console.log(currentReport.report_id);
    try {
      // Replace the following URL with your actual API endpoint
      const response = await fetch('http://localhost:4000/api/reportresult/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          report_id: currentReport.report_id,
          observations: observations,
        }),
      });
      console.log(response);

      if (!response.ok) {
        throw new Error('Failed to save observations');
      }

      const result = await response.json();
      console.log('Observations saved successfully:', result);
      // Optionally navigate to another page or show a success message
      toast.success("Success Notification !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      console.error('Error saving observations:', error);
      // Handle error (e.g., show an error message)
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!currentReport) {
    return <div>Error loading report data</div>;
  }

  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold text-center mb-6">Medical Report Result</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-normal text-gray-700">Report ID</label>
            <input type="text" className="mt-1 pl-2 h-8 block w-full border rounded-md shadow-sm bg-gray-100" value={currentReport.report_id} readOnly />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Doctor ID</label>
            <input type="text" className="mt-1 pl-2 h-8 block w-full border rounded-md shadow-sm bg-gray-100" value={currentReport.doctor_id} readOnly />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Treatment ID</label>
            <input type="text" className="mt-1 pl-2 h-8 block w-full border rounded-md shadow-sm bg-gray-100" value={currentReport.treatment_id} readOnly />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 ">Main Report ID</label>
            <input type="text" className="mt-1 pl-2 h-8 block w-full border rounded-md shadow-sm bg-gray-100" value={currentReport.MainReport_id} readOnly />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Report Date</label>
            <input type="date" className="mt-1 pl-2 h-8 block w-full border rounded-md shadow-sm bg-gray-100" value={currentReport.report_date} readOnly />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Report Type</label>
            <input type="text" className="mt-1 pl-2 h-8 block w-full border rounded-md shadow-sm bg-gray-100" value={currentReport.report_type} readOnly />
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Report Description</label>
          <textarea className="mt-1 block w-full border rounded-md shadow-sm bg-gray-100" rows={3} value={currentReport.report_description} readOnly></textarea>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Cost</label>
            <input type="text" className="mt-1 pl-2 h-8 block w-full border rounded-md shadow-sm bg-gray-100" value={currentReport.cost} readOnly />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Paid</label>
            <input type="text" className="mt-1 pl-2 h-8 block w-full border rounded-md shadow-sm bg-gray-100" value={currentReport.paid} readOnly />
          </div>
          <div></div>
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Status</label>
          <textarea className="mt-1 pl-2 block w-full border rounded-md shadow-sm bg-gray-100" rows={3} value={currentReport.status} readOnly></textarea>
        </div>

        <hr className="border-t-1 border-gray-400 my-4" />

        <table className="w-full mt-3">
          <thead className='bg-rose-100'>
            <tr>
              <th className="text-left pb-2">Observation Name</th>
              <th className="text-left pb-2">Observation Value</th>
              <th className="w-10">
                <button onClick={handleAddObservation} className="bg-green-500 text-white p-2 rounded">
                  <PlusIcon className="w-5 h-5" />
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {observations.map((obs, index) => (
              <tr key={index}>
                <td className="py-2">{obs.name}</td>
                <td className="py-2">{obs.value}</td>
                <td>
                  <button onClick={() => handleDeleteObservation(index)} className="text-red-500">
                    <MinusIcon className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <hr className="border-t-1 border-gray-400 my-4" />
        <div className="flex justify-end mt-4">
          <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
            Submit Observations
          </button>
        </div>
      </div>
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Add Observation</h2>
            <input
              type="text"
              placeholder="Observation Name"
              className="block w-full border pl-2 h-8 rounded-md shadow-sm mb-2"
              value={newObservation.name}
              onChange={(e) => setNewObservation({ ...newObservation, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Observation Value"
              className="block w-full border pl-2 h-8 rounded-md shadow-sm mb-4"
              value={newObservation.value}
              onChange={(e) => setNewObservation({ ...newObservation, value: e.target.value })}
            />
            <div className="flex justify-end gap-3">
              <button onClick={() => setShowPopup(false)} className="mr-2 ml-0 px-4 py-2 border rounded">Cancel</button>
              <button onClick={handleSaveObservation} className="bg-green-500 text-white px-4 py-2 rounded">Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}