import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const path = url.pathname.replace(import.meta.env.BASE_URL, '');
  const [lang] = path.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}
