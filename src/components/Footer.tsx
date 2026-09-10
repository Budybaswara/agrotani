import Link from "next/link";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import Image from "next/image";

const navigation = [
  { name: "Tentang", href: "/tentang" },
  { name: "Usaha", href: "/usaha" },
  { name: "Keanggotaan", href: "/keanggotaan" },
  { name: "Berita", href: "/berita" },
  { name: "Dokumen", href: "/dokumen" },
  { name: "Kontak", href: "/kontak" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-forest-900)] text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4 group inline-flex">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/20 bg-white group-hover:border-[var(--color-gold-500)] transition-colors">
                <Image src="/logo.jpg" alt="Logo Koperasi Agro Binatani Lestari" fill className="object-contain" />
              </div>
              <span className="font-bold text-lg tracking-tight">
                AGRO BINATANI<br/><span className="text-sm font-medium opacity-80 leading-none block">LESTARI</span>
              </span>
            </Link>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              "Pertanian &bull; Peternakan &bull; Perkebunan"
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-[var(--color-gold-500)] transition-colors">
                <span className="sr-only">Facebook</span>
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[var(--color-gold-500)] transition-colors">
                <span className="sr-only">Instagram</span>
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[var(--color-gold-500)] transition-colors">
                <span className="sr-only">Twitter</span>
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[var(--color-gold-500)]">Tautan Cepat</h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-lg mb-4 text-[var(--color-gold-500)]">Hubungi Kami</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm leading-relaxed">
                  Desa Suka Agung, Kecamatan Way Serdang<br />
                  Kabupaten Mesuji, Lampung, Indonesia
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-gray-400 shrink-0" />
                <span className="text-gray-300 text-sm">082214632142</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-5 h-5 text-gray-400 shrink-0" />
                <a href="mailto:agrobinatanilestari@gmail.co.id" className="text-gray-300 text-sm hover:text-white transition-colors">
                  agrobinatanilestari@gmail.co.id
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-700/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            &copy; 2026 Koperasi Agro Binatani Lestari. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="/kebijakan-privasi" className="hover:text-white transition-colors">Kebijakan Privasi</Link>
            <Link href="/syarat-ketentuan" className="hover:text-white transition-colors">Syarat & Ketentuan</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
