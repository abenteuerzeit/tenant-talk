import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: { 
      // order and from where user language should be detected
      order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
    },
    backend: {
      loadPath: "./locales/{{lng}}/{{ns}}.json",
    },
    lng: localStorage.getItem('language'), // remove default "uk"
    resources: {
      pl: {
        translation: require("./locales/pl/trans.json"),
      },
      en: {
        translation: require("./locales/en/trans.json"),
      },
      uk: {
        translation: require("./locales/uk/trans.json"),
      },
    },
    fallbackLng: "en-us", // specify a fallback language in case user's language is not available
    debug: false,
    interpolation: {
        escapeValue: false,
    },
  });

export default i18n;
