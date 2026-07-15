"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Download,
  Instagram,
} from "lucide-react";

import Container from "./Container";

const navigations = [
  { name: "Beranda", href: "/" },
  { name: "Tentang", href: "/tentang" },
  { name: "Struktur", href: "/struktur" },
  { name: "Satuan Kerja", href: "/satuan-kerja" },
  { name: "Mekanisme", href: "/mekanisme" },
  { name: "Dokumen", href: "/dokumen" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <Container>
        <div className="grid gap-15 py-10 lg:grid-cols-[4.75fr_0.75fr_0.75fr_2fr]">
          {/* Brand */}

          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/BPRI-Logo.png"
                alt="BPRI IKASA"
                width={48}
                height={48}
              />

              <div>
                <h2 className="text-xl font-bold text-slate-900">BPRI IKASA</h2>

                <p className="text-sm text-slate-500">
                  Badan Percepatan Revitalisasi IKASA
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-sm leading-7 text-slate-600">
              Website resmi Badan Percepatan Revitalisasi IKASA SMAIT Al Irsyad
              Al Islamiyyah Purwokerto sebagai pusat informasi revitalisasi,
              koordinasi, dan kolaborasi alumni.
            </p>

            <a
              href="/docs/JUKNIS-BPRI.pdf"
              download
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-red-700 px-5 py-3 text-sm font-medium text-white transition hover:bg-red-800"
            >
              <Download size={18} />
              Download JUKNIS
            </a>
          </div>

          {/* Navigasi */}

          <div>
            <h3 className="text-base font-semibold text-slate-900">Navigasi</h3>

            <ul className="mt-5 space-y-3">
              {navigations.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-600 transition hover:text-red-700"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Dokumen */}

          <div>
            <h3 className="text-base font-semibold text-slate-900">Dokumen</h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="/docs/JUKNIS-BPRI.pdf"
                  className="text-slate-600 transition hover:text-red-700"
                >
                  JUKNIS BPRI
                </a>
              </li>
            </ul>
          </div>

          {/* Kontak */}

          <div>
            <h3 className="text-base font-semibold text-slate-900">Kontak</h3>

            <div className="mt-5 space-y-4">
              <div className="flex items-start gap-3">
                <Mail size={18} className="mt-1 text-red-700" />

                <span className="text-slate-600">bpriikasa@gmail.com</span>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={18} className="mt-1 text-red-700" />

                <span className="text-slate-600">+62 857-0228-6474 (Arif)</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-red-700" />

                <span className="text-slate-600">Purwokerto, Jawa Tengah</span>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button
                onClick={() =>
                  window.open("https://instagram.com/bpri.ikasa", "_blank")
                }
                className="rounded-lg border p-2 text-slate-600 transition hover:border-red-600 hover:text-red-700"
              >
                <Instagram size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 py-6 text-sm text-slate-500 lg:flex-row">
          <p>
            © {new Date().getFullYear()} <strong>BPRI IKASA</strong>. Seluruh
            Hak Cipta Dilindungi.
          </p>

          <p>
            Dikembangkan untuk Revitalisasi IKASA SMAIT Al Irsyad Al Islamiyyah
            Purwokerto.
          </p>
        </div>
      </Container>
    </footer>
  );
}
