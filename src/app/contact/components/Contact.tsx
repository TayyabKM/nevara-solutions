"use client";

import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { db, collection, addDoc, serverTimestamp } from "@/lib/firebase";
import { analytics } from "@/lib/firebase";
import { logEvent } from "firebase/analytics";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "../index.css";
import getUserLocation from "@/utils/getUserLocation";

export default function ContactPage() {
  return (
    <div className="relative py-32 px-6 md:px-12 lg:px-24 flex flex-col items-center">
      <div className="absolute ecclipse -top-32 -left-[150px] size-[300px]" />
      <div className="absolute ecclipse -bottom-32 right-0 sm:-right-[-5px] size-[300px]" />
      {/* Page Title */}
      <motion.div className="max-w-4xl text-center" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-4xl md:text-5xl font-bold text-lightText dark:text-darkText">
          Let’s <span className="text-gradient">Connect</span>
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">Tell us about your project. Let’s see how we can help!</p>
      </motion.div>

      {/* Contact Form & Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 max-w-5xl mx-auto items-center">
        <ContactForm />
        <ContactOptions />
      </div>
    </div>
  );
}

/* ✅ Contact Form */
function ContactForm() {
  const initialData = {
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
    freeAudit: false,
  };
  const [formData, setFormData] = useState(initialData);

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    // Name: Allow only letters
    if (name === "name" && /[^a-zA-Z\s]/.test(value)) return;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (analytics && name === "name") {
      logEvent(analytics, "contact_form_start");
      console.log("📊 G4A: Contact form interaction started.");
    }
  };

  // Handle Phone Input Change (Auto-formats the number)
  const handlePhoneChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      phone: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      freeAudit: e.target.checked,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userLocation = await getUserLocation();

      if (analytics) {
        logEvent(analytics, "contact_form_submit", { service: formData.service });
        console.log("📊 G4A: Contact form submitted.");
      }

      // Store data in Firestore
      await addDoc(collection(db, "contact_submissions"), {
        ...formData,
        timestamp: serverTimestamp(),
        location: userLocation,
      });
      console.log("📥 Form submission saved in Firestore.");

      // Send Email Notification
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, location: userLocation }),
      });

      if (!res.ok) throw new Error("Email API request failed");

      const data = await res.json();
      if (data.success) {
        alert("✅ Your message has been sent.");
      } else {
        alert("❌ There was an error. Try again.");
      }
    } catch (error) {
      console.error("🔥 Error submitting form:", error);
      alert("❌ There was an error. Please try again later.");
    } finally {
      setLoading(false);
      setFormData(initialData);
    }
  };

  /* Input Styles */
  const inputStyles =
    "form-input bg-gray-900 text-gray-200 p-3 rounded-md outline-none transition-all duration-300 border border-gray-700 focus:ring-0 focus:shadow-[0_0_12px] focus:shadow-blue-500/50 focus:bg-gradient-to-r focus:from-blue-500 focus:to-purple-500";

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 bg-gray-300/20 dark:bg-gray-800/30 backdrop-blur-md p-6 rounded-xl shadow-lg w-full"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="col-span-2 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name *" required className={`${inputStyles} w-full`} />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email *" required className={`${inputStyles} w-full`} />
      </div>

      <div className="col-span-2">
        <PhoneInput
          defaultCountry="us"
          value={formData.phone}
          onChange={handlePhoneChange}
          className="w-full h-[50px] [&>*]:!h-full"
          inputClassName="w-full h-full !bg-gray-900 !text-gray-200 p-3 rounded-md border !border-gray-700 focus:ring-0 focus:shadow-[0_0_12px] focus:shadow-blue-500/50 focus:bg-gradient-to-r focus:from-blue-500 focus:to-purple-500 !rounded-tr-md !rounded-br-md"
          countrySelectorStyleProps={{
            buttonClassName: "!h-full w-16 border !border-gray-700 !bg-gray-900 !rounded-tl-md !rounded-bl-md",
            dropdownStyleProps: {
              className: "border !border-gray-700 !bg-gray-900 !outline-none",
              listItemClassName: "hover:!bg-gray-200 hover:!text-black focus:!text-black",
            },
          }}
          style={{
            // "--react-international-phone-background-color": "#1E1E1E",
            // "--react-international-phone-text-color": "#E5E7EB",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "500",
          }}
        />
      </div>

      <div className="col-span-2">
        <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company Name" className={`${inputStyles} w-full`} />
      </div>

      <select name="service" value={formData.service} onChange={handleChange} className={`${inputStyles} col-span-2`}>
        <option value="">Select Service</option>
        <option value="web-development">Web Development</option>
        <option value="app-development">App Development</option>
        <option value="digital-marketing">Digital Marketing & Branding</option>
        <option value="saas-product">SaaS Product Development</option>
        <option value="other">Other</option>
      </select>

      <div className="flex items-center gap-3 col-span-2">
        <input
          type="checkbox"
          name="freeAudit"
          checked={formData.freeAudit}
          onChange={handleCheckboxChange}
          className="size-5 accent-blue-500 cursor-pointer"
        />
        <label className="text-gray-700 dark:text-gray-300 text-sm">I’d like a free audit for my website/app</label>
      </div>

      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your Message"
        required
        rows={4}
        className={`${inputStyles} col-span-2`}
      />

      <div className="col-span-2 flex justify-center">
        <SubmitButton loading={loading} />
      </div>
    </motion.form>
  );
}

/* ✅ Submit Button */
function SubmitButton({ loading }) {
  return (
    <motion.button
      type="submit"
      className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-all"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      disabled={loading}
    >
      {loading ? "Sending..." : "Send Message"}
    </motion.button>
  );
}
/* ✅ Contact Info (Email, LinkedIn, WhatsApp) */
function ContactOptions() {
  return (
    <motion.div
      className="flex flex-col gap-6 text-gray-700 dark:text-gray-300"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <ContactInfo icon="/icons/email.svg" label="Email" value="tayyabkamboh@nevarasolutions.com" link="mailto:tayyabkamboh@nevarasolutions.com" />
      <ContactInfo icon="/icons/linkedin.svg" label="LinkedIn" value="Connect with us" link="https://www.linkedin.com/company/nevara-solutions" />
      <ContactInfo icon="/icons/whatsapp.svg" label="WhatsApp" value="Chat with us" link="https://wa.me/923498476179" />
    </motion.div>
  );
}

/* ✅ Contact Info (Reusable Component) */
function ContactInfo({ icon, label, value, link }: { icon: string; label: string; value: string; link?: string }) {
  return (
    <motion.div
      className="flex items-center gap-4"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <Image src={icon} alt={label} width={30} height={30} className="dark:invert" />
      <Link href={link || "#"} target="_blank" className="text-sm sm:text-lg font-medium hover:underline text-gradient">
        {value}
      </Link>
    </motion.div>
  );
}
