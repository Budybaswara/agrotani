"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import Image from "next/image";

const navigation = [
  { name: "Beranda", href: "/" },
  { name: "Tentang", href: "/tentang" },
  { name: "Usaha", href: "/usaha" },
  { name: "Organisasi", href: "/organisasi" },
  { name: "Keanggotaan", href: "/keanggotaan" },
  { name: "Berita", href: "/berita" },
  { name: "Dokumen", href: "/dokumen" },
  { name: "Kontak", href: "/kontak" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-[100] transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <nav
        className="container-custom flex items-center justify-between"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/50 bg-white shadow-sm transition-transform group-hover:scale-105">
              <Image src="/logo.jpg" alt="Logo Koperasi Agro Binatani Lestari" fill className="object-contain" />
            </div>
            <span
              className={clsx(
                "font-bold text-lg tracking-tight transition-colors hidden sm:block",
                isScrolled ? "text-[var(--color-forest-900)]" : "text-white drop-shadow-md"
              )}
            >
              AGRO BINATANI<br/><span className="text-sm font-medium opacity-90 leading-none block">LESTARI</span>
            </span>
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className={clsx(
              "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 transition-colors",
              isScrolled ? "text-gray-700" : "text-white"
            )}
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => {
            const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== "/");
            return (
              <Link
                key={item.name}
                href={item.href}
                className={clsx(
                  "text-sm font-semibold leading-6 transition-colors hover:text-[var(--color-gold-500)]",
                  isScrolled 
                    ? isActive ? "text-[var(--color-forest-800)]" : "text-gray-700"
                    : isActive ? "text-white font-bold" : "text-white/90"
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/keanggotaan"
            className={clsx(
              "text-sm font-semibold leading-6 px-5 py-2.5 rounded-full transition-all duration-300",
              isScrolled
                ? "bg-[var(--color-forest-800)] text-white hover:bg-[var(--color-forest-700)] shadow-sm"
                : "bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm"
            )}
          >
            Gabung Koperasi <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 shadow-xl">
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gray-200">
                    <Image src="/logo.jpg" alt="Logo" fill className="object-contain" />
                  </div>
                  <span className="font-bold text-lg tracking-tight text-[var(--color-forest-900)]">
                    AGRO BINATANI LESTARI
                  </span>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => {
                      const isActive = pathname === item.href;
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={clsx(
                            "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50 transition-colors",
                            isActive ? "text-[var(--color-forest-800)] bg-gray-50" : "text-gray-900"
                          )}
                        >
                          {item.name}
                        </Link>
                      );
                    })}
                  </div>
                  <div className="py-6">
                    <Link
                      href="/keanggotaan"
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white bg-[var(--color-forest-800)] hover:bg-[var(--color-forest-700)] text-center transition-colors"
                    >
                      Gabung Koperasi
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
