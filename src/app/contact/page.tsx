export const metadata = {
    title: "Nevara - Contact Us | Software & Digital Experts",
    description: "Reach out to Nevara Solutions for expert help with software development, app design, AI automation, and digital growth strategies.",
  };
  
  import ContactSchema from "./components/ContactSchema";
  import ContactPage from "./components/Contact";
  
  export default function Contact() {
    return (
      <>
        <ContactSchema />
        <ContactPage />
      </>
    );
  }
  
  