"use client";

import Image from "next/image";
import { useState } from "react";
import { destinations } from "@/data/dataDestinasi";
import { stories } from "@/data/dataStory";
import CardDestination from "@/components/CardDestination";
import TrekkerHighlights from "@/components/TrekkerHighlights";

export default function HomePage() {
  const [popular] = useState(destinations.slice(0, 4));

  return (
    <main className="min-h-screen bg-[#FFFDF9] text-[#1E1E1E]">

      {/* HERO */}
      <section className="relative max-w-7xl mx-auto px-3 grid lg:grid-cols-2 gap-8 items-center overflow-hidden">
        <Image
          src="/peta.jpg"
          alt="background hero"
          fill
          className="absolute inset-0 w-full h-full object-cover opacity-40 -z-20"
        />
        <div className="absolute inset-0 bg-white/40 -z-10"></div>

        {/* Kiri */}
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Tentang{" "}
            <span className="text-orange-500">Update Dunia</span> yang Jarang Kamu Tahu Sebelumnya.
          </h1>
          <p className="text-gray-600 mt-4 text-base md:text-lg">
            Tempat kamu nemuin berita seru, update terkini, dan cerita-cerita unik yang bikin kamu makin melek dunia.
          </p>
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 mt-6 bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition duration-300 shadow-md hover:shadow-lg">
            Mulai Menjelajah
          </button>
        </div>

        {/* Kanan */}
        <div className="relative z-10">
          <div className="absolute inset-0 bg-gradient-to from-orange-100/50 to-white/10 rounded-3xl blur-2xl -z-10"></div>

          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-4 mt-8">
            <Image
              src="/destination1.jpg"
              alt="destination"
              width={600}
              height={400}
              className="rounded-2xl object-cover w-full h-full col-span-1 sm:col-span-2 sm:row-span-2 shadow-lg hover:scale-[1.02] hover:shadow-2xl transition-all duration-300"
            />
            <Image
              src="/destination2.jpg"
              alt="destination"
              width={300}
              height={200}
              className="rounded-2xl object-cover w-full h-full shadow-md hover:scale-[1.03] hover:shadow-lg transition-all duration-300"
            />
            <Image
              src="/destination3.jpg"
              alt="destination"
              width={300}
              height={200}
              className="rounded-2xl object-cover w-full h-full shadow-md hover:scale-[1.03] hover:shadow-lg transition-all duration-300"
            />
          </div>
        </div>
      </section>

      {/* TOP DESTINATIONS */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Wajib Dikunjungi</h2>
          <button className="text-orange-500 hover:underline">
            Explore Semua Tempat
          </button>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {popular.map((dest) => (
            <CardDestination key={dest.id} destination={dest} />
          ))}
        </div>
      </section>

      {/* LATEST STORIES */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Update Terbaru</h2>
          <button className="text-orange-500 hover:underline">
            Cerita Lainnya
          </button>
        </div>

        {Array.isArray(stories) && stories.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-8">

            {/* BIG STORY */}
            <div className="md:col-span-2">
              <div className="relative w-full h-[350px]">
                <Image
                  src={stories[0].image || "/fallback.jpg"}
                  alt={stories[0].title || "Story"}
                  fill
                  className="rounded-2xl object-cover"
                />
              </div>

              <div className="mt-4">
                <p className="text-sm text-gray-500">{stories[0].category}</p>
                <h3 className="text-xl font-semibold mt-1">{stories[0].title}</h3>
                <p className="text-gray-600 text-sm mt-1">
                  {stories[0].date} • {stories[0].readTime ?? 3} min read
                </p>

                {stories[0].description && (
                  <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                    {stories[0].description}
                  </p>
                )}
              </div>
            </div>

            {/* SMALL STORIES */}
            <div className="flex flex-col gap-6">
              {stories.slice(1, 4).map((story) => (
                <div key={story.id} className="flex gap-4 items-start">
                  <div className="relative w-28 h-20 flex">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="rounded-xl object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{story.category}</p>
                    <h4 className="font-semibold leading-tight">{story.title}</h4>
                    <p className="text-gray-500 text-xs mt-1">
                      {story.date} • {story.readTime ?? 3} min read
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        ) : (
          <p className="text-gray-500">No stories available.</p>
        )}
      </section>

      {/* TREKKER HIGHLIGHTS */}
      <TrekkerHighlights />

      {/* Newsletter */}

    </main>
  );
}
