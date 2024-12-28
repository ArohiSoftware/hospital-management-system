import express from 'express';
import {createMarketing , loginClient ,createClient, createClientSubscription ,updateSubscriptionStatus ,createPlan ,createPaymentMethod} from "../controller/marketing/index.js"
import { createClientSub } from '../controller/marketing/Clientsubscription/Create.clientsub.js';
import { getPlans } from '../controller/marketing/Plansubscription/get.subplan.js';
import { verifyPayment } from '../controller/marketing/PaymentSub/create.pay.js';
import { getMarketingById } from '../controller/marketing/get/get.one.client.js';
import { authenticateToken } from '../middlewares/auth-middleware.js';



const marketing = express()
marketing.route('/create').post(createMarketing);
marketing.route('/client').post(createClient)
marketing.route('/clientlogin').post(loginClient)

marketing.route('/marketingBy/:id').get(getMarketingById)

// marketing.route('/clientsub').post(createClientSubscription)

marketing.route('/clientsub').post(authenticateToken, createClientSub)
marketing.route('/updateclientsub').put(updateSubscriptionStatus)
marketing.route('/subplan').post(createPlan)
marketing.route('/createpay').post(authenticateToken,createPaymentMethod)
marketing.route('/verifyPayment').post(verifyPayment)
marketing.route('/getallsubplans').get(getPlans)


export default marketing;