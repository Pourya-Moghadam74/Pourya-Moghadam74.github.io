import { profile } from "./content/profile";

const Footer = () => {
  return (
    <footer className="border-t border-white/15 bg-ink py-6 text-[#8392A5]">
      <div className="mx-auto flex w-full max-w-content flex-col gap-2 px-5 font-mono text-[10px] uppercase tracking-[0.1em] sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>Machine Learning Engineer · Toronto</p>
      </div>
    </footer>
  );
};

export default Footer;
