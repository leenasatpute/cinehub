import { connectDB } from "@/lib/db";
import Booking from "@/models/Booking";

export async function POST(req) {
  try {
    console.log("API HIT 🚀");

    await connectDB();

    const body = await req.json();

    const booking = await Booking.create({
      seats: body.seats,
      total: body.total,
    });

    return Response.json({
      success: true,
      booking,
    });
  } catch (error) {
    return Response.json({
      success: false,
      error: error.message,
    });
  }
}
