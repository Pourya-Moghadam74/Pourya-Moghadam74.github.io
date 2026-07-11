import { HiArrowRight } from "react-icons/hi";
import Button from "./components/ui/Button";
import Panel from "./components/ui/Panel";
import Section from "./components/layout/Section";
import SectionHeading from "./components/ui/SectionHeading";
import { featuredResearch, researchSection, researchTopics } from "./content/research";
import { publications } from "./content/publications";
import { socialLinks } from "./content/socialLinks";
import { thesis } from "./content/thesis";

const getPublicationActions = (publication) => [
  { label: "Publication", url: publication.publicationUrl },
  { label: "PDF", url: publication.pdfUrl },
  { label: "GitHub", url: publication.githubUrl },
];

const ResearchSection = () => {
  const selectedPublications = publications.filter((publication) => publication.featured);
  const googleScholar = socialLinks.find((link) => link.id === "google-scholar");
  const thesisUrl = thesis.pdfUrl || thesis.publicationUrl;

  return (
    <Section
      id="research-section"
      ariaLabelledby="research-title"
      className="bg-page"
    >
      <SectionHeading
        id="research-title"
        title={researchSection.title}
        description={researchSection.description}
      />

      <div className="mt-10 grid gap-8 lg:mt-12 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-8">
          <Panel as="article" className="bg-surface-elevated p-6 shadow-none sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-eyebrow text-accent">
              Featured Research
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-primary">
              {featuredResearch.title}
            </h3>
            <p className="mt-4 leading-relaxed text-secondary">{featuredResearch.summary}</p>
          </Panel>

          <div>
            <h3 className="text-xl font-semibold text-primary">Key Research Themes</h3>
            <ul className="mt-5 grid gap-x-6 gap-y-5 sm:grid-cols-2">
              {researchTopics.map((topic) => (
                <li key={topic.id} className="border-t border-subtle pt-4">
                  <h4 className="font-semibold text-primary">{topic.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-secondary">
                    {topic.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <Panel as="article" className="p-6 shadow-none sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-eyebrow text-accent">
              {thesis.label}
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-primary">{thesis.title}</h3>
            <p className="mt-2 font-medium text-accent">{thesis.institution}</p>
            <p className="mt-4 leading-relaxed text-secondary">{thesis.summary}</p>

            {thesisUrl && (
              <Button
                as="a"
                href={thesisUrl}
                external={thesisUrl.startsWith("http")}
                variant="secondary"
                className="mt-6"
                aria-label={`Read thesis: ${thesis.title}`}
              >
                Read Thesis
                <HiArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            )}
          </Panel>

          {selectedPublications.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold text-primary">Selected Publications</h3>
              <ul className="mt-5 divide-y divide-subtle border-y border-subtle">
                {selectedPublications.map((publication) => {
                  const actions = getPublicationActions(publication).filter((action) => action.url);

                  return (
                    <li key={publication.id} className="py-5">
                      <article>
                        <h4 className="font-semibold text-primary">{publication.title}</h4>
                        {(publication.venue || publication.year) && (
                          <p className="mt-2 text-sm text-secondary">
                            {[publication.venue, publication.year].filter(Boolean).join(" · ")}
                          </p>
                        )}
                        {publication.authors.length > 0 && (
                          <p className="mt-2 text-sm text-muted">
                            {publication.authors.join(", ")}
                          </p>
                        )}
                        {actions.length > 0 && (
                          <div className="mt-4 flex flex-wrap gap-2">
                            {actions.map((action) => (
                              <Button
                                key={action.label}
                                as="a"
                                href={action.url}
                                external={action.url.startsWith("http")}
                                variant="ghost"
                                aria-label={`${action.label} for ${publication.title}`}
                              >
                                {action.label}
                              </Button>
                            ))}
                          </div>
                        )}
                      </article>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          {googleScholar?.url && (
            <Button as="a" href={googleScholar.url} external variant="secondary">
              View Google Scholar
              <HiArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          )}
        </div>
      </div>
    </Section>
  );
};

export default ResearchSection;
