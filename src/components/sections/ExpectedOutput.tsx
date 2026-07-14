"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";

import {
  BadgeCheck,
  FileCheck,
  Database,
  ClipboardList,
  Network,
} from "lucide-react";

const outputs = [
  {
    title: "IKASA Resmi Terbentuk",
    description:
      "Terbentuknya organisasi IKASA secara resmi dengan kepengurusan definitif.",
    icon: BadgeCheck,
    color: "bg-red-100 text-red-700",
  },
  {
    title: "AD/ART Tersusun",
    description:
      "Dokumen organisasi sebagai dasar tata kelola yang profesional.",
    icon: FileCheck,
    color: "bg-blue-100 text-blue-700",
  },
  {
    title: "Database Alumni",
    description:
      "Basis data alumni yang terintegrasi dan mudah diperbarui.",
    icon: Database,
    color: "bg-amber-100 text-amber-700",
  },
  {
    title: "Program Kerja Awal",
    description:
      "Program kerja awal yang siap dijalankan setelah organisasi terbentuk.",
    icon: ClipboardList,
    color: "bg-violet-100 text-violet-700",
  },
  {
    title: "Jejaring Alumni Aktif",
    description:
      "Terbangunnya komunikasi lintas angkatan yang aktif dan berkelanjutan.",
    icon: Network,
    color: "bg-rose-100 text-rose-700",
  },
];

export default function ExpectedOutput() {
  return (
    <section className="py-14 bg-white">

      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700">
            Output Revitalisasi
          </span>

          <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
            Hasil yang Diharapkan
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            Revitalisasi IKASA tidak hanya membentuk organisasi baru,
            tetapi juga membangun sistem yang mampu bertahan,
            berkembang, dan memberikan manfaat bagi seluruh alumni.
          </p>

        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {outputs.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .5,
                  delay: index * .12,
                }}
                className="rounded-3xl border bg-white p-8 transition hover:-translate-y-2 hover:shadow-xl"
              >

                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl ${item.color}`}
                >

                  <Icon size={30} />

                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>

              </motion.div>

            );

          })}

        </div>

      </Container>

    </section>
  );
}