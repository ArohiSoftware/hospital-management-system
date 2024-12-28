import express from 'express';
import { createMedicalReport,updateMedicalReport,deleteMedicalReport,getAllMedicalReports,getMedicalReportById,getMedicalReportByPateintName } from '../controller/medicalReport/medicalReport.js';

const medicalReportRoute = express.Router();

medicalReportRoute.route('/create').post(createMedicalReport);
medicalReportRoute.route('/update').put(updateMedicalReport);
medicalReportRoute.route('/delete').delete(deleteMedicalReport);
medicalReportRoute.route('/getall').get(getAllMedicalReports);
medicalReportRoute.route('/getbyid').post(getMedicalReportById);
medicalReportRoute.route('/getMedicalReportByPateintName/:name').post(getMedicalReportByPateintName);

export default medicalReportRoute;