"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import Container from "@/components/layout/Container";

export default function CTA() {
  return (
    <section className="py-12">

      <Container>

        <motion.div
          initial={{ opacity: 0, scale: .95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="relative overflow-hidden rounded-[40px] bg-linear-to-r from-red-500 to-red-700 px-10 py-20 text-white"
        >

          {/* Decorative Background */}

          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"/>

          <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-yellow-300/10 blur-3xl"/>

          <div className="relative z-10 mx-auto max-w-4xl text-center">

            <span className="rounded-full bg-white/20 px-4 py-2 text-sm">

              Bersama Membangun IKASA

            </span>

            <h2 className="mt-8 text-4xl font-bold lg:text-6xl">

              Mari Revitalisasi IKASA

              <br />

              Dimulai Dari Kita

            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-red-50">

              Revitalisasi organisasi alumni hanya dapat terwujud
              melalui kolaborasi seluruh alumni, siswa,
              guru, dan sekolah.

              Bersama kita membangun jaringan,
              mempererat silaturahmi,
              dan menciptakan organisasi alumni
              yang aktif serta berkelanjutan.

            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-5">

              <Link
                href="/kontak"
                className="rounded-xl bg-white px-7 py-4 font-semibold text-red-700 transition hover:scale-105"
              >

                Hubungi Kami

              </Link>

              <Link
                href="https://its.id/m/JARINGASPIRASIIKASA"
                className="flex items-center gap-2 rounded-xl border border-white/30 px-7 py-4 transition hover:bg-white/10"
              >

                Isi Angket

              </Link>

            </div>

          </div>

        </motion.div>

      </Container>

    </section>
  );
}