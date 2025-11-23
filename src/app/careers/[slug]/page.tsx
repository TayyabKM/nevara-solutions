import { getJobBySlug } from "@/lib/cms";
import ApplyForm from "@/components/ApplyForm";

export default async function JobDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; 
  const job = await getJobBySlug(slug);

  if (!job) return <div className="pt-32 px-6">Job not found.</div>;

  const isOpen = job.status === "open"; 

  return (
    <div className="w-full pt-32 pb-16 px-6 md:px-12 lg:px-48">
      <h1 className="text-4xl font-bold text-black dark:text-white">
        {job.title}
      </h1>

      <p className="mt-2 text-gray-600 dark:text-gray-300">{job.location}</p>

      <p className={`mt-2 font-semibold ${isOpen ? "text-green-500" : "text-red-500"}`}>
        {job.status}
      </p>

      <div className="my-8 prose dark:prose-invert max-w-none">
        {job.description?.map((block: any) => block.children?.map((c: any) => c.text).join(""))}
      </div>

      {isOpen ? (
        <ApplyForm jobId={job._id} />
      ) : (
        <p className="text-red-500 font-semibold mt-4">
          This position is currently closed.
        </p>
      )}
    </div>
  );
}
