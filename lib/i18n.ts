export const i18n = {
  defaultLocale: "en",
  locales: ["en"],
} as const;

export type Locale = (typeof i18n)["locales"][number];

export const RTL_LOCALES = new Set<string>(["ar", "he", "fa", "ur"]);

export const hasLocale = (locale: string): locale is Locale => (i18n.locales as readonly string[]).includes(locale);
