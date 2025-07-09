'use client';

import Image from 'next/image';
import { FileDown } from 'lucide-react';

export default function Header() {
  const downloadPDF = () => {
    window.print();
  };

  return (
    <div className="bg-gradient-to-r from-red-700 to-red-600 text-white p-6 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-50 animate-pulse"></div>
      
      <div className="flex flex-col sm:flex-row sm:items-center gap-6">
        <div className="flex items-center gap-6 flex-1">
          <div className="w-24 h-24 rounded-full border-3 border-white/30 bg-white/10 relative z-10 hover:scale-105 transition-transform duration-300 overflow-hidden flex-shrink-0">
            <Image
              src="/profile.jpeg"
              alt="David M. Jentjens"
              width={256}
              height={256}
              className="w-full h-full object-cover"
              quality={100}
              priority
              unoptimized={false}
            />
          </div>
          
          <div className="flex-1 relative z-10">
            <div className="text-3xl font-bold mb-1 tracking-wide animate-slide-in-left">
              David M. Jentjens
            </div>
            <div className="text-lg opacity-90 mb-0.5 animate-slide-in-left-delayed">
              Sr. Software Engineer
            </div>
            <div className="text-base opacity-80 animate-slide-in-left-delayed-2">
              and Manager
            </div>
          </div>

          <div className="relative z-10 hidden sm:block">
            <button
              onClick={downloadPDF}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg p-4 transition-all duration-200 hover:scale-105"
              title="Download PDF"
            >
              <FileDown className="w-8 h-8" />
            </button>
          </div>
        </div>

        <div className="relative z-10 sm:hidden flex justify-center">
          <button
            onClick={downloadPDF}
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg p-3 transition-all duration-200 hover:scale-105"
            title="Download PDF"
          >
            <FileDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}