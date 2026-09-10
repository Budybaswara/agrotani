import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, Users, ShieldCheck, Target, TrendingUp } from "lucide-react";

export const metadata = {
  title: "Tentang Kami | Koperasi Agro Binatani Lestari",
  description: "Sejarah, visi, misi, dan nilai-nilai Koperasi Agro Binatani Lestari.",
};

export default function TentangPage() {
  return (
    <div className="pt-24 pb-16 bg-[var(--color-cream)]">
      {/* Hero Section */}
      <section className="container-custom mb-20">
        <div className="bg-[var(--color-forest-900)] rounded-3xl p-10 md:p-16 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image src="/hero-plantation.png" alt="Background" fill className="object-cover" />
          </div>
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sejarah & Dedikasi Kami</h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Berdiri sejak tahun 2026, Koperasi Agro Binatani Lestari hadir sebagai wujud semangat gotong royong masyarakat Desa Suka Agung dalam mengelola potensi agribisnis daerah secara profesional dan berkelanjutan.
            </p>
          </div>
        </div>
      </section>

      {/* Visi Misi */}
      <section className="container-custom mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[var(--color-forest-900)] mb-6">Visi & Misi</h2>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[var(--color-gold-500)] text-white rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--color-forest-800)]">Visi</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Menjadi koperasi agribisnis terkemuka dan mandiri yang mampu meningkatkan taraf hidup anggota serta menjadi pilar utama penggerak ekonomi Desa Suka Agung dan sekitarnya.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[var(--color-palm-600)] text-white rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--color-forest-800)]">Misi</h3>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold-500)] mt-2 shrink-0" />
                  <span>Meningkatkan produktivitas hasil panen anggota melalui edukasi dan penyediaan sarana pertanian yang berkualitas.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold-500)] mt-2 shrink-0" />
                  <span>Mengelola unit-unit usaha secara profesional, transparan, dan akuntabel.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold-500)] mt-2 shrink-0" />
                  <span>Membangun ekosistem ekonomi sirkular dari hulu ke hilir untuk meminimalisir limbah dan memaksimalkan nilai tambah.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold-500)] mt-2 shrink-0" />
                  <span>Memperluas jaringan kemitraan dengan berbagai pihak untuk memastikan stabilitas harga jual hasil panen.</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-xl">
             <Image src="/jual-beli-sawit.png" alt="Aktivitas Koperasi" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Nilai-nilai */}
      <section className="container-custom">
        <h2 className="text-3xl font-bold text-center text-[var(--color-forest-900)] mb-12">Nilai Inti Koperasi</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Users, title: "Gotong Royong", desc: "Solidaritas dan kerja sama yang kuat antar anggota untuk mencapai tujuan bersama." },
            { icon: ShieldCheck, title: "Transparansi", desc: "Keterbukaan informasi dan pengelolaan keuangan yang akuntabel kepada seluruh anggota." },
            { icon: Target, title: "Kemandirian", desc: "Kemampuan berdiri di atas kaki sendiri dalam mengelola sumber daya dan mengambil keputusan." },
            { icon: TrendingUp, title: "Produktivitas", desc: "Optimalisasi sumber daya untuk mencapai hasil yang maksimal secara efisien." },
            { icon: Leaf, title: "Keberlanjutan", desc: "Praktik bisnis yang ramah lingkungan dan memperhatikan masa depan generasi penerus." },
          ].map((item, idx) => {
             const Icon = item.icon;
             return (
               <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-1 transition-transform">
                 <div className="w-14 h-14 bg-[var(--color-cream-dark)] rounded-xl flex items-center justify-center mb-6 text-[var(--color-palm-600)]">
                   <Icon className="w-7 h-7" />
                 </div>
                 <h3 className="text-xl font-bold text-[var(--color-forest-900)] mb-3">{item.title}</h3>
                 <p className="text-gray-600 leading-relaxed">{item.desc}</p>
               </div>
             )
          })}
        </div>
      </section>

      <div className="mt-20 text-center">
        <Link href="/organisasi" className="bg-[var(--color-forest-800)] hover:bg-[var(--color-forest-700)] text-white px-8 py-4 rounded-full font-semibold transition-colors inline-flex items-center gap-2">
          Lihat Struktur Organisasi <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
