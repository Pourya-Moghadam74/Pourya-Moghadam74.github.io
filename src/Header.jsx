import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faGoogleScholar } from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link, Drawer} from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react"
import { LuMenu } from "react-icons/lu"
import {
  Button,
  CloseButton,
  Portal,
} from "@chakra-ui/react"

const socials = [
  { label: "email", icon: faEnvelope, url: "mailto:Pourya.Moghadam@utoronto.ca" },
  { label: "github", icon: faGithub, url: "https://github.com/Pourya-Moghadam74" },
  { label: "linkedin", icon: faLinkedin, url: "https://www.linkedin.com/in/pourya-moghadam/" },
  { label: "googlescholar", icon: faGoogleScholar, url: "https://scholar.google.com/citations?user=f-NzJUcAAAAJ&hl=en" },
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
      bg="#001D3D"
      color="white"                        // ✅ keep header on top
    >
      <Box maxW="1280px" mx="auto" px={{ base: 4, md: 16 }} py={4}>
        <HStack justifyContent="space-between" alignItems="center">
          <HStack spacing={5} gap="2">
            {socials.map((s) => (
              <Link
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                _hover={{ color: "#FFC300", transform: "scale(1.1)" }}
                transition="all 0.2s"
              >
                <FontAwesomeIcon size="xl" icon={s.icon} />
              </Link>
            ))}
          </HStack>

          {/* Desktop Nav */}
          <HStack display={{ base: "none", md: "flex" }} spacing={10} fontWeight="bold">
            <Link onClick={handleClick("projects")} color="#FFC300">Projects</Link>
            <Link onClick={handleClick("contactme")} color="#FFC300">Contact Me</Link>
          </HStack>

          {/* Mobile Hamburger */}
          <Drawer.Root colorPalette='red' placement={{ mdDown: "bottom", md: "end" }} size="xs">
            <Drawer.Trigger asChild>
              <IconButton borderRadius="50px" size="xs" display={{ base: "flex", md: "none" }}>
                <LuMenu />
              </IconButton>
            </Drawer.Trigger>
            <Portal>
              <Drawer.Backdrop />
              <Drawer.Positioner>
                <Drawer.Content>
                  <Drawer.Header>
                    <Drawer.Title >Menu</Drawer.Title>
                  </Drawer.Header>
                  <Drawer.Body>
                    <HStack display={{ base: "flex", md: "none" }} spacing={10} fontWeight="bold">
                      <Link onClick={handleClick("projects")} color="#FFC300">Projects</Link>
                      <Link onClick={handleClick("contactme")} color="#FFC300">Contact Me</Link>
                    </HStack>
                  </Drawer.Body>
                  <Drawer.Footer>
                    <Drawer.ActionTrigger asChild>
                      <Button variant="outline">Cancel</Button>
                    </Drawer.ActionTrigger>
                  </Drawer.Footer>
                  <Drawer.CloseTrigger asChild>
                    <CloseButton size="sm" />
                  </Drawer.CloseTrigger>
                </Drawer.Content>
              </Drawer.Positioner>
            </Portal>
          </Drawer.Root>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
