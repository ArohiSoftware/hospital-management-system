import React, { useState } from "react";
import Sidebar from "../SideBar/Sidebar";
import Navbar from "../Navbar/Navbar";


const BillingReport = () => {
  const [patientName, setPatientName] = useState("");
  const [patientId, setPatientId] = useState("");
  const [treatmentId, setTreatmentId] = useState("");
  const [type, setType] = useState("OPD");

  const billingData = {
    billingId: "LSOEDUJ85",
    date: "16 Oct 2024",
    time: "12:16 PM",
    items: [
      { particular: "abc", amount: 999.0 },
      { particular: "xyz", amount: 499.0 },
      { particular: "cedf", amount: 799.0 },
    ],
    totalAmount: 2297.0,
  };

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredItems = billingData.items.filter((item) =>
    item.particular.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const sgst = (billingData.totalAmount * 0.08).toFixed(2);
  const cgst = (billingData.totalAmount * 0.08).toFixed(2);
  const totalWithGST = (billingData.totalAmount + parseFloat(sgst) + parseFloat(cgst)).toFixed(2);
  
  return (
    
    <div className="min-h-screen bg-opacity-80 pt-10 flex">
      {/* Left side blank div taking 20% width */}
      {/* <div className="w-1/5"></div> */}

      {/* Right side (content) taking 80% width */}
      <div className="w-[85%] max-w-7xl mx-auto"> 
        <div className=" p-4 rounded-t-md ">
          <h1 className="text-3xl font-bold dark:text-white">Billing </h1>
          <div className="flex justify-between mt-2">
            <div className="text-sm dark:text-white">
              <p>
                <span className="font-bold dark:text-white"> Id:</span> {billingData.billingId}
              </p>
            </div>
            <div className="text-sm dark:text-white">
              <p>
                <span className="font-bold dark:text-white">Date:</span> {billingData.date}
              </p>
              <p>
                <span className="font-bold dark:text-white">Time:</span> {billingData.time}
              </p>
            </div>
          </div>
        </div>

        {/* Input fields for user data */}
        <div className="mt-2 grid grid-cols-2 gap-4 px">
          <div className="p-3 rounded">
            <p className="block mb-1 text-sm font-medium dark:text-gray-100">Patient Name</p>
            <input
              className="w-full p-2 border rounded bg-white dark:bg-gray-100 dark:bg-opacity-10 dark:text-white dark:border-gray-500" // Added bg-gray-200
              type="text"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              placeholder="Enter patient name"
            />
          </div>
          <div className="p-3 rounded">
            <p className="block mb-1 text-sm font-medium dark:text-gray-100">Patient Id</p>
            <input
              className="w-full p-2 border rounded bg-white dark:bg-gray-100 dark:bg-opacity-10 dark:text-white dark:border-gray-500" // Added bg-gray-200
              type="text"
              value={patientId}
              onChange={(e) => setPatientId(e.target.value)}
              placeholder="Enter patient ID"
            />
          </div>
          <div className="p-3 rounded">
            <p className="block mb-1 text-sm font-medium dark:text-gray-100">Treatment Id</p>
            <input
              className="w-full p-2 border rounded bg-white dark:bg-gray-100 dark:bg-opacity-10 dark:text-white dark:border-gray-500" // Added bg-gray-200
              type="text"
              value={treatmentId}
              onChange={(e) => setTreatmentId(e.target.value)}
              placeholder="Enter treatment ID"
            />
          </div>
          <div className="p-3 rounded">
            <p className="block mb-1 text-sm font-medium dark:text-gray-100">Type</p>
            <input
              className="w-full p-2 border rounded bg-white dark:bg-gray-100 dark:bg-opacity-10 dark:text-white dark:border-gray-500" // Added bg-gray-200
              type="text"
              value={type}
              onChange={(e) => setType(e.target.value)}
              placeholder="Enter type (e.g., OPD)"
            />
          </div>
        </div>

        {/* Search Input and Button */}
        <div className="flex justify-center mt-4 px-6">
          <button className="ml-4 bg-blue-500 shadow-lg shadow-blue-500/50 text-white px-6 py-2 rounded-lg   hover:bg-blue-600 transition-colors">
            Search
          </button>
        </div>
        <br />
        <hr className="border-black border-1 dark:border-white" />

        {/* Billing Items Table */}
        <div className="px-6 mt-6">
          <table className="w-full">
            <thead>
              <tr className="bg-[#E4D7D7]">
                <th className="p-2 text-left">S.no.</th>
                <th className="p-2 text-left">Particulars</th>
                <th className="p-2 text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map((item, index) => (
                <tr key={index}>
                  <td className="p-2 dark:text-white">{`${index + 1}.`}</td>
                  <td className="p-2 dark:text-white">{item.particular}</td>
                  <td className="p-2 text-right dark:text-white">{`${item.amount}/-`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <hr className="border-black border-1 dark:border-white" />

        <div className="mt-4 px-6 flex justify-end items-end gap-10 dark:text-white">
          <p className="font-bold text-lg pr-10">Total payable amount</p>
          <p className="text-lg font-bold">{`${billingData.totalAmount}/-`}</p>
        </div>
        <div className="mt-4 px-6 flex justify-end items-end gap-10 dark:text-white">
      <p className="font-bold text-lg pr-10">SGST 8%</p>
      <p className="text-lg font-bold">{`₹${sgst}/-`}</p>
    </div>
    <div className="mt-4 px-6 flex justify-end items-end gap-10 dark:text-white">
      <p className="font-bold text-lg pr-10">CGST 8%</p>
      <p className="text-lg font-bold">{`₹${cgst}/-`}</p>
    </div>
    <br />

    <hr className="border-black border-1 dark:border-white" />

    <div className="mt-4 px-6 flex justify-end items-end gap-10 dark:text-white">
      <p className="font-bold text-lg pr-10">Total with GST</p>
      <p className="text-lg font-bold">{`₹${totalWithGST}/-`}</p>
    </div>
        <br />
        {/* <hr className="border-black border-1" /> */}

        <div className="px-6 py-4 flex justify-center">
          <button className="mt-6 bg-green-500 shadow-lg shadow-green-500/50 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors">
            Create Billing Report
          </button>
        </div>
      </div>
    </div>
    
  );
};

export default BillingReport;
