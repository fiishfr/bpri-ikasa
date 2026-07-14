import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  BookOpen,
  Calendar,
  Download,
  Eye,
  FileCheck,
  FileText,
} from "lucide-react";

import Container from "@/components/layout/Container";
import { documents } from "@/data/document";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const document = documents.find((d) => d.slug === slug);

  if (!document) {
    notFound();
  }

  return (
    <>
      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-gradient-to-br from-red-700 via-red-800 to-red-900 py-22 text-white">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-red-500/20 blur-3xl" />

        <Container>
          <Link
            href="/dokumen"
            className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur transition-all duration-300 hover:border-white/40 hover:bg-white/20 hover:text-white"
          >
            <ArrowLeft
              size={16}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />

            <span>Kembali ke Dokumen</span>
          </Link>

          <div className="mt-8 max-w-4xl">
            <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur">
              {document.category}
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight lg:text-6xl">
              {document.title}
            </h1>

            <p className="mt-2 text-lg leading-8 text-red-100">
              {document.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur">
                Versi {document.version}
              </span>

              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur">
                {document.status}
              </span>

              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur">
                {document.format}
              </span>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={document.file}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-red-700 transition hover:-translate-y-1 hover:bg-red-50"
              >
                <Eye size={18} />
                Preview
              </a>

              <a
                href={document.file}
                download
                className="inline-flex items-center gap-2 rounded-xl border border-white px-6 py-3 font-semibold transition hover:bg-white hover:text-red-700"
              >
                <Download size={18} />
                Download
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= CONTENT ================= */}

      <section className="bg-slate-50 py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            {/* ================= PDF ================= */}

            <div className="lg:col-span-2">
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                {/* Header */}

                <div className="flex items-center justify-between border-b border-slate-200 p-6">
                  <div className="flex items-center gap-4">
                    <div className="rounded-2xl bg-red-100 p-4">
                      <FileText size={28} className="text-red-700" />
                    </div>

                    <div>
                      <h2 className="text-xl font-bold">{document.title}</h2>

                      <p className="mt-1 text-sm text-slate-500">
                        {document.format} Document
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={document.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl border border-slate-200 p-3 transition hover:bg-slate-100"
                    >
                      <Eye size={18} />
                    </a>

                    <a
                      href={document.file}
                      download
                      className="rounded-xl bg-red-700 p-3 text-white transition hover:bg-red-800"
                    >
                      <Download size={18} />
                    </a>
                  </div>
                </div>

                {/* PDF */}

                <iframe
                  src={document.file}
                  title={document.title}
                  className="h-[900px] w-full"
                />
              </div>
            </div>

            {/* ================= SIDEBAR ================= */}

            <aside className="space-y-6">
              {/* Ringkasan */}

              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="flex items-center gap-3">
                  <BookOpen className="text-red-700" />

                  <h3 className="text-xl font-bold">Ringkasan Isi</h3>
                </div>

                <div className="mt-6 space-y-3">
                  {document.chapters.map((chapter, index) => (
                    <div
                      key={chapter}
                      className="flex items-center gap-3 rounded-xl border border-slate-200 p-4 transition hover:border-red-300 hover:bg-red-50"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-700">
                        {index + 1}
                      </div>

                      <span className="text-sm font-medium">{chapter}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Informasi Dokumen */}

              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="flex items-center gap-3">
                  <Calendar className="text-red-700" />

                  <h3 className="text-xl font-bold">Informasi Dokumen</h3>
                </div>

                <div className="mt-6 space-y-5">
                  <div className="flex justify-between border-b pb-3">
                    <span className="text-slate-500">Kategori</span>

                    <span className="font-semibold">{document.category}</span>
                  </div>

                  <div className="flex justify-between border-b pb-3">
                    <span className="text-slate-500">Format</span>

                    <span className="font-semibold">{document.format}</span>
                  </div>

                  <div className="flex justify-between border-b pb-3">
                    <span className="text-slate-500">Versi</span>

                    <span className="font-semibold">{document.version}</span>
                  </div>

                  <div className="flex justify-between border-b pb-3">
                    <span className="text-slate-500">Status</span>

                    <span className="font-semibold text-green-600">
                      {document.status}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-500">Terakhir Diperbarui</span>

                    <span className="font-semibold">{document.updatedAt}</span>
                  </div>
                </div>
              </div>

              {/* CTA */}

              <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-red-700 to-red-900 p-8 text-white shadow-lg">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15">
                  <FileCheck size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-bold">Dokumen Resmi</h3>

                <p className="mt-4 leading-7 text-red-100">
                  Dokumen ini merupakan pedoman resmi Badan Percepatan
                  Revitalisasi IKASA dan digunakan sebagai acuan dalam seluruh
                  proses revitalisasi organisasi alumni.
                </p>

                <a
                  href={document.file}
                  download
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-red-700 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <Download size={18} />
                  Download Dokumen
                </a>
              </div>

              {/* Dokumen Terkait */}

              {documents.length > 1 && (
                <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                  <h3 className="text-xl font-bold">Dokumen Lainnya</h3>

                  <div className="mt-6 space-y-4">
                    {documents
                      .filter((doc) => doc.slug !== document.slug)
                      .slice(0, 4)
                      .map((doc) => (
                        <Link
                          key={doc.slug}
                          href={`/dokumen/${doc.slug}`}
                          className="block rounded-2xl border border-slate-200 p-4 transition hover:border-red-300 hover:bg-red-50"
                        >
                          <div className="flex items-center gap-3">
                            <div className="rounded-xl bg-red-100 p-3">
                              <FileText size={20} className="text-red-700" />
                            </div>

                            <div>
                              <h4 className="font-semibold">{doc.title}</h4>

                              <p className="text-sm text-slate-500">
                                {doc.category}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
