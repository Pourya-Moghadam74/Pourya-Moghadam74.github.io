import { HiArrowRight } from "react-icons/hi";
import FullScreenSection from "./FullScreenSection";
import { profile } from "./content/profile";
import { contactFocusAreas } from "./content/skills";
import Button from "./components/ui/Button";
import Tag from "./components/ui/Tag";
import { socialLinks } from "./content/socialLinks";

const ContactMeSection = () => {
  const linkedIn = socialLinks.find((link) => link.id === "linkedin");

  return (
    <FullScreenSection
      id="contactme-section"
      ariaLabelledby="contact-title"
      className="bg-ink text-white"
      overlay={false}
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.65fr)] lg:items-end">
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#67E3EA]">06 / Contact</p>
          <h2 id="contact-title" className="mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-6xl">
            Let’s build a machine learning system that earns trust in production.
          </h2>
          <p className="mt-6 max-w-reading text-lg leading-relaxed text-[#B8C3CF]">{profile.contactIntroduction}</p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-[#B8C3CF]">
            <Tag className="!text-[#B8C3CF]">{profile.location}</Tag>
            {contactFocusAreas.map((focusArea) => (
              <Tag key={focusArea.id} className="!text-[#B8C3CF]">
                {focusArea.label}
              </Tag>
            ))}
          </div>
        </div>

        <div className="border border-white/20 bg-white/[0.04] p-6 sm:p-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#8392A5]">Preferred channel</p>
          <a href={`mailto:${profile.email}`} className="mt-3 block break-all text-lg font-semibold text-white hover:text-[#67E3EA]">{profile.email}</a>
          <Button as="a" href={`mailto:${profile.email}`} className="mt-7 w-full !border-accent !bg-accent !text-white hover:!bg-accent-hover hover:!text-ink">
            Start a conversation <HiArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
          {linkedIn?.url && (
            <Button as="a" href={linkedIn.url} external variant="secondary" className="mt-3 w-full !border-white/30 !text-white hover:!border-[#67E3EA] hover:!text-[#67E3EA]">
              Connect on LinkedIn
            </Button>
          )}
        </div>
      </div>
    </FullScreenSection>
  );
};

export default ContactMeSection;
