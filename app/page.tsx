'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface Movie {
  id: number;
  title: string;
  lang: string;
  genre: string;
  rating: string;
  votes: string;
  img: string;
}

interface Event {
  id: number;
  title: string;
  category: string;
  img: string;
}

interface Banner {
  id: number;
  title: string;
  subtitle: string;
  gradient: string;
  img: string;
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const banners: Banner[] = [
    {
      id: 1,
      title: "Welcome to CineHub",
      subtitle: "Book tickets for Movies, Events, Plays & Sports",
      gradient: "from-red-900 via-orange-700 to-yellow-600",
      img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1400&h=400&fit=crop"
    },
    {
      id: 2,
      title: "IPL 2026 Live",
      subtitle: "Watch your favorite teams battle it out",
      gradient: "from-blue-900 via-indigo-700 to-purple-600",
      img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=1400&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Premiere Every Friday",
      subtitle: "New movies at home, watch anytime",
      gradient: "from-gray-900 via-gray-800 to-red-900",
      img: "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?w=1400&h=400&fit=crop"
    },
  ];

  const movies: Movie[] = [
    { id: 1, title: "Stree 2", lang: "Hindi", genre: "Horror/Comedy", rating: "8.2", votes: "125K", img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop" },
    { id: 2, title: "Deadpool & Wolverine", lang: "English", genre: "Action/Comedy", rating: "8.8", votes: "200K", img: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=600&fit=crop" },
    { id: 3, title: "Kalki 2898 AD", lang: "Hindi/Telugu", genre: "Sci-Fi/Action", rating: "7.9", votes: "180K", img: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400&h=600&fit=crop" },
    { id: 4, title: "Inside Out 2", lang: "English", genre: "Animation/Drama", rating: "8.5", votes: "95K", img: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop" },
    { id: 5, title: "Singham Again", lang: "Hindi", genre: "Action/Drama", rating: "7.5", votes: "80K", img: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=400&h=600&fit=crop" },
  ];

  const events: Event[] = [
    { id: 1, title: "Sunburn Festival", category: "Music Shows", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=300&fit=crop" },
    { id: 2, title: "Comedy Nights Live", category: "Comedy Shows", img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=300&fit=crop" },
    { id: 3, title: "IPL 2026", category: "Sports", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=300&fit=crop" },
    { id: 4, title: "Workshop: React", category: "Workshops", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [banners.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % banners.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navbar */}
      {/* <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-10">
              <Link href="/" className="text-3xl font-bold">
                Cine<span className="text-red-500">Hub</span>
              </Link>
              <div className="hidden lg:flex gap-8 text-sm font-medium">
                <Link href="/movies" className="hover:text-red-500 transition">Movies</Link>
                <Link href="/about" className="hover:text-red-500 transition">About</Link>
                <Link href="/contact" className="hover:text-red-500 transition">Contact</Link>
                <Link href="/sports" className="hover:text-red-500 transition">Sports</Link>
              </div>
            </div>

            <Link href="/signin" className="bg-red-500 px-6 py-2 rounded text-sm font-semibold hover:bg-red-600 transition">
              Sign in
            </Link>
          </div>
        </div>
      </nav> */}

      {/* Second Navbar - Search */}
      {/* <div className="bg-gray-800 text-white border-b border-gray-700">
        <div className="max-w-[1400px] mx-auto px-4 py-4">
          <input
            type="text"
            placeholder="Search for Movies, Events, Plays, Sports and Activities"
            className="w-full px-5 py-3 rounded-md text-black text-base focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
      </div> */}

      {/* Hero Banner Carousel */}
      <div className="max-w-[1400px] mx-auto px-4 mt-8 relative group">
        <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
          {banners.map((banner: Banner, index: number) => (
            <div
              key={banner.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${banner.gradient} opacity-90 z-10`}></div>
              <Image
                src={banner.img}
                alt={banner.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 flex items-center px-12 text-white z-20">
                <div>
                  <h1 className="text-6xl font-extrabold mb-4 drop-shadow-lg">{banner.title}</h1>
                  <p className="text-xl mb-6 text-gray-100 drop-shadow-md">{banner.subtitle}</p>
                  <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-lg">
                    Explore Now
                  </button>
                </div>
              </div>
            </div>
          ))}

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition hover:bg-black/70 z-30"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition hover:bg-black/70 z-30"
          >
            ›
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
            {banners.map((_, index: number) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition ${
                  index === currentSlide? 'bg-white w-8' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Recommended Movies */}
      <div className="max-w-[1400px] mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Recommended Movies</h2>
          <Link href="/movies" className="text-red-500 text-base font-semibold hover:underline">See All ›</Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {movies.map((movie: Movie) => (
            <div key={movie.id} className="cursor-pointer group">
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <Image
                  src={movie.img}
                  alt={movie.title}
                  width={400}
                  height={600}
                  className="w-full h-[420px] object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <div className="flex items-center gap-2 text-white">
                    <span className="text-red-500 text-lg">★</span>
                    <span className="font-bold">{movie.rating}/10</span>
                    <span className="text-sm text-gray-300">{movie.votes} Votes</span>
                  </div>
                </div>
              </div>
              <h3 className="mt-3 font-bold text-lg text-gray-900 group-hover:text-red-600 transition">{movie.title}</h3>
              <p className="text-sm text-gray-600">{movie.genre}</p>
              <p className="text-sm text-gray-500">{movie.lang}</p>
            </div>
          ))}
        </div>
      </div>

      {/* The Best of Live Events */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-900">The Best of Live Events</h2>
            <Link href="#" className="text-red-500 text-base font-semibold hover:underline">See All ›</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((event: Event) => (
              <div key={event.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition cursor-pointer group">
                <Image
                  src={event.img}
                  alt={event.title}
                  width={400}
                  height={300}
                  className="w-full h-52 object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="p-5">
                  <h3 className="font-bold text-xl text-gray-900 mb-1">{event.title}</h3>
                  <p className="text-sm text-gray-600">{event.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Premiere Section */}
      <div className="bg-gray-900 py-12 text-white">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">CINEHUB PREMIERE</h2>
            <p className="text-gray-400">Watch new movies at home, every Friday</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {movies.slice(0,5).map((movie: Movie) => (
              <div key={movie.id} className="cursor-pointer group">
                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    src={movie.img}
                    alt={movie.title}
                    width={400}
                    height={600}
                    className="w-full h-[420px] object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-red-500 px-3 py-1 rounded text-xs font-bold">
                    PREMIERE
                  </div>
                </div>
                <h3 className="mt-3 font-bold text-lg">{movie.title}</h3>
                <p className="text-sm text-gray-400">{movie.lang}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}