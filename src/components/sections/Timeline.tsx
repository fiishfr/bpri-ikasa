"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import {
  Database,
  Search,
  FileText,
  Users,
  Vote,
  Building2,
  Award,
  Rocket,
} from "lucide-react";

const steps = [
  {
    title: "Pengumpulan Data",
    description:
      "Menghimpun informasi alumni, siswa, guru, dan kondisi organisasi sebagai dasar revitalisasi.",
    icon: Database,
  },
  {
    title: "Analisis Strategis",
    description:
      "Menganalisis kondisi IKASA sebelumnya dan mengidentifikasi kebutuhan organisasi.",
    icon: Search,
  },
  {
    title: "Perumusan Organisasi",
    description:
      "Menyusun AD/ART, visi, misi, struktur organisasi, dan tata kelola.",
    icon: FileText,
  },
  {
    title: "Konsolidasi Alumni",
    description:
      "Membangun komunikasi dan kolaborasi lintas angkatan untuk mendukung revitalisasi.",
    icon: Users,
  },
  {
    title: "Musyawarah Alumni",
    description:
      "Melaksanakan musyawarah sebagai forum pembentukan organisasi secara resmi.",
    icon: Vote,
  },
  {
    title: "Pembentukan IKASA",
    description:
      "Menetapkan organisasi IKASA beserta struktur kepengurusan definitif.",
    icon: Building2,
  },
  {
    title: "Pelantikan Pengurus",
    description:
      "Melantik pengurus terpilih sebagai awal berjalannya organisasi.",
    icon: Award,
  },
  {
    title: "Pendampingan",
    description:
      "BPRI mendampingi masa transisi hingga organisasi berjalan secara stabil.",
    icon: Rocket,
  },
];

export default function Timeline() {
  return (
    <section className="bg-red-50 py-14">
      <Container>

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700">
            Mekanisme Kerja
          </span>

          <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
            Tahapan Revitalisasi IKASA
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Proses revitalisasi dilaksanakan secara bertahap agar pembentukan
            IKASA berlangsung sistematis, transparan, dan berkelanjutan.
          </p>

        </div>

        <div className="relative mx-auto max-w-4xl">

          <div className="absolute left-7 top-0 h-full w-1 rounded bg-red-200" />

          <div className="space-y-12">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  className="relative flex gap-8"
                >
                  <div className="z-10 flex h-14 w-14 items-center justify-center rounded-full bg-red-700 text-white shadow-lg">
                    <Icon size={24} />
                  </div>

                  <div className="flex-1 rounded-3xl bg-white p-8 shadow-sm transition hover:shadow-xl">

                    <span className="text-sm font-semibold text-red-700">
                      Tahap {index + 1}
                    </span>

                    <h3 className="mt-2 text-2xl font-bold">
                      {step.title}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-600">
                      {step.description}
                    </p>

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>

      </Container>
    </section>
  );
}