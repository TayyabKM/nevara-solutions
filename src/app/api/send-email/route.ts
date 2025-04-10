// app/api/contact/route.ts (assuming you're using Next.js 13+ with app directory)

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, company, service, message, freeAudit, location } = body;

    // 1. Validation
    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: "Missing required fields." }, { status: 400 });
    }

    // 2. Create Nodemailer Transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASSWORD,
      },
    });

    // 3. Compose Email HTML
    const emailHTML = `
      <h2>New Contact Form Submission</h2>
      <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse;">
        <tr><th>Name</th><td>${name}</td></tr>
        <tr><th>Email</th><td>${email}</td></tr>
        <tr><th>Phone</th><td>${phone || "N/A"}</td></tr>
        <tr><th>Company</th><td>${company || "N/A"}</td></tr>
        <tr><th>Service</th><td>${service || "N/A"}</td></tr>
        <tr><th>Message</th><td>${message}</td></tr>
        <tr><th>Free Audit</th><td>${freeAudit ? "Yes" : "No"}</td></tr>
        <tr><th>Location</th><td>${location || "Unknown"}</td></tr>
      </table>
    `;

    // 4. Send the Email
    const mailOptions = {
      from: `"Nevara Solutions" <${process.env.EMAIL_USER}>`,
      to: "anakindabir@gmail.com",
      subject: "📩 New Contact Form Submission",
      html: emailHTML,
    };
    // tayyabkamboh@nevarasolutions.com
    const info = await transporter.sendMail(mailOptions);

    console.log("✅ Email sent:", info.messageId);
    return NextResponse.json({ success: true, message: "Email sent." });
  } catch (error) {
    console.error("❌ Email sending failed:", error);
    return NextResponse.json({ success: false, error: "Failed to send email." }, { status: 500 });
  }
}
