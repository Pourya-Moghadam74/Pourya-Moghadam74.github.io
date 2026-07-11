import React from "react";
import useAlertContext from "../hooks/useAlertContext";

const Alert = () => {
  const { isOpen, type, message, onClose } = useAlertContext();

  if (!isOpen) return null;

  const styles = {
    success: "bg-success text-page",
    error: "bg-error text-page",
    loading: "bg-warning text-page",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-8">
      <div
        role="alert"
        className="pointer-events-auto w-full max-w-md overflow-hidden rounded-panel border border-subtle bg-surface-elevated shadow-panel"
      >
        <div
          className={`px-4 py-2 text-xs font-semibold uppercase tracking-eyebrow ${styles[type] || styles.loading}`}
        >
          {type === "success" ? "All good" : type === "error" ? "Something went wrong" : "Working on it"}
        </div>
        <div className="flex items-start gap-3 px-5 py-4">
          <div className="mt-1 h-3 w-3 rounded-full bg-accent shadow shadow-accent/50" />
          <div className="flex-1 text-sm text-primary">{message}</div>
          <button
            onClick={onClose}
            className="min-h-10 rounded-control px-3 py-2 text-xs font-semibold text-secondary transition-colors hover:bg-surface hover:text-primary"
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
