import Link from "next/link";

export default function MovieCard({ movie, index }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-3 hover:scale-105 transition">
      <img
        src={movie.image}
        alt={movie.title}
        className="rounded w-full h-60 object-cover"
      />

      <h2 className="font-bold text-lg mt-2">{movie.title}</h2>

      <p className="text-gray-600">⭐ {movie.rating}</p>

      <Link href={`/movie/${index}`}>
        <button className="bg-red-500 text-white px-3 py-1 mt-2 rounded w-full">
          Book Now
        </button>
      </Link>
    </div>
  );
}
