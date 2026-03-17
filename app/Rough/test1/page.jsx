import Image from "next/image";

const cards = [
  {
    id: 1,
    image: "/instagram-api/card-1.webp",
    alt: "Build 2-way dynamic conversations powered by GenAI",
    title: "Build 2-way dynamic conversations powered by GenAI",
    description:
      "Elevate the overall conversational experience with AI Agents that are context aware, able to handle dynamic conversations and multi-modal"
   
  },
  {
    id: 2,
    image: "/instagram-api/card-2.webp",
    alt: "Fast track your Conversational journey with pre-built templates",
    title: "Fast track your Conversational journey with pre-built templates",
    description:
      "Tap into our library of pre-built templates for conversations and journeys to deploy Instagram conversations for your business instantly"

  },
  {
    id: 3,
    image: "/instagram-api/card-3.webp",
    alt: "Elevate Engagement with data-driven decisions",
    title: "Elevate Engagement with data-driven decisions",
    description:
      "Track every aspect of conversations with comprehensive funnel wise view of the journey and granular insights"
  },
];

export default function FeatureCards() {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div key={card.id} className="flex flex-col gap-4">
              {/* Image */}
              <div className="relative w-full h-[220px] md:h-80 rounded-2xl overflow-hidden bg-gray-50">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-2 px-1">
                <h3 className="text-2xl font-semibold text-gray-900 leading-snug">
                  {card.title}
                </h3>
                <p className="text-base leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}