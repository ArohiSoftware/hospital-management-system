// Medication 3rd page code
import React, { useState, useEffect, useContext } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { MedicationContext } from '../Component/Medication';
import { Plus, Minus, X } from 'lucide-react';
//3
export default function MedicationDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const context = useContext(MedicationContext);

  if (!context) {
    throw new Error("MedicationDetails must be used within a MedicationContext.Provider");
  }

  const { medications, setMedications } = context;

  const [formData, setFormData] = useState({
    id: '',
    patientMedicationId: '',
    surgeryRecordsId: '',
    doctorId: '',
    startDate: '',
    endDate: '',
    treatmentType: '',
    totalQuantity: '',
    reportDescription: '',
    cost: '',
    paid: ''
  });
  const [medicationList, setMedicationList] = useState([]);
  const [newMedication, setNewMedication] = useState({
    id: '',
    medication_name: '',
    dosage: '',
    frequency: '',
    cost: '',
    start_date: '',
    end_date: '',
    instructions: ''
  });
  const [instructions, setInstructions] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    if (location.state?.formData) {
      setFormData(location.state.formData);
    } else if (id) {
      const existingMedication = medications.find(med => med.id === id);
      if (existingMedication) {
        setFormData(existingMedication);
        setMedicationList(existingMedication.medications || []);
        setInstructions(existingMedication.instructions || '');
      }
    }
  }, [id, medications, location.state]);

  const handleAddMedication = () => {
    setMedicationList([...medicationList, newMedication]);
    setNewMedication({
      id: '',
      medication_name: '',
      dosage: '',
      frequency: '',
      cost: '',
      start_date: '',
      end_date: '',
      instructions: ''
    });
    setIsPopupOpen(false);
  };

  const handleRemoveMedication = (index) => {
    const updatedList = medicationList.filter((_, i) => i !== index);
    setMedicationList(updatedList);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const medicationData = {
      ...formData,
      medications: medicationList,
      instructions
    };

    if (id) {
      setMedications(medications.map(med => med.id === id ? medicationData : med));
    } else {
      setMedications([...medications, medicationData]);
    }

    navigate('/');
  };

  const calculateTotalCost = () => {
    return medicationList.reduce((total, med) => total + parseFloat(med.cost || 0), 0).toFixed(2);
  };

  return (
    <>
      <div className=''>
        <h1 className="text-xl font-semibold mb-6 bg-rose-100 p-2 rounded max-w-5xl mx-auto">New Medication</h1>
      </div>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md max-w-5xl mx-auto">
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Id</label>
            <input type="text" value={formData.id || ''} readOnly className="w-full p-2 bg-gray-200 rounded-md" placeholder="ID" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Patient medication id</label>
            <input type="text" value={formData.patientMedicationId || ''} readOnly className="w-full p-2 bg-gray-200 rounded-md" placeholder="Patient medication ID" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Surgery records id</label>
            <input type="text" value={formData.surgeryRecordsId || ''} readOnly className="w-full p-2 bg-gray-200 rounded-md" placeholder="Surgery records ID" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Doctor Id</label>
            <input type="text" value={formData.doctorId || ''} readOnly className="w-full p-2 bg-gray-200 rounded-md" placeholder="Doctor ID" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
            <input type="date" value={formData.startDate || ''} readOnly className="w-full p-2 bg-gray-200 rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
            <input type="date" value={formData.endDate || ''} readOnly className="w-full p-2 bg-gray-200 rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Treatment Type</label>
            <input type="text" value={formData.treatmentType || ''} readOnly className="w-full p-2 bg-gray-200 rounded-md" placeholder="Treatment Type" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Total Quantity</label>
            <input type="text" value={formData.totalQuantity || ''} readOnly className="w-full p-2 bg-gray-200 rounded-md" placeholder="Total Quantity" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Report Description</label>
            <input type="text" value={formData.reportDescription || ''} readOnly className="w-full p-2 bg-gray-200 rounded-md" placeholder="Report Description" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Cost</label>
            <input type="text" value={formData.cost || ''} readOnly className="w-full p-2 bg-gray-200 rounded-md" placeholder="Cost" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Paid</label>
            <input type="text" value={formData.paid || ''} readOnly className="w-full p-2 bg-gray-200 rounded-md" placeholder="Paid" />
          </div>
        </div>
        <div className="mb-6 ">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">Medicine Details</h2>
            <button type="button" onClick={() => setIsPopupOpen(true)} className="bg-gray-200 text-gray-600 p-1 rounded-full">
              <Plus size={20} />
            </button>
          </div>
          <table className="w-full bg-white">
            <thead className=" bg-rose-100">
              <tr>
                <th className="p-2 text-left">Medicine ID</th>
                <th className="p-2 text-left">Medication Name</th>
                <th className="p-2 text-left">Dosage</th>
                <th className="p-2 text-left">Frequency</th>
                <th className="p-2 text-left">Cost</th>
                <th className="p-2 text-left">Start Date</th>
                <th className="p-2 text-left">End Date</th>
                <th className="p-2 text-left">Instructions</th>
                <th className="p-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {medicationList.map((med, index) => (
                <tr key={index} className="border-b">
                  <td className="p-2">{med.id}</td>
                  <td className="p-2">{med.medication_name}</td>
                  <td className="p-2">{med.dosage}</td>
                  <td className="p-2">{med.frequency}</td>
                  <td className="p-2">{med.cost}</td>
                  <td className="p-2">{med.start_date}</td>
                  <td className="p-2">{med.end_date}</td>
                  <td className="p-2">{med.instructions}</td>
                  <td className="p-2">
                    <button type="button" onClick={() => handleRemoveMedication(index)} className="text-red-500">
                      <Minus size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-right mt-2 font-semibold">
            Total - {calculateTotalCost()}/-
          </div>
        </div>
        
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">Instructions</h2>
          </div>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className="w-full p-2 border rounded-md"
            rows={4}
          ></textarea>
        </div>
        <div className="flex justify-center mb-4">
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md w-1/6">
            Save
          </button>
        </div>
      </form>

      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-md w-96">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Add New Medication</h2>
              <button onClick={() => setIsPopupOpen(false)} className="text-gray-500">
                <X size={20} />
              </button>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Medicine ID</label>
              <input
                type="text"
                value={newMedication.id}
                onChange={(e) => setNewMedication({...newMedication, id: e.target.value})}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Medication Name</label>
              <input
                type="text"
                value={newMedication.medication_name}
                onChange={(e) => setNewMedication({...newMedication, medication_name: e.target.value})}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Dosage</label>
              <input
                type="text"
                value={newMedication.dosage}
                onChange={(e) => setNewMedication({...newMedication, dosage: e.target.value})}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Frequency</label>
              <input
                type="text"
                value={newMedication.frequency}
                onChange={(e) => setNewMedication({...newMedication, frequency: e.target.value})}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Cost</label>
              <input
                type="number"
                value={newMedication.cost}
                onChange={(e) => setNewMedication({...newMedication, cost: e.target.value})}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
              <input
                type="date"
                value={newMedication.start_date}
                onChange={(e) => setNewMedication({...newMedication, start_date: e.target.value})}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
              <input
                type="date"
                value={newMedication.end_date}
                onChange={(e) => setNewMedication({...newMedication, end_date: e.target.value})}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Instructions</label>
              <textarea
                value={newMedication.instructions}
                onChange={(e) => setNewMedication({...newMedication, instructions: e.target.value})}
                className="w-full p-2 border rounded-md"
                rows={3}
              ></textarea>
            </div>
            <button onClick={handleAddMedication} className="bg-blue-500 text-white px-4 py-2 rounded-md w-full">
              Add Medication
            </button>
          </div>
        </div>
      )}
    </>
  );
}