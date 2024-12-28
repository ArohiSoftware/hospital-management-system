import express from 'express';
import { createSubscriptionPlan } from '../controller/marketing/SubscriptionPlans/create.subscriptionplans.js';
import { getAllSubscriptionPlans } from '../controller/marketing/SubscriptionPlans/getall.create.subscriptionplans.js';
import { getSubscriptionPlanById } from '../controller/marketing/SubscriptionPlans/getbyid.create.subscriptionplans.js';
import { deleteSubscriptionPlan } from '../controller/marketing/SubscriptionPlans/delete.create.subscriptionplans.js';
import { updateSubscriptionPlan } from '../controller/marketing/SubscriptionPlans/update.create.subscriptionplans.js';

export const planroutes = express.Router();

planroutes.post("/create",createSubscriptionPlan)
planroutes.get("/getall",getAllSubscriptionPlans)
planroutes.get("/getbyid/:id",getSubscriptionPlanById)
planroutes.delete("/delete/:id",deleteSubscriptionPlan)
planroutes.put("/update/:id",updateSubscriptionPlan)
