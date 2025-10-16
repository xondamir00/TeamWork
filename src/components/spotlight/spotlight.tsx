import React from "react";
import { spotlight } from "../constants";

const Spotlight = () => {
  return (
    <div className="w-full mx-auto px-4 py-8 dark:text-white">
      <h1 className="text-3xl font-extrabold mb-6 tracking-wide">SPOTLIGHT</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="relative rounded-xl overflow-hidden md:col-span-2 group">
          <img
            src={spotlight[0].img}
            alt="Main spotlight"
            className="w-full h-[420px] md:h-[520px] object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
            {spotlight[0].description && (
              <p className="text-white font-semibold text-2xl md:text-3xl leading-snug">
                {spotlight[0].description}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-6">
          {spotlight.slice(1).map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-[#1a1a1a] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={item.img}
                alt="Spotlight item"
                className="w-full h-[220px] md:h-[240px] object-cover"
              />

              <div className="p-4">
                
                {item.description && (
                  <p className="text-gray-800 dark:text-gray-200 font-semibold text-lg mt-3 leading-snug">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Spotlight;
