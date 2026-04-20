"use client";

import { useSearchParams } from "next/navigation";

export default function CheckoutPage() {
  const searchParams = useSearchParams();

  const seats = searchParams.get("seats");
  const total = searchParams.get("total");

  const handleBooking = async () => {
    console.log("Button Clicked ✅"); // 👈 check 1

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          seats: seats ? seats.split(",") : [],
          total: Number(total),
        }),
      });

      const data = await res.json();

      console.log("Response:", data); //

      if (data.success) {
        alert("Booking Successful 🎉");
      } else {
        alert("Booking Failed ❌");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Checkout Page</h1>

      <p className="mt-4">Seats: {seats}</p>
      <p>Total: ₹{total}</p>

      <button
        onClick={handleBooking}
        className="bg-green-500 text-white px-4 py-2 mt-4 rounded"
      >
        Confirm Booking
      </button>
    </div>
  );
}
