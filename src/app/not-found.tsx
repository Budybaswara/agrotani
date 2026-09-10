import Link from "next/link";
import { Leaf, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-cream)] p-6">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 bg-[var(--color-palm-100)] text-[var(--color-palm-600)] rounded-3xl mx-auto flex items-center justify-center mb-8 shadow-sm">
          <Leaf className="w-10 h-10" />
        </div>
        <h1 className="text-6xl font-bold text-[var(--color-forest-900)] mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Halaman Tidak Ditemukan</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Maaf, halaman yang Anda cari mungkin telah dihapus, diubah namanya, atau tidak tersedia untuk sementara waktu.
        </p>
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 bg-[var(--color-forest-800)] hover:bg-[var(--color-forest-700)] text-white font-semibold px-6 py-3 rounded-full transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
