import express from "express";
import {
  fetchProviderReviews,
  createReview
} from "../controllers/reviewController.js";

const router = express.Router();

router.get("/provider/:providerId", fetchProviderReviews);

router.post("/add", createReview);

export default router;