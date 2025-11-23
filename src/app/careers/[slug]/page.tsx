import { getJobBySlug } from "@/lib/cms";
import ApplyForm from "@/components/ApplyForm";
import { PortableText } from "@portabletext/react";

export default async function JobDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = await getJobBySlug(slug);

  if (!job)
    return <div className="pt-32 px-6">Job not found.</div>;

  const isOpen =
    job.status?.toLowerCase() === "open";

  const components = {
    list: {
      bullet: ({ children }: any) => (
        <ul className="list-disc pl-6 space-y-2">
          {children}
        </ul>
      ),
      number: ({ children }: any) => (
        <ol className="list-decimal pl-6 space-y-2">
          {children}
        </ol>
      ),
    },
    block: {
      normal: ({ children }: any) => (
        <p className="leading-relaxed mb-4">
          {children}
        </p>
      ),
    },
  };

  return (
    <div className="w-full pt-32 pb-16 px-6 md:px-12 lg:px-48">
      {/* Title */}
      <h1 className="text-4xl font-bold text-black dark:text-white">
        {job.title}
      </h1>

      {/* Pills */}
      <div className="flex gap-3 mt-4 flex-wrap">
        <span className="px-4 py-1 rounded-full bg-gray-900/30 text-gray-200 text-sm">
          {job.location?.toLowerCase()}
        </span>

        <span className="px-4 py-1 rounded-full bg-gray-900/30 text-gray-200 text-sm">
          {job.type?.toLowerCase()}
        </span>

        <span
          className={`px-4 py-1 rounded-full text-sm border ${
            isOpen
              ? "bg-green-500/20 text-green-400 border-green-500/40"
              : "bg-red-500/20 text-red-400 border-red-500/40"
          }`}
        >
          {job.status?.toLowerCase()}
        </span>
      </div>

      {/* Description Section */}
      <h2 className="text-2xl font-bold mt-12 mb-4 text-black dark:text-white">
        Job Description
      </h2>
      <div className="prose dark:prose-invert max-w-none">
        <PortableText
          value={job.description}
          components={components}
        />
      </div>

      {/* Requirements */}
      {job.requirements && (
        <>
          <h2 className="text-2xl font-bold mt-12 mb-4 text-black dark:text-white">
            Requirements
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <PortableText
              value={job.requirements}
              components={components}
            />
          </div>
        </>
      )}

      {/* Responsibilities */}
      {job.responsibilities && (
        <>
          <h2 className="text-2xl font-bold mt-12 mb-4 text-black dark:text-white">
            Responsibilities
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <PortableText
              value={job.responsibilities}
              components={components}
            />
          </div>
        </>
      )}

      {/* Apply Form */}
      <div className="mt-12">
        {isOpen ? (
          <ApplyForm jobId={job._id} />
        ) : (
          <p className="text-red-500 font-semibold mt-4">
            This position is currently closed.
          </p>
        )}
      </div>
    </div>
  );
}
