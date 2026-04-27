'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Signin() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });

    setError('');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");

    if (
      formData.email === storedUser.email &&
      formData.password === storedUser.password
    ) {
      // ✅ SUCCESS → redirect
      router.push("/dashboard");
    } else {
      // ❌ ERROR
      setError("Invalid email or password ❌");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-2xl p-8">

          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold">Welcome Back</h1>
            <p className="text-gray-500">Sign in to continue</p>
          </div>

          {/* ❌ Error Message */}
          {error && (
            <p className="text-red-500 text-sm text-center mb-4">{error}</p>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* EMAIL */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              required
              autoComplete="off"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
            />

            {/* PASSWORD */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                required
                autoComplete="new-password"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none pr-10"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3"
              >
                👁
              </button>
            </div>

            {/* REMEMBER */}
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
              />
              Remember me
            </label>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-red-500 text-white p-3 rounded-lg font-bold hover:bg-red-600"
            >
              Sign In
            </button>
          </form>

          <p className="text-center mt-6 text-sm">
            Don't have account?{" "}
            <Link href="/signup" className="text-red-500 font-semibold">
              Sign up
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}