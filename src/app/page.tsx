import Image from "next/image";
import Link from "next/link";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";
import React from "react";

export default function Home(): React.ReactNode {
  return (
    <main
      className="flex flex-col min-h-screen relative"
      style={{
        backgroundImage: "url('/back.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for better content visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-0"></div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Logo Section */}
        <div className="flex justify-center py-8">
          <div className="w-64 md:w-80">
            <Image
              src="/logo.png"
              alt="iTopyaBET Logo"
              width={320}
              height={100}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* Flags Section */}
        <div className="flex flex-col md:flex-row w-full gap-6 p-4 md:p-8 flex-grow">
          <div className="w-full md:w-1/2 p-2 md:p-4">
            <div className="border-4 border-white rounded-xl shadow-xl overflow-hidden hover:border-yellow-300 transition-colors duration-300">
              <Image
                src="/tr.png"
                alt="Turkish Flag"
                width={1200}
                height={800}
                className="w-full h-auto"
                priority
                quality={100}
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 p-2 md:p-4">
            <div className="border-4 border-white rounded-xl shadow-xl overflow-hidden hover:border-yellow-300 transition-colors duration-300">
              <Image
                src="/gürcü.png"
                alt="Georgian Flag"
                width={1200}
                height={800}
                className="w-full h-auto"
                priority
                quality={100}
              />
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="w-full py-8">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-5 sm:gap-10 p-4 max-w-md mx-auto">
            <Link
              href="https://t.me/newMardinle"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors w-full sm:w-auto justify-center text-lg font-medium shadow-lg hover:shadow-xl"
            >
              <FaTelegram className="h-6 w-6" />
              Telegram
            </Link>
            <Link
              href="https://wa.me/15792647578"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors w-full sm:w-auto justify-center text-lg font-medium shadow-lg hover:shadow-xl"
            >
              <FaWhatsapp className="h-6 w-6" />
              WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
