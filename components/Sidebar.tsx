"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type SidebarProps = {
  children: ReactNode;
  title: string;
};

export default function Sidebar({ children, title }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <header className="bg-gradient-to-r from-orange-500 to-orange-600 text-white sticky top-0 z-40 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2 ">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.jpg"
              alt="Portal Berita Logo"
              width={40}
              height={40}
              className="rounded-sm"
            />
            <span className="hidden md:block text-2xl text-white font-semibold tracking-tight">
              Explorist
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-lg font-medium tracking-wide">
            <Link href="/" className="hover:text-black transition">Home</Link>
            <Link href="/profil" className="hover:text-black transition">Profil</Link>
            <Link href="/berita" className="hover:text-black transition">Hotnews</Link>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-xl font-bold"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>

      {/* MENU MOBILE */}
      {isOpen && (
        <div className="md:hidden bg-orange-600 text-white px-4 py-3 shadow-sm">
          <nav className="flex flex-col gap-3 text-base">
            <Link href="/" className="hover:text-black transition">Home</Link>
            <Link href="/profil" className="hover:text-black transition">Profil</Link>
            <Link href="/berita" className="hover:text-black transition">Hotnews</Link>
          </nav>
        </div>
      )}

      {/* MAIN CONTENT — tidak boleh ada footer di sini */}
      <main className="max-w-7xl mx-auto px-4 py-3">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">{title}</h2>
        {children}
      </main>

      {/* FOOTER FULL WIDTH */}
       <footer className="mt-12">
  <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-8">

    {/* Container digeser ke kanan supaya tidak mepet kiri */}
    <div className="w-full pl-10 pr-6 grid grid-cols-1 md:grid-cols-3 gap-10">

      {/* BRAND */}
      <div>
        <div className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="Portal Berita Logo"
            width={45}
            height={45}
            className="rounded-md"
          />
          <h2 className="text-xl font-semibold tracking-tight">Explorist</h2>
        </div>

        <p className="text-white/80 mt-3 text-sm leading-relaxed max-w-xs">
          Portal berita modern yang menyajikan informasi singkat, relevan, dan mudah dipahami.
        </p>

        {/* SOCIAL TEXT ONLY */}
        <div className="flex items-center gap-4 mt-4 text-sm text-white/80">
          <span className="hover:text-white cursor-pointer">Facebook</span>
          <span className="hover:text-white cursor-pointer">Instagram</span>
          <span className="hover:text-white cursor-pointer">YouTube</span>
        </div>
      </div>

      {/* NAVIGASI */}
      <div>
        <h3 className="font-semibold text-base mb-3 uppercase tracking-wide">Navigasi</h3>
        <ul className="space-y-1 text-white/80 text-sm">
          <li className="hover:text-white cursor-pointer">Home</li>
          <li className="hover:text-white cursor-pointer">Profil</li>
          <li className="hover:text-white cursor-pointer">Hotnews</li>
        </ul>
      </div>

      {/* CATEGORY */}
      <div>
        <h3 className="font-semibold text-base mb-3 uppercase tracking-wide">Kategori</h3>

        <ul className="space-y-1 text-white/80 text-sm">
          <li className="hover:text-white cursor-pointer">Travel</li>
          <li className="hover:text-white cursor-pointer">Tips</li>
          <li className="hover:text-white cursor-pointer">Hotel</li>
          <li className="hover:text-white cursor-pointer">Food & Drink</li>
          <li className="hover:text-white cursor-pointer">Rekomendasi</li>
          <li className="hover:text-white cursor-pointer">Destinasi Populer</li>
        </ul>
      </div>

    </div>

    {/* LINE */}
    <div className="mt-8 flex justify-center">
      <div className="h-[1px] w-2/3 bg-white/20"></div>
    </div>

    {/* COPYRIGHT */}
    <div className="mt-4 text-center text-white/80 text-xs">
      © {new Date().getFullYear()} Explorist — All Rights Reserved.
    </div>

  </div>
</footer>


    </>
  );
}
