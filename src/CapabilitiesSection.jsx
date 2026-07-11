import Panel from "./components/ui/Panel";
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

    <div className="mt-10 grid items-start gap-5 md:grid-cols-2 xl:grid-cols-3">
      {capabilityGroups.map((group) => (
        <Panel key={group.id} as="article" className="bg-surface-elevated p-5 shadow-none sm:p-6">
          <h3 className="text-lg font-semibold text-primary">{group.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-secondary">{group.description}</p>

          <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-subtle pt-4">
            {group.items.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-secondary">
                <span className="h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </Panel>
      ))}
    </div>
  </Section>
);

export default CapabilitiesSection;
