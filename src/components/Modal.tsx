"use client";

import { addDoc, analytics, collection, db, logEvent, serverTimestamp } from "@/lib/firebase";
import getUserLocation from "@/utils/getUserLocation";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Modal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [email, emailSet] = useState("");
  const [loading, loadingSet] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const modalContent = document.getElementById("modal-content");
      if (modalContent && !modalContent.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    loadingSet(true);
    try {
      const userLocation = await getUserLocation();

      if (analytics) {
        logEvent(analytics, "lead_form_submit");
        console.log("📊 G4A: Lead form submitted.");
      }

      // 1. Save to Firestore
      await addDoc(collection(db, "lead_submissions"), {
        email,
        timestamp: serverTimestamp(),
        location: userLocation,
      });
      console.log("📥 Lead saved in Firestore.");

      // 2. Send email via API
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, location: userLocation }),
      });

      if (!res.ok) throw new Error("Email API request failed");
      const data = await res.json();

      if (data.success) {
        alert("✅ Your lead has been submitted.");
      } else {
        alert("❌ There was an error. Try again.");
      }
    } catch (error) {
      console.error("🔥 Error submitting lead form:", (error as Error).message);
      alert("❌ There was an error. Please try again later.");
    } finally {
      loadingSet(false);
      emailSet("");
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black/60 backdrop-blur-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.form
            onSubmit={handleSubmit}
            id="modal-content"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative bg-gray-900/85 dark:bg-gray-900/90 backdrop-blur-lg p-6 md:p-8 rounded-xl shadow-2xl w-[90%] max-w-lg text-center text-white"
          >
            {/* Close Button */}
            <button onClick={onClose} className="absolute top-4 right-4 text-white hover:text-gray-400 text-xl">
              ✖
            </button>

            {/* Modal Content */}
            <h2 className="text-2xl font-bold">
              Let&apos;s <span className="text-gradient">Connect!</span>
            </h2>
            <p className="mt-2 text-gray-300">Give us your email, and we will get in touch with you right away.</p>

            {/* Email Input */}
            <input
              type="email"
              value={email}
              onChange={(e) => emailSet(e.target.value)}
              required
              placeholder="Enter your email"
              className="w-full p-3 mt-4 text-gray-900 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-lg hover:opacity-90 transition-all duration-300"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </motion.form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
