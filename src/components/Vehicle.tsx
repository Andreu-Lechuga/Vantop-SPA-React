import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '../hooks/useLanguage';
import { FaUsers, FaTint, FaSnowflake, FaShieldAlt, FaWifi, FaCouch, FaBaby, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import clsx from 'clsx';

interface VehicleImage {
  src: string;
  alt: string;
}

interface VehicleFeature {
  icon: React.ReactNode;
  textKey: string;
}

export const Vehicle: React.FC = () => {
  const { t } = useLanguage();
  
  const vehicleImages: VehicleImage[] = [
    {
      src: '/images/van-45grados-frontal.jpg',
      alt: 'VanTop Mercedes Benz V 220 Negra - Vista Frontal 45G'
    },
    {
      src: '/images/driver-van-front.jpeg',
      alt: 'VanTop Mercedes Benz V 220 Negra - Vista Frontal'
    },
    {
      src: '/images/van-interior-normal-rows.png',
      alt: 'VanTop Mercedes Benz V 220 Negra - Interior Normal'
    },
    {
      src: '/images/van-interior-trasero.png',
      alt: 'VanTop Mercedes Benz V 220 Negra - Interior Trasero'
    },
    {
      src: '/images/van-interior-fronted-rows.jpg',
      alt: 'VanTop Mercedes Benz V 220 Negra - Interior Frontal'
    },
    {
      src: '/images/driver-van-side.jpeg',
      alt: 'VanTop Mercedes Benz V 220 Negra - Vista Lateral'
    }
  ];

  const vehicleFeatures: VehicleFeature[] = [
    { icon: <FaUsers />, textKey: 'vehicle.features.passengers' },
    { icon: <FaTint />, textKey: 'vehicle.features.luggage' },
    { icon: <FaSnowflake />, textKey: 'vehicle.features.ac' },
    { icon: <FaShieldAlt />, textKey: 'vehicle.features.audio' },
    { icon: <FaWifi />, textKey: 'vehicle.features.wifi' },
    { icon: <FaCouch />, textKey: 'vehicle.features.seats' },
    { icon: <FaBaby />, textKey: 'vehicle.features.safety' }
  ];

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const changeMainImage = (index: number) => {
    setActiveImageIndex(index);
  };

  const navigateGallery = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setActiveImageIndex(prev => prev === 0 ? vehicleImages.length - 1 : prev - 1);
    } else {
      setActiveImageIndex(prev => prev === vehicleImages.length - 1 ? 0 : prev + 1);
    }
  };

  return (
    <section className="section" id="vehiculo">
      <div className="container">
        <h2 className="section-title">
          {t('vehicle.title')}
        </h2>
        
        <div className="vehicle-content">
          
          {/* Galería de vehículo */}
          <div className="vehicle-gallery">
            {/* Imagen principal */}
            <div className="gallery-main">
              <Image 
                src={vehicleImages[activeImageIndex].src}
                alt={vehicleImages[activeImageIndex].alt}
                width={800}
                height={600}
                id="main-vehicle-img"
                className="w-full h-auto object-cover"
                priority
              />
            </div>
            
            {/* Contenedor de miniaturas con navegación */}
            <div className="gallery-thumbs-container">
              {/* Botón anterior */}
              <button 
                className="gallery-nav"
                onClick={() => navigateGallery('prev')}
                aria-label="Imagen anterior"
              >
                <FaChevronLeft />
              </button>
              
              {/* Wrapper de miniaturas */}
              <div className="gallery-thumbs-wrapper">
                <div className="gallery-thumbs">
                  {vehicleImages.map((image, index) => (
                    <Image
                      key={index}
                      src={image.src}
                      alt={image.alt}
                      width={120}
                      height={90}
                      className={clsx(
                        "thumb w-full h-auto object-cover cursor-pointer",
                        activeImageIndex === index && "active"
                      )}
                      onClick={() => changeMainImage(index)}
                    />
                  ))}
                </div>
              </div>
              
              {/* Botón siguiente */}
              <button 
                className="gallery-nav"
                onClick={() => navigateGallery('next')}
                aria-label="Imagen siguiente"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
          
          {/* Información del vehículo */}
          <div className="vehicle-info">
            <h3>
              {t('vehicle.model')}
            </h3>
            
            {/* Lista de características */}
            <ul className="vehicle-features">
              {vehicleFeatures.map((feature, index) => (
                <li key={index}>
                  <i>
                    {feature.icon}
                  </i>
                  <span>
                    {t(feature.textKey)}
                  </span>
                </li>
              ))}
            </ul>
            
            {/* Descripción del vehículo */}
            <p className="vehicle-description">
              {t('vehicle.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
