"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import {
  Brain,
  Landmark,
  Database,
  Rocket,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import Container from "@/components/layout/Container";

const workUnits = [
  {
    title: "Analisis Strategis",
    icon: Brain,
    color: "from-red-500 to-red-600",
    tasks: [
      "Analisis kondisi IKASA",
      "Identifikasi permasalahan",
      "Pemetaan kebutuhan alumni",
      "Perumusan rekomendasi",
    ],
    description:
      "Melakukan kajian menyeluruh terhadap kondisi organisasi sebagai dasar penyusunan strategi revitalisasi.",
  },
  {
    title: "Perumusan & Tata Kelola",
    icon: Landmark,
    color: "from-blue-500 to-indigo-600",
    tasks: [
      "Penyusunan AD/ART",
      "Visi & Misi",
      "Struktur Organisasi",
      "Sistem Tata Kelola",
    ],
    description:
      "Menyusun seluruh fondasi organisasi agar IKASA memiliki sistem yang profesional dan berkelanjutan.",
  },
  {
    title: "Data & Jejaring Alumni",
    icon: Database,
    color: "from-amber-500 to-orange-500",
    tasks: [
      "Database Alumni",
      "Validasi Data",
      "Pendataan Angkatan",
      "Networking Alumni",
    ],
    description:
      "Mengembangkan basis data alumni yang terintegrasi untuk memperkuat komunikasi lintas angkatan.",
  },
  {
    title: "Transisi & Implementasi",
    icon: Rocket,
    color: "from-violet-600 to-fuchsia-600",
    tasks: [
      "Musyawarah Alumni",
      "Pembentukan IKASA",
      "Pelantikan Pengurus",
      "Pendampingan Awal",
    ],
    description:
      "Mengawal seluruh proses hingga terbentuknya IKASA secara resmi dan berjalan secara efektif.",
  },
];

export default function WorkUnits() {
  return (
    <section className="py-14 bg-white">

      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700">
            Satuan Kerja
          </span>

          <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
            Empat Pilar Revitalisasi IKASA
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Seluruh proses revitalisasi dilaksanakan melalui empat satuan kerja
            yang saling terintegrasi sehingga pembentukan IKASA berjalan secara
            sistematis dan berkelanjutan.
          </p>

        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">

          {workUnits.map((unit, index) => {

            const Icon = unit.icon;

            return (

              <motion.div
                key={unit.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                  duration: .6,
                }}
                className="group overflow-hidden rounded-3xl border bg-white shadow-sm transition-all hover:-translate-y-2 hover:shadow-2xl"
              >

                <div
                  className={`bg-linear-to-r ${unit.color} p-8 text-white`}
                >

                  <div className="flex items-center gap-5">

                    <div className="rounded-2xl bg-white/20 p-4">

                      <Icon size={34} />

                    </div>

                    <div>

                      <h3 className="text-2xl font-bold">

                        {unit.title}

                      </h3>

                    </div>

                  </div>

                </div>

                <div className="p-8">

                  <p className="leading-7 text-slate-600">

                    {unit.description}

                  </p>

                  <div className="mt-8 space-y-4">

                    {unit.tasks.map((task) => (

                      <div
                        key={task}
                        className="flex items-center gap-3"
                      >

                        <CheckCircle2
                          size={18}
                          className="text-red-600"
                        />

                        <span>{task}</span>

                      </div>

                    ))}

                  </div>

                  <Link
                    href="/satuan-kerja"
                    className="mt-10 inline-flex items-center gap-2 font-semibold text-red-700 transition hover:gap-4"
                  >

                    Pelajari Selengkapnya

                    <ArrowRight size={18} />

                  </Link>

                </div>

              </motion.div>

            );

          })}

        </div>

      </Container>

    </section>
  );
}