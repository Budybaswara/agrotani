import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getBeritaBySlug, getSemuaBerita } from "@/lib/berita";
import { Calendar, Tag, ArrowLeft } from "lucide-react";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const berita = getBeritaBySlug(params.slug);
  if (!berita) return { title: "Berita Tidak Ditemukan" };

  return {
    title: `${berita.judul} | Koperasi Agro Binatani Lestari`,
    description: berita.excerpt,
  };
}

export async function generateStaticParams() {
  const berita = getSemuaBerita();
  return berita.map((b) => ({
    slug: b.slug,
  }));
}

export default function DetailBeritaPage({ params }: { params: { slug: string } }) {
  const berita = getBeritaBySlug(params.slug);

  if (!berita) {
    notFound();
  }

  return (
    <div className="pt-24 pb-24 bg-[var(--color-cream)] min-h-screen">
      <div className="container-custom max-w-4xl">
        <Link href="/berita" className="inline-flex items-center gap-2 text-gray-500 hover:text-[var(--color-palm-600)] transition-colors mb-10 font-medium">
          <ArrowLeft className="w-5 h-5" /> Kembali ke Indeks Berita
        </Link>
        
        <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
          <div className="relative h-64 md:h-[400px] w-full">
            <Image 
              src={berita.coverImage} 
              alt={berita.judul} 
              fill 
              className="object-cover" 
              priority
            />
          </div>
          
          <div className="p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
              <div className="flex items-center gap-2 bg-[var(--color-cream-dark)] px-3 py-1.5 rounded-full text-[var(--color-forest-900)] font-medium">
                <Tag className="w-4 h-4" />
                {berita.kategori}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{berita.tanggal}</span>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-[var(--color-forest-900)] mb-8 leading-tight">
              {berita.judul}
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-xl text-gray-600 font-medium mb-8 leading-relaxed border-l-4 border-[var(--color-gold-500)] pl-6">
                {berita.excerpt}
              </p>
              
              <div className="whitespace-pre-wrap">
                {berita.content}
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
