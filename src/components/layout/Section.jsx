import PageContainer from "./PageContainer";

const Section = ({
  children,
  id,
  ariaLabelledby,
  className = "",
  containerClassName = "",
  overlay = false,
  style,
}) => (
  <section
    id={id}
    aria-labelledby={ariaLabelledby}
    className={`relative isolate w-full border-t border-subtle/80 py-section-sm md:py-section ${className}`}
    style={style}
  >
    {overlay && (
      <div
        className="pointer-events-none absolute inset-0 bg-white/[0.02]"
        aria-hidden="true"
      />
    )}
    <PageContainer className={`relative ${containerClassName}`}>{children}</PageContainer>
  </section>
);

export default Section;
