"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const data = [
      {
        id: 1,
        title: "Avengers",
        image: "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg",
      },
      {
        id: 2,
        title: "Pathaan",
        image:
          "https://upload.wikimedia.org/wikipedia/en/c/c3/Pathaan_film_poster.jpg",
      },
      {
        id: 3,
        title: "Spider-Man: No Way Home",
        image:
          "https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg",
      },
      {
        id: 4,
        title: "RRR",
        image: "https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg",
      },
    ];

    setMovies(data);
  }, []);

  return (
    <div className="p-6">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6 text-center">🎬 Movies</h1>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-black text-white rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-64 object-cover"
            />

            <div className="p-4">
              <h2 className="text-lg font-semibold">{movie.title}</h2>

              <Link href={`/movie/${movie.id}`}>
                <button className="mt-3 bg-red-500 px-3 py-1 rounded w-full hover:bg-red-600">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MoviesPage;
