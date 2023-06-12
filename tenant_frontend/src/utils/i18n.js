import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
.use(Backend)
.use(LanguageDetector)
.use(initReactI18next)
  .init({
    backend: {
      loadPath: "./locales/{{lng}}/{{ns}}.json",
    },
    lng: "en",
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
      fallbackLng: false,
      debug: true,
      interpolation: {
        escapeValue: false,
      },
    },
  });

export default i18n;
