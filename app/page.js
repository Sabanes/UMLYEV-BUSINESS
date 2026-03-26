'use client';
import { useState } from 'react';
import { FaCampground, FaGear, FaHouseChimneyWindow } from 'react-icons/fa6';
import { FaRegAddressBook } from 'react-icons/fa6';
import { Phone, Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';

export default function Home() {
  const [buttonText, setButtonText] = useState('SAVE CONTACT');
  const [isAnimating, setIsAnimating] = useState(false);

  const saveContact = () => {
    setIsAnimating(true);
    const vCardData = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'FN:UMLYEV BUSINESS',
      'TEL;TYPE=CELL:+351965465946',
      'EMAIL:umlyev@gmail.com',
      'ORG:UMLYEV BUSINESS',
      'END:VCARD'
    ].join('\n');

    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'UMLYEV-BUSINESS.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setButtonText('✓ SAVED');
    setTimeout(() => {
      setIsAnimating(false);
      setButtonText('SAVE CONTACT');
    }, 2000);
  };

  return (
    <div
      className="min-h-dvh flex flex-col items-center py-12 px-6 text-white bg-cover bg-center"
      style={{
        backgroundImage: "url('/bg2.jpg')"
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      <div className="relative z-10 w-full max-w-md flex flex-col items-center">
        {/* Profile Picture */}
        <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-white/30 shadow-xl mb-6">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('/background.jpg')"
            }}
          />
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-widest text-center text-white font-orbitron mb-8 leading-tight" style={{ letterSpacing: '0.2em' }}>
          UMLYEV<br />BUSINESS
        </h1>

        {/* Links */}
        <div className="space-y-3 w-full">
          <a
            href="https://shadow.com.pt"
            className="flex items-center justify-center w-full bg-white/10 backdrop-blur-md py-3.5 sm:py-4 md:py-5 px-4 md:px-6 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaCampground className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 mr-3" />
            <div className="flex items-center gap-1 sm:gap-2">
              <span className="tracking-widest text-white/90 font-orbitron text-sm sm:text-base md:text-lg">
                SHADOW
              </span>
              <span className="tracking-widest text-white/60 font-orbitron text-xs sm:text-sm md:text-base">
                - Pergolas
              </span>
            </div>
          </a>

          <a
            href="https://smartwin.pt"
            className="flex items-center justify-center w-full bg-white/10 backdrop-blur-md py-3.5 sm:py-4 md:py-5 px-4 md:px-6 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGear className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 mr-3" />
            <div className="flex items-center gap-1 sm:gap-2">
              <span className="tracking-widest text-white/90 font-orbitron text-sm sm:text-base md:text-lg">
                SMARTWIN
              </span>
              <span className="tracking-widest text-white/60 font-orbitron text-xs sm:text-sm md:text-base">
                - Accessories
              </span>
            </div>
          </a>

          <a
            href="https://windoorlisboa.pt/"
            className="flex items-center justify-center w-full bg-white/10 backdrop-blur-md py-3.5 sm:py-4 md:py-5 px-4 md:px-6 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaHouseChimneyWindow className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 mr-3" />
            <div className="flex items-center gap-1 sm:gap-2">
              <span className="tracking-widest text-white/90 font-orbitron text-sm sm:text-base md:text-lg">
                WINDOOR
              </span>
              <span className="tracking-widest text-white/60 font-orbitron text-xs sm:text-sm md:text-base">
                - PVC Windows
              </span>
            </div>
          </a>

          <button
            onClick={saveContact}
            className={`flex items-center justify-center w-full bg-white/10 backdrop-blur-md py-3.5 sm:py-4 md:py-5 px-4 md:px-6 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-lg ${isAnimating ? 'bg-white/20' : ''}`}
          >
            <FaRegAddressBook className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 mr-3" />
            <span className={`tracking-widest text-white/90 font-orbitron text-sm sm:text-base md:text-lg ${isAnimating ? 'text-white' : ''}`}>
              {buttonText}
            </span>
          </button>

          {/* Contact Icons Row */}
          <div className="flex items-center justify-center gap-6 pt-4">
            <a
              href="tel:+351965465946"
              className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-lg"
            >
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </a>

            <a
              href="https://wa.me/+351965465946"
              className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </a>

            <a
              href="mailto:umlyev@gmail.com"
              className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-lg"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
