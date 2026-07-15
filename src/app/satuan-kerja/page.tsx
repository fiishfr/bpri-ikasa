import Container from "@/components/layout/Container";
import {
  Brain,
  Landmark,
  Database,
  Rocket,
  CheckCircle2,
} from "lucide-react";

const divisions = [
  {
    title: "Analisis Strategis",
    icon: Brain,
    color: "from-red-600 to-red-600",
    description:
      " bertugas membaca kondisi IKASA sebelumnya, mengidentifikasi permasalahan yang menyebabkan ketidakaktifan organisasi, serta memetakan kebutuhan alumni, siswa, dan sekolah sebagai dasar perencanaan.",
    duties: [
      "Audit Organisasi IKASA",
      "Kajian Revitalisasi",
      "Penyusunan Blueprint revitalisasi",
    ],
    output: "Dokumen Analisis Strategis",
  },
  {
    title: "Perumusan & Tata Kelola",
    icon: Landmark,
    color: "from-red-600 to-red-600",
    description:
      "berfokus pada penyusunan dasar organisasi yang meliputi AD/ART, struktur organisasi, visi, misi, serta sistem tata kelola IKASA yang lebih terarah dan berkelanjutan.",
    duties: [
      "Penyusunan AD/ART IKASA",
      "Penyusunan Struktur Organisasi",
      "Penyusunan SOP Organisasi",
      "Penyusunan Mekanisme Pemilihan Ketua",
      "Penyusunan Gerak Besar Haluan Organisasi",
      "Penyusunan Roadmap Organisasi",
      "Penyusunan Dokumen Transisi Kepengurusan",
    ],
    output: "Dokumen Administrasi Organisasi IKASA",
  },
  {
    title: "Data & Jejaring Alumni",
    icon: Database,
    color: "from-red-600 to-red-600",
    description:
      "memiliki peran dalam mengumpulkan, mengelola, dan memvalidasi data alumni dari berbagai angkatan, serta membangun konektivitas antar alumni agar tercipta jaringan yang solid dan terintegrasi.",
    duties: [
      "Pendataan Alumni",
      "Mapping Alumni",
      "Pembentukan PIC Angkatan",
      "Silaturahmi Alumni",
    ],
    output: "Jejaring alumni yang kuat dan terintegrasi",
  },
  {
    title: "Transisi & Implementasi",
    icon: Rocket,
    color: "from-red-600 to-red-600",
    description:
      "berperan penting dalam memastikan seluruh proses tidak berhenti pada tahap perencanaan, tetapi berlanjut hingga pembentukan IKASA secara resmi, pelaksanaan musyawarah alumni, pelantikan pengurus, serta pendampingan awal agar organisasi dapat berjalan dengan stabil.",
    duties: [
      "Penyusunan Timeline Implementasi Revitalisasi",
      "Pelaksanaan Forum Alumni untuk Finalisasi Data Kelola IKASA",
      "Musyawarah dan Reuni Alumni Akbar",
      "Serah Terima Organisasi pada saat Musyawarah dan Reuni Alumni Akbar",
      "Rebranding Logo dan Media IKASA",
      "Pembuatan Program Sementara",
      "Pendampingan",
    ],
    output: "IKASA berjalan dengan baik dan berkelanjutan sebelum akhirnya diserahkan sepenuhnya kepada pengurus yang baru.",
  },
];

export default function WorkUnitPage() {
  return (
    <>
      <section className="bg-linear-to-r from-red-700 to-red-700 py-50 lg:py-44 text-white">
        <Container>
          <span className="rounded-full bg-white/20 px-4 py-2">
            Satuan Kerja
          </span>

          <h1 className="mt-8 text-5xl font-bold">
            Empat Pilar Revitalisasi
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-red-50">
            Setiap satuan kerja memiliki fokus yang berbeda namun saling
            melengkapi dalam mewujudkan revitalisasi IKASA secara
            menyeluruh.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container>

          <div className="space-y-12">

            {divisions.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                  className="overflow-hidden rounded-3xl border bg-white shadow-sm"
                >

                  <div className={`bg-linear-to-r ${item.color} p-10 text-white`}>

                    <div className="flex items-center gap-5">

                      <div className="rounded-2xl bg-white/20 p-4">

                        <Icon size={34} />

                      </div>

                      <div>

                        <h2 className="text-3xl font-bold">
                          {item.title}
                        </h2>

                        <p className="mt-2 text-white/80">
                          Satuan Kerja BPRI IKASA
                        </p>

                      </div>

                    </div>

                  </div>

                  <div className="grid gap-10 p-10 lg:grid-cols-2">

                    <div>

                      <h3 className="text-xl font-bold">
                        Deskripsi
                      </h3>

                      <p className="mt-4 leading-8 text-slate-600">
                        {item.description}
                      </p>

                    </div>

                    <div>

                      <h3 className="text-xl font-bold">
                        Tugas Utama
                      </h3>

                      <div className="mt-6 space-y-4">

                        {item.duties.map((duty) => (

                          <div
                            key={duty}
                            className="flex items-center gap-3"
                          >

                            <CheckCircle2
                              size={18}
                              className="text-red-600"
                            />

                            <span>{duty}</span>

                          </div>

                        ))}

                      </div>

                    </div>

                  </div>

                  <div className="border-t bg-slate-50 px-10 py-6">

                    <span className="font-semibold text-red-700">
                      Output:
                    </span>

                    <span className="ml-3">
                      {item.output}
                    </span>

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