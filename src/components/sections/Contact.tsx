import { Mail, Phone, MapPin } from "lucide-react";
import { FaInstagram as Instagram } from "react-icons/fa6";

export default function Contact() {
  return (
    <section id="kontak" className="bg-slate-50">

      <div className="mx-auto max-w-5xl px-6">

        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold">

            Hubungi Kami

          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="space-y-6">

            <div className="flex gap-4">

              <MapPin />

              <p>SMAIT Al Irsyad Al Islamiyah Purwokerto</p>

            </div>

            <div className="flex gap-4">

              <Mail />

              <p>ikasa@email.com</p>

            </div>

            <div className="flex gap-4">

              <Phone />

              <p>08xxxxxxxxxx</p>

            </div>

            <div className="flex gap-4">

              <Instagram />

              <p>@ikasa</p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}