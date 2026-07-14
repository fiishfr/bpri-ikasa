import { ArrowRight, Building2, Flag, Target, Users } from "lucide-react";

import Container from "@/components/layout/Container";

export default function TentangPage() {
  return (
    <>
      {/* HERO */}

      <section className="bg-linear-to-br from-red-700 via-red-600 to-red-700 py-32 text-white">
        <Container>
          <span className="rounded-full bg-white/20 px-4 py-2">
            Tentang BPRI IKASA
          </span>

          <h1 className="mt-8 text-6xl font-bold">
            Mengenal
            <br />
            BPRI IKASA
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-red-50">
            Badan Percepatan Revitalisasi IKASA merupakan badan transisi yang
            dibentuk sebagai langkah strategis untuk menghidupkan kembali
            organisasi alumni SMAIT Al Irsyad Purwokerto.
          </p>
        </Container>
      </section>

      {/* LATAR BELAKANG */}

      <section className="py-20">
        <Container>
          <div className="grid items-center gap-20 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase text-red-700">
                Latar Belakang
              </span>

              <h2 className="mt-4 text-4xl font-bold">
                Mengapa BPRI Dibentuk?
              </h2>

              <p className="mt-8 leading-8 text-justify text-slate-600">
                Perubahan lingkungan pendidikan dan organisasi menuntut adanya
                wadah alumni yang mampu menghubungkan potensi, pengalaman, serta
                kontribusi alumni secara lebih terarah. Tanpa adanya organisasi
                yang jelas dan aktif, banyak ide maupun kemampuan individu yang
                akhirnya tidak berkembang secara maksimal. Hal ini menjadi salah
                satu alasan penting perlunya sebuah wadah yang dapat
                menghubungkan potensi tersebut dalam satu gerakan bersama.
              </p>

              <p className="mt-8 leading-8 text-justify text-slate-600">
                IKASA hadir sebagai bentuk inisiatif untuk menjawab kebutuhan
                tersebut. Organisasi ini dibentuk bukan hanya sebagai tempat
                berkumpul, tetapi juga sebagai ruang untuk saling belajar,
                berbagi pengalaman, dan mengembangkan diri. Melalui IKASA,
                diharapkan setiap anggota memiliki kesempatan yang sama untuk
                tumbuh, baik dalam hal kepemimpinan, kerja sama, maupun tanggung
                jawab dalam menjalankan kegiatan.
              </p>

              <p className="mt-8 leading-8 text-justify text-slate-600">
                Badan Percepatan Revitalisasi IKASA (BPRI IKASA) merupakan tim
                kerja transisi yang dibentuk sebagai upaya strategis untuk
                menghidupkan kembali Ikatan Alumni Sekolah (IKASA) agar kembali
                aktif, terarah, dan memberikan manfaat nyata bagi alumni, siswa,
                serta sekolah. Kehadiran IKASA sebagai wadah alumni memiliki
                potensi besar dalam membangun jejaring, memperkuat solidaritas,
                serta membuka ruang kontribusi yang lebih luas, namun dalam
                perjalanannya belum terkelola secara optimal.
              </p>

              <p className="mt-8 leading-8 text-justify text-slate-600">
                Oleh karena itu, diperlukan sebuah badan khusus yang mampu
                menjadi motor penggerak awal dalam proses revitalisasi, mulai
                dari tahap analisis, perumusan, hingga implementasi pembentukan
                IKASA secara resmi. BPRI IKASA hadir bukan hanya sebagai
                pelaksana teknis, tetapi sebagai pengarah awal yang memastikan
                bahwa IKASA dapat dibangun kembali secara lebih sistematis,
                terstruktur, dan berkelanjutan.
              </p>
            </div>

            <div className="rounded-[40px] bg-red-50 p-12">
              <Building2 size={460} className="text-red-700" />
            </div>
          </div>
        </Container>
      </section>

      {/* TUJUAN */}

      <section className="bg-red-50 py-20">
        <Container>
          <div className="text-center">
            <span className="rounded-full bg-red-100 px-4 py-2 text-sm text-red-700">
              Tujuan Pembentukan
            </span>

            <h2 className="mt-6 text-5xl font-bold">Apa yang Ingin Dicapai?</h2>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow">
              <Target size={42} className="text-red-700" />

              <h3 className="mt-6 text-2xl font-bold">Revitalisasi IKASA</h3>

              <p className="mt-4 leading-7 text-slate-600">
                Menghidupkan kembali organisasi alumni agar aktif, profesional,
                dan berkelanjutan.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow">
              <Users size={42} className="text-red-700" />

              <h3 className="mt-6 text-2xl font-bold">Menghubungkan Alumni</h3>

              <p className="mt-4 leading-7 text-slate-600">
                Membangun komunikasi dan kolaborasi lintas angkatan.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow">
              <Flag size={42} className="text-red-700" />

              <h3 className="mt-6 text-2xl font-bold">Tata Kelola</h3>

              <p className="mt-4 leading-7 text-slate-600">
                Menyusun AD/ART, struktur organisasi, serta sistem kerja IKASA.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow">
              <ArrowRight size={42} className="text-red-700" />

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

      <section className="py-18">
        <Container>
          <div className="mx-auto max-w-5xl rounded-[40px] bg-linear-to-r from-red-700 to-red-700 p-16 text-center text-white">
            <h2 className="text-4xl font-bold">Visi BPRI</h2>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9">
              Mengakselerasi terwujudnya IKASA sebagai organisasi alumni yang
              memiliki tata kelola yang baik, jejearing yang kuat, serta mampu
              memberikan manfaat bagi alumni, sekolah, dan masyarakat.
            </p>

            <h2 className="mt-8 text-4xl font-bold">Misi BPRI</h2>

            <ul className="mx-auto mt-8 max-w-3xl text-xl leading-9">
              <li>1. Membangun dan memperkuat jejaring alumni.</li>
              <li>2. Menyusun fondasi tata kelola IKASA.</li>
              <li>3. Memfasilitasi proses revitalisasi organisasi.</li>
              <li>4. Mengembangkan sistem kerja dan basis data alumni.</li>
              <li>
                5. Mengawal proses transisi menuju IKASA yang mandiri dan
                berkelanjutan.
              </li>
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
