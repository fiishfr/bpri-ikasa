"use client";

import { motion } from "framer-motion";
import {
  Target,
  Landmark,
  Lightbulb,
  Users,
} from "lucide-react";

import Container from "@/components/layout/Container";

const items = [
  {
    icon: Lightbulb,
    title: "Pendahuluan",
    description:
      "BPRI IKASA dibentuk sebagai badan transisi untuk menghidupkan kembali IKASA agar menjadi organisasi alumni yang aktif, terarah, dan berkelanjutan.",
  },
  {
    icon: Target,
    title: "Tujuan",
    description:
      "Mengintegrasikan potensi alumni, membangun database, menyusun tata kelola organisasi, dan mempersiapkan pembentukan IKASA secara resmi.",
  },
  {
    icon: Landmark,
    title: "Kedudukan",
    description:
      "BPRI bersifat sementara dan bertugas menyiapkan seluruh fondasi organisasi sebelum kepengurusan IKASA definitif terbentuk.",
  },
  {
    icon: Users,
    title: "Harapan",
    description:
      "Terbentuknya organisasi alumni yang aktif, solid, profesional, dan mampu memberikan manfaat bagi alumni, siswa, maupun sekolah.",
  },
];

export default function About() {
  return (
    <section className="py-14 bg-white">

      <Container>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700">
            Tentang BPRI IKASA
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Membangun Kembali Semangat Alumni
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Badan Percepatan Revitalisasi IKASA hadir sebagai langkah awal
            untuk membangun kembali organisasi alumni yang lebih terstruktur,
            modern, dan mampu menjadi wadah kolaborasi seluruh alumni SMAIT
            Al Irsyad Al Islamiyyah Purwokerto.
          </p>

        </motion.div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {items.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: .5,
                  delay: index * .1,
                }}
                viewport={{ once: true }}
                className="group rounded-3xl border bg-white p-8 transition hover:-translate-y-2 hover:border-red-600 hover:shadow-xl"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100 text-red-700 transition group-hover:bg-red-700 group-hover:text-white">

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