import i18n, {LanguageDetectorModule} from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en.json';
import ar from './ar.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

const languageKey = 'language';
const languageDetector: LanguageDetectorModule = {
  type: 'languageDetector',
  detect: async language => {
    const persistedLocale = await AsyncStorage.getItem(languageKey);
    if (!persistedLocale) {
      return language('en');
    }
    language(persistedLocale);
  },
  init: () => {},
  cacheUserLanguage: locale => {
    AsyncStorage.setItem(languageKey, locale);
  },
};
i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    lng: 'en', // if you're using a language detector, do not define the lng option
    fallbackLng: 'en',
    compatibilityJSON: 'v3',
    resources: {
      en: {
        translation: en,
      },
      ar: {
        translation: ar,
      },
    },
  });
