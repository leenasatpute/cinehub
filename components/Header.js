"use client";

import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-black text-white px-6 py-4 flex items-center">
      <h1 className="text-2xl font-bold text-red-500">CineHub 🎬</h1>

      <nav className="flex-1 flex justify-center gap-10 text-lg">
        <Link href="/">Home</Link>
        <Link href="/movie">Movies</Link>
        <Link href="/shows">Shows</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      <div className="flex gap-4">
        <Link href="/signin">
          <button className="border border-white px-4 py-1 rounded hover:bg-white hover:text-black transition">
            Sign In
          </button>
        </Link>

        <Link href="/signup">
          <button className="bg-red-500 px-4 py-1 rounded hover:bg-red-600 transition">
            Sign Up
          </button>
        </Link>
      </div>
    </header>
  );
};
export default Header;
