"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Users,
  CalendarDays,
  GitBranch,
} from "lucide-react";

import Container from "@/components/layout/Container";

const statistics = [
  {
    title: "Satuan Kerja",
    value: "4",
    icon: Building2,
    color: "bg-red-100 text-red-700",
  },
  {
    title: "Tahapan Revitalisasi",
    value: "8",
    icon: GitBranch,
    color: "bg-blue-100 text-blue-700",
  },
  {
    title: "Masa Tugas",
    value: "3-6 Bulan",
    icon: CalendarDays,
    color: "bg-amber-100 text-amber-700",
  },
  {
    title: "Stakeholders",
    value: "Alumni, Siswa, Sekolah",
    icon: Users,
    color: "bg-violet-100 text-violet-700",
  },
];

export default function Statistics() {
  return (
    <section className="bg-red-50 py-12">
      <Container>

        <div className="mb-10 text-center">

          <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700">
            Sekilas BPRI
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Fakta Singkat Revitalisasi
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Beberapa informasi utama mengenai struktur dan proses
            revitalisasi IKASA.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {statistics.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                }}
                className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >

                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl ${item.color}`}
                >
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-4xl font-bold text-slate-900">
                  {item.value}
                </h3>

                <p className="mt-2 text-slate-600">
                  {item.title}
                </p>

              </motion.div>

            );

          })}

        </div>

      </Container>
    </section>
  );
}