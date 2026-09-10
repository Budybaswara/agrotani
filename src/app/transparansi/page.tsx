import { Info, Users, Wallet, Target, Factory, FileText } from "lucide-react";

export const metadata = {
  title: "Transparansi | Koperasi Agro Binatani Lestari",
  description: "Transparansi data, statistik, dan program Koperasi Agro Binatani Lestari.",
};

export default function TransparansiPage() {
  return (
    <div className="pt-24 pb-24 bg-[var(--color-cream)] min-h-screen">
      <div className="container-custom max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-forest-900)] mb-6">Transparansi Koperasi</h1>
          <p className="text-lg text-gray-600">
            Kami menjunjung tinggi nilai keterbukaan. Berikut adalah ringkasan data dan perkembangan koperasi saat ini.
          </p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4 flex items-start gap-4 mb-12 shadow-sm">
          <Info className="w-6 h-6 text-[var(--color-gold-500)] shrink-0 mt-0.5" />
          <p className="text-sm text-yellow-800 leading-relaxed font-medium">
            Beberapa data finansial dan operasional rinci saat ini sedang dalam proses digitalisasi. <br className="hidden md:block"/>
            <span className="font-bold">Data akan diperbarui oleh pengurus</span> secara berkala pada sistem di masa mendatang.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Jumlah Anggota */}
          <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full bg-[var(--color-palm-50)] text-[var(--color-palm-600)] flex items-center justify-center mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-gray-500 font-medium mb-1">Jumlah Anggota</h3>
            </div>
            <div className="mt-4">
              <span className="text-4xl font-bold text-[var(--color-forest-900)]">15+</span>
              <span className="text-sm text-gray-400 ml-2">Pendiri</span>
            </div>
          </div>

          {/* Simpanan Anggota */}
          <div className="bg-[var(--color-forest-900)] p-8 rounded-3xl border border-transparent shadow-sm flex flex-col justify-between text-white">
            <div>
              <div className="w-12 h-12 rounded-full bg-white/10 text-[var(--color-gold-400)] flex items-center justify-center mb-6">
                <Wallet className="w-6 h-6" />
              </div>
              <h3 className="text-gray-300 font-medium mb-1">Total Simpanan</h3>
            </div>
            <div className="mt-4">
              <span className="text-3xl font-bold text-white">Menunggu Pembaruan</span>
            </div>
          </div>

          {/* Unit Usaha */}
          <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full bg-[var(--color-palm-50)] text-[var(--color-palm-600)] flex items-center justify-center mb-6">
                <Factory className="w-6 h-6" />
              </div>
              <h3 className="text-gray-500 font-medium mb-1">Unit Usaha Aktif</h3>
            </div>
            <div className="mt-4">
              <span className="text-4xl font-bold text-[var(--color-forest-900)]">11</span>
              <span className="text-sm text-gray-400 ml-2">Sektor Usaha</span>
            </div>
          </div>

          {/* Program Berjalan */}
          <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm flex flex-col justify-between md:col-span-2 lg:col-span-1">
            <div>
              <div className="w-12 h-12 rounded-full bg-[var(--color-palm-50)] text-[var(--color-palm-600)] flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-gray-500 font-medium mb-1">Program Berjalan</h3>
            </div>
            <div className="mt-4">
              <span className="text-4xl font-bold text-[var(--color-forest-900)]">3</span>
              <span className="text-sm text-gray-400 ml-2">Program Utama</span>
            </div>
          </div>

          {/* Dokumen Organisasi */}
          <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm flex flex-col justify-between md:col-span-2 lg:col-span-2">
            <div className="flex items-start justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-[var(--color-palm-50)] text-[var(--color-palm-600)] flex items-center justify-center mb-6">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-gray-500 font-medium mb-2">Legalitas & Dokumen Organisasi</h3>
                <p className="text-gray-900 font-bold text-lg max-w-md">
                  Anggaran Dasar, Akta Pendirian, dan dokumen legalitas sedang dalam proses finalisasi notaris.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
