import Section from "./components/layout/Section";
import SectionHeading from "./components/ui/SectionHeading";
import Tag from "./components/ui/Tag";
import { experience, experienceSection } from "./content/experience";
import { teaching } from "./content/teaching";

const formatDateRange = (startDate, endDate) =>
  endDate ? `${startDate} – ${endDate}` : startDate;

const ExperienceSection = () => {
  const featuredExperience = experience.filter((role) => role.featured);
  const technicalTeaching = teaching[0];
  const featuredCourses = technicalTeaching.courses.filter((course) => course.featured);

  return (
    <Section
      id="experience-section"
      ariaLabelledby="experience-title"
      className="bg-surface"
    >
      <SectionHeading
        id="experience-title"
        eyebrow={experienceSection.eyebrow}
        title={experienceSection.title}
        description={experienceSection.description}
      />

      <ol className="mt-12 border-y border-subtle lg:mt-16">
        {featuredExperience.map((item, index) => (
          <li key={item.id} className="grid border-b border-subtle last:border-b-0 lg:grid-cols-[11rem_minmax(0,1fr)]">
            <div className="border-b border-subtle bg-surface-elevated p-5 lg:border-b-0 lg:border-r lg:p-7">
              <p className="font-mono text-xs font-semibold text-accent">{String(index + 1).padStart(2, "0")}</p>
              <p className="mt-4 font-mono text-[10px] uppercase leading-relaxed tracking-[0.1em] text-secondary">{formatDateRange(item.startDate, item.endDate)}</p>
              {item.location && <p className="mt-2 font-mono text-[10px] text-muted">{item.location}</p>}
            </div>

            <article className="p-6 sm:p-8 lg:p-10">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent">{item.organization}</p>
                <h3 className="mt-3 text-2xl font-semibold text-primary sm:text-3xl">{item.role}</h3>
              </div>

              {item.summary && (
                <p className="mt-5 max-w-reading leading-relaxed text-secondary">{item.summary}</p>
              )}

              {item.highlights.length > 0 && (
                <ul className="mt-5 grid gap-3 text-sm leading-relaxed text-primary md:grid-cols-2">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-2 h-px w-4 shrink-0 bg-accent" aria-hidden="true" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              )}

              {item.technologies.length > 0 && (
                <ul className="mt-5 flex flex-wrap gap-2" aria-label={`Capabilities used at ${item.organization}`}>
                  {item.technologies.map((technology) => (
                    <li key={technology}>
                      <Tag className="text-xs">{technology}</Tag>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          </li>
        ))}
        <li className="grid lg:grid-cols-[11rem_minmax(0,1fr)]">
          <div className="border-b border-subtle bg-surface-elevated p-5 lg:border-b-0 lg:border-r lg:p-7">
            <p className="font-mono text-xs font-semibold text-accent">
              {String(featuredExperience.length + 1).padStart(2, "0")}
            </p>
            <p className="mt-4 font-mono text-[10px] uppercase leading-relaxed tracking-[0.1em] text-secondary">
              {technicalTeaching.period}
            </p>
            <p className="mt-2 font-mono text-[10px] text-muted">Toronto, Canada</p>
          </div>

          <article className="p-6 sm:p-8 lg:p-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent">
              {technicalTeaching.institution}
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-primary sm:text-3xl">
              Technical Teaching
            </h3>
            <p className="mt-5 max-w-reading leading-relaxed text-secondary">
              {technicalTeaching.role} across machine learning, artificial intelligence, software engineering, algorithms, and data analytics.
            </p>

            <ul className="mt-5 grid gap-3 text-sm leading-relaxed text-primary md:grid-cols-2">
              {featuredCourses.map((course) => (
                <li key={course.id} className="flex gap-3">
                  <span className="mt-2 h-px w-4 shrink-0 bg-accent" aria-hidden="true" />
                  {course.title}
                </li>
              ))}
            </ul>
          </article>
        </li>
      </ol>
    </Section>
  );
};

export default ExperienceSection;
