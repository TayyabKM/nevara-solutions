import { NextResponse } from "next/server";
import { db, collection, addDoc, serverTimestamp } from "@/lib/firebase";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, company, service, message, freeAudit, location } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: "Missing required fields." }, { status: 400 });
    }

    await addDoc(collection(db, "contactMessages"), {
      name,
      email,
      phone: phone || "N/A",
      company: company || "N/A",
      service: service || "N/A",
      message,
      freeAudit: freeAudit || false,
      location: location || "Unknown",
      createdAt: serverTimestamp(),
    });

    return NextResponse.json({ success: true, message: "Contact form submitted to Firestore." });
  } catch (error) {
    console.error("❌ Failed to submit contact form:", error);
    return NextResponse.json({ success: false, error: "Submission failed." }, { status: 500 });
  }
}
