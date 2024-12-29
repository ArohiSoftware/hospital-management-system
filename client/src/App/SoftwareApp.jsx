import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
// import Dashboard from "./pages/Dashbord";
import OPD from "./pages/OPD";
import IPD from "./pages/IPD";
import Ipd from "./components/IPD/IPD";
import Dashboard from "./pages/Dashbord";
import Graphs from "./components/graph/graph";
import PatientRegistrationForm from "./components/PatientRegistrationForm/PatientRegistrationForm";
import Appointment from "./components/Appointment/Appointment";
//import Ipd from "./pages/IPD";
import PatientCard from "./components/History/PatientCard";
import MainMedicalReport from "./components/MedicalReportSystem/MainMedicalReport";
import Medication from "./components/Medication/Medication";
import BillingReport from "./components/OPD Billing/BillingReport";
import TreatmentRoute from "./routes/treatment";
import AppointmentList from "./components/Appointment/AppointmentList";
import Profile from "./components/Profile/Profile";
import Staff from "./components/Profile/Staff";
import Showprofile from "./components/Profile/Showprofile";

function SoftwareApp() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="" element={<Graphs />} />
        <Route path="Profile" element={<Profile/>}/>
        <Route path="staff" element={<Staff/>}/>
        <Route path="Myprofile" element={<Showprofile/>}/>
      </Route>
      <Route path="/opd" element={<OPD />}>
        <Route path="" element={<PatientRegistrationForm />} />
        <Route path="Appointment" element={<Appointment />} />
        <Route path="Treatment/*" element={<TreatmentRoute/>} />
        <Route path="Billing" element={<BillingReport />} />
        <Route path="AppointmentList/*" element={<AppointmentList/>} />
      </Route>
      <Route path="/ipd" element={<IPD />}>
      <Route path="" element={<Ipd />} />
        <Route path="" element={<PatientRegistrationForm />} />
        <Route path="Appointment" element={<Appointment />} />
      </Route>
    </Routes>
  );
}

export default SoftwareApp;
