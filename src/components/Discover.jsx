import React from "react";
import { Heart, Eye } from "lucide-react";

const DiscoverPage = () => {
  const cards = [
    {
      id: 1,
      image:"/public/image/Card.svg",
      title: "Ever",
      loves: "120",
      views: "1.4k",
      team: true,
    },
    {
      id: 2,
      image:"/public/image/Card1.svg",
      title: "Ever",
      loves: "160",
      views: "1.7k",
      team: true,
    },
    {
      id: 3,
      image:"/public/image/Card2.svg",
      title: "Ever",
      loves: "340",
      views: "2.4k",
      team: true,
    },
    {
      id: 4,
      image:
        "/public/image/Card3.svg",
      title: "Ever",
      loves: "110",
      views: "1.2k",
      team: false,
    },
    {
      id: 5,
      image:
        "/public/image/Card4.svg",
      title: "Ever",
      loves: "290",
      views: "3.1k",
      team: true,
    },
     {
      id: 5,
      image:
        "/public/image/Card5.svg",
      title: "Ever",
      loves: "290",
      views: "3.1k",
      team: true,
    },
     {
      id: 5,
      image:
        "/public/image/Frame 40 (2).svg",
      title: "Ever",
      loves: "290",
      views: "3.1k",
      team: true,
    },
     {
      id: 5,
      image:
        "/public/image/Frame 40.svg",
      title: "Ever",
      loves: "290",
      views: "3.1k",
      team: true,
    },
     {
      id: 5,
      image:
        "/public/image/Frame1.svg",
      title: "Ever",
      loves: "290",
      views: "3.1k",
      team: true,
    },
     {
      id: 5,
      image:
        "/public/image/Rectangle2.svg",
      title: "Ever",
      loves: "290",
      views: "3.1k",
      team: true,
    },
     {
      id: 5,
      image:
        "/public/image/Rectangle3.svg",
      title: "Ever",
      loves: "290",
      views: "3.1k",
      team: true,
    },
     {
      id: 5,
      image:
        "/public/image/Retrangle1.svg",
      title: "Ever",
      loves: "290",
      views: "3.1k",
      team: true,
    },
  ];

  return (
    <div className="min-h-screen bg-white px-8 py-6">

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-gray-50 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-60 object-cover"
            />
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center space-x-2">
                <span className="text-gray-800 font-semibold">{card.title}</span>
                {card.team && (
                  <span className="text-xs bg-gray-200 text-gray-600 px-2 py-[1px] rounded">
                    TEAM
                  </span>
                )}
              </div>
              <div className="flex items-center space-x-4 text-gray-500">
                <div className="flex items-center space-x-1">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm">{card.loves}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Eye className="w-4 h-4" />
                  <span className="text-sm">{card.views}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscoverPage;