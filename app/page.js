'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [buttonText, setButtonText] = useState('GUARDAR CONTACTO');
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

    setButtonText('✓ GUARDADO');
    setTimeout(() => {
      setIsAnimating(false);
      setButtonText('GUARDAR CONTACTO');
    }, 2000);
  };

  return (
    <div
      className="h-[100dvh] mb-2 flex flex-col items-center justify-center bg-cover bg-center text-white"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/ic8lokamemlhpm10auvu')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Black background overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      
      {/* New blue overlay with 70% opacity */}
      <div className="absolute inset-0 bg-[#17283D]/70 z-0"></div>

      <div className="relative z-10 w-full max-w-sm px-6 py-12 flex flex-col flex-grow">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-light mb-24 tracking-widest text-center text-gray-200"
          style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: '0.15em' }}
        >
          UMLYEV BUSINESS
        </motion.h1>

        <div className="space-y-3 w-full mt-auto text-sm">
          <motion.a
            transition={{ delay: 0.2, duration: 0.6 }}
            href="tel:+351965465946"
            className="flex items-center w-full bg-[#17283D]/90 backdrop-blur-sm py-3 px-5 rounded-md border border-gray-800 hover:bg-[#17283D] transition-all duration-300 shadow-lg shadow-black/50"
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <span className="ml-4 tracking-widest text-gray-300" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
              CHAMADA
            </span>
          </motion.a>

          <motion.a
            transition={{ delay: 0.4, duration: 0.6 }}
            href="https://wa.me/+351965465946"
            className="flex items-center w-full bg-[#17283D]/90 backdrop-blur-sm py-3 px-5 rounded-md border border-gray-800 hover:bg-[#17283D] transition-all duration-300 shadow-lg shadow-black/50"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <span className="ml-4 tracking-widest text-gray-300" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
              WHATSAPP
            </span>
          </motion.a>

          <motion.a
            href="mailto:umlyev@gmail.com"
            className="flex items-center w-full bg-[#17283D]/90 backdrop-blur-sm py-3 px-5 rounded-md border border-gray-800 hover:bg-[#17283D] transition-all duration-300 shadow-lg shadow-black/50"
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="ml-4 tracking-widest text-gray-300" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
              E-MAIL
            </span>
          </motion.a>

          <motion.button
            onClick={saveContact}
            className={`flex items-center w-full bg-[#17283D]/90 backdrop-blur-sm py-3 px-5 rounded-md border border-gray-800 hover:bg-[#17283D] transition-all duration-300 shadow-lg shadow-black/50 ${isAnimating ? 'bg-[#17283D]' : ''}`}
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </div>
            <span className={`ml-4 tracking-widest text-gray-300 ${isAnimating ? 'text-white' : ''}`} style={{ fontFamily: "'Rajdhani', sans-serif" }}>
              {buttonText}
            </span>
          </motion.button>
        </div>
      </div>
    </div>
  );
}