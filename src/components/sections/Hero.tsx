"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-white">

      {/* Background */}
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-red-200/20 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-lime-200/20 blur-3xl" />

      <Container>
        <div className="grid min-h-screen items-center gap-20 py-12 lg:grid-cols-2">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-5 py-2 text-sm font-semibold text-red-700">
              Badan Percepatan Revitalisasi IKASA
            </div>

            {/* Title */}
            <h1 className="mt-4 max-w-2xl text-5xl font-extrabold leading-tight tracking-tight text-slate-900 lg:text-7xl">
              Menghubungkan{" "}
              <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                Alumni
              </span>
              <br />
              Membangun Masa Depan
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
              Website resmi Badan Percepatan Revitalisasi IKASA SMAIT
              Al Irsyad Al Islamiyyah Purwokerto sebagai pusat
              informasi revitalisasi organisasi alumni,
              pengembangan jejaring, dan media kolaborasi seluruh
              keluarga besar IKASA.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="/tentang"
                className="group inline-flex items-center gap-2 rounded-xl bg-red-700 px-7 py-4 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-red-800 hover:shadow-xl"
              >
                Pelajari BPRI

                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <a
                href="/dokumen"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-4 font-medium text-slate-700 transition hover:border-red-500 hover:text-red-700 hover:shadow-lg"
              >
                <Download size={18} />
                Dokumen
              </a>

            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="rounded-[32px] border border-white/40 bg-white/70 p-8 shadow-[0_20px_60px_rgba(0,0,0,.08)] backdrop-blur-xl">
              <Image
                src="/images/BPRI-Logo.png"
                alt="Hero"
                width={700}
                height={700}
                priority
                className="mx-auto w-full"
              />
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}