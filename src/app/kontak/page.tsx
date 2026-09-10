"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Send, MessageSquare } from "lucide-react";

export default function KontakPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("loading");
    setTimeout(() => {
      setFormStatus("success");
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <div className="pt-24 pb-24 bg-[var(--color-cream)] min-h-screen">
      <div className="container-custom max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-forest-900)] mb-6">Hubungi Kami</h1>
          <p className="text-lg text-gray-600">
            Punya Pertanyaan? Silakan hubungi pengurus koperasi melalui kontak di bawah ini atau kunjungi kantor kami.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Informasi Kontak */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-6">
              <div className="w-14 h-14 bg-[var(--color-palm-50)] text-[var(--color-palm-600)] rounded-2xl flex items-center justify-center shrink-0">
                <MapPin className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--color-forest-900)] mb-2">Kantor Pusat</h3>
                <p className="text-gray-600 leading-relaxed">
                  Desa Suka Agung<br />
                  Kecamatan Way Serdang<br />
                  Kabupaten Mesuji, Lampung<br />
                  Indonesia
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-6">
              <div className="w-14 h-14 bg-[var(--color-palm-50)] text-[var(--color-palm-600)] rounded-2xl flex items-center justify-center shrink-0">
                <Phone className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--color-forest-900)] mb-2">Telepon / WhatsApp</h3>
                <p className="text-gray-600 mb-4">Senin - Jumat, 08:00 - 16:00 WIB</p>
                <a href="https://wa.me/6282214632142" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full font-semibold hover:bg-[#20bd5a] transition-colors">
                  <MessageSquare className="w-5 h-5" /> 0822 1463 2142
                </a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-6">
              <div className="w-14 h-14 bg-[var(--color-palm-50)] text-[var(--color-palm-600)] rounded-2xl flex items-center justify-center shrink-0">
                <Mail className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--color-forest-900)] mb-2">Email</h3>
                <p className="text-gray-600 mb-2">Untuk keperluan administrasi & kerja sama</p>
                <a href="mailto:agrobinatanilestari@gmail.co.id" className="text-[var(--color-palm-600)] font-semibold hover:underline">
                  agrobinatanilestari@gmail.co.id
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
            <h2 className="text-2xl font-bold text-[var(--color-forest-900)] mb-6">Kirim Pesan</h2>
            
            {formStatus === "success" && (
              <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-xl border border-green-200 font-medium">
                Pesan Anda telah berhasil dikirim. Kami akan membalas secepatnya.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="nama" className="block text-sm font-semibold text-gray-700">Nama Lengkap</label>
                <input required type="text" id="nama" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[var(--color-palm-500)] outline-none transition-all bg-gray-50/50" />
              </div>
              <div className="space-y-2">
                <label htmlFor="kontak" className="block text-sm font-semibold text-gray-700">Email / WhatsApp</label>
                <input required type="text" id="kontak" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[var(--color-palm-500)] outline-none transition-all bg-gray-50/50" />
              </div>
              <div className="space-y-2">
                <label htmlFor="pesan" className="block text-sm font-semibold text-gray-700">Pesan</label>
                <textarea required id="pesan" rows={5} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[var(--color-palm-500)] outline-none transition-all bg-gray-50/50 resize-none" />
              </div>
              <button
                type="submit"
                disabled={formStatus === "loading"}
                className="w-full bg-[var(--color-forest-800)] hover:bg-[var(--color-forest-700)] text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors disabled:opacity-70"
              >
                {formStatus === "loading" ? "Mengirim..." : <><Send className="w-5 h-5" /> Kirim Pesan</>}
              </button>
            </form>
          </div>
        </div>

        {/* Google Maps Placeholder */}
        <div className="w-full h-[400px] bg-gray-200 rounded-3xl overflow-hidden relative border border-gray-300 flex items-center justify-center">
          <div className="text-center p-6">
            <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 font-medium text-lg">Peta Lokasi Interaktif</p>
            <p className="text-gray-400 text-sm">Menampilkan koordinat Desa Suka Agung, Mesuji, Lampung</p>
          </div>
        </div>
      </div>
    </div>
  );
}
