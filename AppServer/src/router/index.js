import express from 'express';
import AuthRoutes from '../routes/auth.routes.js';  // Add .js extension for local file import
import { healthCheck } from '../utils/healthCheck/health.controller.js';
import  settingRoute  from '../routes/routes.setting.js'
import staffRoutes from '../routes/routes.staff.js';
import opdAppointmentRoutes from '../routes/routes.opdAppointment.js';
import medicationRouter from  '../routes/routes.patientMedication.js'
import pateintreportroutes from '../routes/routes.patientreportdata.js';
import Opdtreatment from '../routes/route.Opdtreatment.js';
import billing from '../routes/route.billing.js';
import AdvancePayment from '../routes/route.advancePay.js';

import MedicationRoutes from '../routes/routes.Medication.js';
import PatientRoute from '../routes/patient.route.js';

import medication_file from '../routes/medication-file.js';


import LabReport from '../routes/routes.LabReport.js'
import TestRoutes from '../routes/test.routes.js';
import medicalReportRoute from '../routes/route.medicalReport.js';
import reportResultRoute from '../routes/route.reportResult.js';
import medicationList from '../routes/route.medicationList.js';




const AllRoutes = express();

// Define the route
AllRoutes.route('/health').get(healthCheck);

//setting routes
AllRoutes.use('/setting', settingRoute);
AllRoutes.use('/opdtreatment',Opdtreatment)
AllRoutes.use('/Billing',billing)
AllRoutes.use('/AdvanceBilling',AdvancePayment)
//staff routes
AllRoutes.use('/test',TestRoutes)
AllRoutes.use('/staff',staffRoutes);
AllRoutes.use('/auth',AuthRoutes);
//patientMedication routes
AllRoutes.use('/patientMedication', medicationRouter);

//MainMedication routes
AllRoutes.use('/medication_file', medication_file);

//Medication routes
AllRoutes.use('/medication',  MedicationRoutes);

//opdAppointment Routes
AllRoutes.use('/opdAppointment',opdAppointmentRoutes);

//PatintReportData route
AllRoutes.use('/patientreport',pateintreportroutes);

//patient Routes
AllRoutes.use('/patient',PatientRoute);

//LabReport routes
AllRoutes.use('/labReport',LabReport);

//medication list routes
AllRoutes.use('/medicationlist',medicationList)

//medical Report routes
AllRoutes.use('/medicalreport',medicalReportRoute);

//Report Result routes
AllRoutes.use('/reportresult',reportResultRoute);

// Export the router
export default AllRoutes;

