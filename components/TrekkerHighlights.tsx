"use client";

export default function TrekkerHighlights() {
  return (
    <section className="w-full py-13">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
          Spotlight Traveler
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* LEFT — Testimony */}
          <div className="p-6 rounded-3xl bg-white shadow hover:shadow-md transition h-[420px] flex flex-col">
            <div className="flex items-center gap-4 mb-4">
              <img
                src="https://i.pravatar.cc/150?img=32"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-semibold text-gray-900 text-lg">Maria Angelica</h3>
                <p className="text-sm text-gray-500">Manila, Philippines</p>
              </div>
            </div>

            {/* Animated stars */}
            <div className="flex text-yellow-400 text-xl mb-3 animate-pulse">
              ★★★★★
            </div>

            <h4 className="text-lg font-semibold mb-2">
              Menyapa Keindahan Turki Versi AKU
            </h4>

            <p className="text-gray-600 text-sm leading-relaxed overflow-y-auto">
                Impian saya akhirnya tercapai juga mengunjungi Turki dengan pemandangan yang bagus banget
                Dari bangunan kuno sampai naik balon udara yang jujur tinggi banget,
                semua momen benar-benar nggak bakal aku lupain.
                Pokoknya, wajib banget eksplor Turki setidaknya sekali seumur hidup dan jangan 
                lupa cari info dulu di Explorist!
            </p>
          </div>

          {/* CENTER — Main Image */}
          <div className="rounded-3xl overflow-hidden shadow hover:shadow-lg transition h-[420px]">
            <img
              src="/turki.jpg"
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* RIGHT — Image + title + button */}
                    <div className="flex flex-col h-[420px] gap-3">
            <div className="rounded-3xl overflow-hidden shadow hover:shadow-lg transition h-[280px]">
                <img
                src="/bromo.jpg"
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
            </div>

            <p className="text-gray-700 font-medium text-sm">
                Pemandangan Epic dari Gunung Bromo – Malang
            </p>

            <button className="bg-gradient-to-r from-orange-500 to-orange-600
                text-white 
                px-4 py-2 
                rounded-full 
                font-semibold 
                hover:brightness-110 
                transition 
                duration-300 
                shadow w-fit">
              Sorotan Lainnya
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
