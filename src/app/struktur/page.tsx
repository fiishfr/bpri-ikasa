import Container from "@/components/layout/Container";
import {
  Crown,
  Shield,
  Users,
  Brain,
  Landmark,
  Database,
  Rocket,
} from "lucide-react";

const divisions = [
  {
    title: "Analisis Strategis",
    icon: Brain,
    description:
      "Melakukan analisis kondisi organisasi dan menyusun rekomendasi revitalisasi.",
  },
  {
    title: "Perumusan & Tata Kelola",
    icon: Landmark,
    description:
      "Menyusun AD/ART, struktur organisasi, dan sistem tata kelola IKASA.",
  },
  {
    title: "Data & Jejaring Alumni",
    icon: Database,
    description:
      "Membangun database alumni dan memperkuat komunikasi lintas angkatan.",
  },
  {
    title: "Transisi & Implementasi",
    icon: Rocket,
    description:
      "Mengawal pembentukan IKASA hingga pelantikan kepengurusan definitif.",
  },
];

function PositionCard({
  icon: Icon,
  title,
  subtitle,
}: {
  icon: any;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="rounded-3xl border bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100 text-red-700">
        <Icon size={30} />
      </div>

      <h3 className="mt-6 text-xl font-bold">
        {title}
      </h3>

      <p className="mt-2 text-slate-500">
        {subtitle}
      </p>

      <div className="mt-6 rounded-xl border border-dashed p-4 text-slate-400">
        Prof. Dr. Ahmad Fadhil Arifin, S.Tr.T., M.T.
      </div>
    </div>
  );
}

export default function StrukturPage() {
  return (
    <>
      <section className="bg-linear-to-r from-red-700 to-red-700 py-44 text-white">
        <Container>

          <span className="rounded-full bg-white/20 px-4 py-2">
            Struktur Organisasi
          </span>

          <h1 className="mt-8 text-5xl font-bold">
            Struktur BPRI IKASA
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-red-50">
            Struktur organisasi BPRI IKASA dirancang untuk mendukung
            proses revitalisasi secara efektif melalui pembagian peran
            dan tanggung jawab yang jelas.
          </p>

        </Container>
      </section>

      <section className="pt-20">
        <Container>

          {/* Ketua */}
          <div className="mx-auto max-w-md">
            <PositionCard
              icon={Crown}
              title="Ketua BPRI"
              subtitle="Koordinator Revitalisasi"
            />
          </div>

        </Container>
      </section>

      <section className="bg-slate-50 py-12">
        <Container>

          <div className="text-center">

            <h2 className="text-4xl font-bold">
              Empat Satuan Kerja
            </h2>

            <p className="mt-4 text-slate-600">
              Seluruh kegiatan revitalisasi dijalankan oleh empat satuan kerja.
            </p>

          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">

            {divisions.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                  className="rounded-3xl bg-white p-8 shadow-sm transition hover:shadow-xl"
                >

                  <div className="flex items-center gap-5">

                    <div className="rounded-2xl bg-red-100 p-4 text-red-700">

                      <Icon size={30} />

                    </div>

                    <div>

                      <h3 className="text-2xl font-bold">
                        {item.title}
                      </h3>

                    </div>

                  </div>

                  <p className="mt-6 leading-7 text-slate-600">
                    {item.description}
                  </p>

                </div>

              );

            })}

          </div>

        </Container>
      </section>
    </>
  );
}