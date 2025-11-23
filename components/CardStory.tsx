import Image from "next/image";

interface StoryProps {
  story: {
    id: number;
    title: string;
    desc: string;
    image: string;
  };
}

export default function CardStory({ story }: StoryProps) {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
      <Image
        src={story.image}
        alt={story.title}
        width={400}
        height={250}
        className="object-cover w-full h-48"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{story.title}</h3>
        <p className="text-sm text-gray-600 mt-2 line-clamp-2">{story.desc}</p>
      </div>
    </div>
  );
}
