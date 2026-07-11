import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import Button from "./components/ui/Button";
import PageContainer from "./components/layout/PageContainer";
import { profile } from "./content/profile";

const contributions = [
  {
    number: "01",
    title: "EFACT",
    label: "RGB-D reference model",
    description:
      "A lightweight RGB-D architecture that uses cross-modal attention and temporal modeling for fine-grained activity recognition. Quantization-aware optimization made it a high-performance reference point for the privacy-preserving systems that followed.",
  },
  {
    number: "02",
    title: "EdgeTCNformer",
    label: "Electricity as activity context",
    description:
      "A temporal-convolution and Transformer model that estimates appliance-level electricity usage from aggregate smart-meter signals. Its multi-task, edge-oriented design turns energy consumption into contextual evidence about daily activity.",
  },
  {
    number: "03",
    title: "HomeSense-ADL",
    label: "Multimodal smart-home dataset",
    description:
      "A synchronized dataset spanning mmWave radar, electricity consumption, RGB video, and depth imagery. Scripted activities and free-living behavior provide a common benchmark for studying accuracy, privacy, and generalization.",
  },
  {
    number: "04",
    title: "Radar representation learning",
    label: "Non-visual motion understanding",
    description:
      "Structural locality and spatial sensor-awareness improve representation learning from sparse radar point clouds. Radar captures motion without recording identifiable visual imagery inside the home.",
  },
  {
    number: "05",
    title: "E2R-FuseNet",
    label: "Asymmetric multimodal fusion",
    description:
      "The thesis’s primary system combines radar motion with appliance-use context through cross-modal attention, reliability-aware fusion, and feature-wise modulation. It removes the need for continuous video during inference while retaining a deployment-oriented architecture.",
  },
];

const ThesisFigure = ({ src, alt, caption, className = "" }) => (
  <figure className={`border border-subtle bg-white p-3 sm:p-5 ${className}`}>
    <img src={src} alt={alt} loading="lazy" className="h-auto w-full" />
    <figcaption className="mt-4 border-t border-subtle pt-3 font-mono text-[10px] uppercase leading-relaxed tracking-[0.08em] text-muted">
      {caption}
    </figcaption>
  </figure>
);

const ThesisProjectPage = () => (
  <div className="min-h-screen bg-page text-primary">
    <header className="border-b border-white/15 bg-ink text-white">
      <PageContainer className="flex min-h-[4.5rem] items-center justify-between gap-6">
        <a href="/#projects-section" className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-[#B8C3CF] hover:text-[#67E3EA]">
          <HiArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to portfolio
        </a>
        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#8392A5]">Doctoral research / 2026</span>
      </PageContainer>
    </header>

    <main>
      <section className="bg-ink py-20 text-white sm:py-28">
        <PageContainer>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#67E3EA]">Completed PhD project · University of Toronto</p>
          <h1 className="mt-7 max-w-5xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
            Multimodal AI Systems for Privacy-Preserving Activity of Daily Living Monitoring in Smart Homes
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-[#B8C3CF]">
            A complete machine learning pipeline—from multimodal dataset creation to lightweight sensor fusion—for monitoring daily living without continuous video recording.
          </p>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-mono text-[10px] uppercase tracking-[0.1em] text-[#8392A5]">
            <span>Machine learning</span><span>Multimodal sensing</span><span>Edge AI</span><span>Smart healthcare</span>
          </div>
        </PageContainer>
      </section>

      <section className="py-section-sm md:py-section">
        <PageContainer>
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-accent">01 / Motivation</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">Useful monitoring without pervasive surveillance.</h2>
              <p className="mt-6 leading-relaxed text-secondary">
                Long-term ADL monitoring can help older adults live independently and give clinicians objective information about changes in functional ability. Cameras offer rich signals but compromise privacy, wearables depend on compliance, and isolated ambient sensors often lack context.
              </p>
              <p className="mt-4 leading-relaxed text-secondary">
                This research combines complementary sensing modalities to balance recognition quality, privacy, computational efficiency, and real-world edge deployment.
              </p>
            </div>
            <ThesisFigure
              src="/thesis-figures/adl-taxonomy.webp"
              alt="Taxonomy comparing ambient, wearable, and fusion-based activity monitoring systems"
              caption="ADL sensing approaches and the tradeoffs that motivate privacy-preserving multimodal fusion"
            />
          </div>
        </PageContainer>
      </section>

      <section className="border-y border-subtle bg-surface py-section-sm md:py-section">
        <PageContainer>
          <div className="max-w-3xl">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-accent">02 / Research environment</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">A smart-home testbed built around synchronized sensing.</h2>
            <p className="mt-6 leading-relaxed text-secondary">
              HomeSense-ADL brings radar, electricity, RGB, and depth streams into one synchronized environment. It supports both controlled activity protocols and natural free-living behavior, enabling consistent comparison across sensing choices.
            </p>
          </div>
          <ThesisFigure
            src="/thesis-figures/homelab-layout.webp"
            alt="HomeLab rooms and sensing coverage used for multimodal activity data collection"
            caption="HomeLab sensing layout and coverage used to collect the HomeSense-ADL dataset"
            className="mt-10"
          />
        </PageContainer>
      </section>

      <section className="py-section-sm md:py-section">
        <PageContainer>
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-accent">03 / Contributions</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">Five connected systems, one privacy-first research program.</h2>
          <ol className="mt-12 border-y border-subtle">
            {contributions.map((item) => (
              <li key={item.number} className="grid border-b border-subtle last:border-b-0 md:grid-cols-[5rem_18rem_minmax(0,1fr)]">
                <span className="border-b border-subtle p-5 font-mono text-xs text-accent md:border-b-0 md:border-r">{item.number}</span>
                <div className="border-b border-subtle p-5 md:border-b-0 md:border-r">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.1em] text-muted">{item.label}</p>
                </div>
                <p className="p-5 leading-relaxed text-secondary md:p-7">{item.description}</p>
              </li>
            ))}
          </ol>
        </PageContainer>
      </section>

      <section className="border-y border-subtle bg-surface py-section-sm md:py-section">
        <PageContainer>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-accent">04 / Reference systems</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">Learning across vision and electricity.</h2>
              <p className="mt-5 leading-relaxed text-secondary">EFACT established the RGB-D reference architecture, while EdgeTCNformer extracted appliance-level context from aggregate electricity measurements.</p>
            </div>
            <div className="grid gap-6">
              <ThesisFigure src="/thesis-figures/efact-architecture.webp" alt="EFACT cross-modal RGB-D activity recognition architecture" caption="EFACT — cross-modal RGB-D temporal architecture" />
              <ThesisFigure src="/thesis-figures/edgetcnformer-architecture.webp" alt="EdgeTCNformer non-intrusive load monitoring architecture" caption="EdgeTCNformer — appliance-level context from aggregate electricity" />
            </div>
          </div>
        </PageContainer>
      </section>

      <section className="py-section-sm md:py-section">
        <PageContainer>
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-accent">05 / Primary system</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">E2R-FuseNet</h2>
              <p className="mt-6 leading-relaxed text-secondary">
                E2R-FuseNet fuses motion information from mmWave radar with appliance-use context from electricity signals. Cross-modal attention, reliability-aware fusion, and feature-wise modulation let each modality contribute according to its role and signal quality.
              </p>
              <p className="mt-4 leading-relaxed text-secondary">
                The resulting inference pipeline eliminates continuous video recording and is designed around the efficiency constraints of in-home edge deployment.
              </p>
            </div>
            <ThesisFigure src="/thesis-figures/e2r-fusenet-architecture.webp" alt="E2R-FuseNet architecture combining radar and electricity signals" caption="E2R-FuseNet — asymmetric fusion of radar motion and electricity context" />
          </div>
        </PageContainer>
      </section>

      <section className="bg-ink py-20 text-white sm:py-28">
        <PageContainer>
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-[#67E3EA]">Research impact</p>
          <h2 className="mt-5 max-w-4xl text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl">
            Privacy-preserving sensing can support intelligent healthcare without turning the home into a continuously recorded space.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#B8C3CF]">
            The thesis connects dataset design, representation learning, model efficiency, and multimodal fusion into a deployable research direction for aging in place and functional-independence monitoring.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button as="a" href={`mailto:${profile.email}`} className="!border-accent !bg-accent !text-white hover:!bg-accent-hover hover:!text-ink">
              Discuss this research <HiArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button as="a" href="/#projects-section" variant="secondary" className="!border-white/30 !text-white hover:!border-[#67E3EA] hover:!text-[#67E3EA]">
              Back to selected systems
            </Button>
          </div>
        </PageContainer>
      </section>
    </main>
  </div>
);

export default ThesisProjectPage;
