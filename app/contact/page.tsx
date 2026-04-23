"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", mobile: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 text-white">
      {/* Header */}
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold tracking-wide text-red-500">
          CineHub 🎬
        </h1>
        <p className="text-gray-300 mt-2">Get in touch with us</p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 pb-16">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="https://image.winudf.com/v2/image1/Y29tLmNpbmVodWJpcHR2LnNpeGFuZHJvaWRfc2NyZWVuXzBfMTY1NDkzMjQxNF8wMTA/screen-0.jpg?fakeurl=1&type=.jpg"
            alt="contact"
            width={500}
            height={500}
            className="rounded-2xl shadow-2xl hover:scale-105 transition duration-300"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 max-w-lg bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Contact Us
          </h2>

          {submitted && (
            <p className="text-green-400 text-center mb-4">
              Message sent successfully! 🎉
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Mobile</label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                pattern="[0-9]{10}"
                placeholder="Enter 10-digit mobile number"
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={3}
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300"
            >
              Send Message 🚀
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-gray-400 pb-6">
        © 2026 CineHub. All rights reserved.
      </footer>
    </div>
  );
}
