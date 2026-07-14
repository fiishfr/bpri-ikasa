import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { nama, email, subjek, pesan } = await req.json();

  await resend.emails.send({
    from: "Website BPRI IKASA <noreply@bpriikasa@gmail.com>",
    to: "bpriikasa@gmail.com",
    subject: subjek,
    html: `
      <h2>Pesan Baru dari Website</h2>

      <p><strong>Nama:</b> ${nama}</p>
      <p><strong>Email:</b> ${email}</p>

      <hr />

      <p>${pesan}</p>
    `,
  });

  return Response.json({ success: true });
}