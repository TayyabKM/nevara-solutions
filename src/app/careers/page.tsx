import { getJobs } from "@/lib/cms";
import CareersHero from "@/components/CareersHero";
import JobCard from "@/components/JobCard";

export const metadata = {
  metadataBase: new URL("https://www.nevarasolutions.com"),
  title: "Careers at Nevara Solutions",
  description:
    "Join Nevara Solutions — a leading software and AI development company. Apply for internships and full-time roles in development, design, marketing, and operations.",
  alternates: { canonical: "/careers" },
};

export default async function CareersPage() {
  const jobs = await getJobs();

  return (
    <div className="w-full">
      <CareersHero />

      <div className="w-full py-20 px-6 md:px-12 lg:px-24">
        <h2 className="text-3xl font-bold mb-10 text-black dark:text-white">
          Open Positions
        </h2>

        {jobs.length === 0 && (
          <p className="text-gray-600 dark:text-gray-300">
            No positions are open right now. Please check back soon.
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {jobs.map((job: any, index: number) => (
            <JobCard key={job._id} job={job} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
