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

      <div className="mt-10 space-y-8 lg:mt-12 lg:space-y-10">
        {featuredProjects.map((project, index) => (
          <ProjectCaseStudy
            key={project.id}
            project={project}
            imageOnRight={index % 2 === 1}
          />
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;
