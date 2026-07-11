const SectionHeading = ({
  eyebrow,
  title,
  description,
  headingLevel = 2,
  id,
  className = "",
}) => {
  const Heading = `h${headingLevel}`;

  return (
    <div className={`grid max-w-4xl gap-4 md:grid-cols-[8rem_minmax(0,1fr)] md:gap-8 ${className}`}>
      {eyebrow && (
        <p className="pt-2 font-mono text-xs font-semibold uppercase tracking-eyebrow text-accent">{eyebrow}</p>
      )}
      <div className={eyebrow ? "" : "md:col-start-2"}>
        <Heading id={id} className="text-3xl font-semibold text-primary sm:text-section-title">
          {title}
        </Heading>
        {description && <p className="mt-4 max-w-reading text-lg leading-relaxed text-secondary">{description}</p>}
      </div>
    </div>
  );
};

export default SectionHeading;
