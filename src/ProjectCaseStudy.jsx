import { HiArrowRight } from "react-icons/hi";
import Button from "./components/ui/Button";
import Panel from "./components/ui/Panel";
import Tag from "./components/ui/Tag";

const getActions = (project) => [
  { label: "View Case Study", url: project.caseStudyUrl, variant: "primary" },
  { label: "Live Demo", url: project.liveUrl, variant: "secondary" },
  { label: "GitHub", url: project.repositoryUrl, variant: "ghost" },
  { label: "Publication", url: project.publicationUrl, variant: "ghost" },
];

const ProjectCaseStudy = ({ project, imageOnRight = false }) => {
  const actions = getActions(project).filter((action) => action.url);
  const technologyGroups = project.technologyGroups.filter((group) => group.items.length > 0);
  const hasImage = Boolean(project.image);

  return (
    <Panel
      as="article"
      className="overflow-hidden bg-surface-elevated transition duration-normal motion-safe:hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-panel"
    >
      <div
        className={
          hasImage
            ? "grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-stretch"
            : ""
        }
      >
        {hasImage && (
          <div
            className={`overflow-hidden border-b border-subtle bg-page p-4 sm:p-6 lg:flex lg:items-center lg:border-b-0 ${
              imageOnRight ? "lg:order-2 lg:border-l" : "lg:border-r"
            }`}
          >
            <img
              src={project.image}
              alt={project.imageAlt}
              width={project.imageWidth}
              height={project.imageHeight}
              loading="lazy"
              className="aspect-video h-auto w-full rounded-control border border-subtle object-cover shadow-control transition-transform duration-normal motion-safe:hover:scale-[1.01]"
            />
          </div>
        )}

        <div className={`p-6 sm:p-8 lg:p-10 ${imageOnRight && hasImage ? "lg:order-1" : ""}`}>
          <div className="max-w-reading">
            <h3 className="text-2xl font-semibold text-primary sm:text-3xl">{project.title}</h3>
            {project.positioning && (
              <p className="mt-3 font-medium text-accent">{project.positioning}</p>
            )}
            {project.summary && (
              <p className="mt-4 leading-relaxed text-secondary">{project.summary}</p>
            )}
          </div>

          {project.highlights.length > 0 && (
            <ul className="mt-6 grid gap-3 text-sm text-primary sm:grid-cols-2">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          )}

          {technologyGroups.length > 0 && (
            <div className="mt-7 space-y-4">
              {technologyGroups.map((group) => (
                <div key={group.label}>
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-eyebrow text-muted">
                    {group.label}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((technology) => (
                      <Tag key={technology} className="text-xs">
                        {technology}
                      </Tag>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {actions.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-3">
              {actions.map((action) => (
                <Button
                  key={action.label}
                  as="a"
                  href={action.url}
                  external={action.url.startsWith("http")}
                  variant={action.variant}
                  aria-label={`${action.label} for ${project.title}`}
                >
                  {action.label}
                  <HiArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </Panel>
  );
};

export default ProjectCaseStudy;
