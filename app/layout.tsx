import "./globals.css";

export const metadata = {
  title: "CineHub",
  description: "Movie Booking App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
    
        {children}
      </body>
    </html>
  );
}