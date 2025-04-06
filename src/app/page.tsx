import Image from 'next/image';
import Link from 'next/link';
import { FaTelegram, FaWhatsapp } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="flex flex-col bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Flags Section */}
      <div className="flex flex-col md:flex-row w-full gap-4 p-4 md:p-8">
        <div className="w-full md:w-1/2 p-2 md:p-4">
          <div className="border-4 border-white rounded-xl shadow-xl overflow-hidden">
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
          <div className="border-4 border-white rounded-xl shadow-xl overflow-hidden">
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
      <div className="w-full py-6 mt-auto">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 p-4 max-w-md mx-auto">
          <Link 
            href="https://t.me/newMardinle" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors w-full sm:w-auto justify-center text-lg font-medium shadow-md hover:shadow-lg"
          >
            <FaTelegram className="h-6 w-6" />
            Telegram
          </Link>
          <Link 
            href="https://wa.me/15792647578" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors w-full sm:w-auto justify-center text-lg font-medium shadow-md hover:shadow-lg"
          >
            <FaWhatsapp className="h-6 w-6" />
            WhatsApp
          </Link>
        </div>
      </div>
    </main>
  );
}
