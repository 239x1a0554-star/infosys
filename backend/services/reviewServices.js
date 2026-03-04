import { supabase } from "../database/supabaseClient.js";

export const getProviderReviews = async (providerId) => {
  const { data, error } = await supabase
    .from("reviews")
    .select(`
      rating,
      review_text,
      created_at,
      users(name),
      bookings(service_type)
    `)
    .eq("provider_id", providerId);

  if (error) throw error;

  return data;
};

export const addReview = async (review) => {

  const { data: existing } = await supabase
    .from("reviews")
    .select("id")
    .eq("booking_id", review.booking_id)
    .single();

  if (existing) {
    throw new Error("Review already submitted for this booking");
  }

  const { data, error } = await supabase
    .from("reviews")
    .insert([review])
    .select();

  if (error) throw error;

  return data;
};