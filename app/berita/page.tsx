"use client";

export default function HotNewsPage() {
  const sections = [
    {
      title: "Travel",
      news: [
        {
          topic: "Travel",
          title: "10 Tempat Wajib Dikunjungi Saat Liburan Ke Jepang",
          date: "20 November 2025",
          excerpt:
            "Mulai dari Tokyo hingga Kyoto, berikut destinasi terbaik yang wajib masuk itinerary kamu...",
          img: "/travel1.jpg",
        },
        {
          topic: "Travel",
          title: "Pantai Tersembunyi di Bali yang Masih Sepi Wisatawan",
          date: "18 November 2025",
          excerpt:
            "Bali masih punya spot rahasia yang belum banyak dikunjungi turis. Cocok buat healing...",
          img: "/travel2.jpg",
        },
        {
          topic: "Travel",
          title: "Gunung Bromo Masuk Daftar Destinasi Terfavorit",
          date: "17 November 2025",
          excerpt:
            "Panorama sunrise Bromo kembali jadi sorotan wisatawan mancanegara...",
          img: "/travel3.jpg",
        },
      ],
    },

    {
      title: "Tips",
      news: [
        {
          topic: "Tips",
          title: "Cara Menghemat Biaya Saat Traveling ke Luar Negeri",
          date: "19 November 2025",
          excerpt:
            "Dengan sedikit trik, kamu bisa hemat hingga 40% dari total biaya perjalanan...",
          img: "/tips1.jpg",
        },
        {
          topic: "Tips",
          title: "Tips Packing Anti Ribet untuk Liburan 1 Minggu",
          date: "17 November 2025",
          excerpt:
            "Bawa barang secukupnya dan gunakan teknik packing yang lebih efisien...",
          img: "/tips2.jpg",
        },
        {
          topic: "Tips",
          title: "Cara Memilih Tempat Menginap yang Aman",
          date: "16 November 2025",
          excerpt:
            "Penting untuk mengecek rating, review, dan lokasi sebelum booking...",
          img: "/tips3.jpg",
        },
      ],
    },

    {
      title: "Hotel",
      news: [
        {
          topic: "Hotel",
          title: "Hotel Murah di Bandung Mulai 200 Ribuan",
          date: "18 November 2025",
          excerpt:
            "Rekomendasi hotel nyaman dengan harga ramah kantong buat staycation...",
          img: "/hotel1.jpg",
        },
        {
          topic: "Hotel",
          title: "Resort Mewah dengan Private Pool di Bali",
          date: "19 November 2025",
          excerpt:
            "Cocok untuk honeymoon! View laut langsung dari kamar...",
          img: "/hotel2.jpg",
        },
        {
          topic: "Hotel",
          title: "Hotel Instagramable Buat Para Gen Z",
          date: "15 November 2025",
          excerpt:
            "Interior aesthetic dan banyak spot foto keren...",
          img: "/hotel3.jpg",
        },
      ],
    },

    {
      title: "Food & Drink",
      news: [
        {
          topic: "Food & Drink",
          title: "Menu Nusantara yang Lagi Viral di TikTok",
          date: "21 November 2025",
          excerpt:
            "Ada makanan baru yang sedang naik daun dan banyak di-review para food vlogger...",
          img: "/makan1.jpg",
        },
        {
          topic: "Food & Drink",
          title: "Restoran Hidden Gem di Jakarta",
          date: "17 November 2025",
          excerpt:
            "Tersembunyi tapi rasanya juara. Cocok buat dinner romantis...",
          img: "/makan2.jpg",
        },
        {
          topic: "Food & Drink",
          title: "Kopi Terenak Versi Para Barista",
          date: "16 November 2025",
          excerpt:
            "Kopi dengan cita rasa terbaik yang wajib dicoba pecinta caffeine...",
          img: "/makan3.jpg",
        },
      ],
    },

    {
      title: "Rekomendasi",
      news: [
        {
          topic: "Rekomendasi",
          title: "5 Destinasi Healing Terbaik 2025",
          date: "19 November 2025",
          excerpt:
            "Tempat paling nyaman untuk menenangkan pikiran dan rehat dari aktivitas...",
          img: "/rekom1.jpg",
        },
        {
          topic: "Rekomendasi",
          title: "Acara Seru Akhir Tahun yang Wajib Dikunjungi",
          date: "18 November 2025",
          excerpt:
            "Deretan festival dan event menarik yang berlangsung di berbagai kota...",
          img: "/rekom2jpg.jpg",
        },
        {
          topic: "Rekomendasi",
          title: "Cafe Aesthetic Favorit Anak Muda",
          date: "14 November 2025",
          excerpt:
            "Tempat paling cocok buat nongkrong, kerja, atau foto-foto...",
          img: "/rekom3.jpg",
        },
      ],
    },

    {
      title: "Destinasi Populer",
      news: [
        {
          topic: "Destinasi Populer",
          title: "Labuan Bajo Masuk Top 10 Destinasi Dunia",
          date: "20 November 2025",
          excerpt:
            "Panorama lautnya membuat banyak turis terpikat untuk kembali...",
          img: "/desti1.jpg",
        },
        {
          topic: "Destinasi Populer",
          title: "Yogyakarta Jadi Kota Liburan Terfavorit Gen Z",
          date: "19 November 2025",
          excerpt:
            "Banyak tempat baru yang aesthetic dan menarik perhatian anak muda...",
          img: "/desti2.jpg",
        },
        {
          topic: "Destinasi Populer",
          title: "Danau Toba Naik Pamor di 2025",
          date: "15 November 2025",
          excerpt:
            "Keindahan danau terbesar di Indonesia ini kembali jadi sorotan...",
          img: "/desti3.jpg",
        },
      ],
    },
  ];

  return (
    <div className="p-6 bg-white">
      {sections.map((section, idx) => (
        <div key={idx} className="mb-12">
          {/* TITLE */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">{section.title}</h2>
            <a href="#" className="text-orange-500 hover:underline">
              Lihat Lainnya →
            </a>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {section.news.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-40 object-cover"
                />

                <div className="p-4">
                  <p className="text-sm text-orange-500 font-medium">
                    {item.topic}
                  </p>

                  <h3 className="text-lg font-semibold mt-1">{item.title}</h3>

                  <p className="text-xs text-gray-500 mt-1">{item.date}</p>

                  <p className="text-sm text-gray-700 mt-3 line-clamp-3">
                    {item.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
