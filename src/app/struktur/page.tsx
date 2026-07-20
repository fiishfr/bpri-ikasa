import Container from "@/components/layout/Container";
import {
  Crown,
  Brain,
  Landmark,
  Database,
  Rocket,
  Shield,
  User,
} from "lucide-react";

const protectors = [
  "Juveno Prasojo",
  "Bima Maulana Wisdom",
  "Falih",
  "Humam Basri",
];

const chairman = {
  name: "Ahmad Fadhil Arifin",
};

const secretary = {
  name : "Muhammad Verrel Rayan",
}

const divisions = [
  {
    title: "Analisis Strategis",
    icon: Brain,
    description:
      "Melakukan analisis kondisi organisasi dan menyusun rekomendasi revitalisasi.",
    members: ["Ahadian Nur Fauzi", "Destanta Arief", "Faza Cetta Setiawan"],
  },
  {
    title: "Perumusan & Tata Kelola",
    icon: Landmark,
    description:
      "Menyusun AD/ART, struktur organisasi, dan sistem tata kelola IKASA.",
    members: ["Prabaswara Dafa Setiawan", "Qanita Rafa Santoso", "Keyza Queena Agni Wimala", "Faiz Rajendra Putra Hartono"],
  },
  {
    title: "Data & Jejaring Alumni",
    icon: Database,
    description:
      "Membangun database alumni dan memperkuat komunikasi lintas angkatan.",
    members: ["Muhammad Ardhi Bagus Al-Jundi","Muhammad Emrey Zhafran", "Fikri Athillah Fauzani", "Azkia Muthia Raudha", "Azka Fadhlih Somantri","Fadlin Ghalizha Rizqo Santosa"],
  },
  {
    title: "Transisi & Implementasi",
    icon: Rocket,
    description:
      "Mengawal pembentukan IKASA hingga pelantikan kepengurusan definitif.",
    members: ["Nico Waluyo Dinatha", "Muhammad Luthfi Shofari", "Anindya Khanza Rosita", "Nismara Kausarani Imanda", "Vania Aishanajdah Anindya","Muhammad Fadli Keiren", "Arvan Ramdhani", "Muhammad Zaidan Farras"],
  },
];

function PositionCard({
  icon: Icon,
  title,
  subtitle,
  name,
}: {
  icon: React.ComponentType<Record<string, unknown>>;
  title: string;
  subtitle: string;
  name: string;
}) {
  return (
    <div className="rounded-3xl border bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100 text-red-700">
        <Icon size={30} />
      </div>

      <h3 className="mt-6 text-2xl font-bold">{title}</h3>

      <p className="mt-2 text-slate-500">{subtitle}</p>

      <div className="mt-6 rounded-2xl border border-dashed bg-slate-50 p-4 font-semibold text-slate-700">
        {name}
      </div>
    </div>
  );
}

export default function StrukturPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-linear-to-r from-red-700 to-red-700 py-44 text-white">
        <Container>
          <span className="rounded-full bg-white/20 px-4 py-2">
            Struktur Organisasi
          </span>

          <h1 className="mt-8 text-5xl font-bold">Struktur BPRI IKASA</h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-red-50">
            Struktur organisasi BPRI IKASA dirancang untuk mendukung proses
            revitalisasi secara efektif melalui pembagian peran dan tanggung
            jawab yang jelas.
          </p>
        </Container>
      </section>

      {/* Pelindung */}
      <section className="py-16">
        <Container>
          <div className="flex flex-col items-center">
            {/* Pelindung */}
            <div className="w-full max-w-3xl rounded-3xl border bg-white p-8 shadow-sm">
              <div className="flex flex-col items-center text-center">
                <div className="rounded-2xl bg-red-100 p-4 text-red-700">
                  <Shield size={28} />
                </div>

                <h2 className="mt-4 text-2xl font-bold">Pelindung</h2>

                <p className="mt-2 text-slate-500">
                  Dewan Pelindung BPRI IKASA
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {protectors.map((person) => (
                  <div
                    key={person}
                    className="rounded-2xl border bg-slate-50 px-6 py-4 text-center font-medium transition hover:border-red-200 hover:bg-red-50"
                  >
                    {person}
                  </div>
                ))}
              </div>
            </div>

            {/* Garis Penghubung */}
            <div className="h-12 w-px bg-red-300" />

            {/* Titik */}
            <div className="h-3 w-3 rounded-full bg-red-600" />

            {/* Ketua */}
            <div className="mt-6 w-full max-w-md rounded-3xl border bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100 text-red-700">
                <Crown size={30} />
              </div>

              <h3 className="mt-6 text-2xl font-bold">Ketua BPRI</h3>

              <p className="mt-2 text-slate-500">Koordinator Revitalisasi</p>

              <div className="mt-6 rounded-2xl border border-dashed bg-slate-50 p-4 font-semibold">
                {chairman.name}
              </div>
            </div>

            {/* Garis Penghubung */}
            <div className="h-12 w-px bg-red-300" />

            {/* Titik */}
            <div className="h-3 w-3 rounded-full bg-red-600" />

             {/* Sekretaris */}
            <div className="mt-6 w-full max-w-md rounded-3xl border bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100 text-red-700">
                <Crown size={30} />
              </div>

              <h3 className="mt-6 text-2xl font-bold">Sekretaris BPRI</h3>

              <p className="mt-2 text-slate-500">Notulen Revitalisasi</p>

              <div className="mt-6 rounded-2xl border border-dashed bg-slate-50 p-4 font-semibold">
                {secretary.name}
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* Satuan Kerja */}
      <section className="bg-slate-50 pt-5 pb-20">
        <Container>
          <div className="text-center">
            <h2 className="text-4xl font-bold">Empat Satuan Kerja</h2>

            <p className="mt-4 text-slate-600">
              Seluruh kegiatan revitalisasi dijalankan oleh empat satuan kerja.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {divisions.map((division) => {
              const Icon = division.icon;

              return (
                <div
                  key={division.title}
                  className="rounded-3xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex items-center gap-5">
                    <div className="rounded-2xl bg-red-100 p-4 text-red-700">
                      <Icon size={30} />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold">{division.title}</h3>
                    </div>
                  </div>

                  <p className="mt-6 leading-7 text-slate-600">
                    {division.description}
                  </p>

                  <div className="mt-8 border-t pt-6">
                    <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500">
                      Anggota
                    </h4>

                    <div className="space-y-3">
                      {division.members.map((member) => (
                        <div
                          key={member}
                          className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3 transition hover:bg-red-50"
                        >
                          <div className="rounded-full bg-red-100 p-2 text-red-700">
                            <User size={16} />
                          </div>

                          <span className="font-medium text-slate-700">
                            {member}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
