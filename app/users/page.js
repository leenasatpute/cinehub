"use client";

import { useEffect, useState } from "react";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    role: "Customer",
  });

  // 🔥 GET USERS FROM LOCAL STORAGE
  const fetchUsers = () => {
    const data = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // ✅ CREATE / UPDATE
  const handleSubmit = () => {
    let allUsers = JSON.parse(localStorage.getItem("users")) || [];

    if (editId !== null) {
      allUsers[editId] = form;
    } else {
      allUsers.push(form);
    }

    localStorage.setItem("users", JSON.stringify(allUsers));

    setForm({ name: "", email: "", mobile: "", role: "Customer" });
    setShowModal(false);
    setEditId(null);
    fetchUsers();
  };

  // ✏️ EDIT
  const handleEdit = (user, index) => {
    setForm(user);
    setEditId(index);
    setShowModal(true);
  };

  // ❌ DELETE
  const handleDelete = (index) => {
    let allUsers = JSON.parse(localStorage.getItem("users")) || [];
    allUsers.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(allUsers));
    fetchUsers();
  };

  // 🔍 SEARCH
  const filteredUsers = users.filter(
    (u) =>
      u.name?.toLowerCase().includes(search.toLowerCase()) ||
      u.email?.toLowerCase().includes(search.toLowerCase()) ||
      u.role?.toLowerCase().includes(search.toLowerCase()) ||
      u.mobile?.includes(search)
  );

  // 📄 PAGINATION
  const indexOfLast = currentPage * usersPerPage;
  const indexOfFirst = indexOfLast - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">👥 Users</h1>

        <button
          onClick={() => {
            setShowModal(true);
            setEditId(null);
          }}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          + Add User
        </button>
      </div>

      {/* 🔍 SEARCH */}
      <input
        type="text"
        placeholder="Search..."
        className="border p-2 mb-4 w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* 📊 TABLE */}
      <table className="w-full border">
        <thead className="bg-black text-white">
          <tr>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Mobile</th>
            <th className="p-2 border">Role</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>

        <tbody>
          {currentUsers.map((u, index) => (
            <tr key={index} className="text-center">
              <td className="border p-2">{u.name}</td>
              <td className="border p-2">{u.email}</td>
              <td className="border p-2">{u.mobile}</td>
              <td className="border p-2">{u.role}</td>

              <td className="border p-2 space-x-2">
                <button
                  onClick={() => handleEdit(u, index)}
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(index)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 📄 PAGINATION */}
      <div className="mt-4 flex justify-center gap-2">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 border ${
              currentPage === i + 1 ? "bg-black text-white" : ""
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* 🔥 MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded w-96">
            <h2 className="text-xl font-bold mb-4">
              {editId !== null ? "Edit User" : "Add User"}
            </h2>

            <input
              placeholder="Name"
              className="border p-2 mb-2 w-full"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input
              placeholder="Email"
              className="border p-2 mb-2 w-full"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <input
              placeholder="Mobile"
              className="border p-2 mb-2 w-full"
              value={form.mobile}
              onChange={(e) => setForm({ ...form, mobile: e.target.value })}
            />

            <select
              className="border p-2 mb-4 w-full"
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
            >
              <option>Customer</option>
              <option>Admin</option>
            </select>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="border px-3 py-1"
              >
                Cancel
              </button>

              <button
                onClick={handleSubmit}
                className="bg-green-500 text-white px-3 py-1"
              >
                {editId !== null ? "Update" : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}