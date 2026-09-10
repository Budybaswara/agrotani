import { Award, ShieldAlert, BadgeCheck } from "lucide-react";

export const metadata = {
  title: "Struktur Organisasi | Koperasi Agro Binatani Lestari",
  description: "Pengurus dan Badan Pengawas Koperasi Agro Binatani Lestari.",
};

const pengurus = [
  { jabatan: "Ketua", nama: "AMIN ROHMAD", icon: Award },
  { jabatan: "Sekretaris", nama: "BUDI RAHAYU", icon: BadgeCheck },
  { jabatan: "Bendahara", nama: "SUPRIYADI", icon: BadgeCheck },
];

const pengawas = [
  { jabatan: "Ketua", nama: "HARYONO", icon: ShieldAlert },
  { jabatan: "Anggota", nama: "SUPARTO", icon: BadgeCheck },
  { jabatan: "Anggota", nama: "IMRON", icon: BadgeCheck },
];

export default function OrganisasiPage() {
  return (
    <div className="pt-24 pb-24 bg-[var(--color-cream)] min-h-screen">
      <div className="container-custom max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-forest-900)] mb-4">Pengurus Koperasi</h1>
          <p className="text-lg text-gray-600">
            Masa Bakti: <span className="font-semibold text-[var(--color-forest-800)]">5 Tahun</span>
          </p>
        </div>

        {/* Pengurus Section */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-2xl font-bold text-[var(--color-forest-800)] uppercase tracking-wider">Dewan Pengurus</h2>
            <div className="h-px bg-gray-300 flex-grow" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pengurus.map((person, idx) => {
              const Icon = person.icon;
              const isKetua = person.jabatan === "Ketua";
              return (
                <div key={idx} className={`relative p-8 rounded-3xl overflow-hidden shadow-sm border ${isKetua ? 'bg-[var(--color-forest-900)] text-white border-transparent' : 'bg-white text-[var(--color-forest-900)] border-gray-200'}`}>
                  {isKetua && <div className="absolute -right-6 -top-6 text-white/5"><Award className="w-40 h-40" /></div>}
                  <div className="relative z-10">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-16 ${isKetua ? 'bg-[var(--color-gold-500)] text-white' : 'bg-[var(--color-cream-dark)] text-[var(--color-forest-700)]'}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <p className={`text-sm font-semibold uppercase tracking-widest mb-2 ${isKetua ? 'text-[var(--color-gold-400)]' : 'text-[var(--color-palm-600)]'}`}>
                      {person.jabatan}
                    </p>
                    <h3 className="text-2xl font-bold">{person.nama}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Badan Pengawas Section */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-2xl font-bold text-[var(--color-forest-800)] uppercase tracking-wider">Badan Pengawas</h2>
            <div className="h-px bg-gray-300 flex-grow" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pengawas.map((person, idx) => {
              const Icon = person.icon;
              const isKetua = person.jabatan === "Ketua";
              return (
                <div key={idx} className={`relative p-8 rounded-3xl overflow-hidden shadow-sm border ${isKetua ? 'bg-[var(--color-forest-900)] text-white border-transparent' : 'bg-white text-[var(--color-forest-900)] border-gray-200'}`}>
                  {isKetua && <div className="absolute -right-6 -top-6 text-white/5"><ShieldAlert className="w-40 h-40" /></div>}
                  <div className="relative z-10">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-16 ${isKetua ? 'bg-[var(--color-gold-500)] text-white' : 'bg-[var(--color-cream-dark)] text-[var(--color-forest-700)]'}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <p className={`text-sm font-semibold uppercase tracking-widest mb-2 ${isKetua ? 'text-[var(--color-gold-400)]' : 'text-[var(--color-palm-600)]'}`}>
                      {person.jabatan}
                    </p>
                    <h3 className="text-2xl font-bold">{person.nama}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
