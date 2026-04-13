import MovieCard from "../components/MovieCard";

export default function Home() {
  const movies = [
    {
      title: "Pushpa 2",
      rating: "8.5",
      image: "https://via.placeholder.com/300x400",
    },
    {
      title: "KGF 3",
      rating: "9.0",
      image: "https://via.placeholder.com/300x400",
    },
    {
      title: "Salaar",
      rating: "8.8",
      image: "https://via.placeholder.com/300x400",
    },
    {
      title: "Jawan",
      rating: "8.2",
      image: "https://via.placeholder.com/300x400",
    },
  ];

  return (
    <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
    {movies.map((movie, index) => (
     <MovieCard key={index} movie={movie} index={index} />
    ))}
    </div>
  );
}