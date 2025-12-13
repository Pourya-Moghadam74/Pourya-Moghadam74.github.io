import React from "react";
import FullScreenSection from "./FullScreenSection";
import Card from "./Card";

import photo1 from "../images/EdgeFusion-ACT.jpg";
import photo2 from "../images/photo2.png";
import photo3 from "../images/photo3.png";
import photo4 from "../images/photo4.png";

const projects = [
  {
    title: "EdgeFusion-ACT",
    description:
      "Multimodal activity monitoring that fuses radar, vision, and smart-meter data at the edge for privacy-first independence.",
    imageSrc: photo1,
  },
  {
    title: "NILM Analyzer",
    description:
      "A modular NILM toolkit with harmonized datasets, PyTorch models, and realtime energy disaggregation dashboards.",
    imageSrc: photo2,
  },
  {
    title: "Activity Recognition Suite",
    description:
      "Video action recognition with SlowFast and I3D pipelines, tuned for multi-view datasets and rigorous cross-validation.",
    imageSrc: photo3,
  },
  {
    title: "ResearchTool.ai",
    description:
      "Aggregates Scholar, Scopus, and Semantic Scholar to auto-build impact metrics, co-author graphs, and citation analytics.",
    imageSrc: photo4,
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      id="projects-section"
      className="bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950"
      overlay={false}
    >
      <div className="mb-10 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Selected Work
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
            Featured Projects
          </h2>
        </div>
        <span className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-200 md:inline-flex">
          Edge AI · Research · Engineering
        </span>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <Card key={p.title} {...p} />
        ))}
      </div>
    </FullScreenSection>
  );
};

export default ProjectsSection;
