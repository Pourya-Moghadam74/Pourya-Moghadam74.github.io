import { useCallback, useEffect, useRef, useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import PageContainer from "./components/layout/PageContainer";
import { profile } from "./content/profile";

const navigation = [
  { label: "Projects", href: "#projects-section" },
  { label: "Capabilities", href: "#capabilities-section" },
  { label: "Experience", href: "#experience-section" },
  { label: "Research", href: "#research-section" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const firstMenuLinkRef = useRef(null);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    window.requestAnimationFrame(() => menuButtonRef.current?.focus());
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    firstMenuLinkRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeMenu();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [closeMenu, isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-subtle bg-page/95 backdrop-blur">
      <PageContainer className="flex min-h-[4.5rem] items-center justify-between gap-6">
        <a
          href="#landing-section"
          className="group inline-flex items-center gap-3 rounded-control text-primary transition-colors duration-fast hover:text-accent"
          aria-label={`${profile.name}, home`}
        >
          <span
            className="inline-flex h-9 w-9 items-center justify-center border border-ink bg-ink font-mono text-xs font-bold tracking-[0.08em] text-white transition-colors group-hover:border-accent group-hover:bg-accent"
            aria-hidden="true"
          >
            PM
          </span>
          <span>
            <span className="block text-sm font-semibold leading-none">{profile.name}</span>
            <span className="mt-1 hidden font-mono text-[10px] uppercase tracking-[0.12em] text-muted sm:block">
              ML Engineer
            </span>
          </span>
        </a>

        <nav aria-label="Primary navigation" className="hidden md:block">
          <ul className="flex items-center gap-6">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-control px-1 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-secondary transition-colors duration-fast hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden min-h-9 items-center border border-primary/30 px-4 font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-primary transition-colors hover:border-accent hover:text-accent lg:inline-flex"
        >
          Résumé ↗
        </a>

        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-control border border-subtle text-primary transition-colors duration-fast hover:border-accent hover:text-accent md:hidden"
          onClick={() => (isOpen ? closeMenu() : setIsOpen(true))}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <LuX className="h-5 w-5" /> : <LuMenu className="h-5 w-5" />}
        </button>
      </PageContainer>

      {isOpen && (
        <div id="mobile-navigation" className="border-t border-subtle bg-surface md:hidden">
          <PageContainer>
            <nav aria-label="Mobile navigation" className="py-3">
              <ul className="flex flex-col">
                {navigation.map((item, index) => (
                  <li key={item.href}>
                    <a
                      ref={index === 0 ? firstMenuLinkRef : undefined}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block rounded-control px-3 py-3 text-base font-medium text-primary transition-colors duration-fast hover:bg-surface-elevated hover:text-accent"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li className="mt-2 border-t border-subtle pt-2">
                  <a
                    href={profile.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-3 py-3 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-accent"
                  >
                    View résumé ↗
                  </a>
                </li>
              </ul>
            </nav>
          </PageContainer>
        </div>
      )}
    </header>
  );
};

export default Header;
