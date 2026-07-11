/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        page: "#F4F5F2",
        surface: {
          DEFAULT: "#FFFFFF",
          elevated: "#EEF1F3",
        },
        primary: "#101828",
        secondary: "#52606D",
        muted: "#718096",
        accent: {
          DEFAULT: "#007F8F",
          hover: "#006775",
        },
        signal: "#4F6BED",
        subtle: "#D8DEE6",
        focus: "#007F8F",
        success: "#15803D",
        warning: "#A16207",
        error: "#B42318",
        ink: "#0A1220",
        ocean: "#122033",
        dusk: "#0A1220",
      },
      maxWidth: {
        content: "78rem",
        reading: "46rem",
      },
      spacing: {
        "section-sm": "5rem",
        section: "8rem",
      },
      borderRadius: {
        panel: "0.375rem",
        control: "0.25rem",
      },
      boxShadow: {
        panel: "0 1px 2px rgba(16, 24, 40, 0.04), 0 12px 32px rgba(16, 24, 40, 0.06)",
        control: "0 1px 2px rgba(16, 24, 40, 0.08)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        display: ["4.5rem", { lineHeight: "0.98", letterSpacing: "-0.055em" }],
        "display-sm": ["2.75rem", { lineHeight: "1.02", letterSpacing: "-0.045em" }],
        "section-title": ["3.25rem", { lineHeight: "1.02", letterSpacing: "-0.04em" }],
      },
      lineHeight: {
        relaxed: "1.7",
      },
      letterSpacing: {
        eyebrow: "0.12em",
      },
      transitionDuration: {
        fast: "150ms",
        normal: "250ms",
      },
    },
  },
  plugins: [],
};
