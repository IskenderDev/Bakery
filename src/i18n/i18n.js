// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from '../locales/eg.json';
import translationRU from '../locales/ru.json';

const resources = {
  en: {
    translation: translationEN
  },
  ru: {
    translation: translationRU
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ru', // Начальный язык
    interpolation: {
      escapeValue: false // не нужно экранировать для React
    }
  });

export default i18n;
