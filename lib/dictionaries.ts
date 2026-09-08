import "server-only";
import { type Locale } from "./i18n";

const dictionaries: Record<Locale, () => Promise<any>> = {
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();

export { hasLocale, type Locale } from "./i18n";

