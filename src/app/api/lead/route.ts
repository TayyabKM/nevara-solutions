import { NextResponse } from "next/server";
import { db, collection, addDoc, serverTimestamp } from "@/lib/firebase";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, location } = body;

    if (!email) {
      return new NextResponse(
        JSON.stringify({ success: false, error: "Email is required." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    await addDoc(collection(db, "leads"), {
      email,
      location: location || "Unknown",
      createdAt: serverTimestamp(),
    });

    return new NextResponse(
      JSON.stringify({ success: true, message: "Form submitted to Firestore." }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("❌ Failed to submit lead form:", error);
    return new NextResponse(
      JSON.stringify({ success: false, error: "Submission failed." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
