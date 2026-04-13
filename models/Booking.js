import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  seats: [String],
  total: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Booking ||
  mongoose.model("Booking", BookingSchema);
