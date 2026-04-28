"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Armchair } from "lucide-react";

const rows = ["A", "B", "C", "D", "E"];
const seatsPerRow = 8;
const pricePerSeat = 150;

// ✅ Dummy booked seats data (movie + time wise)
const bookedSeatsData: Record<string, string[]> = {
  "Avengers-10AM": ["A1", "A2", "B3"],
  "Avengers-2PM": ["C4", "D5"],
  "Pathaan-10AM": ["A3", "B1"],
};

export default function BookingPage() {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [showMessage, setShowMessage] = useState(false);

  const searchParams = useSearchParams();
  const movie = searchParams.get("movie");
  const time = searchParams.get("time");

  // ✅ Get booked seats for selected movie + time
  const bookedSeats = bookedSeatsData[`${movie}-${time}`] || [];

  const toggleSeat = (seat: string) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

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
        Movie: <span className="text-red-400 font-semibold">{movie}</span>
      </p>

      <p className="text-center text-gray-300 mb-6">
        Time: <span className="text-yellow-400 font-semibold">{time}</span>
      </p>

      {/* 🎥 Screen */}
      <div className="max-w-xl mx-auto mb-8">
        <div className="bg-gray-300 text-black text-center py-2 rounded-t-full shadow-lg">
          SCREEN
        </div>
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
                  {/* Seat Icon */}
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

                  {/* Seat Number */}
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

      {/* ✅ Popup Message */}
      {showMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          <div className="bg-white text-black p-6 rounded-lg text-center shadow-xl w-80">
            <h2 className="text-xl font-bold mb-3">✅ Booking Confirmed!</h2>

            <p className="mb-2">Movie: {movie}</p>
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

// "use client";

// import { useState } from "react";
// import { useSearchParams } from "next/navigation";
// import { Armchair } from "lucide-react";

// const rows = ["A", "B", "C", "D", "E"];
// const seatsPerRow = 8;
// const pricePerSeat = 150;

// export default function BookingPage() {
//   const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
//   const [showMessage, setShowMessage] = useState(false);

//   const searchParams = useSearchParams();
//   const movie = searchParams.get("movie");

//   const toggleSeat = (seat: string) => {
//     if (selectedSeats.includes(seat)) {
//       setSelectedSeats(selectedSeats.filter((s) => s !== seat));
//     } else {
//       setSelectedSeats([...selectedSeats, seat]);
//     }
//   };

//   const totalAmount = selectedSeats.length * pricePerSeat;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 text-white p-6">
//       {/* 🎬 Header */}
//       <h1 className="text-4xl font-bold text-center mb-2">
//         🎟 CineHub Booking
//       </h1>

//       <p className="text-center text-gray-300 mb-6">
//         Movie: <span className="text-red-400 font-semibold">{movie}</span>
//       </p>

//       {/* 🎥 Screen */}
//       <div className="max-w-xl mx-auto mb-8">
//         <div className="bg-gray-300 text-white text-center py-2 rounded-t-full shadow-lg">
//           SCREEN
//         </div>
//       </div>

//       {/* 💺 Seat Layout */}
//       <div className="flex flex-col items-center gap-3">
//         {rows.map((row) => (
//           <div key={row} className="flex gap-3">
//             {Array.from({ length: seatsPerRow }, (_, i) => {
//               const seat = `${row}${i + 1}`;
//               const isSelected = selectedSeats.includes(seat);

//               return (
//                 <div
//                   key={seat}
//                   onClick={() => toggleSeat(seat)}
//                   className="flex flex-col items-center cursor-pointer"
//                 >
//                   {/* Seat Icon */}
//                   <Armchair
//                     size={30}
//                     className={`transition-all duration-200 ${
//                       isSelected
//                         ? "text-green-400 scale-125"
//                         : "text-gray-400 hover:text-red-400"
//                     }`}
//                   />

//                   {/* Seat Number */}
//                   <span className="text-xs mt-1">{seat}</span>
//                 </div>
//               );
//             })}
//           </div>
//         ))}
//       </div>

//       {/* 📋 Info Panel */}
//       <div className="mt-8 bg-gray-800 p-6 rounded-xl max-w-md mx-auto shadow-lg">
//         <p className="mb-2">
//           🎟 Selected Seats:{" "}
//           <span className="text-green-400 font-semibold">
//             {selectedSeats.join(", ") || "None"}
//           </span>
//         </p>

//         <p className="mb-4 text-lg font-bold">💰 Total: ₹{totalAmount}</p>

//         <button
//           onClick={() => setShowMessage(true)}
//           disabled={selectedSeats.length === 0}
//           className="w-full bg-red-500 py-2 rounded hover:bg-red-600 disabled:bg-gray-500"
//         >
//           Confirm Booking
//         </button>
//       </div>

//       {/* ✅ Popup Message */}
//       {showMessage && (
//         <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
//           <div className="bg-white text-black p-6 rounded-lg text-center shadow-xl w-80">
//             <h2 className="text-xl font-bold mb-3">✅ Booking Confirmed!</h2>

//             <p className="mb-2">Movie: {movie}</p>
//             <p className="mb-2">Seats: {selectedSeats.join(", ")}</p>
//             <p className="mb-4">Total: ₹{totalAmount}</p>

//             <button
//               onClick={() => setShowMessage(false)}
//               className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//             >
//               OK
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
