import Link from "next/link";
import Image from "next/image";
import { getSemuaBerita } from "@/lib/berita";
import { Calendar, Tag, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Berita & Kegiatan | Koperasi Agro Binatani Lestari",
  description: "Kumpulan berita, pengumuman, dan kegiatan seputar Koperasi Agro Binatani Lestari dan pertanian di Mesuji.",
};

export default function BeritaPage() {
  const berita = getSemuaBerita();

  return (
    <div className="pt-24 pb-24 bg-[var(--color-cream)] min-h-screen">
      <div className="container-custom max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-forest-900)] mb-6">Kabar Agro Binatani</h1>
          <p className="text-lg text-gray-600">
            Ikuti perkembangan terbaru seputar kegiatan koperasi, info pertanian, dan harga komoditas terkini.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-16">
          {["Semua", "Koperasi", "Pertanian", "Kelapa Sawit", "Kegiatan Anggota", "Pengumuman"].map((kategori, idx) => (
            <button key={idx} className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${idx === 0 ? 'bg-[var(--color-forest-800)] text-white' : 'bg-white text-gray-600 border border-gray-200 hover:border-[var(--color-palm-500)] hover:text-[var(--color-palm-600)]'}`}>
              {kategori}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {berita.map((item) => (
            <article key={item.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col group hover:-translate-y-1 transition-transform duration-300">
              <div className="relative h-56 overflow-hidden">
                <Image 
                  src={item.coverImage} 
                  alt={item.judul} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-4 left-4 bg-[var(--color-gold-500)] text-[var(--color-forest-900)] text-xs font-bold px-3 py-1.5 rounded-full">
                  {item.kategori}
                </div>
              </div>
              <div className="p-6 md:p-8 flex-grow flex flex-col">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>{item.tanggal}</span>
                </div>
                <h2 className="text-xl font-bold text-[var(--color-forest-900)] mb-3 leading-tight group-hover:text-[var(--color-palm-600)] transition-colors">
                  <Link href={`/berita/${item.slug}`}>
                    {item.judul}
                  </Link>
                </h2>
                <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
                  {item.excerpt}
                </p>
                <Link href={`/berita/${item.slug}`} className="inline-flex items-center gap-2 font-semibold text-[var(--color-forest-800)] hover:text-[var(--color-palm-600)] transition-colors mt-auto">
                  Baca Selengkapnya <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
