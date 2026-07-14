"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
} from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
  nama: "",
  email: "",
  subjek: "",
  pesan: "",
});

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  const res = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });

  if (res.ok) {
    alert("Pesan berhasil dikirim!");

    setForm({
      nama: "",
      email: "",
      subjek: "",
      pesan: "",
    });
  } else {
    alert("Gagal mengirim pesan.");
  }
};

  return (
    <>
      {/* Hero */}

      <section className="bg-linear-to-r from-red-700 to-red-700 py-44 text-white">

        <Container>

          <span className="rounded-full bg-white/20 px-4 py-2">
            Hubungi Kami
          </span>

          <h1 className="mt-8 text-5xl font-bold">
            Kontak BPRI IKASA
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-red-50">
            Kami terbuka terhadap masukan, kolaborasi,
            maupun komunikasi dari seluruh alumni,
            sekolah, dan pihak terkait.
          </p>

        </Container>

      </section>

      {/* Contact */}

      <section className="py-24">

        <Container>

          <div className="grid gap-10 lg:grid-cols-2">

            {/* LEFT */}

            <div>

              <h2 className="text-4xl font-bold">
                Informasi Kontak
              </h2>

              <p className="mt-6 text-slate-600 leading-8">
                Silakan menghubungi kami melalui informasi
                berikut.
              </p>

              <div className="mt-10 space-y-6">

                <div className="flex gap-5 rounded-2xl border p-6">

                  <Mail className="text-red-700"/>

                  <div>

                    <h3 className="font-semibold">
                      Email
                    </h3>

                    <p className="text-slate-600">
                      bpriikasa@gmail.com
                    </p>

                  </div>

                </div>

                <div className="flex gap-5 rounded-2xl border p-6">

                  <Phone className="text-red-700"/>

                  <div>

                    <h3 className="font-semibold">
                      WhatsApp
                    </h3>

                    <p className="text-slate-600">
                      +62 857-0228-6474 (Arif)
                    </p>

                  </div>

                </div>

                <div className="flex gap-5 rounded-2xl border p-6">

                  <MapPin className="text-red-700"/>

                  <div>

                    <h3 className="font-semibold">
                      Lokasi
                    </h3>

                    <p className="text-slate-600">
                      SMAIT Al Irsyad Al Islamiyyah
                      Purwokerto
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="rounded-3xl border bg-white p-10 shadow">

              <h2 className="text-3xl font-bold">
                Kirim Pesan
              </h2>

              <form 
              onSubmit={handleSubmit}
              className="mt-8 space-y-6"
              >

                <input
                  name="nama"
                  value={form.nama}
                  onChange={handleChange}
                  placeholder="Nama"
                  className="w-full rounded-xl border p-4"
                />

                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full rounded-xl border p-4"
                />

                <input
                  name="subjek"
                  value={form.subjek}
                  onChange={handleChange}
                  placeholder="Subjek"
                  className="w-full rounded-xl border p-4"
                />

                <textarea
                  rows={6}
                  name="pesan"
                  value={form.pesan}
                  onChange={handleChange}
                  placeholder="Pesan..."
                  className="w-full rounded-xl border p-4"
                />

                <button
                  type="submit"
                  className="flex items-center gap-3 rounded-xl bg-red-700 px-6 py-4 text-white"
                >
                  <Send size={18}/>
                  Kirim Pesan
                </button>

              </form>

            </div>

          </div>

        </Container>

      </section>

      {/* Maps */}

      <section className="pb-24">

        <Container>

          <div className="overflow-hidden rounded-3xl border shadow">

            <iframe
              src="https://www.google.com/maps?q=SMAIT+Al+Irsyad+Purwokerto&output=embed"
              className="h-125 w-full"
              loading="lazy"
            />

          </div>

        </Container>

      </section>

    </>
  );
}