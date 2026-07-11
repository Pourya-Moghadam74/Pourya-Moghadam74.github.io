import { createElement } from "react";

const Panel = ({ children, as = "div", className = "" }) =>
  createElement(
    as,
    { className: `rounded-panel border border-subtle bg-surface shadow-panel ${className}` },
    children,
  );

export default Panel;
