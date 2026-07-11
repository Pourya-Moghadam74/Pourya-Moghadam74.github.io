import Section from "./components/layout/Section";
import ProjectCaseStudy from "./ProjectCaseStudy";
import { projects, projectsSection } from "./content/projects";
import SectionHeading from "./components/ui/SectionHeading";

const ProjectsSection = () => {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <Section
      id="projects-section"
      ariaLabelledby="projects-title"
      className="bg-surface"
    >
      <SectionHeading
        id="projects-title"
        eyebrow={projectsSection.eyebrow}
        title={projectsSection.title}
        description={projectsSection.description}
      />

      <div className="mt-12 space-y-8 lg:mt-16 lg:space-y-12">
        {featuredProjects.map((project, index) => (
          <ProjectCaseStudy
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;
