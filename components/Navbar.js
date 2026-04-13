export default function Navbar() {
  return (
    <div className="bg-black text-white px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-red-500">CineHub 🎬</h1>

      {/* Menu */}
      <div className="space-x-4">
        <button className="hover:text-red-400">Home</button>
        <button className="hover:text-red-400">Movies</button>
        <button className="hover:text-red-400">Login</button>
      </div>
    </div>
  );
}
