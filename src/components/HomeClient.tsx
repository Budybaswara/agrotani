"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sprout, ShoppingCart, Landmark, Droplets, Briefcase, Wrench, Factory, Wheat, Fish, Rabbit, Settings, Leaf } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const businessUnits = [
  { name: "Jual Beli Kelapa Sawit", icon: Leaf, featured: true },
  { name: "Waserda", icon: ShoppingCart },
  { name: "Simpan Pinjam", icon: Landmark },
  { name: "Pupuk & Obat Tanaman", icon: Droplets },
  { name: "Jasa Kontraktor", icon: Briefcase },
  { name: "Pengolahan Limbah", icon: Factory },
  { name: "Pertanian", icon: Wheat },
  { name: "Perikanan", icon: Fish },
  { name: "Peternakan", icon: Rabbit },
  { name: "Bengkel", icon: Wrench },
  { name: "Perkebunan Lainnya", icon: Sprout },
];

export default function HomeClient() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-plantation.png"
            alt="Perkebunan Kelapa Sawit"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-forest-900)]/80 to-[var(--color-forest-900)]/40" />
        </div>

        <div className="container-custom relative z-10 pt-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div variants={fadeIn} className="inline-block bg-[var(--color-gold-500)] text-[var(--color-forest-900)] text-sm font-bold tracking-wider px-3 py-1 rounded-full mb-6">
              KOPERASI INDONESIA &bull; MESUJI LAMPUNG
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 text-balance">
              Tumbuh Bersama,<br />Sejahtera Bersama.
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl text-balance leading-relaxed">
              Membangun ekosistem pertanian dan perkebunan yang produktif, transparan, dan berkelanjutan untuk kesejahteraan anggota dan masyarakat.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-wrap gap-4 mb-16">
              <Link href="/tentang" className="bg-[var(--color-palm-600)] hover:bg-[var(--color-palm-500)] text-white px-8 py-4 rounded-full font-semibold transition-colors flex items-center gap-2">
                Kenali Koperasi
              </Link>
              <Link href="/usaha" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-semibold transition-colors flex items-center gap-2">
                Lihat Unit Usaha <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div variants={fadeIn} className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 border-t border-white/20 pt-8">
              <div>
                <div className="text-3xl font-bold text-white mb-1">15+</div>
                <div className="text-sm text-gray-300">Anggota Pendiri</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">2026</div>
                <div className="text-sm text-gray-300">Tahun Berdiri</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">11+</div>
                <div className="text-sm text-gray-300">Bidang Usaha</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[var(--color-gold-400)] mb-1">Mesuji</div>
                <div className="text-sm text-gray-300">Lampung</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tentang Section */}
      <section className="py-24 bg-[var(--color-cream)]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/jual-beli-sawit.png"
                alt="Aktivitas Perkebunan"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[var(--color-forest-900)]/10" />
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-bold text-[var(--color-forest-900)] mb-6 leading-tight">
                Berakar dari Masyarakat.<br />Tumbuh untuk Masa Depan.
              </motion.h2>
              <motion.p variants={fadeIn} className="text-lg text-gray-700 mb-8 leading-relaxed">
                Agro Binatani Lestari merupakan koperasi modern yang bergerak dalam sektor pertanian, perkebunan, peternakan, dan kegiatan ekonomi produktif lainnya. Kami berdedikasi untuk memajukan potensi daerah dan memberdayakan anggota.
              </motion.p>
              
              <motion.div variants={fadeIn} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                <h3 className="text-xl font-bold text-[var(--color-forest-800)] mb-4">Nilai Utama Koperasi</h3>
                <div className="grid grid-cols-2 gap-4">
                  {["Gotong Royong", "Transparansi", "Kemandirian", "Produktivitas", "Keberlanjutan"].map((nilai, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[var(--color-gold-500)]" />
                      <span className="font-medium text-gray-800">{nilai}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div variants={fadeIn}>
                <Link href="/tentang" className="text-[var(--color-palm-700)] font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                  Pelajari Visi & Misi Kami <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Unit Usaha Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-[var(--color-forest-900)] mb-6"
            >
              Ekosistem Usaha Agro Binatani
            </motion.h2>
            <p className="text-lg text-gray-600">
              Lebih dari sekadar koperasi simpan pinjam, kami membangun ekosistem bisnis terintegrasi dari hulu ke hilir.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessUnits.map((unit, idx) => {
              const Icon = unit.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className={`group rounded-3xl p-8 transition-all duration-300 hover:shadow-xl border ${
                    unit.featured 
                      ? "md:col-span-2 lg:col-span-2 bg-[var(--color-forest-900)] text-white border-transparent relative overflow-hidden" 
                      : "bg-[var(--color-cream)] border-gray-200 hover:-translate-y-1"
                  }`}
                >
                  {unit.featured && (
                    <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                      <Image src="/jual-beli-sawit.png" alt="Sawit background" fill className="object-cover" />
                    </div>
                  )}
                  <div className={`relative z-10 ${unit.featured ? 'h-full flex flex-col justify-end min-h-[200px]' : ''}`}>
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                      unit.featured ? "bg-[var(--color-gold-500)] text-white" : "bg-white text-[var(--color-palm-600)] shadow-sm"
                    }`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className={`text-xl font-bold ${unit.featured ? "text-white text-3xl" : "text-[var(--color-forest-900)]"}`}>
                      {unit.name}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          <div className="mt-12 text-center">
             <Link href="/usaha" className="inline-flex items-center gap-2 font-semibold text-[var(--color-forest-800)] hover:text-[var(--color-palm-600)] transition-colors">
               Lihat detail seluruh unit usaha <ArrowRight className="w-5 h-5" />
             </Link>
          </div>
        </div>
      </section>

      {/* Perkebunan Flow Section */}
      <section className="relative py-32 overflow-hidden bg-[var(--color-forest-900)] text-white">
        <div className="absolute inset-0 opacity-10">
          <Image src="/hero-plantation.png" alt="Background" fill className="object-cover" />
        </div>
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance text-white">
              Dari Kebun,<br />Untuk Kesejahteraan Bersama.
            </h2>
            <p className="text-xl text-gray-300">
              Rantai ekonomi yang transparan memastikan setiap tetes keringat petani terbayar dengan layak.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
            {[
              { title: "Petani", desc: "Perawatan & Panen" },
              { title: "Koperasi", desc: "Pengumpulan & QC" },
              { title: "Mitra", desc: "Pengolahan" },
              { title: "Anggota", desc: "SHU & Kesejahteraan" }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative flex flex-col items-center text-center w-full md:w-1/4"
              >
                <div className="w-20 h-20 rounded-full bg-[var(--color-palm-600)] flex items-center justify-center text-2xl font-bold mb-6 relative z-10 border-4 border-[var(--color-forest-800)] shadow-xl">
                  {idx + 1}
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                <p className="text-gray-400">{step.desc}</p>
                
                {/* Arrow connecting steps */}
                {idx < 3 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-full h-[2px] bg-gradient-to-r from-[var(--color-palm-600)] to-transparent -z-0" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
