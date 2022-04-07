import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
 
import { TRANSLATIONS_EN } from "./en";
import { TRANSLATIONS_TR } from "./tr";
import { TRANSLATIONS_KR } from "./kr";
import { TRANSLATIONS_RO } from "./ro";
 
i18n
 .use(LanguageDetector)
 .use(initReactI18next)
 .init({
   resources: {
     en: {
       translation: TRANSLATIONS_EN
     },
     tr: {
       translation: TRANSLATIONS_TR
     },
     kr: {
      translation: TRANSLATIONS_KR
     },
     ro: {
      translation: TRANSLATIONS_RO
     }
   }
 });
 
i18n.changeLanguage("en");