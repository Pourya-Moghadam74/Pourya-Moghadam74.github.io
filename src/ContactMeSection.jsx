import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";

const ContactMeSection = () => {
  const { isLoading, response, submit } = useSubmit();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "",
      comment: "",
    },
    onSubmit: (values) => submit("https://api.example.com/contact", values),
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(20, "Name must be at most 20 characters")
        .required("Required"),
      email: Yup.string().email("Invalid Email address").required("Required"),
      type: Yup.string().oneOf(["hireMe", "openSource", "other"]).required("Required"),
      comment: Yup.string().required("Required"),
    }),
  });

  useEffect(() => {
    if (response?.type === "success") {
      formik.resetForm();
    }
  }, [response, formik]);

  const renderError = (field) =>
    formik.touched[field] && formik.errors[field] ? (
      <p className="text-xs font-semibold text-rose-300">{formik.errors[field]}</p>
    ) : null;

  return (
    <FullScreenSection
      id="contactme-section"
      className="bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-950"
      overlay={false}
    >
      <div className="grid items-start gap-10 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Get in touch
          </p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Contact me</h2>
          <p className="text-slate-300">
            Whether it&apos;s collaborating on research, building human-centered AI, or
            exploring consulting engagements—drop a note and I&apos;ll reply soon.
          </p>
          <div className="flex flex-wrap gap-3 pt-2 text-sm text-slate-200">
            <span className="rounded-full bg-white/5 px-4 py-2">Toronto, Canada</span>
            <span className="rounded-full bg-white/5 px-4 py-2">Edge AI</span>
            <span className="rounded-full bg-white/5 px-4 py-2">Computer Vision</span>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-cyan-500/15 backdrop-blur">
          <form onSubmit={formik.handleSubmit} className="space-y-4 text-slate-100">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="space-y-2 text-sm font-semibold">
                <span>Name</span>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-accent focus:outline-none"
                  {...formik.getFieldProps("firstName")}
                />
                {renderError("firstName")}
              </label>

              <label className="space-y-2 text-sm font-semibold">
                <span>Email</span>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-accent focus:outline-none"
                  {...formik.getFieldProps("email")}
                />
                {renderError("email")}
              </label>
            </div>

            {/* <label className="space-y-2 text-sm font-semibold">
              <span>Type of enquiry</span>
              <select
                id="type"
                name="type"
                className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white focus:border-accent focus:outline-none"
                value={formik.values.type}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="">Select type</option>
                <option value="hireMe">Freelance project proposal</option>
                <option value="openSource">Open source consultancy session</option>
                <option value="other">Other</option>
              </select>
              {renderError("type")}
            </label> */}

            <label className="space-y-2 text-sm font-semibold">
              <span>Your message</span>
              <textarea
                id="comment"
                name="comment"
                rows="6"
                className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-accent focus:outline-none"
                value={formik.values.comment}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {renderError("comment")}
            </label>

            <button
              type="submit"
              disabled={isLoading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-accent px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-cyan-500/20 transition hover:shadow-glow disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </FullScreenSection>
  );
};

export default ContactMeSection;
