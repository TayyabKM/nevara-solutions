import { defineField, defineType } from "sanity";

export default defineType({
  name: "jobApplication",
  title: "Job Applications",
  type: "document",
  fields: [
    defineField({
      name: "fullName",
      title: "Full Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
    }),
    defineField({
      name: "cv",
      title: "CV / Resume",
      type: "file",
      options: { storeOriginalFilename: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "job",
      title: "Applied For",
      type: "reference",
      to: [{ type: "job" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "submittedAt",
      title: "Submitted At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],
});
