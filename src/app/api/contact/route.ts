import { NextResponse } from "next/server";
import { db, collection, addDoc, serverTimestamp } from "@/lib/firebase";

export async function POST(req: Request) {
  try {
    const { name, email, phone, company, service, message, freeAudit } = await req.json();

    // ✅ Get User's IP Location (Fetch country via IP API)
    const ipRes = await fetch("https://ipapi.co/json/");
    const ipData = await ipRes.json();
    const userLocation = ipData.country_name || "Unknown";

    // ✅ Store Data in Firestore
    const docRef = await addDoc(collection(db, "contact_submissions"), {
      name,
      email,
      phone,
      company,
      service,
      message,
      freeAudit,
      timestamp: serverTimestamp(),
      location: userLocation,
    });

    console.log("✅ Form submission saved:", docRef.id);

    // ✅ Send Email Notification
    const emailResponse = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/send-email`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone, company, service, message, freeAudit, userLocation }),
    });

    if (!emailResponse.ok) throw new Error("❌ Email notification failed.");
    console.log("✅ Email notification sent successfully.");

    return NextResponse.json({ success: true, message: "Form submitted successfully." });
  } catch (error) {
    console.error("❌ Error handling form submission:", error);
    return NextResponse.json({ success: false, error: "Something went wrong." });
  }
}
