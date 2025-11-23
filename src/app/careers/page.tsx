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

      <div className="w-full py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-black dark:text-white leading-tight">
            Open <span className="text-gradient">Positions</span>
          </h2>

          <p className="mt-4 mb-5 text-lg md:text-xl text-center text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Explore current openings and become a part of our growing team.
          </p>


          {jobs.length === 0 && (
            <p className="text-gray-600 dark:text-gray-300 text-center">
              No positions are open right now. Please check back soon.
            </p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {jobs.map((job: any) => (
              <JobCard key={job._id} job={job} />
            ))}
          </div>
        </div>
      </div>
    </div>

  );
}
