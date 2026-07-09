import { NextRequest, NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  let payload: ContactPayload;

  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, phone, service, message } = payload;

  if (!name?.trim() || !email?.trim() || !phone?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Please fill in every field." }, { status: 400 });
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  // --- Delivery ---------------------------------------------------------
  // This handler validates the submission and logs it server-side so the
  // build works immediately with zero configuration. To actually deliver
  // enquiries to magnafinishesglobal@gmail.com, wire up an email provider
  // here (Resend, Postmark, SMTP via Nodemailer, etc.) using environment
  // variables — never hardcode credentials in this file. Example using
  // Resend (https://resend.com):
  //
  //   const resendKey = process.env.RESEND_API_KEY;
  //   if (resendKey) {
  //     await fetch("https://api.resend.com/emails", {
  //       method: "POST",
  //       headers: {
  //         Authorization: `Bearer ${resendKey}`,
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         from: "Magna Finishes Website <site@magnafinishesglobal.com>",
  //         to: "magnafinishesglobal@gmail.com",
  //         reply_to: email,
  //         subject: `New enquiry: ${service ?? "General"} — ${name}`,
  //         text: `${name} (${email}, ${phone})\n\n${message}`,
  //       }),
  //     });
  //   }

  console.log("New contact enquiry:", { name, email, phone, service, message });

  return NextResponse.json({ ok: true });
}
