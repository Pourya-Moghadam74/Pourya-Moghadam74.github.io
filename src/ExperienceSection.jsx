import Panel from "./components/ui/Panel";
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
        title={experienceSection.title}
        description={experienceSection.description}
      />

      <ol className="relative mt-10 space-y-10 border-l border-subtle pl-6 sm:pl-8 lg:mt-12">
        {featuredExperience.map((item) => (
          <li key={item.id} className="relative">
            <span
              className="absolute -left-[1.9rem] top-2 h-3 w-3 rounded-full border-2 border-accent bg-surface sm:-left-[2.4rem]"
              aria-hidden="true"
            />

            <article className="max-w-4xl border-b border-subtle pb-10">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-primary sm:text-2xl">{item.role}</h3>
                  <p className="mt-1 font-medium text-accent">{item.organization}</p>
                </div>
                <div className="shrink-0 text-sm leading-relaxed text-secondary sm:text-right">
                  <p>{formatDateRange(item.startDate, item.endDate)}</p>
                  {item.location && <p>{item.location}</p>}
                </div>
              </div>

              {item.summary && (
                <p className="mt-5 max-w-reading leading-relaxed text-secondary">{item.summary}</p>
              )}

              {item.highlights.length > 0 && (
                <ul className="mt-5 grid gap-3 text-sm leading-relaxed text-primary md:grid-cols-2">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
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
      </ol>

      <Panel as="aside" className="mt-10 max-w-4xl bg-surface-elevated p-5 shadow-none sm:p-6">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
          <div>
            <h3 className="text-lg font-semibold text-primary">Technical Teaching</h3>
            <p className="mt-1 text-sm text-secondary">
              {technicalTeaching.role} · {technicalTeaching.institution}
            </p>
          </div>
          <p className="text-sm text-muted">{technicalTeaching.period}</p>
        </div>

        <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 border-t border-subtle pt-4">
          {featuredCourses.map((course) => (
            <li key={course.id} className="text-sm text-secondary">
              {course.title}
            </li>
          ))}
        </ul>
      </Panel>
    </Section>
  );
};

export default ExperienceSection;
