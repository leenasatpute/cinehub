"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="px-6 pt-8 md:px-16 lg:px-36 w-full text-gray-300 bg-black">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-10">
        {/* Left Section */}
        <div className="md:max-w-96">
          <h1 className="text-2xl font-bold text-red-500">CineHub 🎬</h1>

          <p className="mt-6 text-sm">
            CineHub is your one-stop platform to book movie tickets, live shows,
            and concerts and quickly.
          </p>

          <div className="flex items-center gap-2 mt-4">
            <img
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/googlePlayBtnBlack.svg"
              alt="google play"
              className="h-10 w-auto border border-white rounded"
            />
            <img
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/appleStoreBtnBlack.svg"
              alt="app store"
              className="h-10 w-auto border border-white rounded"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex items-start md:justify-end gap-20 md:gap-40">
          {/* Company */}
          <div>
            <h2 className="font-semibold mb-5">Company</h2>
            <ul className="text-sm space-y-2">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="#">About Us</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-semibold mb-5">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p>+91-9876543210</p>
              <p>cinehub@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <p className="pt-4 text-center text-sm pb-5">
        Copyright {new Date().getFullYear()} © CineHub. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
