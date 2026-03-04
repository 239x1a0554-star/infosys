import { supabase } from "../database/supabaseClient.js";

export const getCustomerBookings = async (customerId) => {
  const { data, error } = await supabase
    .from("bookings")
    .select(`
      id,
      service_type,
      booking_date,
      booking_time,
      status,
      providers(name)
    `)
    .eq("customer_id", customerId)
    .order("booking_date", { ascending: false });

  if (error) throw error;

  return data;
};