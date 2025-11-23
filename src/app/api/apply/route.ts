import { NextResponse } from "next/server";
import { writeClient } from "@/sanity/lib/writeClient";

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const fullName = form.get("fullName");
    const email = form.get("email");
    const phone = form.get("phone");
    const jobId = form.get("jobId");
    const cv = form.get("cv") as File;

    if (!cv) {
      return NextResponse.json(
        { success: false, error: "CV is required" },
        { status: 400 }
      );
    }

    // upload file
    const uploaded = await writeClient.assets.upload("file", cv, {
      filename: cv.name,
    });

    const doc = {
      _type: "jobApplication",
      fullName,
      email,
      phone,
      job: {
        _type: "reference",
        _ref: jobId,
      },
      cv: {
        asset: { _ref: uploaded._id },
      },
      submittedAt: new Date().toISOString(),
    };

    await writeClient.create(doc);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Apply API error:", err);
    return NextResponse.json(
      { success: false, error: "Something went wrong" },
      { status: 500 }
    );
  }
}
