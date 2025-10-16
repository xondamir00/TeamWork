import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { News } from "@/constants";

const F1AustinNews: React.FC = () => {
  return (
    <div className="max-[275px]:hidden bg-neutral-900 py-10">
    <div className="max-w-[1600px] mx-auto p-4 sm:p-6 lg:p-10 flex flex-col lg:flex-row gap-6 text-gray-100">
      <div className="flex-1 h-full">
        <Card className="bg-transparent text-white p-0 border-0 overflow-hidden shadow-lg hover:shadow-pink-500/10 transition">
          <CardContent className="p-0 relative">
            <div className="aspect-[16/9] w-full rounded-xl overflow-hidden">
              <img
                src="/assets/png1.avif"
                alt="Austin GP"
                className="w-full rounded-md h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>

            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
                The most important facts & stats ahead of Austin
              </h1>
            </div>
          </CardContent>
        </Card>
      </div>

      <aside className="w-full lg:w-[400px] flex flex-col gap-5 justify-between">
        {News.map((item, i) => (
          <Card
            key={i}
            className="cursor-pointer text-white bg-neutral-800 border-0 rounded-xl flex flex-row items-center gap-4 p-3 sm:p-4 hover:bg-neutral-700 transition"
          >
            <img
              src={item.img}
              alt={`News ${i + 1}`}
              width={80}
              height={80}
              className="rounded-lg object-cover w-20 h-20 sm:w-[90px] sm:h-[90px]"
              loading="lazy"
            />
            <div className="flex flex-col justify-center">
              {item.tag && (
                <div className="flex">
                <p className=" text-[10px] sm:text-xs bg-purple-600 rounded-md p-1 px-2 text-pink-200 font-semibold uppercase mb-1 tracking-wide">
                  {item.tag}
                </p>
                </div>
              )}
              <p className="text-sm sm:text-base leading-snug">{item.text}</p>
            </div>
          </Card>
        ))}
      </aside>
    </div>
    </div>
  );
};

export default F1AustinNews;
