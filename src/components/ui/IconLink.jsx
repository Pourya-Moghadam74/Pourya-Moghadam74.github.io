const IconLink = ({ children, label, href, external = false, className = "" }) => {
  if (!href) return null;

  return (
    <a
      href={href}
      aria-label={label}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`inline-flex min-h-10 min-w-10 items-center justify-center rounded-control text-secondary transition-colors duration-fast hover:bg-surface-elevated hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus ${className}`}
    >
      {children}
    </a>
  );
};

export default IconLink;
