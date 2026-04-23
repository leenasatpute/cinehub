"use client";

import { useState } from "react";

export default function AddUser() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "Customer",
    mobile: "",
  });

  const handleSubmit = async () => {
    await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify(form),
    });

    alert("User Added ✅");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Add User</h1>

      <input
        placeholder="Name"
        className="border p-2 mb-2 w-full"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        placeholder="Email"
        className="border p-2 mb-2 w-full"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        placeholder="Mobile"
        className="border p-2 mb-2 w-full"
        onChange={(e) => setForm({ ...form, mobile: e.target.value })}
      />

      <select
        className="border p-2 mb-2 w-full"
        onChange={(e) => setForm({ ...form, role: e.target.value })}
      >
        <option>Customer</option>
        <option>Admin</option>
      </select>

      <button
        onClick={handleSubmit}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Add User
      </button>
    </div>
  );
}
