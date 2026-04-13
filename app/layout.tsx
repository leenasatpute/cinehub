import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "CineHub",
  description: "Movie Booking App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}