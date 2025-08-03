import Image from 'next/image';
import { useLanguage } from '../hooks/useLanguage';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

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
  };

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="VanTop Logo"
              width={60}
              height={60}
              className="h-15 w-auto brightness-0 invert"
            />
          </div>

          {/* Enlaces de navegación */}
          <div className="flex flex-wrap gap-4 md:gap-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-sm hover:text-accent transition-colors duration-200"
            >
              {t('footer.home')}
            </button>
            <button
              onClick={() => scrollToSection('servicios')}
              className="text-sm hover:text-accent transition-colors duration-200"
            >
              {t('footer.services')}
            </button>
            <button
              onClick={() => scrollToSection('vehiculo')}
              className="text-sm hover:text-accent transition-colors duration-200"
            >
              {t('footer.vehicle')}
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="text-sm hover:text-accent transition-colors duration-200"
            >
              {t('footer.contact')}
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-4 border-t border-white/10">
          <p className="text-sm text-gray-400">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};
