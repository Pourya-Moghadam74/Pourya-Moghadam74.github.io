import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-slate-950/80 py-6 text-center text-sm text-slate-400 backdrop-blur">
      <p>© {new Date().getFullYear()} Pourya · All rights reserved</p>
    </footer>
  );
};

export default Footer;
