import { useCallback, useEffect, useRef, useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import PageContainer from "./components/layout/PageContainer";
import { profile } from "./content/profile";

const navigation = [
  { label: "Projects", href: "#projects-section" },
  { label: "Experience", href: "#experience-section" },
  { label: "Research", href: "#research-section" },
  { label: "Contact", href: "#contactme-section" },
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
    <header className="sticky top-0 z-50 border-b border-subtle bg-page/90 backdrop-blur">
      <PageContainer className="flex min-h-16 items-center justify-between gap-6">
        <a
          href="#landing-section"
          className="inline-flex items-center gap-3 rounded-control text-primary transition-colors duration-fast hover:text-accent-hover"
          aria-label={`${profile.name}, home`}
        >
          <span
            className="inline-flex h-9 w-9 items-center justify-center rounded-control border border-subtle bg-surface text-sm font-bold tracking-tight text-accent"
            aria-hidden="true"
          >
            PM
          </span>
          <span className="text-sm font-semibold sm:text-base">{profile.name}</span>
        </a>

        <nav aria-label="Primary navigation" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-control px-1 py-2 text-sm font-medium text-secondary transition-colors duration-fast hover:text-accent-hover"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-control border border-subtle text-primary transition-colors duration-fast hover:border-accent hover:text-accent-hover md:hidden"
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
                      className="block rounded-control px-3 py-3 text-base font-medium text-primary transition-colors duration-fast hover:bg-surface-elevated hover:text-accent-hover"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </PageContainer>
        </div>
      )}
    </header>
  );
};

export default Header;
