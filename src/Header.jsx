import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faMedium, faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link} from "@chakra-ui/react";

const socials = [
  { label: "email", icon: faEnvelope, url: "mailto:hello@example.com" },
  { label: "github", icon: faGithub, url: "https://github.com" },
  { label: "linkedin", icon: faLinkedin, url: "https://www.linkedin.com" },
  { label: "medium", icon: faMedium, url: "https://medium.com" },
  { label: "stackoverflow", icon: faStackOverflow, url: "https://stackoverflow.com" },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const el2 = document.getElementById(`${anchor}-section`);
    if (el2) el2.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const headerRef = useRef(null);
  const prevScrollYRef = useRef(0);
  const tickingRef = useRef(false);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    el.style.willChange = "transform";

    const onScroll = () => {
      const currentY = window.scrollY || window.pageYOffset;
      if (!tickingRef.current) {
        window.requestAnimationFrame(() => {
          const prevY = prevScrollYRef.current;
          if (currentY > prevY && currentY > 0) {
            el.style.transform = "translateY(-200px)";
          } else {
            el.style.transform = "translateY(0)";
          }
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
    <Box
      ref={headerRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={10}
      // you mentioned these are already set; including here for completeness
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      transform="translateY(0)"   // initial visible state
      bg="#18181b"
      color="white"                        // ✅ keep header on top
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack px={16} py={4} justifyContent="space-between" alignItems="center">
          <nav>
            <HStack spacing={5}>
              {socials.map((s) => (
                <Link
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}       
                  _hover={{ color: "teal.300", transform: "scale(1.1)" }}
                  transition="all 0.2s"
                >
                  <FontAwesomeIcon size="2x" icon={s.icon} boxsize={6} _hover={{ color: "teal.300" }} />
                </Link>
              ))}
            </HStack>
          </nav>

          <nav>
            <HStack spacing={8}>
              <Link onClick={handleClick("projects")}>Projects</Link>
              <Link onClick={handleClick("contactme")}>Contact me</Link>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
