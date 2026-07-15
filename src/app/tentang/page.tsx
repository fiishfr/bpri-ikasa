import { ArrowRight, Building2, Flag, Target, Users } from "lucide-react";
import { Eye, CheckCircle2 } from "lucide-react";

import Container from "@/components/layout/Container";

export default function TentangPage() {
  return (
    <>
      {/* HERO */}

      <section className="bg-linear-to-br from-red-700 via-red-600 to-red-700 py-20 md:py-24 lg:py-32 text-white">
        <Container>
          <span className="inline-block rounded-full bg-white/20 px-4 py-2 text-sm md:text-base">
            Tentang BPRI IKASA
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:mt-8 lg:text-6xl">
            Mengenal
            <br />
            BPRI IKASA
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-red-50 sm:text-lg lg:mt-8 lg:text-xl">
            Badan Percepatan Revitalisasi IKASA merupakan badan transisi yang
            dibentuk sebagai langkah strategis untuk menghidupkan kembali
            organisasi alumni SMAIT Al Irsyad Purwokerto.
          </p>
        </Container>
      </section>

      {/* LATAR BELAKANG */}

      <section className="py-14 md:py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <span className="text-sm font-semibold uppercase text-red-700">
                Latar Belakang
              </span>

              <h2 className="mt-3 text-3xl font-bold lg:text-4xl">
                Mengapa BPRI Dibentuk?
              </h2>

              <p className="mt-8 text-sm leading-7 md:text-base md:leading-8 text-justify text-slate-600">
                Perubahan lingkungan pendidikan dan organisasi menuntut adanya
                wadah alumni yang mampu menghubungkan potensi, pengalaman, serta
                kontribusi alumni secara lebih terarah. Tanpa adanya organisasi
                yang jelas dan aktif, banyak ide maupun kemampuan individu yang
                akhirnya tidak berkembang secara maksimal. Hal ini menjadi salah
                satu alasan penting perlunya sebuah wadah yang dapat
                menghubungkan potensi tersebut dalam satu gerakan bersama.
              </p>

              <p className="mt-8 text-sm leading-7 md:text-base md:leading-8 text-justify text-slate-600">
                IKASA hadir sebagai bentuk inisiatif untuk menjawab kebutuhan
                tersebut. Organisasi ini dibentuk bukan hanya sebagai tempat
                berkumpul, tetapi juga sebagai ruang untuk saling belajar,
                berbagi pengalaman, dan mengembangkan diri. Melalui IKASA,
                diharapkan setiap anggota memiliki kesempatan yang sama untuk
                tumbuh, baik dalam hal kepemimpinan, kerja sama, maupun tanggung
                jawab dalam menjalankan kegiatan.
              </p>

              <p className="mt-8 text-sm leading-7 md:text-base md:leading-8 text-justify text-slate-600">
                Badan Percepatan Revitalisasi IKASA (BPRI IKASA) merupakan tim
                kerja transisi yang dibentuk sebagai upaya strategis untuk
                menghidupkan kembali Ikatan Alumni Sekolah (IKASA) agar kembali
                aktif, terarah, dan memberikan manfaat nyata bagi alumni, siswa,
                serta sekolah. Kehadiran IKASA sebagai wadah alumni memiliki
                potensi besar dalam membangun jejaring, memperkuat solidaritas,
                serta membuka ruang kontribusi yang lebih luas, namun dalam
                perjalanannya belum terkelola secara optimal.
              </p>

              <p className="mt-8 text-sm leading-7 md:text-base md:leading-8 text-justify text-slate-600">
                Oleh karena itu, diperlukan sebuah badan khusus yang mampu
                menjadi motor penggerak awal dalam proses revitalisasi, mulai
                dari tahap analisis, perumusan, hingga implementasi pembentukan
                IKASA secara resmi. BPRI IKASA hadir bukan hanya sebagai
                pelaksana teknis, tetapi sebagai pengarah awal yang memastikan
                bahwa IKASA dapat dibangun kembali secara lebih sistematis,
                terstruktur, dan berkelanjutan.
              </p>
            </div>

            <div className="flex items-center justify-center rounded-3xl bg-red-50 p-8 lg:rounded-[40px] lg:p-12">
              <Building2 className="mx-auto h-40 w-40 text-red-700 sm:h-56 sm:w-56 lg:h-115 lg:w-115" />
            </div>
          </div>
        </Container>
      </section>

      {/* TUJUAN */}

      <section className="bg-red-50 py-14 md:py-20">
        <Container>
          <div className="text-center">
            <span className="rounded-full bg-red-100 px-4 py-2 text-sm text-red-700">
              Tujuan Pembentukan
            </span>

            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold">
              Apa yang Ingin Dicapai?
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:gap-8">
            <div className="rounded-3xl bg-white p-8 shadow transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <Target size={36} className="text-red-700" />

              <h3 className="mt-6 text-2xl font-bold">Revitalisasi IKASA</h3>

              <p className="mt-4 leading-7 text-slate-600">
                Menghidupkan kembali organisasi alumni agar aktif, profesional,
                dan berkelanjutan.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <Users size={36} className="text-red-700" />

              <h3 className="mt-6 text-2xl font-bold">Menghubungkan Alumni</h3>

              <p className="mt-4 leading-7 text-slate-600">
                Membangun komunikasi dan kolaborasi lintas angkatan.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <Flag size={36} className="text-red-700" />

              <h3 className="mt-6 text-2xl font-bold">Tata Kelola</h3>

              <p className="mt-4 leading-7 text-slate-600">
                Menyusun AD/ART, struktur organisasi, serta sistem kerja IKASA.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <ArrowRight size={36} className="text-red-700" />

              <h3 className="mt-6 text-2xl font-bold">Organisasi Definitif</h3>

              <p className="mt-4 leading-7 text-slate-600">
                Mengantarkan proses hingga terbentuknya kepengurusan IKASA yang
                resmi.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* VISI */}

      <section className="py-14 md:py-20">
        <Container>
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[32px] bg-linear-to-br from-red-700 via-red-700 to-red-800 shadow-2xl">
            <div className="grid lg:grid-cols-2">
              {/* VISI */}
              <div className="border-b border-white/10 p-8 text-white md:p-12 lg:border-b-0 lg:border-r">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
                  <Eye size={28} />
                </div>

                <span className="mt-6 block text-sm font-semibold uppercase tracking-widest text-red-100">
                  Visi
                </span>

                <h2 className="mt-2 text-3xl font-bold md:text-4xl">
                  Visi BPRI
                </h2>

                <p className="mt-6 text-base leading-8 text-red-50 md:text-lg">
                  Mengakselerasi terwujudnya IKASA sebagai organisasi alumni
                  yang memiliki tata kelola yang baik, jejaring yang kuat, serta
                  mampu memberikan manfaat bagi alumni, sekolah, dan masyarakat.
                </p>
              </div>

              {/* MISI */}
              <div className="bg-white p-8 md:p-12">
                <span className="text-sm font-semibold uppercase tracking-widest text-red-700">
                  Misi
                </span>

                <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
                  Misi BPRI
                </h2>

                <div className="mt-8 space-y-4">
                  {[
                    "Membangun dan memperkuat jejaring alumni.",
                    "Menyusun fondasi tata kelola IKASA.",
                    "Memfasilitasi proses revitalisasi organisasi.",
                    "Mengembangkan sistem kerja dan basis data alumni.",
                    "Mengawal proses transisi menuju IKASA yang mandiri dan berkelanjutan.",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex gap-4 rounded-2xl border border-slate-200 p-4 transition hover:border-red-200 hover:bg-red-50"
                    >
                      <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100">
                        <CheckCircle2 size={18} className="text-red-700" />
                      </div>

                      <p className="leading-7 text-slate-600">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
