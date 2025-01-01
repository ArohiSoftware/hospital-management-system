import React, { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import emailjs from 'emailjs-com';
import Sidebar from "../SideBar/Sidebar";
import Navbar from "../Navbar/Navbar";




const BillingReport = () => {
  const [patientName, setPatientName] = useState("");
  const [patientId, setPatientId] = useState("");
  const [treatmentId, setTreatmentId] = useState("");
  const [type, setType] = useState("OPD");

  const contentRef = useRef();
  const handlePrint = useReactToPrint({ contentRef })


  const generatePDF = async () => {
    const element = contentRef.current;

    if (element) {
      const canvas = await html2canvas(element);
      const imgData = canvas.toDataURL('image/png');

      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      return pdf.output('datauristring'); // Returns the PDF as a Data URI
    }
  };


  const emailPDF = async () => {
    const pdfDataUri = await generatePDF();

    const emailParams = {
      to_name: 'Nomaan Rizvi', // This matches the template variable
      to_email: 'nomaanrizvi007@gmail.com',
      message: 'Please find the attached Billing Report.',
      // pdf: pdfDataUri,
      reply_to: '{{reply_to}}' // If you want to use the reply-to field from template
    };

    emailjs
      .send(
        'service_r29rcbp', // Replace with your EmailJS service ID
        'template_a26rfd9', // Replace with your EmailJS template ID
        emailParams,
        'DzNqFObxPDCmfAHEj' // Replace with your EmailJS user ID (found in EmailJS dashboard)
      )
      .then(
        (response) => {
          alert('Email sent successfully!');
        },
        (error) => {
          alert('Failed to send email. Please try again.');
          console.error('EmailJS Error:', error);
        }
      );
  };

  const downloadPDF = async () => {
    const element = contentRef.current;

    if (element) {
      // Convert the element to a canvas
      const canvas = await html2canvas(element);
      const imgData = canvas.toDataURL('image/png');

      // Create a PDF and add the image
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('billing_report.pdf');
    }
  };



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
          <h1 className="text-3xl font-bold">Billing </h1>
          <div className="flex justify-between mt-2">
            <div className="text-sm">
              <p>
                <span className="font-bold"> Id:</span> {billingData.billingId}
              </p>
            </div>
            <div className="text-sm">
              <p>
                <span className="font-bold">Date:</span> {billingData.date}
              </p>
              <p>
                <span className="font-bold">Time:</span> {billingData.time}
              </p>
            </div>
          </div>
        </div>

        {/* Input fields for user data */}
        <div className="mt-2 grid grid-cols-2 gap-4 px">
          <div className="p-3 rounded">
            <p className="text-sm font-bold">Patient Name</p>
            <input
              className="mt-1 p-2 w-full border rounded bg-gray-200" // Added bg-gray-200
              type="text"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              placeholder="Enter patient name"
            />
          </div>
          <div className="p-3 rounded">
            <p className="text-sm font-bold">Patient Id</p>
            <input
              className="mt-1 p-2 w-full border rounded bg-gray-200" // Added bg-gray-200
              type="text"
              value={patientId}
              onChange={(e) => setPatientId(e.target.value)}
              placeholder="Enter patient ID"
            />
          </div>
          <div className="p-3 rounded">
            <p className="text-sm font-bold">Treatment Id</p>
            <input
              className="mt-1 p-2 w-full border rounded bg-gray-200" // Added bg-gray-200
              type="text"
              value={treatmentId}
              onChange={(e) => setTreatmentId(e.target.value)}
              placeholder="Enter treatment ID"
            />
          </div>
          <div className="p-3 rounded">
            <p className="text-sm font-bold">Type</p>
            <input
              className="mt-1 p-2 w-full border rounded bg-gray-200" // Added bg-gray-200
              type="text"
              value={type}
              onChange={(e) => setType(e.target.value)}
              placeholder="Enter type (e.g., OPD)"
            />
          </div>
        </div>

        {/* Search Input and Button */}
        <div className="flex justify-center mt-4 px-6">
          <button className="ml-4 bg-blue-500 text-white px-6 py-2 rounded-lg">
            Search
          </button>
        </div>
        <br />
        <hr className="border-black border-1" />


        {/* Billing Items Table */}
        <div ref={contentRef}>
          <h1 className="font-bold text-lg ml-6 mt-6">Billing Report</h1>
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
                    <td className="p-2">{`${index + 1}.`}</td>
                    <td className="p-2">{item.particular}</td>
                    <td className="p-2 text-right">{`₹${item.amount}/-`}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <hr className="border-black border-1" />

          <div className="mt-4 px-6 flex justify-end items-end gap-10">
            <p className="font-bold text-lg pr-10">Total payable amount</p>
            <p className="text-lg font-bold">{`₹${billingData.totalAmount}/-`}</p>
          </div>
          <div className="mt-4 px-6 flex justify-end items-end gap-10">
            <p className="font-bold text-lg pr-10">SGST 8%</p>
            <p className="text-lg font-bold">{`₹${sgst}/-`}</p>
          </div>
          <div className="mt-4 px-6 flex justify-end items-end gap-10">
            <p className="font-bold text-lg pr-10">CGST 8%</p>
            <p className="text-lg font-bold">{`₹${cgst}/-`}</p>
          </div>
          <br />

          <hr className="border-black border-1" />

          <div className="mt-4 px-6 flex justify-end items-end gap-10">
            <p className="font-bold text-lg pr-10">Total with GST</p>
            <p className="text-lg font-bold">{`₹${totalWithGST}/-`}</p>
          </div>
          <br />
          <hr className="border-black border-1" />
        </div>


        <div className="flex gap-2">
          <button className="mt-3 bg-green-500 text-white px-2 py-0 rounded-lg text-[15px]" onClick={() => handlePrint()}>
            Print
          </button>

          <button className="mt-3 bg-green-500 text-white px-2 py-0 rounded-lg text-[15px] " onClick={downloadPDF}>Download PDF</button>

          <button className="mt-3 bg-green-500 text-white px-2 py-0 rounded-lg text-[15px] " onClick={emailPDF}>Email PDF</button>
        </div>


        <div className="px-6 py-4 flex gap-2 justify-center">

          <button className="mt-6 bg-green-500 text-white px-6 py-2 rounded-lg ">
            Create Billing Report
          </button>

        </div>
      </div>
    </div>

  );
};

export default BillingReport;
