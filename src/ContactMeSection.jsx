import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { profile } from "./content/profile";
import { contactFocusAreas } from "./content/skills";
import Button from "./components/ui/Button";
import Panel from "./components/ui/Panel";
import SectionHeading from "./components/ui/SectionHeading";
import Tag from "./components/ui/Tag";

const ContactMeSection = () => {
  const { isLoading, response, submit } = useSubmit();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      comment: "",
    },
    onSubmit: (values) => submit("https://api.example.com/contact", values),
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(20, "Name must be at most 20 characters")
        .required("Required"),
      email: Yup.string().email("Invalid Email address").required("Required"),
      comment: Yup.string().required("Required"),
    }),
  });

  const { resetForm } = formik;

  useEffect(() => {
    if (response?.type === "success") {
      resetForm();
    }
  }, [response, resetForm]);

  const renderError = (field) =>
    formik.touched[field] && formik.errors[field] ? (
      <p id={`${field}-error`} className="text-xs font-semibold text-error">
        {formik.errors[field]}
      </p>
    ) : null;

  return (
    <FullScreenSection
      id="contactme-section"
      className="bg-surface"
      overlay={false}
    >
      <div className="grid items-start gap-10 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="space-y-4">
          <SectionHeading
            eyebrow="Get in touch"
            title="Contact me"
            description={profile.contactIntroduction}
          />
          <div className="flex flex-wrap gap-3 pt-2 text-sm text-secondary">
            <Tag>{profile.location}</Tag>
            {contactFocusAreas.map((focusArea) => (
              <Tag key={focusArea.id}>
                {focusArea.label}
              </Tag>
            ))}
          </div>
        </div>

        <Panel className="bg-surface-elevated p-6 shadow-none sm:p-7">
          <form onSubmit={formik.handleSubmit} className="space-y-4 text-primary">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="space-y-2 text-sm font-semibold">
                <span>Name</span>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  autoComplete="name"
                  aria-invalid={Boolean(formik.touched.firstName && formik.errors.firstName)}
                  aria-describedby={
                    formik.touched.firstName && formik.errors.firstName
                      ? "firstName-error"
                      : undefined
                  }
                  className="w-full rounded-control border border-subtle bg-page px-4 py-3 text-sm text-primary placeholder:text-muted focus:border-accent focus:outline-none"
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
                  autoComplete="email"
                  aria-invalid={Boolean(formik.touched.email && formik.errors.email)}
                  aria-describedby={
                    formik.touched.email && formik.errors.email ? "email-error" : undefined
                  }
                  className="w-full rounded-control border border-subtle bg-page px-4 py-3 text-sm text-primary placeholder:text-muted focus:border-accent focus:outline-none"
                  {...formik.getFieldProps("email")}
                />
                {renderError("email")}
              </label>
            </div>

            <label className="space-y-2 text-sm font-semibold">
              <span>Your message</span>
              <textarea
                id="comment"
                name="comment"
                rows="6"
                aria-invalid={Boolean(formik.touched.comment && formik.errors.comment)}
                aria-describedby={
                  formik.touched.comment && formik.errors.comment ? "comment-error" : undefined
                }
                className="w-full rounded-control border border-subtle bg-page px-4 py-3 text-sm text-primary placeholder:text-muted focus:border-accent focus:outline-none"
                value={formik.values.comment}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {renderError("comment")}
            </label>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full"
            >
              {isLoading ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </Panel>
      </div>
    </FullScreenSection>
  );
};

export default ContactMeSection;
