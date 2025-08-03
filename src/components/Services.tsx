import { useLanguage } from '../hooks/useLanguage';
import { FaPlane, FaGlassCheers, FaClock, FaMapMarkedAlt } from 'react-icons/fa';
import clsx from 'clsx';

interface ServiceCardProps {
  icon: React.ReactNode;
  titleKey: string;
  descKey: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, titleKey, descKey, index }) => {
  const { t } = useLanguage();
  
  return (
    <div 
      className={clsx(
        "service-card group bg-white rounded-lg p-6 shadow-md hover:shadow-lg",
        "transform hover:-translate-y-2 transition-all duration-normal",
        "border border-gray hover:border-accent",
        "cursor-pointer"
      )}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="service-icon mb-4 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-light rounded-full group-hover:bg-accent transition-colors duration-normal">
          <div className="text-2xl text-accent group-hover:text-white transition-colors duration-normal">
            {icon}
          </div>
        </div>
      </div>
      <h3 className="text-xl font-semibold text-primary mb-3 text-center group-hover:text-accent transition-colors duration-normal">
        {t(titleKey)}
      </h3>
      <p className="text-dark-gray text-center leading-relaxed">
        {t(descKey)}
      </p>
    </div>
  );
};

interface ServiceButtonProps {
  icon: React.ReactNode;
  titleKey: string;
  index: number;
}

const ServiceButton: React.FC<ServiceButtonProps> = ({ icon, titleKey, index }) => {
  const { t } = useLanguage();
  
  return (
    <button 
      className={clsx(
        "service-button flex flex-col items-center justify-center",
        "bg-white border-2 border-gray hover:border-accent",
        "rounded-lg p-4 min-h-[120px]",
        "transform hover:scale-105 transition-all duration-normal",
        "shadow-sm hover:shadow-md",
        "group"
      )}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="text-2xl text-accent mb-2 group-hover:scale-110 transition-transform duration-normal">
        {icon}
      </div>
      <span className="text-sm font-medium text-primary text-center leading-tight group-hover:text-accent transition-colors duration-normal">
        {t(titleKey)}
      </span>
    </button>
  );
};

export const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <FaPlane />,
      titleKey: 'services.airport.title',
      descKey: 'services.airport.desc'
    },
    {
      icon: <FaGlassCheers />,
      titleKey: 'services.events.title',
      descKey: 'services.events.desc'
    },
    {
      icon: <FaClock />,
      titleKey: 'services.hourly.title',
      descKey: 'services.hourly.desc'
    },
    {
      icon: <FaMapMarkedAlt />,
      titleKey: 'services.city.title',
      descKey: 'services.city.desc'
    }
  ];

  return (
    <section className="services section" id="servicios">
      <div className="container">
        <h2 className="section-title">
          {t('services.title')}
        </h2>
        
        {/* Versión móvil - Botones estilo HTML original */}
        <div className="mobile-services-grid">
          {services.map((service, index) => (
            <ServiceButton
              key={index}
              icon={service.icon}
              titleKey={service.titleKey}
              index={index}
            />
          ))}
        </div>
        
        {/* Versión desktop - Cards con descripción */}
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              titleKey={service.titleKey}
              descKey={service.descKey}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
