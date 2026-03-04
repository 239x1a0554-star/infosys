import express from "express";
import { fetchCustomerBookings } from "../controllers/bookingController.js";

const router = express.Router();

router.get("/customer/:customerId", fetchCustomerBookings);

export default router;