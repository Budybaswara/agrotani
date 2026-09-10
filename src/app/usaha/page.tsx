import Image from "next/image";
import { ArrowRight, Sprout, ShoppingCart, Landmark, Droplets, Briefcase, Factory, Wheat, Fish, Rabbit, Wrench, Leaf } from "lucide-react";

export const metadata = {
  title: "Unit Usaha | Koperasi Agro Binatani Lestari",
  description: "Ekosistem bisnis terintegrasi Koperasi Agro Binatani Lestari dari hulu ke hilir.",
};

const businessUnits = [
  { name: "Jual Beli Kelapa Sawit", icon: Leaf, featured: true, desc: "Fokus utama koperasi dalam menjembatani petani kelapa sawit dengan pabrik (PKS) untuk memastikan harga Tandan Buah Segar (TBS) yang adil dan transparan." },
  { name: "Waserda", icon: ShoppingCart, desc: "Warung serba ada yang menyediakan kebutuhan pokok sehari-hari bagi anggota koperasi dan masyarakat sekitar dengan harga terjangkau." },
  { name: "Simpan Pinjam", icon: Landmark, desc: "Fasilitas keuangan untuk mendukung permodalan usaha anggota dengan bunga ringan dan proses yang cepat." },
  { name: "Pupuk & Obat Tanaman", icon: Droplets, desc: "Penyediaan sarana produksi pertanian (saprotan) berkualitas seperti pupuk organik, kimia, dan herbisida." },
  { name: "Jasa Kontraktor", icon: Briefcase, desc: "Layanan pengerjaan lahan, pembuatan jalan kebun, dan pembangunan fasilitas penunjang pertanian." },
  { name: "Pengolahan Limbah", icon: Factory, desc: "Pemanfaatan limbah pertanian dan perkebunan untuk diolah menjadi produk bernilai tambah seperti pupuk kompos." },
  { name: "Pertanian", icon: Wheat, desc: "Pengembangan komoditas pertanian pangan dan hortikultura untuk diversifikasi sumber pendapatan." },
  { name: "Perikanan", icon: Fish, desc: "Budi daya perikanan darat (kolam) untuk mendukung ketahanan pangan lokal." },
  { name: "Peternakan", icon: Rabbit, desc: "Budi daya hewan ternak yang terintegrasi dengan ketersediaan pakan dari limbah pertanian." },
  { name: "Bengkel", icon: Wrench, desc: "Layanan perawatan dan perbaikan alat berat serta kendaraan operasional pertanian." },
  { name: "Perkebunan Lainnya", icon: Sprout, desc: "Pengembangan komoditas perkebunan alternatif selain kelapa sawit." },
];

export default function UsahaPage() {
  return (
    <div className="pt-24 pb-24 bg-[var(--color-cream)] min-h-screen">
      <div className="container-custom max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-forest-900)] mb-6">Ekosistem Usaha</h1>
          <p className="text-lg text-gray-600">
            Kami membangun rantai nilai yang terintegrasi dari hulu ke hilir untuk memaksimalkan potensi ekonomi dan kesejahteraan anggota.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businessUnits.map((unit, idx) => {
            const Icon = unit.icon;
            return (
              <div
                key={idx}
                className={`group rounded-3xl p-8 transition-all duration-300 hover:shadow-xl border flex flex-col ${
                  unit.featured 
                    ? "md:col-span-2 lg:col-span-3 bg-[var(--color-forest-900)] text-white border-transparent relative overflow-hidden min-h-[300px]" 
                    : "bg-white border-gray-200 hover:-translate-y-1"
                }`}
              >
                {unit.featured && (
                  <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                    <Image src="/jual-beli-sawit.png" alt="Sawit background" fill className="object-cover" />
                  </div>
                )}
                <div className={`relative z-10 flex-grow flex flex-col ${unit.featured ? 'justify-end' : ''}`}>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shrink-0 ${
                    unit.featured ? "bg-[var(--color-gold-500)] text-white" : "bg-[var(--color-cream-dark)] text-[var(--color-palm-600)]"
                  }`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold mb-3 ${unit.featured ? "text-white text-3xl md:text-4xl" : "text-[var(--color-forest-900)]"}`}>
                      {unit.name}
                    </h3>
                    <p className={`leading-relaxed ${unit.featured ? "text-gray-200 text-lg max-w-2xl" : "text-gray-600 text-sm"}`}>
                      {unit.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
