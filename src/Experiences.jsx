import React from "react";
import { FaBriefcase, FaChalkboardTeacher, FaGraduationCap } from "react-icons/fa";
import FullScreenSection from "./FullScreenSection";

const sections = [
  {
    title: "Education",
    entries: [
      {
        place: "University of Toronto, Canada",
        period: "Since 2023",
        detail: "Ph.D., Biomedical Engineering",
      },
      {
        place: "Amirkabir University of Technology, Iran",
        period: "2019 - 2022",
        detail: "M.Sc., Industrial Engineering",
      },
      {
        place: "Amirkabir University of Technology, Iran",
        period: "2014 - 2018",
        detail: "B.Sc., Industrial Engineering",
      },
    ],
  },
  {
    title: "Work Experience",
    entries: [
      {
        place: "Artificial Intelligence Specialist @ Masterly Inc, Toronto",
        period: "Jan 2024 - April 2025",
        detail:
          "Developing production-grade large language model solutions, connecting AI systems to business-critical workflows.",
      },
      {
        place: "Senior Data Analyst @ Digikala Group, Tehran",
        period: "2018 - 2023",
        detail:
          "Designed databases, ETL, dashboards, and forecasting models with Python and T-SQL to surface insights for leadership.",
      },
    ],
  },
  {
    title: "Teaching",
    entries: [
      {
        place: "University of Toronto - Teaching Assistant",
        period: "Multiple courses",
        bullets: [
          "CSC263 Data Structures and Analysis",
          "CSC301 Introduction to Software Engineering",
          "CSC309 Programming on the web",
          "CSC311 Introduction to Machine Learning",
          "CSC358 Computer Networks",
          "CSC373 Algorithm Desgins and Analysis",
          "CSC384 Introduction to AI",
          "CSC490 Capstone Design Project",
          "MIE1512 Data Analytics",
          "MIE367 Cases in Operations Research"
        ],
      },
    ],
  },
];

const sectionIcons = {
  Education: <FaGraduationCap className="text-lg" />,
  "Work Experience": <FaBriefcase className="text-lg" />,
  Teaching: <FaChalkboardTeacher className="text-lg" />,
};

const Experience = () => (
  <FullScreenSection
    id="experience-section"
    className="bg-gradient-to-b from-slate-950/80 via-slate-900/40 to-slate-950"
    overlay={false}
  >
    <div className="flex flex-col gap-12">
      <div className="max-w-3xl space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Journey
        </p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Experience & Impact</h2>
        <p className="text-slate-300">
          A mix of research, engineering, and teaching focused on dependable AI systems that
          serve real people.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {sections.map((section) => (
          <div
            key={section.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-cyan-500/10 backdrop-blur"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/20 text-xl text-accent shadow shadow-accent/30">
                {sectionIcons[section.title] || <span className="translate-y-[1px]">.</span>}
              </div>
              <h3 className="text-xl font-semibold text-white">{section.title}</h3>
            </div>
            <div className="flex flex-col gap-5">
              {section.entries.map((entry, idx) => (
                <div key={idx} className="relative border-l border-white/10 pl-4">
                  <div className="absolute -left-[9px] top-1.5 h-3 w-3 rounded-full bg-accent shadow shadow-accent/40" />
                  <p className="text-sm font-semibold text-white">{entry.place}</p>
                  <p className="text-xs uppercase tracking-[0.18em] text-accent/80">
                    {entry.period}
                  </p>
                  {entry.detail && (
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">{entry.detail}</p>
                  )}
                  {entry.bullets && (
                    <ul className="mt-2 space-y-2 text-sm leading-relaxed text-slate-200">
                      {entry.bullets.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-1 h-2 w-2 rounded-full bg-accent/70" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </FullScreenSection>
);

export default Experience;
