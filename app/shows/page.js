"use client";

import { useState } from "react";

const ShowsPage = () => {
  const allShows = [
    {
      id: 1,
      title: "Arijit Singh Live",
      category: "Concert",
      image: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2",
      date: "20 May 2026",
      price: 999,
    },
    {
      id: 2,
      title: "Comedy Night",
      category: "Comedy",
      image: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
      date: "25 May 2026",
      price: 499,
    },
    {
      id: 3,
      title: "DJ Party",
      category: "Party",
      image: "https://images.unsplash.com/photo-1506157786151-b8491531f063",
      date: "30 May 2026",
      price: 799,
    },
    {
      id: 4,
      title: "Drama Show",
      category: "Drama",
      image: "https://images.unsplash.com/photo-1503095396549-807759245b35",
      date: "2 June 2026",
      price: 399,
    },
    {
      id: 5,
      title: "Rock Concert",
      category: "Concert",
      image: "https://images.unsplash.com/photo-1497032205916-ac775f0649ae",
      date: "5 June 2026",
      price: 1200,
    },
    {
      id: 6,
      title: "Music Festival",
      category: "Festival",
      image: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2",
      date: "10 June 2026",
      price: 1500,
    },
    {
      id: 7,
      title: "Standup Special",
      category: "Comedy",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
      date: "12 June 2026",
      price: 600,
    },
    {
      id: 8,
      title: "EDM Night",
      category: "Party",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      date: "15 June 2026",
      price: 900,
    },
    {
      id: 9,
      title: "Hip Hop Fest",
      category: "Festival",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      date: "18 June 2026",
      price: 1100,
    },
    {
      id: 10,
      title: "Bollywood Night",
      category: "Party",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
      date: "20 June 2026",
      price: 700,
    },
  ];

  // 🔍 Search
  const [search, setSearch] = useState("");

  // 🎯 Filter
  const [category, setCategory] = useState("All");

  // 📄 Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const showsPerPage = 8;

  // 🔥 FILTER + SEARCH
  const filteredShows = allShows.filter((show) => {
    const matchSearch = show.title.toLowerCase().includes(search.toLowerCase());

    const matchCategory = category === "All" || show.category === category;

    return matchSearch && matchCategory;
  });

  // Pagination
  const indexOfLast = currentPage * showsPerPage;
  const indexOfFirst = indexOfLast - showsPerPage;
  const currentShows = filteredShows.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(filteredShows.length / showsPerPage);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-4">
        🎭 Live Shows & Events
      </h1>

      {/* 🔍 SEARCH */}
      <input
        type="text"
        placeholder="Search shows..."
        className="border p-2 mb-4 w-full"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1);
        }}
      />

      {/* 🎯 FILTER BUTTONS (CENTER) */}
      <div className="flex justify-center flex-wrap gap-3 mb-6">
        {["All", "Concert", "Comedy", "Party", "Drama", "Festival"].map(
          (cat) => (
            <button
              key={cat}
              onClick={() => {
                setCategory(cat);
                setCurrentPage(1);
              }}
              className={`px-3 py-1 rounded ${
                category === cat ? "bg-red-500 text-white" : "bg-gray-300"
              }`}
            >
              {cat}
            </button>
          ),
        )}
      </div>

      {/* 🎭 SHOWS GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {currentShows.map((show) => (
          <div
            key={show.id}
            className="bg-black text-white rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={show.image}
              alt={show.title}
              className="w-full h-64 object-cover"
            />

            <div className="p-3">
              <h2 className="font-semibold">{show.title}</h2>
              <p className="text-sm">📅 {show.date}</p>
              <p className="text-sm">💰 ₹{show.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 📄 PAGINATION */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 gap-3">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === i + 1
                  ? "bg-red-500 text-white"
                  : "bg-gray-700 text-white"
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

export default ShowsPage;
