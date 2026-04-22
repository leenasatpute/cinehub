'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function About() {
  const pathname = usePathname();

  const stats = [
    { number: "10M+", label: "Happy Customers" },
    { number: "50K+", label: "Shows Daily" },
    { number: "200+", label: "Cities" },
    { number: "1M+", label: "Events Listed" },
  ];

  const features = [
    {
      icon: "🎬",
      title: "Movies & Premieres",
      desc: "Latest Bollywood, Hollywood & regional movies. Book tickets instantly with best seats."
    },
    {
      icon: "🎵",
      title: "Live Events",
      desc: "Concerts, stand-up comedy, music festivals & workshops. Never miss the fun."
    },
    {
      icon: "🏏",
      title: "Sports",
      desc: "IPL, Cricket, Football, Kabaddi - catch all the action live in stadiums."
    },
    {
      icon: "🎭",
      title: "Plays & Activities",
      desc: "Theatre plays, art exhibitions, adventures & kids activities near you."
    },
  ];

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
      <div className="bg-gradient-to-r from-red-900 via-orange-700 to-yellow-600 py-24 text-white">
        <div className="max-w-[1400px] mx-auto px-4 text-center">
          <h1 className="text-6xl font-extrabold mb-6">About CineHub</h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            India's #1 entertainment destination. We bring movies, events, plays & sports closer to you.
          </p>
        </div>
      </div>

      {/* Our Story - English */}
      <div className="max-w-[1400px] mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-700 text-lg mb-4 leading-relaxed">
              CineHub was founded in 2018 with a simple idea - to make entertainment booking effortless.
              Today, we are India's largest entertainment platform, trusted by millions every day.
            </p>
            <p className="text-gray-700 text-lg mb-4 leading-relaxed">
              From movies to live concerts, from IPL matches to theatre plays - everything in one place.
              Over 10 million customers trust us daily to deliver unforgettable entertainment experiences.
            </p>
          </div>
          <div className="bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl p-12 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-8">Why Choose Us?</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <p className="text-lg">Instant booking & confirmation</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <p className="text-lg">Best seats at best prices</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <p className="text-lg">100% secure payments</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <p className="text-lg">24/7 customer support</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <p className="text-lg">Easy cancellation & refunds</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-gray-900 py-16 text-white">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-5xl font-extrabold text-red-500 mb-2">{stat.number}</h3>
                <p className="text-gray-300 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What We Offer */}
      <div className="max-w-[1400px] mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
          <p className="text-gray-600 text-lg">Everything entertainment under one roof</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition group cursor-pointer">
              <div className="text-5xl mb-4 group-hover:scale-110 transition">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-[1400px] mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Join Millions of Happy Users</h2>
          <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
            Download CineHub app today. Book tickets anytime, anywhere. Get exclusive offers & early access.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.9 3.2L5.5 8.1c-1.4.6-1.4 2.4 0 3l12.4 4.9c1.4 2-.3 2-1.3V4.5c0-1-1-1.7-2-1.3zM5.5 15.9c-1.4.6-1.4 2.4 0 3l12.4 4.9c1.4 2-.3 2-1.3V12.3c0-1-1-1.7-2-1.3L5.5 15.9z"/>
              </svg>
              Google Play
            </button>
            <button className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2.77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              App Store
            </button>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 py-16 text-white">
        <div className="max-w-[1400px] mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Experience CineHub?</h2>
          <p className="text-xl mb-8 text-gray-100">Start booking your favorite shows today!</p>
          <Link href="/" className="bg-white text-red-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-lg inline-block">
            Explore Now
          </Link>
        </div>
      </div>
    </div>
  );
}