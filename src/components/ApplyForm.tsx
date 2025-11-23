"use client";

import { useState } from "react";

export default function ApplyForm({ jobId }: { jobId: string }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

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

  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-4">
      <div>
        <label className="block mb-1 text-sm">Full Name</label>
        <input
          name="fullName"
          type="text"
          required
          className="w-full p-3 rounded-md bg-gray-200/40 dark:bg-gray-800/50 border border-white/10"
        />
      </div>

      <div>
        <label className="block mb-1 text-sm">Email</label>
        <input
          name="email"
          type="email"
          required
          className="w-full p-3 rounded-md bg-gray-200/40 dark:bg-gray-800/50 border border-white/10"
        />
      </div>

      <div>
        <label className="block mb-1 text-sm">Phone</label>
        <input
          name="phone"
          type="text"
          className="w-full p-3 rounded-md bg-gray-200/40 dark:bg-gray-800/50 border border-white/10"
        />
      </div>

      <div>
        <label className="block mb-1 text-sm">Upload CV (PDF, DOCX)</label>
        <input
          name="cv"
          type="file"
          required
          className="w-full"
          accept=".pdf,.doc,.docx"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-md font-medium"
      >
        {loading ? "Submitting..." : "Submit Application"}
      </button>

      {success && (
        <p className="text-green-500 font-semibold mt-3">
          Application submitted successfully!
        </p>
      )}
    </form>
  );
}
