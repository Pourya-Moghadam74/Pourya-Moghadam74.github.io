const IconLink = ({ children, label, href, external = false, className = "" }) => {
  if (!href) return null;

  return (
    <a
      href={href}
      aria-label={label}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`group relative inline-flex min-h-10 min-w-10 items-center justify-center rounded-control text-secondary transition-colors duration-fast hover:bg-surface-elevated hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus ${className}`}
    >
      {children}
      <span aria-hidden="true" className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap border border-white/20 bg-ink px-2 py-1 font-mono text-[9px] uppercase tracking-[0.08em] text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
        {label}
      </span>
    </a>
  );
};

export default IconLink;
