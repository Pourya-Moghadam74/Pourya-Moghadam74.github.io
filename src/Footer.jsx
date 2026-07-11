import React from "react";
import { profile } from "./content/profile";

const Footer = () => {
  return (
    <footer className="border-t border-subtle bg-page py-6 text-center text-sm text-muted">
      <p>© {new Date().getFullYear()} {profile.name.split(" ")[0]} · All rights reserved</p>
    </footer>
  );
};

export default Footer;
