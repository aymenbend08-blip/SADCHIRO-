import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "./Container";
import Button from "./Button";
import { useI18n } from "../i18n";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage, t } = useI18n();

  const links = [
    { label: t("home"), to: "/" },
    { label: t("products"), to: "/products" },
    { label: t("about"), to: "/about" },
    { label: t("contact"), to: "/contact" },
  ];

  const toggleLanguage = () => setLanguage(language === "en" ? "ar" : "en");

  return (
    <header className="sticky top-0 z-50 bg-ivory/95 backdrop-blur-sm rule">
      <Container className="flex items-center justify-between py-5">
        <Link to="/" className="text-lg font-semibold tracking-tight text-pine" onClick={() => setOpen(false)}>
          SADCHIRO
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === "/"}
              className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? "text-pine" : "text-charcoal/70 hover:text-pine"}`}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button type="button" onClick={toggleLanguage} className="rounded-full border border-charcoal/15 px-4 py-2 text-sm font-medium text-pine hover:border-pine" aria-label="Change language">
            {t("language")}
          </button>
          <Button to="/products" variant="primary">{t("explore")}</Button>
        </div>

        <button type="button" className="md:hidden flex flex-col gap-1.5 p-2" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((prev) => !prev)}>
          <span className={`block h-px w-6 bg-charcoal transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`} />
          <span className={`block h-px w-6 bg-charcoal transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
        </button>
      </Container>

      {open && (
        <div className="md:hidden rule bg-ivory">
          <Container className="flex flex-col gap-1 py-4">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === "/"} onClick={() => setOpen(false)}
                className={({ isActive }) => `py-3 text-base font-medium ${isActive ? "text-pine" : "text-charcoal/70"}`}>
                {link.label}
              </NavLink>
            ))}
            <button type="button" onClick={toggleLanguage} className="mt-2 rounded-lg border border-charcoal/15 px-4 py-3 text-sm font-medium text-pine">{t("language")}</button>
            <div className="pt-3">
              <Button to="/products" variant="primary" className="w-full" onClick={() => setOpen(false)}>{t("explore")}</Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
