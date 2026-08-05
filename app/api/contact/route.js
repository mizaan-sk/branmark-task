import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const googleScriptUrl =
      process.env.GOOGLE_SCRIPT_URL || process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

    if (!googleScriptUrl) {
      return NextResponse.json(
        {
          success: false,
          message: "GOOGLE_SCRIPT_URL is not set in .env.local",
        },
        { status: 400 }
      );
    }

    // Clean URL without adding query parameters to prevent Google Drive 404 errors
    const response = await fetch(googleScriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(body),
      redirect: "follow",
    });

    const responseText = await response.text();
    let data;
    try {
      data = JSON.parse(responseText);
    } catch {
      data = { text: responseText };
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error submitting lead to Google Apps Script:", error);
    return NextResponse.json(
      {
        success: false,
        message: error.message || "Failed to submit lead to Google Sheet.",
      },
      { status: 500 }
    );
  }
}
