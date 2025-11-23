import Image from "next/image";

export default function CardDestination({ destination }: any) {
  return (
    <div className="rounded-2xl overflow-hidden bg-white shadow hover:shadow-lg transition">
      <Image
        src={destination.image}
        alt={destination.name}
        width={400}
        height={300}
        className="object-cover w-full h-48"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{destination.name}</h3>
        <p className="text-sm text-gray-500">{destination.country}</p>
      </div>
    </div>
  );
}
