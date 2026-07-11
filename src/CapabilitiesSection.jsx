import SectionHeading from "./components/ui/SectionHeading";
import Section from "./components/layout/Section";
import { capabilitiesSection, capabilityGroups } from "./content/skills";

const CapabilitiesSection = () => (
  <Section
    id="capabilities-section"
    ariaLabelledby="capabilities-title"
    className="bg-page"
  >
    <SectionHeading
      id="capabilities-title"
      eyebrow={capabilitiesSection.eyebrow}
      title={capabilitiesSection.title}
      description={capabilitiesSection.description}
    />

    <ol className="mt-12 border-y border-subtle lg:mt-16">
      {capabilityGroups.map((group, index) => (
        <li key={group.id} className="grid border-b border-subtle last:border-b-0 lg:grid-cols-[7rem_18rem_minmax(0,1fr)]">
          <div className="border-b border-subtle px-5 py-5 font-mono text-xs text-accent lg:border-b-0 lg:border-r lg:px-6 lg:py-8">
            {String(index + 1).padStart(2, "0")}
          </div>
          <div className="border-b border-subtle px-5 py-5 lg:border-b-0 lg:border-r lg:px-7 lg:py-8">
            <h3 className="text-lg font-semibold text-primary">{group.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-secondary">{group.description}</p>
          </div>
          <ul className="grid gap-x-8 gap-y-3 px-5 py-6 sm:grid-cols-2 lg:px-8 lg:py-8 xl:grid-cols-3">
            {group.items.map((item) => (
              <li key={item} className="flex items-center gap-3 font-mono text-[11px] text-secondary">
                <span className="h-px w-3 shrink-0 bg-accent" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  </Section>
);

export default CapabilitiesSection;
