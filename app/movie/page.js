"use client";

import { useState } from "react";
import Link from "next/link";

const MoviesPage = () => {
  const allMovies = [
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
    {
      id: 5,
      title: "Inception",
      image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1",
    },
    {
      id: 6,
      title: "Interstellar",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    },
    {
      id: 7,
      title: "Joker",
      image: "https://images.unsplash.com/photo-1517602302552-471fe67acf66",
    },
    {
      id: 8,
      title: "Titanic",
      image: "https://images.unsplash.com/photo-1502139214982-d0ad755818d8",
    },
    {
      id: 9,
      title: "Doctor Strange",
      image: "https://images.unsplash.com/photo-1497015289639-54688650d173",
    },
    {
      id: 10,
      title: "Bahubali",

      image: "https://images.unsplash.com/photo-1542204165-65bf26472b9b",
    },
  ];

  //  Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 8;

  const indexOfLast = currentPage * moviesPerPage;
  const indexOfFirst = indexOfLast - moviesPerPage;
  const currentMovies = allMovies.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(allMovies.length / moviesPerPage);

  return (
    <div className="p-6">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6 text-center">🎬 Movies</h1>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {currentMovies.map((movie) => (
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

      {/* ✅ Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 gap-3">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === i + 1 ? "bg-red-500" : "bg-gray-700"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default MoviesPage;
