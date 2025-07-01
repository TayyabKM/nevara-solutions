export const metadata = {
  metadataBase: new URL("https://www.nevarasolutions.com"),
  title: "Nevara - Blog | Insights on Software, SaaS & Automation",
  description:
    "Explore expert tips, case studies, and industry updates on software development, SaaS, AI automation, and business growth from the Nevara team.",
  alternates: {
    canonical: "/blog",
  },
};

  
  import BlogsPage from "./components/Blogs"; 
  
  export default function Contact() {
    return <BlogsPage />;
  }
  