"use client";

import Link from "next/link";
import Container from "@/components/layout/Container";
import { Search, FileText, Download, Eye } from "lucide-react";

const categories = ["Semua", "Pedoman", "Peraturan", "Program"];

const documents = [
  {
    id: 1,
    slug: "juknis-bpri",
    title: "JUKNIS BPRI IKASA",
    description:
      "Pedoman pelaksanaan revitalisasi organisasi IKASA sebagai acuan seluruh satuan kerja.",
    category: "Pedoman",
    version: "1.0",
    updatedAt: "24 Juli 2026",
    type: "PDF",
    file: "/docs/JUKNIS-BPRI.pdf",
  },
];

export default function DocumentPage() {
  return (
    <>
      {/* Hero */}

      <section className="relative overflow-hidden bg-gradient-to-br from-red-700 via-red-700 to-red-900 py-32 text-white">
        <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-orange-300/10 blur-3xl" />

        <Container>
          <div className="max-w-4xl">
            <span className="rounded-full bg-white/15 px-5 py-2 text-sm font-medium backdrop-blur">
              📄 Pusat Dokumen
            </span> 

            <h1 className="mt-8 text-5xl font-bold leading-tight lg:text-6xl">
              Dokumen Resmi
              <br />
              BPRI IKASA
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-red-100">
              Seluruh pedoman, peraturan, program kerja, dan dokumen resmi Badan
              Percepatan Revitalisasi IKASA tersedia dalam satu tempat.
            </p>
          </div>
        </Container>
      </section>

      {/* Search */}

      <section className="mt-10 pb-20">
        <Container>
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-2xl font-bold">Daftar Dokumen</h2>

                <p className="mt-2 text-slate-500">
                  Temukan seluruh dokumen resmi BPRI IKASA.
                </p>
              </div>

              <div className="relative w-full lg:w-96">
                <Search
                  size={18}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  placeholder="Cari dokumen..."
                  className="w-full rounded-2xl border border-slate-200 py-3 pl-12 pr-4 outline-none transition focus:border-red-600"
                />
              </div>
            </div>

            {/* Filter */}

            <div className="mt-8 flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  className="rounded-full border border-slate-200 px-5 py-2 text-sm font-medium transition hover:border-red-700 hover:bg-red-700 hover:text-white"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {documents.map((doc) => (
              <div
                key={doc.id}
                className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:border-red-200 hover:shadow-2xl"
              >
                {/* Header */}

                <div className="border-b border-slate-100 p-7">
                  <div className="flex items-start justify-between">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-red-700 transition group-hover:bg-red-700 group-hover:text-white">
                      <FileText size={34} />
                    </div>

                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
                      {doc.type}
                    </span>
                  </div>

                  <h3 className="mt-6 line-clamp-2 text-2xl font-bold text-slate-900">
                    {doc.title}
                  </h3>

                  <p className="mt-3 line-clamp-3 leading-7 text-slate-600">
                    {doc.description}
                  </p>
                </div>

                {/* Body */}

                <div className="p-7">
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-700">
                      {doc.category}
                    </span>

                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                      Versi {doc.version}
                    </span>
                  </div>

                  <div className="mt-6 flex items-center justify-between text-sm">
                    <div>
                      <p className="text-slate-400">Diperbarui</p>

                      <p className="font-medium text-slate-700">
                        {doc.updatedAt}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 flex gap-3">
                    <Link
                      href={`/dokumen/${doc.slug}`}
                      className="flex-1 rounded-xl border border-slate-200 px-4 py-3 text-center text-sm font-semibold transition hover:border-red-600 hover:bg-red-50 hover:text-red-700"
                    >
                      <span className="inline-flex items-center gap-2">
                        <Eye size={17} />
                        Lihat
                      </span>
                    </Link>

                    <a
                      href={doc.file}
                      download
                      className="flex-1 rounded-xl bg-red-700 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-red-800"
                    >
                      <span className="inline-flex items-center gap-2">
                        <Download size={17} />
                        Download
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}

          <div className="mt-20 overflow-hidden rounded-[36px] bg-gradient-to-r from-red-700 to-red-900 p-10 text-white lg:p-14">
            <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold">
                  Tidak menemukan dokumen yang dicari?
                </h2>

                <p className="mt-4 leading-8 text-red-100">
                  Hubungi Badan Percepatan Revitalisasi IKASA apabila Anda
                  memerlukan dokumen lain seperti SOP, AD/ART, notulen rapat,
                  program kerja, ataupun dokumen resmi lainnya.
                </p>
              </div>

              <Link
                href="/kontak"
                className="rounded-2xl bg-white px-8 py-4 font-semibold text-red-700 transition hover:scale-105"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
