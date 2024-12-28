//nain
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Treatment from '../components/treatment/Treatment.jsx'
import { ReportProvider } from '../components/MedicalReportSystem/ReportContext.jsx'
import MainMedicalReport from '../components/MedicalReportSystem/MainMedicalReport.jsx'
import Medication from '../components/Medication/Medication.jsx'
import MedicalReportSystem from '../components/MedicalReportSystem/MedicalReportSystem.jsx'
import LabReportRoute from '../components/LabReport/LabReportRoute.jsx'

export default function TreatmentRoute() {

  
  return (

    
        
        
              <ReportProvider>
                <Routes>
                  <Route path="" element={<Treatment/>} />
                  <Route path="medical-report/*" element={<MedicalReportSystem/>} />
                  <Route path="medication-file/*" element={<Medication/>} />
                  <Route path="lab-report/*" element={<LabReportRoute/>} />
                </Routes>
              </ReportProvider>
    
        
     
  )
}