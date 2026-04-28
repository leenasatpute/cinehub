"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Armchair, Monitor } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const rows = ["A", "B", "C", "D", "E"];
const seatsPerRow = 8;
const pricePerSeat = 150;
const timeSlots = ["9AM", "10AM", "12PM", "2PM", "3PM", "6PM", "9PM"];

// ✅ Movie ID → Name mapping
const movies: Record<string, string> = {
  "1": "Avengers",
  "2": "Pathaan",
  "3": "Spider-Man",
  "4": "RRR",
  "5": "Inception",
  "6": "Interstellar",
  "7": "Joker",
  "8": "Titanic",
  "9": "Doctor Strange",
  "10": "Bahubali",
};

// ✅ Dummy booked seats (movieId + time)
// const bookedSeatsData: Record<string, string[]> = {
//   "1-10AM": ["A1", "A2", "B3"],
//   "1-2PM": ["C4", "D5"],
//   "2-10AM": ["A3", "B1"],
//   "3-10AM": ["A5", "C2"],
// };

const bookedSeatsData: Record<string, string[]> = {
  // 🎬 Movie 1 (Avengers)
  "1-9AM": ["A1", "A2", "B3", "C1"],
  "1-10AM": ["A1", "A2", "B3"],
  "1-12PM": ["C4", "D5", "E2"],
  "1-2PM": ["C4", "D5"],
  "1-3PM": ["A3", "B4", "C5"],
  "1-6PM": ["D1", "D2", "E3"],
  "1-9PM": ["A5", "B6", "C7"],

  // 🎬 Movie 2 (Pathaan)
  "2-9AM": ["A3", "B1"],
  "2-10AM": ["A3", "B1"],
  "2-12PM": ["C2", "C3", "D4"],
  "2-2PM": ["D6", "E1"],
  "2-3PM": ["A4", "B5"],
  "2-6PM": ["C6", "D7", "E8"],

  // ❌ Fully booked show (all seats blocked)
  "2-9PM": [
    "A1",
    "A2",
    "A3",
    "A4",
    "A5",
    "A6",
    "A7",
    "A8",
    "B1",
    "B2",
    "B3",
    "B4",
    "B5",
    "B6",
    "B7",
    "B8",
    "C1",
    "C2",
    "C3",
    "C4",
    "C5",
    "C6",
    "C7",
    "C8",
    "D1",
    "D2",
    "D3",
    "D4",
    "D5",
    "D6",
    "D7",
    "D8",
    "E1",
    "E2",
    "E3",
    "E4",
    "E5",
    "E6",
    "E7",
    "E8",
  ],

  // 🎬 Movie 3 (Spider-Man)
  "3-9AM": ["A5", "C2"],
  "3-10AM": ["A5", "C2"],
  "3-12PM": ["B4", "B5", "C6"],
  "3-2PM": ["D3", "E4"],
  "3-6PM": ["A6", "B7", "C8"],

  // 🎬 Movie 4 (RRR)
  "4-9AM": ["A1", "B2"],
  "4-12PM": ["C3", "D4"],
  "4-3PM": ["E5", "A6"],
};

export default function BookingPage() {
  const router = useRouter();

  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [showMessage, setShowMessage] = useState(false);

  const searchParams = useSearchParams();

  // ✅ Get params
  const movieId = searchParams.get("movieId");
  const time = searchParams.get("time");

  // ✅ Get movie name
  const movieName = movies[movieId || ""] || "Unknown";

  // ✅ Get booked seats dynamically
  const bookedSeats = bookedSeatsData[`${movieId}-${time}`] || [];

  // ✅ Toggle seat
  const toggleSeat = (seat: string) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  useEffect(() => {
    setSelectedSeats([]);
  }, [time]);

  const totalAmount = selectedSeats.length * pricePerSeat;

  const handleBooking = () => {
    setShowMessage(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 text-white p-6">
      {/* 🎬 Header */}
      <h1 className="text-4xl font-bold text-center mb-2">
        🎟 CineHub Booking
      </h1>

      <p className="text-center text-gray-300 mb-2">
        Movie: <span className="text-red-400 font-semibold">{movieName}</span>
      </p>

      <p className="text-center text-gray-300 mb-2">
        Time:{" "}
        <span className="text-yellow-400 font-semibold">
          {time || "Not Selected"}
        </span>
      </p>

      <div className="flex justify-center gap-3 mb-6 flex-wrap">
        {timeSlots.map((t) => (
          <button
            key={t}
            onClick={() =>
              router.push(`/seat-booking?movieId=${movieId}&time=${t}`)
            }
            className={`px-3 py-1 rounded ${
              time === t ? "bg-red-500 text-white" : "bg-gray-700"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* 🎥 Screen */}
      <div className="bg-red-300 text-white flex items-center justify-center gap-2 py-2 mb-2 rounded-t-full shadow-lg">
        <Monitor size={18} />
        <span className="font-semibold">SCREEN</span>
      </div>
      {/* 💺 Seat Layout */}
      <div className="flex flex-col items-center gap-3">
        {rows.map((row) => (
          <div key={row} className="flex gap-3">
            {Array.from({ length: seatsPerRow }, (_, i) => {
              const seat = `${row}${i + 1}`;
              const isBooked = bookedSeats.includes(seat);
              const isSelected = selectedSeats.includes(seat);

              return (
                <div
                  key={seat}
                  onClick={() => {
                    if (!isBooked) toggleSeat(seat);
                  }}
                  className="flex flex-col items-center cursor-pointer"
                >
                  <Armchair
                    size={30}
                    className={`transition-all duration-200 ${
                      isBooked
                        ? "text-red-600 cursor-not-allowed"
                        : isSelected
                          ? "text-green-400 scale-125"
                          : "text-gray-400 hover:text-red-400"
                    }`}
                  />

                  <span className="text-xs mt-1">
                    {seat} {isBooked && "(Booked)"}
                  </span>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* 📋 Info Panel */}
      <div className="mt-8 bg-gray-800 p-6 rounded-xl max-w-md mx-auto shadow-lg">
        <p className="mb-2">
          🎟 Selected Seats:{" "}
          <span className="text-green-400 font-semibold">
            {selectedSeats.join(", ") || "None"}
          </span>
        </p>

        <p className="mb-4 text-lg font-bold">💰 Total: ₹{totalAmount}</p>

        <button
          onClick={handleBooking}
          disabled={selectedSeats.length === 0}
          className="w-full bg-red-500 py-2 rounded hover:bg-red-600 disabled:bg-gray-500"
        >
          Confirm Booking
        </button>
      </div>

      {/* ✅ Popup */}
      {showMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          <div className="bg-white text-black p-6 rounded-lg text-center shadow-xl w-80">
            <h2 className="text-xl font-bold mb-3">✅ Booking Confirmed!</h2>

            <p className="mb-2">Movie: {movieName}</p>
            <p className="mb-2">Time: {time}</p>
            <p className="mb-2">Seats: {selectedSeats.join(", ")}</p>
            <p className="mb-4">Total: ₹{totalAmount}</p>

            <button
              onClick={() => setShowMessage(false)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
