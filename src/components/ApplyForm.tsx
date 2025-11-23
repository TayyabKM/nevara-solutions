"use client";

import { useState } from "react";




export default function ApplyForm({ jobId }: { jobId: string }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);


  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    formData.append("jobId", jobId);

    const res = await fetch("/api/apply", {
      method: "POST",
      body: formData,
    });

    setLoading(false);
    if (res.ok) setSuccess(true);

  }

  /* Reusable Input Styles */
  const inputStyles =
    "w-full bg-gray-900 text-gray-200 p-3 rounded-md outline-none transition-all duration-300 border border-gray-700 " +
    "focus:shadow-[0_0_12px] focus:shadow-blue-500/50 focus:bg-gradient-to-r focus:from-blue-500 focus:to-purple-500";

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 space-y-6 bg-gray-300/20 dark:bg-gray-800/30 backdrop-blur-md 
                 p-8 rounded-xl shadow-lg max-w-2xl mx-auto"
    >
      {/* Full Name */}
      <input
        name="fullName"
        type="text"
        required
        placeholder="Full Name *"
        className={inputStyles}
      />

      {/* Email */}
      <input
        name="email"
        type="email"
        required
        placeholder="Email *"
        className={inputStyles}
      />

      {/* Phone */}
      <input
        name="phone"
        type="text"
        placeholder="Phone"
        className={inputStyles}
      />

{/* CV Upload */}
<div className="flex flex-col gap-2">
  <label className="text-sm text-gray-400">Upload CV *</label>

  {/* Custom Upload Button */}
  <label
    htmlFor="cvUpload"
    className="cursor-pointer px-4 py-3 bg-gray-900 text-gray-200 
               border border-gray-700 rounded-md text-center 
               transition-all hover:bg-gray-700 hover:border-gray-500"
  >
    {selectedFile ? "Change File" : "Select CV (PDF / DOCX)"}
  </label>

  {/* Hidden Input - real file input */}
  <input
    id="cvUpload"
    name="cv"
    type="file"
    required
    accept=".pdf,.doc,.docx"
    className="hidden"
    onChange={(e) => {
      const file = e.target.files?.[0];
      setSelectedFile(file || null);
    }}
  />

  {/* File name preview */}
  {selectedFile && (
    <p className="text-xs text-gray-400 mt-1">
      Selected: <span className="font-medium text-white">{selectedFile.name}</span>
    </p>
  )}
</div>


      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 text-white bg-gradient-to-r from-blue-500 to-purple-500 
                   rounded-lg font-medium hover:opacity-90 transition-all"
      >
        {loading ? "Submitting..." : "Submit Application"}
      </button>

      {success && (
        <p className="text-green-500 font-semibold text-center">
          Application submitted successfully!
        </p>
      )}
    </form>
  );
}
