import "./globals.css";
import Header from "@/components/Header";  
import Footer from "@/components/Footer";

export const metadata = {
  title: "CineHub",
  description: "Movie Booking App",
};

const RootLayout  = ({ }) => {
  return (
    <html lang="en">
      <body>
        <Header />   
        {/* {children} */}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout