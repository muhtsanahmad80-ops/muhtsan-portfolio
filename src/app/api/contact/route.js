import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, company, service, budget, message } = body;

    if (!name || !email || !service || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    // ── Email Integration ───────────────────────────────────────────
    // Option 1 (Recommended): Resend — npm install resend
    // Add RESEND_API_KEY to .env.local then uncomment:
    //
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'Portfolio <noreply@muhtsanahmad.com>',
    //   to: 'muhtsana@gmail.com',
    //   subject: `New Inquiry from ${name} — ${service}`,
    //   html: `<h2>New Contact Form Submission</h2>
    //     <p><b>Name:</b> ${name}</p>
    //     <p><b>Email:</b> ${email}</p>
    //     <p><b>Company:</b> ${company || '—'}</p>
    //     <p><b>Service:</b> ${service}</p>
    //     <p><b>Budget:</b> ${budget || '—'}</p>
    //     <p><b>Message:</b><br>${message.replace(/\n/g,'<br>')}</p>`,
    // });
    // ───────────────────────────────────────────────────────────────

    console.log("📧 New Contact Submission:", { name, email, company, service, budget, message, timestamp: new Date().toISOString() });

    return NextResponse.json({ success: true, message: "Your message has been received! I'll get back to you within 24 hours." }, { status: 200 });
  } catch (err) {
    console.error("Contact API Error:", err);
    return NextResponse.json({ error: "Server error. Please try again." }, { status: 500 });
  }
}
export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
