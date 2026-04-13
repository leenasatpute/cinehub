"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SeatLayout() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const router = useRouter();

  const seatPrice = 200;
  const seats = Array.from({ length: 40 }, (_, i) => i + 1);

  const handleSeatClick = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const totalPrice = selectedSeats.length * seatPrice;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Select Seats</h2>

      {/* Screen */}
      <div className="bg-gray-800 text-white text-center py-2 mb-4 rounded">
        SCREEN
      </div>

      {/* Seats */}
      <div className="grid grid-cols-8 gap-2">
        {seats.map((seat) => (
          <button
            key={seat}
            onClick={() => handleSeatClick(seat)}
            className={`p-2 rounded ${
              selectedSeats.includes(seat)
                ? "bg-red-500 text-white"
                : "bg-gray-300"
            }`}
          >
            {seat}
          </button>
        ))}
      </div>

      {/* Info */}
      <div className="mt-4">
        <p>Selected Seats: {selectedSeats.join(", ") || "None"}</p>
        <p className="font-bold">Total Price: ₹{totalPrice}</p>
      </div>

      {/* Button */}
      <button
        onClick={() =>
          router.push(
            `/checkout?seats=${selectedSeats.join(",")}&total=${totalPrice}`,
          )
        }
        className="bg-green-500 text-white px-4 py-2 mt-4 rounded"
      >
        Proceed to Booking
      </button>
    </div>
  );
}
