import Button from "./components/ui/Button";
import Section from "./components/layout/Section";
import { profile } from "./content/profile";
import { socialLinks } from "./content/socialLinks";

const LandingSection = () => {
  const linkedIn = socialLinks.find((link) => link.id === "linkedin");
  const github = socialLinks.find((link) => link.id === "github");
  const googleScholar = socialLinks.find((link) => link.id === "google-scholar");

  return (
    <Section id="landing-section" ariaLabelledby="hero-title" className="bg-page">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(16rem,2fr)] lg:gap-16">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-eyebrow text-accent">
            {profile.eyebrow}
          </p>

          <h1
            id="hero-title"
            className="max-w-3xl text-display-sm font-semibold text-primary sm:text-display lg:text-6xl"
          >
            <span className="block">{profile.greeting}</span>
            <span className="mt-2 block">{profile.headline}</span>
          </h1>

          <p className="mt-7 max-w-reading text-lg leading-relaxed text-secondary">
            {profile.biography}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button as="a" href="#projects-section" className="w-full sm:w-auto">
              View Projects
            </Button>
            <Button
              as="a"
              href={linkedIn?.url}
              external
              variant="secondary"
              className="w-full sm:w-auto"
            >
              Connect on LinkedIn
            </Button>
          </div>

          <ul
            className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-secondary"
            aria-label="Professional details"
          >
            {profile.credibility.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-accent" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-wrap items-center gap-1" aria-label="Additional profiles">
            <Button
              as="a"
              href={github?.url}
              external
              variant="ghost"
              className="min-h-10 px-3 py-2"
            >
              GitHub
            </Button>
            <Button
              as="a"
              href={googleScholar?.url}
              external
              variant="ghost"
              className="min-h-10 px-3 py-2"
            >
              Google Scholar
            </Button>
          </div>
        </div>

        <div className="mx-auto w-full max-w-64 sm:max-w-72 lg:justify-self-end">
          <img
            src={profile.image}
            alt={profile.imageAlt}
            width="640"
            height="640"
            className="aspect-[4/5] w-full rounded-panel border border-subtle object-cover object-top shadow-panel"
          />
        </div>
      </div>
    </Section>
  );
};

export default LandingSection;
