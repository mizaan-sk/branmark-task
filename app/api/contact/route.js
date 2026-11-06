import { NextResponse } from "next/server";

// Only runs where a Node server is available (e.g. `next dev`). The static
// export on Hostinger has no API routes; see sendLead in InquiryForm.jsx.
function validate({ name, email, phone, service }) {
  if (typeof name !== "string" || !name.trim()) return "Name is required.";
  if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "A valid email is required.";
  }
  if (typeof phone !== "string" || !/^\d{10}$/.test(phone)) {
    return "A valid 10-digit phone number is required.";
  }
  if (typeof service !== "string" || !service.trim()) return "A goal is required.";
  return null;
}

export async function POST(request) {
  try {
    const body = await request.json();

    const invalid = validate(body);
    if (invalid) {
      return NextResponse.json({ success: false, message: invalid }, { status: 400 });
    }

    const googleScriptUrl =
      process.env.GOOGLE_SCRIPT_URL || process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

    if (!googleScriptUrl) {
      return NextResponse.json(
        { success: false, message: "GOOGLE_SCRIPT_URL is not set in .env.local" },
        { status: 500 }
      );
    }

    const { name, email, phone, service, message } = body;

    // Clean URL without adding query parameters to prevent Google Drive 404 errors
    const response = await fetch(googleScriptUrl, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ name, email, phone, service, message }),
      redirect: "follow",
    });

    const responseText = await response.text();
    let data;
    try {
      data = JSON.parse(responseText);
    } catch {
      data = { text: responseText };
    }

    return NextResponse.json({ success: response.ok, data }, { status: response.ok ? 200 : 502 });
  } catch (error) {
    console.error("Error submitting lead to Google Apps Script:", error);
    return NextResponse.json(
      { success: false, message: "Failed to submit lead." },
      { status: 500 }
    );
  }
}
