const Tag = ({ children, className = "" }) => (
  <span
    className={`inline-flex items-center border-l-2 border-accent bg-transparent py-0.5 pl-2 pr-1 font-mono text-xs text-secondary ${className}`}
  >
    {children}
  </span>
);

export default Tag;
