import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { News } from "@/consts";

const F1AustinNews: React.FC = () => {
  return (
    <div className="w-full py-10">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col lg:flex-row gap-8 text-gray-100">
        {/* Chap tomondagi asosiy karta */}
        <div className="w-full lg:flex-[2] flex">
          <Card className="bg-transparent text-white p-0 border-0 overflow-hidden shadow-lg hover:shadow-pink-500/10 transition flex-1">
            <CardContent className="p-0 relative h-full">
              <div className="aspect-[16/9] lg:aspect-auto h-full rounded-xl overflow-hidden">
                <img
                  src="https://media.formula1.com/image/upload/c_fit,h_1200/q_auto/v1740000000/fom-website/2025/Miscellaneous/GettyImages-2179619105-1.webp"
                  alt="Austin GP"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6">
                <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight max-w-[90%]">
                  The most important facts & stats ahead of Austin
                </h1>
              </div>
            </CardContent>
          </Card>
        </div>
        <aside className="w-full lg:w-[400px] flex flex-col gap-5 justify-between">
          {" "}
          {News.map((item, i) => (
            <Card
              key={i}
              className="cursor-pointer hover:text-white dark:bg-neutral-800 border-0 rounded-xl flex flex-row items-center gap-4 p-3 sm:p-4 hover:bg-neutral-700 transition"
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
                {" "}
                {item.tag && (
                  <div className="flex">
                    {" "}
                    <p className=" text-[10px] sm:text-xs bg-purple-600 rounded-md p-1 px-2 text-pink-200 font-semibold uppercase mb-1 tracking-wide">
                      {" "}
                      {item.tag}{" "}
                    </p>{" "}
                  </div>
                )}{" "}
                <p className="text-sm sm:text-base leading-snug">{item.text}</p>{" "}
              </div>{" "}
            </Card>
          ))}{" "}
        </aside>
      </div>
    </div>
  );
};

export default F1AustinNews;
