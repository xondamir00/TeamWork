import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Play } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "Road car vs. F1 car: Speed | Aramco",
    duration: "8:45",
    thumbnail:
      "https://d2n9h2wits23hf.cloudfront.net/image/v1/static/6057949432001/8cfab31c-d131-406a-af59-7732219876e7/cbfee292-26a1-47fb-afd0-d3a1dcdaf678/997x561/match/image.jpg",
  },
  {
    id: 2,
    title: "Iconic Carlos Sainz onboards",
    duration: "36:20",
    thumbnail:
      "https://d2n9h2wits23hf.cloudfront.net/image/v1/static/6057949432001/7fae3865-2b59-4cbd-86cd-840b7731a7a2/a8c1813b-658d-45f9-ac81-2d81ac5495c3/997x561/match/image.jpg",
  },
  {
    id: 3,
    title: "Jolyon Palmer's Analysis: Oscar and Lando clash in Singapore",
    duration: "10:32",
    thumbnail:
      "https://d2n9h2wits23hf.cloudfront.net/image/v1/static/6057949432001/7fae3865-2b59-4cbd-86cd-840b7731a7a2/a8c1813b-658d-45f9-ac81-2d81ac5495c3/997x561/match/image.jpg",
  },
  {
    id: 4,
    title: "2025 Singapore Grand Prix: Best race start onboards",
    duration: "0:52",
    thumbnail:
      "https://d2n9h2wits23hf.cloudfront.net/image/v1/static/6057949432001/e2950019-5b57-4aee-82ff-48b43122d3ad/5531416c-2973-4967-9d46-843f082feaf0/997x561/match/image.jpg",
  },
  {
    id: 5,
    title: "DHL Fastest Pit Stop: 2025 Singapore Grand Prix",
    duration: "0:57",
    thumbnail:
      "https://d2n9h2wits23hf.cloudfront.net/image/v1/static/6057949432001/20870098-6a01-4e20-8645-0b466497a1c2/4da69cf8-038f-465f-af57-ab1148dd2c1b/997x561/match/image.jpg",
  },
  {
    id: 6,
    title: "DHL Fastest Pit Stop: 2025 Singapore Grand Prix",
    duration: "0:57",
    thumbnail:
      "https://d2n9h2wits23hf.cloudfront.net/image/v1/static/6057949432001/170372cb-d804-4caf-ac19-c465917e45ff/5cfcbe1b-f9e2-45cf-8d1a-909661de4024/997x561/match/image.jpg",
  },
];

const NewsVideo = () => {
  return (
    <div
      className="relative w-full  bg-cover bg-center px-6 py-12 text-white"
      style={{
        backgroundImage:
          "url('https://cdn.wallpapersafari.com/53/27/9Zsbtv.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide">
            LATEST VIDEO
          </h2>
          <button className="text-sm md:text-base hover:underline">
            View all
          </button>
        </div>

        <Carousel className="w-full">
          <CarouselContent>
            {videos.map((video) => (
              <CarouselItem
                key={video.id}
                className="basis-11/12 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
              >
                <div className="p-2">
                  <div className="relative rounded-lg overflow-hidden group">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition-all">
                      <Play className="w-10 h-10 text-white" />
                    </div>
                    <span className="absolute bottom-2 right-2 bg-black/70 text-xs px-2 py-0.5 rounded">
                      {video.duration}
                    </span>
                  </div>
                  <h3 className="mt-3 text-sm font-semibold leading-snug hover:underline cursor-pointer">
                    {video.title}
                  </h3>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="bg-white/10 hover:bg-white/20 text-white" />
          <CarouselNext className="bg-white/10 hover:bg-white/20 text-white" />
        </Carousel>
      </div>
    </div>
  );
};

export default NewsVideo;
