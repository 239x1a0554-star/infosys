import { getCustomerBookings } from "../services/bookingService.js";

export const fetchCustomerBookings = async (req, res) => {
  try {

    const { customerId } = req.params;

    const bookings = await getCustomerBookings(customerId);

    res.json(bookings);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};