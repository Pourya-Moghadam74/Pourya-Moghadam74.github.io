import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faGoogleScholar,
} from "@fortawesome/free-brands-svg-icons";
import { LuMenu, LuX } from "react-icons/lu";

const socials = [
  {
    label: "email",
    icon: faEnvelope,
    url: "mailto:Pourya.Moghadam@utoronto.ca",
  },
  { label: "github", icon: faGithub, url: "https://github.com/Pourya-Moghadam74" },
  {
    label: "linkedin",
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/pourya-moghadam/",
  },
  {
    label: "googlescholar",
    icon: faGoogleScholar,
    url: "https://scholar.google.com/citations?user=f-NzJUcAAAAJ&hl=en",
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(null);
  const prevScrollYRef = useRef(0);
  const tickingRef = useRef(false);

  const handleClick = (anchor) => () => {
    const el2 = document.getElementById(`${anchor}-section`);
    if (el2) {
      setIsOpen(false);
      setTimeout(() => {
        el2.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 150);
    }
  };

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    el.style.willChange = "transform";

    const onScroll = () => {
      const currentY = window.scrollY || window.pageYOffset;
      if (!tickingRef.current) {
        window.requestAnimationFrame(() => {
          const prevY = prevScrollYRef.current;
          el.style.transform =
            currentY > prevY && currentY > 0 ? "translateY(-200px)" : "translateY(0)";
          prevScrollYRef.current = currentY;
          tickingRef.current = false;
        });
        tickingRef.current = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-50 transform transition-transform duration-300"
    >
      <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-slate-900/80 px-4 py-3 shadow-2xl shadow-cyan-500/10 backdrop-blur">
          <div className="flex items-center gap-4 text-base text-slate-200">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="transition duration-200 hover:text-accent hover:drop-shadow"
              >
                <FontAwesomeIcon size="lg" icon={s.icon} />
              </a>
            ))}
          </div>

          <nav className="hidden items-center gap-10 text-sm font-semibold uppercase tracking-[0.08em] text-slate-100 md:flex">
            <button
              onClick={handleClick("projects")}
              className="transition hover:text-accent"
            >
              Projects
            </button>
            <button
              onClick={handleClick("contactme")}
              className="transition hover:text-accent"
            >
              Contact
            </button>
          </nav>

          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-slate-100 transition hover:border-accent hover:text-accent md:hidden"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <LuMenu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute inset-x-4 top-20 z-50 rounded-2xl border border-white/10 bg-slate-900/95 shadow-2xl shadow-cyan-500/20">
            <div className="flex items-center justify-between px-4 py-3">
              <span className="text-sm font-semibold uppercase tracking-[0.1em] text-slate-100">
                Navigate
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
                aria-label="Close menu"
              >
                <LuX className="h-5 w-5" />
              </button>
            </div>
            <div className="flex flex-col gap-2 px-4 pb-4 text-lg font-semibold text-slate-100">
              <button
                onClick={handleClick("projects")}
                className="rounded-xl px-3 py-3 text-left transition hover:bg-white/5 hover:text-accent"
              >
                Projects
              </button>
              <button
                onClick={handleClick("contactme")}
                className="rounded-xl px-3 py-3 text-left transition hover:bg-white/5 hover:text-accent"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
