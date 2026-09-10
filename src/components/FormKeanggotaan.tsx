"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FormKeanggotaan() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <div className="relative">
      <AnimatePresence>
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute -top-16 left-0 right-0 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-xl flex items-center gap-3 shadow-sm"
          >
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <span className="text-sm font-medium">Pengajuan keanggotaan berhasil dikirim. Kami akan menghubungi WhatsApp Anda.</span>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="nama" className="block text-sm font-semibold text-gray-700">Nama Lengkap</label>
            <input required type="text" id="nama" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[var(--color-palm-500)] focus:border-[var(--color-palm-500)] outline-none transition-all bg-gray-50/50" placeholder="Masukkan nama sesuai KTP" />
          </div>
          <div className="space-y-2">
            <label htmlFor="nik" className="block text-sm font-semibold text-gray-700">NIK</label>
            <input required type="text" id="nik" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[var(--color-palm-500)] focus:border-[var(--color-palm-500)] outline-none transition-all bg-gray-50/50" placeholder="16 digit NIK" />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="alamat" className="block text-sm font-semibold text-gray-700">Alamat Lengkap</label>
          <textarea required id="alamat" rows={3} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[var(--color-palm-500)] focus:border-[var(--color-palm-500)] outline-none transition-all bg-gray-50/50 resize-none" placeholder="Alamat domisili saat ini"></textarea>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="wa" className="block text-sm font-semibold text-gray-700">Nomor WhatsApp</label>
            <input required type="tel" id="wa" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[var(--color-palm-500)] focus:border-[var(--color-palm-500)] outline-none transition-all bg-gray-50/50" placeholder="08xx xxxx xxxx" />
          </div>
          <div className="space-y-2">
            <label htmlFor="pekerjaan" className="block text-sm font-semibold text-gray-700">Pekerjaan</label>
            <input required type="text" id="pekerjaan" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[var(--color-palm-500)] focus:border-[var(--color-palm-500)] outline-none transition-all bg-gray-50/50" placeholder="Petani, Swasta, dll." />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="komoditas" className="block text-sm font-semibold text-gray-700">Komoditas / Usaha (Opsional)</label>
          <input type="text" id="komoditas" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[var(--color-palm-500)] focus:border-[var(--color-palm-500)] outline-none transition-all bg-gray-50/50" placeholder="Contoh: Kelapa Sawit 2 Hektar" />
        </div>

        <div className="space-y-2">
          <label htmlFor="pesan" className="block text-sm font-semibold text-gray-700">Pesan (Opsional)</label>
          <textarea id="pesan" rows={3} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[var(--color-palm-500)] focus:border-[var(--color-palm-500)] outline-none transition-all bg-gray-50/50 resize-none" placeholder="Pesan atau pertanyaan tambahan"></textarea>
        </div>

        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="w-full bg-[var(--color-forest-800)] hover:bg-[var(--color-forest-700)] text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {status === "loading" ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              Kirim Pengajuan Keanggotaan <Send className="w-5 h-5" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
