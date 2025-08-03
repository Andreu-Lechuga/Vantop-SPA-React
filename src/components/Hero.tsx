import { useLanguage } from '../hooks/useLanguage';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contacto');
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
    <section 
      id="inicio"
      className="hero"
    >
      {/* Contenido */}
      <div className="hero-content">
        <h1 className="hero-title">
          {t('hero.title')}
        </h1>
        
        <p className="hero-subtitle">
          {t('hero.subtitle')}
        </p>
        
        <button
          onClick={scrollToContact}
          className="cta-button"
        >
          {t('hero.cta')}
        </button>
      </div>
    </section>
  );
};
