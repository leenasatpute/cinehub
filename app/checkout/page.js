"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

function CheckoutContent() {
  const searchParams = useSearchParams();

  const [filters, setFilters] = useState({
    seats: "",
    total: "",
  });

  useEffect(() => {
    const seats = searchParams.get("seats");
    const total = searchParams.get("total");

    setFilters({
      seats: seats || "",
      total: total || "",
    });
  }, [searchParams]);

  const handleBooking = async () => {
    console.log("Button Clicked ✅");

    const { seats, total } = filters;

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

      console.log("Response:", data);

      if (data.success) {
        alert("Booking Successful 🎉");
      } else {
        alert("Booking Failed ❌");
      }
    } catch (error) {
      console.log("Error:", error);
      alert("Something went wrong ❌");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Checkout Page</h1>

      <p className="mt-4">Seats: {filters.seats}</p>
      <p>Total: ₹{filters.total}</p>

      <button
        onClick={handleBooking}
        className="bg-green-500 text-white px-4 py-2 mt-4 rounded"
      >
        Confirm Booking
      </button>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="p-6">Loading...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}