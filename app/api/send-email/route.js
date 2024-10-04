import { NextResponse } from "next/server";
import { transporter } from "@/app/config/nodemailer";
import { contactEmail } from "@/app/config/templates/contactEmail";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    console.log("Received form data:", { name, email, message });

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }
    const mailOptions = {
      from: email,
      to: process.env.GMAIL_USER,
      subject: `New message from ${name}`,
      text: `Message: ${message}\n\nFrom: ${message} (${email})`,
      html: contactEmail(message, name, email),
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent:", info.messageId);

    return NextResponse.json(
      { success: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in send-email API:", error);

    return NextResponse.json(
      { error: "Internal Server Error", message: error.message },
      { status: 500 }
    );
  }
}
