import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "./Container";
import Button from "./Button";

const links = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ivory/95 backdrop-blur-sm rule">
      <Container className="flex items-center justify-between py-5">
        <Link
          to="/"
          className="text-lg font-medium tracking-tight text-pine"
          onClick={() => setOpen(false)}
        >
          SADCHIRO
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? "text-pine" : "text-charcoal/70 hover:text-pine"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button to="/products" variant="primary">
            Explore Products
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span
            className={`block h-px w-6 bg-charcoal transition-transform ${
              open ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-charcoal transition-transform ${
              open ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </Container>

      {open && (
        <div className="md:hidden rule bg-ivory">
          <Container className="flex flex-col gap-1 py-4">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-3 text-base font-medium ${
                    isActive ? "text-pine" : "text-charcoal/70"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="pt-3">
              <Button to="/products" variant="primary" className="w-full" onClick={() => setOpen(false)}>
                Explore Products
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
