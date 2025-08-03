import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage, Language } from '../hooks/useLanguage';

interface LanguageOption {
  code: Language;
  flag: string;
  name: string;
}

const languageOptions: LanguageOption[] = [
  { code: 'es', flag: '/images/flags/spain.svg', name: 'Español' },
  { code: 'en', flag: '/images/flags/eeuu.svg', name: 'English' },
  { code: 'pt', flag: '/images/flags/brazil.svg', name: 'Português' }
];

interface LanguageSelectorProps {
  isMobile?: boolean;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ isMobile = false }) => {
  const { currentLanguage, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Cerrar menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (lang: Language) => {
    changeLanguage(lang);
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div 
      ref={menuRef}
      className={`relative ${isMobile ? 'block md:hidden' : 'hidden md:block'}`}
    >
      {/* Botón principal */}
      <button
        onClick={toggleMenu}
        className={`
          flex items-center justify-center gap-3 px-4 py-3 
          bg-white rounded-2xl transition-all duration-300 ease-in-out
          hover:bg-accent hover:shadow-md
          ${isMobile ? 'p-2' : 'px-9 py-3'}
        `}
      >
        <Image
          src={isMobile ? '/images/icons/globe-2.svg' : '/images/icons/globe.svg'}
          alt="Select language"
          width={24}
          height={24}
          className="w-6 h-6"
        />
        
        {/* Flecha */}
        <svg 
          viewBox="0 0 360 360" 
          className={`w-3.5 h-3.5 fill-black transition-transform duration-300 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        >
          <path d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z" />
        </svg>
      </button>

      {/* Menú desplegable */}
      <div 
        className={`
          absolute top-full left-0 w-full mt-[-5px] pt-2.5 pb-2.5
          bg-white rounded-2xl shadow-sm z-50
          transition-all duration-300 ease-in-out
          ${isOpen 
            ? 'opacity-100 visible translate-y-0' 
            : 'opacity-0 invisible -translate-y-3'
          }
        `}
      >
        {languageOptions.map((option) => (
          <button
            key={option.code}
            onClick={() => handleLanguageChange(option.code)}
            className={`
              w-full flex items-center justify-center p-4 
              transition-all duration-300 ease-in-out
              hover:bg-accent-light hover:text-accent
              ${currentLanguage === option.code ? 'bg-accent-light text-accent' : ''}
            `}
          >
            <Image
              src={option.flag}
              alt={option.name}
              width={25}
              height={25}
              className={`
                w-6 h-6 transition-transform duration-300
                ${currentLanguage === option.code ? 'animate-pulse scale-110' : 'hover:scale-125'}
              `}
            />
          </button>
        ))}
      </div>
    </div>
  );
};
