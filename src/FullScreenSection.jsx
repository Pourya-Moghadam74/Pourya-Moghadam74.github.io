import React from "react";

const FullScreenSection = ({
  children,
  id,
  className = "",
  background,
  overlay = true,
  style = {},
}) => (
  <section
    id={id}
    className={`relative w-full py-16 md:py-24 ${className}`}
    style={background ? { background, ...style } : style}
  >
    {overlay && (
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/5 opacity-50"
        aria-hidden="true"
      />
    )}
    <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
      {children}
    </div>
  </section>
);

export default FullScreenSection;
