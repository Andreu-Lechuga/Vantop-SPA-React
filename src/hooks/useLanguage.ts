import { useState, useEffect, useCallback } from 'react';

export type Language = 'es' | 'en' | 'pt';

interface Translations {
  [key: string]: string | Translations;
}

export const useLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('es');
  const [translations, setTranslations] = useState<Translations>({});
  const [isLoading, setIsLoading] = useState(true);

  // Detectar idioma preferido
  const detectLanguage = (): Language => {
    if (typeof window === 'undefined') return 'es';
    
    const savedLanguage = localStorage.getItem('vantop-language') as Language;
    if (savedLanguage && ['es', 'en', 'pt'].includes(savedLanguage)) {
      return savedLanguage;
    }
    
    const browserLang = navigator.language || navigator.languages[0];
    if (browserLang.startsWith('es')) return 'es';
    if (browserLang.startsWith('pt')) return 'pt';
    return 'en';
  };

  // Cargar traducciones
  const loadTranslations = useCallback(async (lang: Language) => {
    try {
      setIsLoading(true);
      const response = await fetch(`/locales/${lang}.json`);
      if (!response.ok) {
        throw new Error(`Error loading language ${lang}`);
      }
      const data = await response.json();
      setTranslations(data);
    } catch (error) {
      console.error(`Error loading language ${lang}:`, error);
      // Fallback a español si hay error
      if (lang !== 'es') {
        loadTranslations('es');
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Cambiar idioma
  const changeLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
    localStorage.setItem('vantop-language', lang);
    loadTranslations(lang);
  };

  // Obtener traducción usando notación de puntos
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: string | Translations = translations;
    
    for (const k of keys) {
      if (value === undefined || value === null) return key;
      if (typeof value === 'string') return key;
      value = value[k];
    }
    
    return typeof value === 'string' ? value : key;
  };

  // Inicializar al montar el componente
  useEffect(() => {
    const initialLang = detectLanguage();
    setCurrentLanguage(initialLang);
    loadTranslations(initialLang);
  }, [loadTranslations]);

  return {
    currentLanguage,
    changeLanguage,
    t,
    isLoading,
    availableLanguages: ['es', 'en', 'pt'] as Language[]
  };
};
