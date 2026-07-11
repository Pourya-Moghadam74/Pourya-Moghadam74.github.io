import Button from "./components/ui/Button";
import Section from "./components/layout/Section";
import { profile } from "./content/profile";
import { socialLinks } from "./content/socialLinks";

const LandingSection = () => {
  const linkedIn = socialLinks.find((link) => link.id === "linkedin");
  const github = socialLinks.find((link) => link.id === "github");
  const googleScholar = socialLinks.find((link) => link.id === "google-scholar");
  const focusAreas = ["Search & ranking", "Applied AI systems", "Multimodal ML"];

  return (
    <Section
      id="landing-section"
      ariaLabelledby="hero-title"
      className="overflow-hidden border-t-0 bg-ink text-white"
      containerClassName="py-4 md:py-8"
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.65fr)_minmax(18rem,0.75fr)] lg:gap-20">
        <div>
          <div className="mb-10 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.14em] text-[#67E3EA]">
            <span>01 / Profile</span>
            <span className="h-px w-12 bg-accent" aria-hidden="true" />
            <span>{profile.eyebrow}</span>
          </div>

          <h1
            id="hero-title"
            className="max-w-5xl text-display-sm font-semibold text-white sm:text-display"
          >
            <span className="sr-only">{profile.greeting}. </span>
            {profile.headline}
          </h1>

          <p className="mt-8 max-w-reading text-lg leading-relaxed text-[#B8C3CF]">
            {profile.biography}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button as="a" href="#projects-section" className="w-full !border-accent !bg-accent !text-white hover:!bg-accent-hover hover:!text-ink sm:w-auto">
              Explore selected systems
            </Button>
            <Button
              as="a"
              href={profile.resumeUrl}
              external
              variant="secondary"
              className="w-full !border-white/35 !text-white hover:!border-[#67E3EA] hover:!text-[#67E3EA] sm:w-auto"
            >
              View résumé
            </Button>
          </div>

          <p className="mt-10 max-w-xl border-l border-accent pl-4 text-sm leading-relaxed text-[#B8C3CF]">
            {profile.descriptor}
          </p>
        </div>

        <aside className="border border-white/20 bg-white/[0.04] p-5 sm:p-6" aria-label="Professional profile">
          <div className="grid grid-cols-[5.5rem_1fr] items-center gap-4 border-b border-white/15 pb-6">
            <img
              src={profile.image}
              alt={profile.imageAlt}
              width="640"
              height="640"
              className="aspect-square w-full object-cover object-top grayscale"
            />
            <div>
              <p className="font-semibold text-white">{profile.greeting}</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.1em] text-[#67E3EA]">
                Toronto / Canada
              </p>
            </div>
          </div>

          <dl className="divide-y divide-white/15">
            <div className="grid grid-cols-[5.5rem_1fr] gap-4 py-5">
              <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#8392A5]">Affiliation</dt>
              <dd className="text-sm leading-relaxed text-white">University of Toronto</dd>
            </div>
            <div className="grid grid-cols-[5.5rem_1fr] gap-4 py-5">
              <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#8392A5]">Focus</dt>
              <dd>
                <ul className="space-y-2 text-sm text-[#CBD5DF]">
                  {focusAreas.map((area) => <li key={area}>{area}</li>)}
                </ul>
              </dd>
            </div>
          </dl>

          <div className="flex flex-wrap gap-x-5 gap-y-3 border-t border-white/15 pt-5 font-mono text-[10px] uppercase tracking-[0.1em] text-[#B8C3CF]">
            {linkedIn?.url && <a className="hover:text-[#67E3EA]" href={linkedIn.url} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>}
            {github?.url && <a className="hover:text-[#67E3EA]" href={github.url} target="_blank" rel="noopener noreferrer">GitHub ↗</a>}
            {googleScholar?.url && <a className="hover:text-[#67E3EA]" href={googleScholar.url} target="_blank" rel="noopener noreferrer">Scholar ↗</a>}
          </div>
        </aside>
      </div>
    </Section>
  );
};

export default LandingSection;
