import React from "react";
import Card from "./Card";
import apex from "../assets/apex.jpg";
import cod from "../assets/cod.jpg";
import dayz from "../assets/dayz.jpg";
import dead_by_daylight from "../assets/dead_by_daylight.jpg";
import elden_ring from "../assets/elden_ring.jpg";
import elder_scrolls from "../assets/elder_scrolls.jpg";
import exile from "../assets/exile.jpg";
import forza from "../assets/forza.jpg";
import red_dead from "../assets/red_dead.jpg";
import watch_dogs from "../assets/watch_dogs.jpg";

const SpecialOffer = () => {
  const cards = [
    { wallpaper: apex, title: "Gaming room" },
    { wallpaper: cod, title: "Gaming room" },
    { wallpaper: dayz, title: "Gaming room" },
    { wallpaper: dead_by_daylight, title: "Gaming room" },
    { wallpaper: elden_ring, title: "Gaming room" },
    { wallpaper: elder_scrolls, title: "Gaming room" },
    { wallpaper: exile, title: "Gaming room" },
    { wallpaper: forza, title: "Gaming room" },
    { wallpaper: red_dead, title: "Gaming room" },
    { wallpaper: watch_dogs, title: "Gaming room" },
  ];
  return (
    <div className="mx-[2rem]  ">
      <p className="text-white pt-6">Games on Discount</p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-3">
        {cards.map((card, index) => (
          <Card key={index} wallpaper={card.wallpaper} title={card.title} />
        ))}
      </div>
    </div>
  );
};

export default SpecialOffer;
