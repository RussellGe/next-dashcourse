import { Resend } from "resend";
import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextResponse } from "next/server";
const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST() {
  await resend.emails.send({
    from: "...",
    to: "russellxin0601@gmail.com",
    subject: "Hello",
    react: <WelcomeTemplate name="Russell" />,
  });

  return NextResponse.json({ message: "Email sent" });
}
