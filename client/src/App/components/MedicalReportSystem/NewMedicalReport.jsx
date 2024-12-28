import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useReportContext } from './ReportContext'

export default function NewMedicalReport() {
  const [currentReport, setCurrentReport] = useState({
    doctorId: '',
    treatmentId: '',
    mainReportId: '',
    reportDate: '',
    reportType: '',
    reportDescription: '',
    cost: '',
    paid: '',
    status: ''
  })
  const navigate = useNavigate()
  const { setReportData } = useReportContext()

  // Handle input change dynamically for each field
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setCurrentReport((prevReport) => ({
      ...prevReport,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission, e.g., save data, send to API, etc.
    setReportData(currentReport)
    console.log("Form Submitted:", currentReport)
    // You could navigate to another page if needed
    navigate(`/report-result/${currentReport.reportId}`)
  }

  return (
    <div className="p-8">
      <div className="bg-rose-100 h-4 flex justify-between items-center max-w-screen-2xl mx-auto p-4">
        <h1 className="text-lg font-bold text-gray-800 border-b pb-0">New medical report</h1>
      </div>
      <div className="bg-customGreen rounded-2xl p-6">
        <form onSubmit={handleSubmit}>
          {/* Report ID */}
          <div>
            <label className="block text-sm font-normal text-gray-700">Report ID</label>
            <input
              type="text"
              name="reportId"
              className="mt-1 pl-2 h-8 block w-full border rounded-md shadow-sm bg-gray-100"
              value={currentReport.reportId}
              onChange={handleInputChange}
            />
          </div>

          {/* Doctor ID */}
          <div>
            <label className="block text-sm font-normal text-gray-700">Doctor ID</label>
            <input
              type="text"
              name="doctorId"
              className="mt-1 pl-2 h-8 block w-full border rounded-md shadow-sm bg-gray-100"
              value={currentReport.doctorId}
              onChange={handleInputChange}
            />
          </div>

          {/* Treatment ID */}
          <div>
            <label className="block text-sm font-normal text-gray-700">Treatment ID</label>
            <input
              type="text"
              name="treatmentId"
              className="mt-1 pl-2 h-8 block w-full border rounded-md shadow-sm bg-gray-100"
              value={currentReport.treatmentId}
              onChange={handleInputChange}
            />
          </div>

          {/* Main Report ID */}
          <div>
            <label className="block text-sm font-normal text-gray-700">Main Report ID</label>
            <input
              type="text"
              name="mainReportId"
              className="mt-1 pl-2 h-8 block w-full border rounded-md shadow-sm bg-gray-100"
              value={currentReport.mainReportId}
              onChange={handleInputChange}
            />
          </div>

          {/* Report Date */}
          <div>
            <label className="block text-sm font-normal text-gray-700">Report Date</label>
            <input
              type="date"
              name="reportDate"
              className="mt-1 pl-2 h-8 block w-full border rounded-md shadow-sm bg-gray-100"
              value={currentReport.reportDate}
              onChange={handleInputChange}
            />
          </div>

          {/* Report Type */}
          <div>
            <label className="block text-sm font-normal text-gray-700">Report Type</label>
            <input
              type="text"
              name="reportType"
              className="mt-1 pl-2 h-8 block w-full border rounded-md shadow-sm bg-gray-100"
              value={currentReport.reportType}
              onChange={handleInputChange}
            />
          </div>

          {/* Report Description */}
          <div>
            <label className="block text-sm font-normal text-gray-700">Report Description</label>
            <textarea
              name="reportDescription"
              className="mt-1 pl-2 block w-full border rounded-md shadow-sm bg-gray-100"
              rows={3}
              value={currentReport.reportDescription}
              onChange={handleInputChange}
            ></textarea>
          </div>

          {/* Cost */}
          <div>
            <label className="block text-sm font-normal text-gray-700">Cost</label>
            <input
              type="text"
              name="cost"
              className="mt-1 pl-2 h-8 block w-full border rounded-md shadow-sm bg-gray-100"
              value={currentReport.cost}
              onChange={handleInputChange}
            />
          </div>

          {/* Paid */}
          <div>
            <label className="block text-sm font-normal text-gray-700">Paid</label>
            <input
              type="text"
              name="paid"
              className="mt-1 pl-2 h-8 block w-full border rounded-md shadow-sm bg-gray-100"
              value={currentReport.paid}
              onChange={handleInputChange}
            />
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-normal text-gray-700">Status</label>
            <textarea
              name="status"
              className="mt-1 pl-2 block w-full border rounded-md shadow-sm bg-gray-100"
              rows={3}
              value={currentReport.status}
              onChange={handleInputChange}
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="mt-6 col-span-3 flex justify-center">
            <button type="submit" className="bg-green-600 text-white px-8 py-3 text-lg rounded-md">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
