import express from "express";
import bookingRoutes from "./routes/bookingRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";

const app = express();

app.use(express.json());

app.use("/api/bookings", bookingRoutes);
app.use("/api/reviews", reviewRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});