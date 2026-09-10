import { Check, ShieldCheck, Wallet, Handshake } from "lucide-react";
import FormKeanggotaan from "@/components/FormKeanggotaan";

export const metadata = {
  title: "Keanggotaan | Koperasi Agro Binatani Lestari",
  description: "Menjadi anggota Koperasi Agro Binatani Lestari dan nikmati berbagai manfaatnya.",
};

const manfaat = [
  "Akses program koperasi",
  "Jaringan pemasaran hasil tani",
  "Akses kebutuhan pertanian",
  "Program ekonomi anggota",
  "Informasi koperasi terkini",
  "Partisipasi dalam keputusan koperasi",
];

export default function KeanggotaanPage() {
  return (
    <div className="pt-24 pb-24 bg-[var(--color-cream)] min-h-screen">
      <div className="container-custom max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-forest-900)] mb-6">Menjadi Bagian dari<br/>Agro Binatani</h1>
          <p className="text-lg text-gray-600">
            Bergabunglah bersama kami untuk membangun kemandirian ekonomi dan meningkatkan kesejahteraan keluarga serta masyarakat sekitar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Manfaat & Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-[var(--color-forest-800)] mb-6 flex items-center gap-3">
                <ShieldCheck className="text-[var(--color-gold-500)]" /> Manfaat Anggota
              </h2>
              <ul className="space-y-4">
                {manfaat.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="bg-[var(--color-palm-50)] text-[var(--color-palm-600)] p-1 rounded-full shrink-0 mt-0.5">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[var(--color-forest-900)] text-white p-8 rounded-3xl shadow-sm">
              <h2 className="text-2xl font-bold mb-6 text-[var(--color-gold-400)] flex items-center gap-3">
                <Wallet className="text-[var(--color-gold-500)]" /> Rincian Simpanan
              </h2>
              <div className="space-y-6">
                <div className="flex justify-between items-end border-b border-white/20 pb-4">
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Simpanan Pokok</p>
                    <p className="text-xs text-gray-400 max-w-[200px]">(Dibayarkan 1x saat bergabung)</p>
                  </div>
                  <div className="text-xl font-bold">Rp 5.000.000</div>
                </div>
                <div className="flex justify-between items-end border-b border-white/20 pb-4">
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Simpanan Wajib</p>
                    <p className="text-xs text-gray-400">(Dibayarkan per bulan)</p>
                  </div>
                  <div className="text-xl font-bold">Rp 100.000</div>
                </div>
                <div className="pt-2">
                  <p className="text-sm text-gray-300 italic flex gap-2">
                    <Handshake className="w-5 h-5 shrink-0 text-[var(--color-gold-500)]" />
                    Simpanan adalah modal koperasi yang akan dikelola untuk usaha dan kembali ke anggota dalam bentuk SHU.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Keanggotaan */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
              <div className="mb-8 border-b border-gray-100 pb-6">
                <h2 className="text-3xl font-bold text-[var(--color-forest-900)] mb-2">Ajukan Keanggotaan</h2>
                <p className="text-gray-500">Isi formulir di bawah ini dan kami akan segera menghubungi Anda.</p>
              </div>
              <FormKeanggotaan />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
