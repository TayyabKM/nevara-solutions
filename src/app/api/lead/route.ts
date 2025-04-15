import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, location } = body;

    if (!email) {
      return NextResponse.json({ success: false, error: "Email is required." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASSWORD,
      },
    });

    const emailHTML = `
      <h2>New Lead Form Submission</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Location:</strong> ${location || "Unknown"}</p>
    `;

    const mailOptions = {
      from: `"Nevara Solutions" <${process.env.EMAIL_USER}>`,
      to: "tayyabkamboh@nevarasolutions.com",
      subject: "📨 New Lead Submission",
      html: emailHTML,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Lead Email sent:", info.messageId);

    return NextResponse.json({ success: true, message: "Email sent." });
  } catch (error) {
    console.error("❌ Failed to send lead email:", error);
    return NextResponse.json({ success: false, error: "Email sending failed." }, { status: 500 });
  }
}
