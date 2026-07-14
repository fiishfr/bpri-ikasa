"use client";

import { motion } from "framer-motion";
import { Download, Eye, FileText, BookOpen } from "lucide-react";

import Container from "@/components/layout/Container";

const documents = [
  {
    title: "JUKNIS BPRI IKASA",
    description: "Pedoman Revitalisasi Ikatan Alumni",
    file: "/docs/JUKNIS-BPRI.pdf",
    badge: "Pedoman",
  },
];

export default function Documents() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-red-50 py-10">
      {/* Background */}
      <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-red-200/20 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-rose-200/20 blur-3xl" />

      <Container>
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-red-200 bg-red-50 px-5 py-2 text-sm font-semibold text-red-700">
            Dokumentasi
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
            Dokumen Resmi BPRI IKASA
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Seluruh proses revitalisasi berpedoman pada dokumen JUKNIS yang
            memuat struktur organisasi, mekanisme kerja, hingga target
            revitalisasi IKASA.
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-wrap justify-center mt-16 gap-8 lg:grid-cols-2">
          {documents.map((doc) => (
            <motion.div
              key={doc.title}
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-xl"
            >
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  <div className="rounded-2xl bg-red-100 p-4">
                    <FileText className="text-red-700" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold">{doc.title}</h3>

                    <p className="text-slate-600">{doc.description}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm">
                  PDF
                </span>
                <span className="rounded-full bg-red-100 px-3 py-1 text-sm text-red-700">
                  {doc.badge}
                </span>
              </div>

              <div className="mt-8 flex gap-3">
                <a
                  href={doc.file}
                  target="_blank"
                  className="flex-1 rounded-xl border py-3 text-center hover:bg-slate-50"
                >
                  Preview
                </a>

                <a
                  href={doc.file}
                  download
                  className="flex-1 rounded-xl bg-red-700 py-3 text-center text-white hover:bg-red-800"
                >
                  Download
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
