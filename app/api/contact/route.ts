import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const {
      fullName,
      email,
      phone,
      topic,
      arrivalDate,
      departureDate,
      adults,
      children,
      message,
    } = data;

    // Validate required fields
    if (!fullName || typeof fullName !== "string" || fullName.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Please provide your full name." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (arrivalDate && departureDate) {
      const arrival = new Date(arrivalDate);
      const departure = new Date(departureDate);

      if (departure < arrival) {
        return NextResponse.json(
          { success: false, error: "Departure date must be after or on the arrival date." },
          { status: 400 }
        );
      }
    }

    // Generate unique inquiry reference code
    const referenceId = `DH-${Math.floor(1000 + Math.random() * 9000)}`;

    // In a production setup with email credentials (e.g., Resend, Sendgrid, or SMTP),
    // we would dispatch the email here. We simulate the confirmed receipt.
    const logSummary = {
      referenceId,
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone?.trim() || "Not provided",
      topic: topic || "General Inquiries",
      arrivalDate,
      departureDate,
      adults: Number(adults) || 1,
      children: Number(children) || 0,
      message: message?.trim() || "No additional comments",
      receivedAt: new Date().toISOString(),
    };

    console.log("Inquiry registered successfully:", logSummary);

    return NextResponse.json({
      success: true,
      reference: referenceId,
      message:
        "Thank you for reaching out. Your stay inquiry has been dispatched to our island reservations desk. We will respond directly to your email within 24 hours.",
      summary: logSummary,
    });
  } catch (error) {
    console.error("Error processing inquiry:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process inquiry. Please try again or call us directly." },
      { status: 500 }
    );
  }
}
