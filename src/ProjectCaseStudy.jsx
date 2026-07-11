import { HiArrowRight } from "react-icons/hi";
import Button from "./components/ui/Button";
import Tag from "./components/ui/Tag";

const getActions = (project) => [
  { label: "Visit Project", url: project.caseStudyUrl, variant: "primary" },
  { label: "Visit Website", url: project.liveUrl, variant: "secondary" },
  { label: "GitHub", url: project.repositoryUrl, variant: "ghost" },
  { label: "Publication", url: project.publicationUrl, variant: "ghost" },
];

const ProjectCaseStudy = ({ project, index }) => {
  const actions = getActions(project).filter((action) => action.url);
  const technologyGroups = project.technologyGroups.filter((group) => group.items.length > 0);

  return (
    <article className="group overflow-hidden border border-subtle bg-page transition-colors duration-normal hover:border-primary/35">
      <div className="grid lg:grid-cols-[9rem_minmax(0,1fr)_18rem]">
        <div className="border-b border-subtle p-5 lg:border-b-0 lg:border-r lg:p-6">
          <p className="font-mono text-xs font-semibold text-accent">{String(index + 1).padStart(2, "0")}</p>
          <p className="mt-2 font-mono text-[10px] uppercase leading-relaxed tracking-[0.1em] text-muted">{project.category}</p>
        </div>

        <div className="p-6 sm:p-8 lg:p-10">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">{project.title}</h3>
              <span className="border border-subtle bg-surface-elevated px-2 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-secondary">
                {project.status}
              </span>
            </div>
            {project.positioning && (
              <p className="mt-4 text-lg font-medium text-primary">{project.positioning}</p>
            )}
            {project.summary && (
              <p className="mt-4 max-w-reading leading-relaxed text-secondary">{project.summary}</p>
            )}
          </div>

          {project.engineeringSummary && (
            <div className="mt-7 border-t border-subtle pt-5">
              <h4 className="font-mono text-[9px] font-semibold uppercase tracking-[0.12em] text-muted">Engineering approach</h4>
              <p className="mt-3 max-w-3xl leading-relaxed text-secondary">{project.engineeringSummary}</p>
            </div>
          )}

          {technologyGroups.length > 0 && (
            <div className="mt-6 grid gap-5 border-t border-subtle pt-5 sm:grid-cols-2 xl:grid-cols-3">
              {technologyGroups.map((group) => (
                <div key={group.label}>
                  <h4 className="mb-3 font-mono text-[9px] font-semibold uppercase tracking-[0.12em] text-muted">
                    {group.label}
                  </h4>
                  <div className="flex flex-wrap gap-x-3 gap-y-2">
                    {group.items.map((technology) => (
                      <Tag key={technology}>{technology}</Tag>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-start border-t border-subtle bg-surface-elevated p-6 lg:border-l lg:border-t-0 lg:pt-10">
          {actions.length > 0 ? (
            <div className="flex w-full flex-col gap-2">
              {actions.map((action) => (
                <Button
                  key={action.label}
                  as="a"
                  href={action.url}
                  external={action.url.startsWith("http")}
                  variant={action.variant}
                  className="w-full justify-between"
                  aria-label={`${action.label} for ${project.title}`}
                >
                  {action.label}
                  <HiArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              ))}
            </div>
          ) : (
            <div className="w-full border border-dashed border-subtle px-4 py-3">
              <p className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.1em] text-muted">
                {project.actionPlaceholder || "Dedicated research case study planned"}
              </p>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCaseStudy;
