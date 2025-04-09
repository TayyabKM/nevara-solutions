import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    // Ensure valid JSON request body
    const body = await req.json();
    const { name, email, phone, company, service, message, freeAudit, userLocation } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: "Missing required fields." }, { status: 400 });
    }

    // Construct email content
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
        <tr><th>Location</th><td>${userLocation || "Unknown"}</td></tr>
      </table>
    `;

    // Send email via Resend API
    const response = await resend.emails.send({
      from: "Nevara Solutions <m.tayyabi2822@gmail.com>", // Ensure this is a verified domain
      to: "tayyabkamboh@nevarasolutions.com",
      replyTo: email, // Ensures responses go back to the sender
      subject: "📩 New Contact Form Submission",
      html: emailHTML,
    });

    console.log("✅ Email sent successfully:", response);
    return NextResponse.json({ success: true, message: "Email sent." });
  } catch (error) {
    console.error("❌ Email sending failed:", error);
    return NextResponse.json({ success: false, error: "Failed to send email." }, { status: 500 });
  }
}

console.log("RESEND_API_KEY:", process.env.RESEND_API_KEY);