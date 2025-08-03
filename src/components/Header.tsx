import { useState, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { LanguageSelector } from './LanguageSelector';

export const Header: React.FC = () => {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detectar scroll para cambiar estilo del header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll a secciones
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          
          {/* Logo/Título - Versión Web */}
          <div className="site-title">
            <h3>VANTOP</h3>
          </div>

          {/* Logo/Título - Versión Móvil */}
          <div className="mobile-site-title">
            <h2>VANTOP</h2>
          </div>

          {/* Navegación Principal */}
          <nav className="main-nav">
            <ul>
              <li>
                <button
                  onClick={() => scrollToSection('servicios')}
                  className="nav-link"
                >
                  {t('nav.services')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('vehiculo')}
                  className="nav-link"
                >
                  {t('nav.vehicle')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contacto')}
                  className="nav-link"
                >
                  {t('nav.contact')}
                </button>
              </li>
            </ul>
          </nav>

          {/* Selector de Idiomas - Desktop */}
          <LanguageSelector />

          {/* Selector de Idiomas - Mobile */}
          <LanguageSelector isMobile />

          {/* Botón Hamburger */}
          <div className="hamburger">
            <input 
              type="checkbox" 
              checked={isMenuOpen}
              onChange={toggleMenu}
            />
            <svg viewBox="0 0 32 32">
              <path 
                className="line line-top-bottom"
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              />
              <path 
                className="line" 
                d="M7 16 27 16"
              />
            </svg>
          </div>
        </div>
      </header>

      {/* Overlay del menú móvil */}
      <div 
        className={`menu-overlay ${isMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMenuOpen(false)}
      />
      
      {/* Navegación móvil */}
      <nav className={`main-nav ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li>
            <button
              onClick={() => scrollToSection('servicios')}
              className="nav-link"
            >
              {t('nav.services')}
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('vehiculo')}
              className="nav-link"
            >
              {t('nav.vehicle')}
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('contacto')}
              className="nav-link"
            >
              {t('nav.contact')}
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};
