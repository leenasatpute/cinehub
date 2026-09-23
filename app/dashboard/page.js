"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState("users");
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const [users, setUsers] = useState([]);
  const [bookings, setBookings] = useState([]);

  // 🔒 PROTECT ROUTE
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
      router.push("/signin");
    }
  }, [router]);

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
      {sidebarOpen && (
        <div className="w-60 bg-white text-gray-900 p-5 shadow-lg border-r border-gray-200 flex flex-col">
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1">
            <button
              onClick={() => setActiveTab("users")}
              className={`w-full text-left p-3 mb-2 rounded ${
                activeTab === "users"? "bg-red-500 text-white" : "hover:bg-gray-100"
              }`}
            >
              👥 Users
            </button>

            <button
              onClick={() => setActiveTab("bookings")}
              className={`w-full text-left p-3 rounded ${
                activeTab === "bookings"? "bg-red-500 text-white" : "hover:bg-gray-100"
              }`}
            >
              🎟 Bookings
            </button>
          </div>

          <button
            onClick={handleLogout}
            className="w-full bg-red-600 text-white p-2 rounded hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>
      )}

      {/* Main */}
      <div className="flex-1 p-6">
        {/* Top Bar with 3 Line Icon */}
        {!sidebarOpen && (
          <button
            onClick={() => setSidebarOpen(true)}
            className="mb-6 p-2 bg-gray-900 text-white rounded hover:bg-gray-800"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        )}

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
              <thead className="bg-gray-900 text-white">
                <tr>
                  <th className="p-3 border">#</th>
                  <th className="p-3 border">Name</th>
                  <th className="p-3 border">Email</th>
                  <th className="p-3 border">Mobile</th>
                </tr>
              </thead>

              <tbody>
                {filteredUsers.length > 0? (
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
              <thead className="bg-gray-900 text-white">
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