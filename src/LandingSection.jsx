import React from "react";
import FullScreenSection from "./FullScreenSection";
import myPhoto from "../images/myPhoto.png";

const LandingSection = () => (
  <FullScreenSection
    id="landing-section"
    className="min-h-screen bg-gradient-to-br from-slate-900/60 via-slate-900/20 to-slate-950"
    overlay={false}
  >
    <div className="grid items-center gap-10 lg:grid-cols-[1.2fr,0.8fr]">
      <div className="space-y-5">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent ring-1 ring-white/10">
          PhD Researcher · Multimodal AI
        </span>
        <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
          Hi, I&apos;m Pourya — I build intelligent, privacy-first systems for
          human-centered sensing.
        </h1>
        <p className="text-lg leading-relaxed text-slate-300">
          I&apos;m a PhD researcher at the University of Toronto exploring
          multimodal Activity of Daily Living monitoring with radar, vision, and
          smart meter data. I design edge-friendly, privacy-preserving pipelines
          that help seniors live independently without sacrificing dignity.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          {["Radar & Vision Fusion", "Edge AI", "Human Activity Recognition", "Responsible ML"].map(
            (tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100 shadow-sm shadow-cyan-500/10"
              >
                {tag}
              </span>
            )
          )}
        </div>
      </div>

      <div className="relative mx-auto w-56 sm:w-72">
        <div
          className="absolute -inset-4 rotate-6 rounded-full bg-gradient-to-br from-cyan-400/25 via-accent/30 to-rose-400/25 blur-2xl"
          aria-hidden="true"
        />
        <img
          src={myPhoto}
          alt="Pourya Moghadam"
          className="relative z-10 h-56 w-56 rounded-3xl border border-white/10 object-cover shadow-2xl shadow-cyan-500/20 sm:h-72 sm:w-72"
        />
        <div className="absolute -bottom-6 left-1/2 z-0 h-28 w-28 -translate-x-1/2 rounded-full bg-accent/20 blur-3xl" />
      </div>
    </div>
  </FullScreenSection>
);

export default LandingSection;
