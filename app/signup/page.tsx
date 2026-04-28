'use client'
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Signup() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    terms: false
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });

    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔥 DEBUG (check console)
    console.log("SUBMIT CLICKED");

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    if (!formData.terms) {
      setError('Accept terms');
      return;
    }

    // 🔥 SAVE USER
    localStorage.setItem("user", JSON.stringify(formData));

    // 🔥 SHOW SUCCESS
    setSuccess(true);

    console.log("SUCCESS SET TRUE");

    // 🔥 DELAY REDIRECT (IMPORTANT)
    setTimeout(() => {
      router.push('/signin');
    }, 3000); // 3 sec ठेवले आहे clearly दिसण्यासाठी
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">

      {/* ✅ SUCCESS POPUP */}
      {success && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-xl z-[9999]">
          Account Created Successfully ✅
        </div>
      )}

      <div className="bg-white p-8 rounded-xl shadow w-full max-w-md">

        <h1 className="text-2xl font-bold text-center mb-6">Create Account</h1>

        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
        )}

        <form onSubmit={handleSubmit} autoComplete="off" className="space-y-4">

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full p-3 border rounded"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            autoComplete="new-email"
            className="w-full p-3 border rounded"
          />

          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Mobile"
            className="w-full p-3 border rounded"
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            autoComplete="new-password"
            className="w-full p-3 border rounded"
          />

          <label className="flex gap-2 text-sm">
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
            />
            Accept Terms
          </label>

          <button className="w-full bg-red-500 text-white p-3 rounded">
            Create Account
          </button>

        </form>

        <p className="text-center mt-4 text-sm">
          Already have account?{" "}
          <Link href="/signin" className="text-red-500">
            Sign in
          </Link>
        </p>

      </div>
    </div>
  );
}