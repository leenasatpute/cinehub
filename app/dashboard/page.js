"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState("users");
  const [search, setSearch] = useState("");

  const [users, setUsers] = useState([]);
  const [bookings, setBookings] = useState([]);

  // 🔒 PROTECT ROUTE
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
      router.push("/signin");
    }
  }, []);

  // 👥 FETCH USERS
  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users || []));
  }, []);

  // 🎟 BOOKINGS (dummy)
  useEffect(() => {
    setBookings([
      {
        id: 1,
        movie: "Avengers",
        theater: "PVR Cinemas",
        seats: ["A1", "A2"],
        total: 500,
        date: "10 May 2026",
      },
      {
        id: 2,
        movie: "Pathaan",
        theater: "INOX",
        seats: ["B3"],
        total: 250,
        date: "12 May 2026",
      },
    ]);
  }, []);

  // 🔍 SEARCH
  const filteredUsers = users.filter(
    (u) =>
      u.name?.toLowerCase().includes(search.toLowerCase()) ||
      u.email?.toLowerCase().includes(search.toLowerCase()) ||
      u.mobile?.includes(search)
  );

  const filteredBookings = bookings.filter(
    (b) =>
      b.movie.toLowerCase().includes(search.toLowerCase()) ||
      b.theater.toLowerCase().includes(search.toLowerCase())
  );

  // 🚪 LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    router.push("/signin");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* Sidebar */}
      <div className="w-60 bg-black text-white p-5">
        <h1 className="text-2xl font-bold mb-8">CineHub</h1>

        <button
          onClick={() => setActiveTab("users")}
          className={`w-full text-left p-3 mb-2 rounded ${
            activeTab === "users" ? "bg-red-500" : "hover:bg-gray-700"
          }`}
        >
          👥 Users
        </button>

        <button
          onClick={() => setActiveTab("bookings")}
          className={`w-full text-left p-3 rounded ${
            activeTab === "bookings" ? "bg-red-500" : "hover:bg-gray-700"
          }`}
        >
          🎟 Bookings
        </button>

        <button
          onClick={handleLogout}
          className="mt-10 w-full bg-red-600 p-2 rounded"
        >
          Logout
        </button>
      </div>

      {/* Main */}
      <div className="flex-1 p-6">

        {/* Search */}
        <input
          type="text"
          placeholder="Search..."
          className="mb-6 p-2 border rounded w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* USERS */}
        {activeTab === "users" && (
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-bold mb-4">Users</h2>

            <table className="w-full border">
              <thead className="bg-black text-white">
                <tr>
                  <th className="p-3 border">#</th>
                  <th className="p-3 border">Name</th>
                  <th className="p-3 border">Email</th>
                  <th className="p-3 border">Mobile</th>
                </tr>
              </thead>

              <tbody>
                {filteredUsers.length > 0 ? (
                  filteredUsers.map((u, i) => (
                    <tr key={u._id || i} className="text-center">
                      <td className="p-2 border">{i + 1}</td>
                      <td className="p-2 border">{u.name}</td>
                      <td className="p-2 border">{u.email}</td>
                      <td className="p-2 border">{u.mobile}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="p-4 text-center">
                      No Users Found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}

        {/* BOOKINGS */}
        {activeTab === "bookings" && (
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-bold mb-4">Bookings</h2>

            <table className="w-full border">
              <thead className="bg-black text-white">
                <tr>
                  <th className="p-3 border">#</th>
                  <th className="p-3 border">Movie</th>
                  <th className="p-3 border">Theater</th>
                  <th className="p-3 border">Seats</th>
                  <th className="p-3 border">Date</th>
                  <th className="p-3 border">Total</th>
                </tr>
              </thead>

              <tbody>
                {filteredBookings.map((b, i) => (
                  <tr key={b.id} className="text-center">
                    <td className="p-2 border">{i + 1}</td>
                    <td className="p-2 border">{b.movie}</td>
                    <td className="p-2 border">{b.theater}</td>
                    <td className="p-2 border">{b.seats.join(", ")}</td>
                    <td className="p-2 border">{b.date}</td>
                    <td className="p-2 border">₹{b.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>
    </div>
  );
}