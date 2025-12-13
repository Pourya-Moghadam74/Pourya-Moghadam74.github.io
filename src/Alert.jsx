import React from "react";
import { useAlertContext } from "../context/alertContext";

const Alert = () => {
  const { isOpen, type, message, onClose } = useAlertContext();

  if (!isOpen) return null;

  const styles = {
    success: "from-emerald-400/90 to-cyan-400/90 text-emerald-950",
    error: "from-rose-400/90 to-orange-300/90 text-rose-950",
    loading: "from-amber-300/90 to-accent/90 text-amber-950",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-8">
      <div
        role="alert"
        className="pointer-events-auto w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-slate-900/90 shadow-2xl shadow-cyan-500/20 backdrop-blur"
      >
        <div
          className={`bg-gradient-to-r px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] ${styles[type] || styles.loading}`}
        >
          {type === "success" ? "All good" : type === "error" ? "Something went wrong" : "Working on it"}
        </div>
        <div className="flex items-start gap-3 px-5 py-4">
          <div className="mt-1 h-3 w-3 rounded-full bg-accent shadow shadow-accent/50" />
          <div className="flex-1 text-sm text-slate-100">{message}</div>
          <button
            onClick={onClose}
            className="rounded-lg px-2 py-1 text-xs font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white"
            aria-label="Close alert"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
