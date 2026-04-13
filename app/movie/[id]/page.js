import SeatLayout from "../../../components/SeatLayout";

export default async function MovieDetails({ params }) {
  const { id } = await params;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Movie Details 🎬</h1>

      <p className="mt-2">Movie ID: {id}</p>

      {/* Seat Layout */}
      <div className="mt-6">
        <SeatLayout />
      </div>
    </div>
  );
}
