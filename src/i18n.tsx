import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Language = "en" | "ar";

type Dictionary = Record<string, string>;

export const translations: Record<Language, Dictionary> = {
  en: {
    home: "Home", products: "Products", about: "About", contact: "Contact",
    explore: "Explore Products", language: "العربية",
    heroTitle: "Technology built around real-world problems.",
    heroText: "SADCHIRO is an independent technology company building practical, scalable digital products from Algeria for real people and real businesses.",
    aboutCompany: "About SADCHIRO",
    approach: "Our approach",
    footerText: "An independent technology company building practical products for real-world problems.",
    allProducts: "All products", company: "Company", contactUs: "Contact",
    rights: "All rights reserved.", algeria: "Built from Algeria",
  },
  ar: {
    home: "الرئيسية", products: "المنتجات", about: "من نحن", contact: "اتصل بنا",
    explore: "اكتشف منتجاتنا", language: "English",
    heroTitle: "نبني التكنولوجيا حول مشاكل حقيقية.",
    heroText: "صاد شيرو شركة تكنولوجية مستقلة تطوّر منتجات رقمية عملية وقابلة للتوسع، انطلاقًا من الجزائر لخدمة الناس والأعمال الحقيقية.",
    aboutCompany: "عن صاد شيرو",
    approach: "منهجنا",
    footerText: "شركة تكنولوجية مستقلة تبني منتجات عملية لمشاكل العالم الحقيقي.",
    allProducts: "كل المنتجات", company: "الشركة", contactUs: "اتصل بنا",
    rights: "جميع الحقوق محفوظة.", algeria: "من الجزائر إلى العالم",
  }
};

type I18nValue = { language: Language; setLanguage: (language: Language) => void; t: (key: string) => string; };

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => (localStorage.getItem("sadchiro-language") as Language) || "en");

  const setLanguage = (next: Language) => {
    localStorage.setItem("sadchiro-language", next);
    setLanguageState(next);
  };

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  const t = (key: string) => translations[language][key] ?? key;

  return <I18nContext.Provider value={{ language, setLanguage, t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used inside I18nProvider");
  return context;
}
