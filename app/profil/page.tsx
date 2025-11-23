"use client";

import Image from "next/image";

export default function ProfilPage() {
  return (
    <div className="text-gray-900">

      {/* TITLE */}
      <h1 className="text-3xl font-bold mb-6">Profil Saya</h1>

      {/* PROFILE CARD */}
      <div className="bg-white p-6 rounded-3xl shadow-lg mb-12 flex items-center gap-5 hover:shadow-xl transition">
        <Image
          src="/logo.jpg"
          alt="User Avatar"
          width={72}
          height={72}
          className="rounded-full"
        />

        <div>
          <h2 className="text-xl font-semibold">Plorers</h2>
          <p className="text-gray-500 text-sm">Pengguna aktif sejak 2021</p>
        </div>
      </div>

      {/* CATEGORY / TIMELINE */}
      <div className="grid grid-cols-3 gap-5 mt-10 mb-16">

        {/* CARD 1 */}
        <div className="bg-white p-6 rounded-3xl shadow-md text-center hover:shadow-xl transition">
          <h1 className="text-4xl font-bold text-orange-600">18</h1>
          <h3 className="mt-3 font-semibold text-lg">Berita Ditonton</h3>
          <p className="text-sm text-gray-500 mt-1">
            Daftar berita yang pernah kamu lihat.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="bg-white p-6 rounded-3xl shadow-md text-center hover:shadow-xl transition">
          <h1 className="text-4xl font-bold text-orange-600">7</h1>
          <h3 className="mt-3 font-semibold text-lg">Berita Disimpan</h3>
          <p className="text-sm text-gray-500 mt-1">
            Berita favorit yang kamu tandai untuk dibaca lagi.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="bg-white p-6 rounded-3xl shadow-md text-center hover:shadow-xl transition">
          <h1 className="text-3xl font-bold text-orange-600">Hotel</h1>
          <h3 className="mt-3 font-semibold text-lg">Top Kategori</h3>
          <p className="text-sm text-gray-500 mt-1">
            Kamu sering membaca berita tentang hotel & penginapan.
          </p>
        </div>

      </div>

      {/* HISTORY SECTION */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Riwayat Berita</h2>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <p className="text-gray-600 text-sm mb-4">
            Berikut beberapa berita terbaru yang sudah kamu lihat:
          </p>

          <ul className="space-y-3 text-sm">
            <li className="pb-2 border-b text-gray-700">
              • 10 Rekomendasi Hotel Murah di Bali untuk Liburan
            </li>
            <li className="pb-2 border-b text-gray-700">
              • Fakta Unik Gunung Bromo yang Harus Kamu Tahu
            </li>
            <li className="pb-2 border-b text-gray-700">
              • Restoran Viral dengan Menu Nusantara Terbaik
            </li>
            <li className="text-gray-700">
              • Museum Baru di Jakarta yang Sedang Hits
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
}
