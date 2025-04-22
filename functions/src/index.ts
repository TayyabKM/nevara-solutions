import { onDocumentCreated } from "firebase-functions/v2/firestore";
import * as functions from "firebase-functions/v2";
import { initializeApp } from "firebase-admin/app";
import * as admin from "firebase-admin";
import nodemailer from "nodemailer";

// ✅ Initialize Firebase Admin correctly for ESM
initializeApp();

// ✅ Cloud Function: Trigger on Firestore doc creation in "lead_submission"
export const onLeadCreated = onDocumentCreated("lead_submissions/{docId}", async (event) => {
  const snap = event.data;
  if (!snap) return;

  const data = snap.data();

  const emailHTML = `
    <h2>New Lead Received</h2>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Location:</strong> ${data.location || "Unknown"}</p>
  `;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: `"Nevara Solutions" <${process.env.EMAIL_USER}>`,
    to: "tayyabkamboh@nevarasolutions.com",
    subject: "📨 New Lead Submission",
    html: emailHTML,
  });

  console.log("✅ Email sent for new lead.");
});
