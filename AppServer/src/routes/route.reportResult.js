import express from 'express';
import { createReportResult } from '../controller/reportResult/reportResult.js';

const reportResultRoute = express.Router();

reportResultRoute.route('/create').post(createReportResult);


export default reportResultRoute;