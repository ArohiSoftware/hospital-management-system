import express from 'express';
import {createMarketing} from "../controller/marketing/index.js"
const marketing = express()
marketing.route('/create').post(createMarketing);
export default marketing;