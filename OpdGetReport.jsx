import React from 'react';

const inputClasses = "w-full p-2 border border-gray-300 rounded placeholder-gray-400 mb-4";

const fields = [
  { label: "Finding Category", type: "select", options: ["Select"] },
  { label: "Finding List", type: "input", placeholder: "Finding List" },
  { label: "Finding Description", type: "input", placeholder: "Finding Description" },
  { label: "Medicine Category", type: "select", options: ["Select"] },
  { label: "Medicine", type: "select", options: ["Select"] },
  { label: "Dose", type: "select", options: ["Select"] },
  { label: "Dose Interval", type: "select", options: ["Select"] },
  { label: "Dose Duration", type: "select", options: ["Select"] },
  { label: "Instruction", type: "input", placeholder: "Instruction" },
  { label: "Test Prescription", type: "input", placeholder: "Test Prescription" },
  { label: "Drug History", type: "input", placeholder: "Drug History" },
  { label: "PMH/PSH", type: "input", placeholder: "PMH/PSH" },
  { label: "Footer Note", type: "input", placeholder: "Footer Note" },
];

const notifications = [
  "Admin", "Accountant", "Doctor", "Pharmacist", "Radiologist", 
  "Nurse", "Receptionist"
];

const OpdGetReport = () => (
  <div className="p-8 bg-gray-50 min-h-screen">
    {/* Header Note */}
    <input type="text" placeholder="Header Note" className={inputClasses} />

    {/* Fields rendering */}
    <div className="grid grid-cols-3 gap-4">
      {fields.map(({ label, type, placeholder, options }, index) => (
        <div key={index}>
          <label className="block mb-2 text-gray-600">{label}</label>
          {type === "input" ? (
            <input
              type="text"
              placeholder={placeholder}
              className={inputClasses}
            />
          ) : (
            <select className={`${inputClasses} text-gray-400`}>
              {options.map((opt, i) => (
                <option key={i}>{opt}</option>
              ))}
            </select>
          )}
        </div>
      ))}
    </div>

    {/* Checkbox - Finding Print */}
    <div className="flex items-center mb-4">
      <input type="checkbox" className="mr-2" />
      <label className="text-gray-600">Finding Print</label>
    </div>

    {/* Add Medicine Button */}
    <button className="bg-green-500 text-white p-2 rounded mb-4">
      + Add Medicine
    </button>

    {/* Attachment Upload */}
    <div className="mb-4">
      <label className="block mb-2 text-gray-600">Attachment</label>
      <input type="file" className={inputClasses} />
    </div>

    {/* Notification to Section */}
    <div className="mb-4">
      <label className="block mb-2 text-gray-600">Notification To</label>
      <div className="grid grid-cols-3 gap-2">
        {notifications.map((name, index) => (
          <label key={index} className="flex items-center">
            <input type="checkbox" className="mr-2" /> {name}
          </label>
        ))}
      </div>
    </div>

    {/* Submit Button */}
    <button className="bg-green-500 text-white p-3 rounded">Create Report</button>
  </div>
);

export default OpdGetReport;
