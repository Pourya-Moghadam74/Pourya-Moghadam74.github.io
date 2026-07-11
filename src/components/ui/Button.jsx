const variants = {
  primary: "border border-ink bg-ink text-white shadow-control hover:border-accent hover:bg-accent active:bg-accent-hover",
  secondary:
    "border border-primary/30 bg-transparent text-primary hover:border-accent hover:text-accent",
  ghost: "text-secondary hover:bg-primary/[0.05] hover:text-primary",
};

const Button = ({
  children,
  as = "button",
  variant = "primary",
  className = "",
  disabled = false,
  external = false,
  href,
  ...props
}) => {
  const classes = `inline-flex min-h-11 items-center justify-center gap-2 rounded-control px-5 py-3 font-mono text-xs font-semibold uppercase tracking-[0.08em] transition duration-fast motion-safe:active:translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${className}`;

  if (as === "a") {
    if (!href) return null;

    return (
      <a
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;
