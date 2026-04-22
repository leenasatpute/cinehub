'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

interface Sport {
  id: number;
  title: string;
  league: string;
  venue: string;
  date: string;
  time: string;
  price: string;
  img: string;
  category: string;
}

export default function Sports() {
  const pathname = usePathname();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const sports: Sport[] = [
    {
      id: 1,
      title: "Mumbai Indians vs Chennai Super Kings",
      league: "IPL 2026",
      venue: "Wankhede Stadium, Mumbai",
      date: "28 Apr 2026",
      time: "7:30 PM",
      price: "₹999 onwards",
      img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=600&fit=crop",
      category: "Cricket"
    },
    {
      id: 2,
      title: "India vs Australia ODI",
      league: "International Cricket",
      venue: "MCA Stadium, Pune",
      date: "05 May 2026",
      time: "2:00 PM",
      price: "₹1499 onwards",
      img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=600&fit=crop",
      category: "Cricket"
    },
    {
      id: 3,
      title: "ISL Finals",
      league: "Indian Super League",
      venue: "DY Patil Stadium, Navi Mumbai",
      date: "12 May 2026",
      time: "7:30 PM",
      price: "₹799 onwards",
      img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=600&fit=crop",
      category: "Football"
    },
    {
      id: 4,
      title: "Pro Kabaddi League",
      league: "PKL Season 11",
      venue: "Shree Shiv Chhatrapati Sports Complex, Pune",
      date: "18 May 2026",
      time: "8:00 PM",
      price: "₹499 onwards",
      img: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=400&h=600&fit=crop",
      category: "Kabaddi"
    },
    {
      id: 5,
      title: "Marathon 2026",
      league: "Mumbai Marathon",
      venue: "Marine Drive, Mumbai",
      date: "25 May 2026",
      time: "5:30 AM",
      price: "₹1299 onwards",
      img: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=400&h=600&fit=crop",
      category: "Athletics"
    },
    {
      id: 6,
      title: "Wrestling Championship",
      league: "National Wrestling",
      venue: "Indira Gandhi Stadium, Delhi",
      date: "02 Jun 2026",
      time: "6:00 PM",
      price: "₹699 onwards",
      img: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=400&h=600&fit=crop",
      category: "Wrestling"
    },
  ];

  const categories = ["All", "Cricket", "Football", "Kabaddi", "Athletics", "Wrestling"];

  const filteredSports = selectedCategory === "All"
   ? sports
    : sports.filter(sport => sport.category === selectedCategory);

  const linkClass = (path: string) =>
    `hover:text-red-400 transition ${pathname === path? 'text-red-500' : ''}`;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-black text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-red-500">
            CineHub 🎬
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/" className={linkClass('/')}>
              Home
            </Link>
            <Link href="/movies" className={linkClass('/movies')}>
              Movies
            </Link>
            <Link href="/about" className={linkClass('/about')}>
              About
            </Link>
            <Link href="/contact" className={linkClass('/contact')}>
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-700 to-purple-600 py-20 text-white">
        <div className="max-w-[1400px] mx-auto px-4">
          <h1 className="text-5xl font-extrabold mb-4">Sports Events</h1>
          <p className="text-xl text-gray-100">
            Catch live action from IPL, ISL, Pro Kabaddi & more. Book your tickets now!
          </p>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-[1400px] mx-auto px-4 py-4">
          <div className="flex gap-3 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full border transition whitespace-nowrap text-sm font-semibold ${
                  selectedCategory === cat
                   ? 'bg-red-500 text-white border-red-500'
                    : 'border-gray-300 hover:bg-red-500 hover:text-white hover:border-red-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Sports List */}
      <div className="max-w-[1400px] mx-auto px-4 py-12">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900">
            {selectedCategory === "All"? "All Sports Events" : `${selectedCategory} Events`}
          </h2>
          <p className="text-gray-600 mt-1">{filteredSports.length} events found</p>
        </div>

        {filteredSports.length === 0? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No events found in this category</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSports.map((sport: Sport) => (
              <div key={sport.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition cursor-pointer group">
                <div className="relative h-[420px] overflow-hidden">
                  <Image
                    src={sport.img}
                    alt={sport.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-blue-600 px-3 py-1 rounded text-xs font-bold text-white">
                    {sport.category}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-red-600 transition line-clamp-2">
                    {sport.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-1">{sport.league}</p>
                  <p className="text-sm text-gray-500 mb-3">{sport.venue}</p>

                  <div className="flex items-center gap-4 text-sm text-gray-700 mb-4">
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {sport.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {sport.time}
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-red-600">{sport.price}</span>
                    <button className="bg-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-600 transition">
                      Book
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}