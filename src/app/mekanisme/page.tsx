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
    icon: Database,
    title: "Pengumpulan Data",
    description:
      "Mengumpulkan informasi alumni, data angkatan, serta kondisi organisasi yang telah ada sebagai dasar revitalisasi.",
  },
  {
    icon: Search,
    title: "Analisis Strategis",
    description:
      "Melakukan analisis terhadap kondisi organisasi, tantangan, peluang, dan kebutuhan alumni.",
  },
  {
    icon: FileText,
    title: "Perumusan Organisasi",
    description:
      "Menyusun AD/ART, visi, misi, struktur organisasi, serta mekanisme kerja IKASA.",
  },
  {
    icon: Users,
    title: "Konsolidasi Alumni",
    description:
      "Melakukan komunikasi dan koordinasi dengan alumni dari berbagai angkatan untuk membangun kesepahaman.",
  },
  {
    icon: Vote,
    title: "Musyawarah Alumni",
    description:
      "Forum resmi untuk menetapkan pembentukan organisasi dan memilih kepengurusan.",
  },
  {
    icon: Building2,
    title: "Pembentukan IKASA",
    description:
      "Penetapan organisasi IKASA beserta perangkat organisasi secara resmi.",
  },
  {
    icon: Award,
    title: "Pelantikan Pengurus",
    description:
      "Pengurus terpilih dilantik sebagai awal masa kepengurusan definitif.",
  },
  {
    icon: Rocket,
    title: "Pendampingan",
    description:
      "BPRI melakukan pendampingan hingga organisasi berjalan secara mandiri.",
  },
];

export default function MekanismePage() {
  return (
    <>
      <section className="bg-linear-to-r from-red-700 to-red-700 py-44 text-white">
        <Container>
          <span className="rounded-full bg-white/20 px-4 py-2">
            Mekanisme Revitalisasi
          </span>

          <h1 className="mt-8 text-5xl font-bold">
            Tahapan Pembentukan IKASA
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-red-50">
            Revitalisasi dilakukan secara bertahap mulai dari pendataan,
            analisis, penyusunan organisasi, hingga terbentuknya IKASA
            sebagai organisasi alumni yang resmi.
          </p>
        </Container>
      </section>

      <section className="py-24">
        <Container>

          <div className="relative mx-auto max-w-5xl">

            <div className="absolute left-8 top-0 h-full w-1 rounded bg-red-200" />

            <div className="space-y-10">

              {steps.map((step, index) => {

                const Icon = step.icon;

                return (

                  <div
                    key={step.title}
                    className="relative flex gap-8"
                  >

                    <div className="z-10 flex h-16 w-16 items-center justify-center rounded-full bg-red-700 text-white shadow-lg">

                      <Icon size={28} />

                    </div>

                    <div className="flex-1 rounded-3xl border bg-white p-8 shadow-sm">

                      <span className="text-sm font-semibold text-red-700">
                        Tahap {index + 1}
                      </span>

                      <h2 className="mt-3 text-2xl font-bold">
                        {step.title}
                      </h2>

                      <p className="mt-4 leading-8 text-slate-600">
                        {step.description}
                      </p>

                    </div>

                  </div>

                );

              })}

            </div>

          </div>

        </Container>
      </section>
    </>
  );
}