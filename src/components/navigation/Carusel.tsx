import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import { stories } from "@/consts";

const Carousel1 = () => {
  return (
    <div className="w-full mx-auto px-4 py-8 ">
      <h1 className="text-3xl font-extrabold dark:text-white mb-6 tracking-wide">
        STORIES
      </h1>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-3">
          {stories.map((story) => (
            <CarouselItem
              key={story.id}
              className="pl-3 basis-[180px] sm:basis-[220px] md:basis-[240px] lg:basis-[260px]"
            >
              <Card className="overflow-hidden rounded-xl bg-black border-0 hover:scale-[1.02] transition-transform duration-300">
                <div className="relative">
                  <img
                    src={story.img}
                    alt={story.title}
                    className="w-full h-[340px] object-cover rounded-xl"
                  />
                  <span className="absolute top-3 left-3 bg-pink-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    NEW
                  </span>
                  <CardContent className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3 text-white">
                    <h3 className="text-lg font-bold leading-tight">
                      {story.title}
                    </h3>
                  </CardContent>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-4 mt-4">
          <CarouselPrevious className="relative static bg-white/10 hover:bg-white/30 border-0 rounded-full p-2" />
          <CarouselNext className="relative static bg-white/10  hover:bg-white/30 border-0 rounded-full p-2" />
        </div>
      </Carousel>
    </div>
  );
};

export default Carousel1;
