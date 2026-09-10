"use client";

import { useState } from "react";
import { Search, FileText, Download, Filter } from "lucide-react";

type Dokumen = {
  id: string;
  judul: string;
  kategori: string;
  tanggal: string;
  size: string;
  format: string;
};

const MOCK_DOKUMEN: Dokumen[] = [
  { id: "1", judul: "Akta Pendirian Koperasi Agro Binatani Lestari", kategori: "Dokumen Pendirian", tanggal: "01 Sep 2026", size: "2.4 MB", format: "PDF" },
  { id: "2", judul: "Anggaran Dasar dan Anggaran Rumah Tangga (AD/ART)", kategori: "Anggaran Dasar", tanggal: "02 Sep 2026", size: "1.8 MB", format: "PDF" },
  { id: "3", judul: "Berita Acara Rapat Anggota Pembentukan Koperasi", kategori: "Berita Acara", tanggal: "05 Sep 2026", size: "1.2 MB", format: "PDF" },
  { id: "4", judul: "Formulir Pendaftaran Anggota Baru (Cetak)", kategori: "Dokumen Anggota", tanggal: "10 Sep 2026", size: "500 KB", format: "PDF" },
  { id: "5", judul: "Laporan Rencana Kerja Tahunan 2026-2027", kategori: "Laporan", tanggal: "12 Sep 2026", size: "3.1 MB", format: "PDF" },
];

const KATEGORI = ["Semua", "Dokumen Pendirian", "Berita Acara", "Anggaran Dasar", "Pengumuman", "Laporan", "Dokumen Anggota"];

export default function DokumenClient() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("Semua");

  const filteredDokumen = MOCK_DOKUMEN.filter((doc) => {
    const matchSearch = doc.judul.toLowerCase().includes(search.toLowerCase());
    const matchKategori = activeFilter === "Semua" || doc.kategori === activeFilter;
    return matchSearch && matchKategori;
  });

  return (
    <div className="pt-24 pb-24 bg-[var(--color-cream)] min-h-screen">
      <div className="container-custom max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-forest-900)] mb-6">Pusat Dokumen</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Akses dan unduh dokumen resmi Koperasi Agro Binatani Lestari. Kami menjamin transparansi informasi bagi seluruh anggota.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-10 mb-12">
          <div className="flex flex-col md:flex-row gap-6 mb-8 items-start md:items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:max-w-md">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Cari dokumen..."
                className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-[var(--color-palm-500)] focus:border-[var(--color-palm-500)] transition-all"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            
            {/* Filter Dropdown / Tags (Desktop) */}
            <div className="hidden lg:flex items-center gap-3 w-full justify-end overflow-x-auto pb-2">
              <Filter className="w-5 h-5 text-gray-400 shrink-0" />
              {KATEGORI.map((kat) => (
                <button
                  key={kat}
                  onClick={() => setActiveFilter(kat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    activeFilter === kat 
                      ? 'bg-[var(--color-forest-800)] text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {kat}
                </button>
              ))}
            </div>
            
            {/* Mobile Filter select */}
            <div className="w-full lg:hidden relative">
              <select 
                value={activeFilter}
                onChange={(e) => setActiveFilter(e.target.value)}
                className="w-full pl-4 pr-10 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none appearance-none"
              >
                {KATEGORI.map((kat) => (
                  <option key={kat} value={kat}>{kat}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                <Filter className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>

          {/* List Dokumen */}
          <div className="space-y-4">
            {filteredDokumen.length > 0 ? (
              filteredDokumen.map((doc) => (
                <div key={doc.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 rounded-2xl border border-gray-100 hover:border-[var(--color-palm-300)] hover:shadow-sm transition-all group bg-white">
                  <div className="flex items-start gap-4 mb-4 sm:mb-0">
                    <div className="bg-red-50 text-red-600 p-3 rounded-xl shrink-0">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[var(--color-forest-900)] mb-1 group-hover:text-[var(--color-palm-600)] transition-colors">{doc.judul}</h3>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">
                        <span className="bg-gray-100 px-2.5 py-0.5 rounded-md text-xs font-medium text-gray-600">{doc.kategori}</span>
                        <span>{doc.tanggal}</span>
                        <span className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-gray-300" /> {doc.size}</span>
                        <span className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-gray-300" /> {doc.format}</span>
                      </div>
                    </div>
                  </div>
                  <button className="w-full sm:w-auto bg-gray-50 hover:bg-[var(--color-forest-800)] text-gray-600 hover:text-white p-3 rounded-xl flex items-center justify-center gap-2 transition-colors shrink-0">
                    <Download className="w-5 h-5" /> <span className="sm:hidden font-medium">Unduh Dokumen</span>
                  </button>
                </div>
              ))
            ) : (
              <div className="text-center py-16 bg-gray-50 rounded-2xl border border-gray-100 border-dashed">
                <FileText className="w-12 h-12 mx-auto text-gray-300 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-1">Dokumen Tidak Ditemukan</h3>
                <p className="text-gray-500">Coba ubah kata kunci pencarian atau filter kategori.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
