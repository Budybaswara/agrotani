export type Berita = {
  id: string;
  slug: string;
  judul: string;
  kategori: string;
  tanggal: string;
  excerpt: string;
  content: string;
  coverImage: string;
};

export const MOCK_BERITA: Berita[] = [
  {
    id: "1",
    slug: "pembentukan-koperasi-agro-binatani-lestari",
    judul: "Pembentukan Koperasi Agro Binatani Lestari di Mesuji",
    kategori: "Koperasi",
    tanggal: "10 September 2026",
    excerpt: "Langkah awal pembentukan koperasi untuk memajukan potensi agribisnis di Desa Suka Agung, Mesuji.",
    content: "Hari ini menjadi hari bersejarah bagi masyarakat Desa Suka Agung, Kecamatan Way Serdang, Kabupaten Mesuji. Setelah melalui serangkaian diskusi dan musyawarah, Koperasi Agro Binatani Lestari resmi dibentuk dengan tujuan utama untuk meningkatkan kesejahteraan petani dan mengelola potensi agribisnis daerah secara lebih profesional.",
    coverImage: "/jual-beli-sawit.png"
  },
  {
    id: "2",
    slug: "harga-sawit-mesuji-menguat",
    judul: "Harga Sawit di Mesuji Mengalami Penguatan Signifikan",
    kategori: "Kelapa Sawit",
    tanggal: "08 September 2026",
    excerpt: "Kabar gembira bagi petani sawit, harga TBS minggu ini tercatat naik mengikuti tren global.",
    content: "Petani kelapa sawit di Mesuji menyambut baik kenaikan harga Tandan Buah Segar (TBS) yang terus menguat minggu ini. Tren positif ini diharapkan dapat terus berlanjut sehingga kesejahteraan petani semakin meningkat. Koperasi Agro Binatani Lestari berkomitmen untuk terus membantu petani mendapatkan harga terbaik dari hasil panen mereka melalui kerja sama dengan pabrik kelapa sawit mitra.",
    coverImage: "/hero-plantation.png"
  },
  {
    id: "3",
    slug: "program-edukasi-pupuk-organik",
    judul: "Sosialisasi Penggunaan Pupuk Organik untuk Lahan Kelapa Sawit",
    kategori: "Kegiatan Anggota",
    tanggal: "05 September 2026",
    excerpt: "Koperasi mengadakan penyuluhan untuk peralihan ke pupuk organik demi menjaga kesuburan tanah jangka panjang.",
    content: "Dalam upaya menjaga keberlanjutan lahan pertanian dan perkebunan, Koperasi Agro Binatani Lestari menyelenggarakan sosialisasi penggunaan pupuk organik bagi para anggotanya. Langkah ini tidak hanya bertujuan untuk menekan biaya produksi, tetapi juga untuk merawat unsur hara tanah agar produktivitas panen kelapa sawit tetap maksimal dalam jangka waktu yang panjang.",
    coverImage: "/jual-beli-sawit.png"
  }
];

export function getSemuaBerita() {
  return MOCK_BERITA;
}

export function getBeritaBySlug(slug: string) {
  return MOCK_BERITA.find((berita) => berita.slug === slug) || null;
}
