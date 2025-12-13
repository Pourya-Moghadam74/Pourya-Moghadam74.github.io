import React from "react";
import { HiArrowRight } from "react-icons/hi";
import { useAlertContext } from "../context/alertContext";

export default function Card({ title, description, imageSrc }) {
  const { onOpen } = useAlertContext();

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 shadow-xl shadow-cyan-500/10 backdrop-blur">
      <div className="relative h-52 overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
      </div>
      <div className="flex h-full flex-col gap-4 p-6">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="text-sm leading-relaxed text-slate-300">{description}</p>
        </div>
        <button
          onClick={() => onOpen("error", "This project page is not available yet.")}
          className="group/cta inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:translate-x-1"
        >
          See more
          <HiArrowRight className="h-4 w-4 transition group-hover/cta:translate-x-1" />
        </button>
      </div>
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute -inset-10 bg-gradient-to-br from-cyan-400/10 via-accent/10 to-rose-400/10 blur-3xl" />
      </div>
    </article>
  );
}
