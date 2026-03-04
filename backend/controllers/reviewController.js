import { getProviderReviews, addReview } from "../services/reviewService.js";

export const fetchProviderReviews = async (req, res) => {

  try {

    const { providerId } = req.params;

    const reviews = await getProviderReviews(providerId);

    res.json(reviews);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createReview = async (req, res) => {

  try {

    const review = req.body;

    const result = await addReview(review);

    res.json(result);

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};