import { HiArrowRight } from "react-icons/hi";
import Button from "./components/ui/Button";
import Section from "./components/layout/Section";
import SectionHeading from "./components/ui/SectionHeading";
import { researchSection } from "./content/research";
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
        eyebrow={researchSection.eyebrow}
        title={researchSection.title}
        description={researchSection.description}
      />

      <div className="mt-12 grid border-y border-subtle lg:mt-16 lg:grid-cols-[minmax(18rem,0.7fr)_minmax(0,1.3fr)]">
        <article className="bg-surface-elevated p-7 sm:p-10 lg:border-r lg:border-subtle">
          <div className="border-l-2 border-accent pl-5">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-accent">
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
          </div>
        </article>

        <div className="border-t border-subtle p-7 sm:p-10 lg:border-t-0">
          {selectedPublications.length > 0 && (
            <div>
              <h3 className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-muted">Selected publications</h3>
              <ol className="mt-5 divide-y divide-subtle border-y border-subtle">
                {selectedPublications.map((publication, index) => {
                  const actions = getPublicationActions(publication).filter((action) => action.url);

                  return (
                    <li key={publication.id} className="grid grid-cols-[2rem_1fr] gap-3 py-5">
                      <span className="font-mono text-[9px] text-accent">{String(index + 1).padStart(2, "0")}</span>
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
              </ol>
            </div>
          )}

          {googleScholar?.url && (
            <Button as="a" href={googleScholar.url} external variant="secondary" className="mt-8">
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
