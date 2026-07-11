import Section from "./components/layout/Section";

const FullScreenSection = ({
  children,
  id,
  ariaLabelledby,
  className = "",
  background,
  overlay = true,
  style = {},
}) => (
  <Section
    id={id}
    ariaLabelledby={ariaLabelledby}
    className={className}
    overlay={overlay}
    style={background ? { background, ...style } : style}
  >
    {children}
  </Section>
);

export default FullScreenSection;
