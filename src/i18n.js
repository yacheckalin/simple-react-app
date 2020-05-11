import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import common_en from "./translations/en/common.json";
import common_ru from "./translations/ru/common.json";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    defaultNS: ["common"],
    fallbackLng: ["ru", "en"],
    debug: true,
    lng: "ru",
    interpolation: {
      escapeValue: false,
    },
    initImmediate: false,
    resources: {
      ru: {
        common: common_ru,
      },
      en: {
        common: common_en,
      },
    },
  });

export default i18n;
