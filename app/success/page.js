export default function Success() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-green-600">
        Booking Confirmed
      </h1>

      <p className="mt-4 text-lg">
        Your tickets have been booked successfully!
      </p>

      <a href="/" className="mt-6 bg-red-500 text-white px-4 py-2 rounded">
        Go to Home
      </a>
    </div>
  );
}
