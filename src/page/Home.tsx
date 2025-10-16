import NewsVideo from "@/components/video/NewsVideo";
import Latest from "./Latest";
import F1AustinNews from "@/components/news/NewsAustin";
import Footer from "@/components/footers/footer";
import Carousel1 from "@/components/navigation/Carusel";
import Spotlight from "@/components/Spotlight/Spotlight";
import Spotlight2 from "@/components/Spotlight/Spotlight2";

const Home = () => {
  return (
    <>
      <div className="mx-[10%]">
        <F1AustinNews />
        <Carousel1 />
        <Spotlight />
        <Spotlight2 />
        <Latest />
      </div>
      <NewsVideo />
      <Footer />
    </>
  );
};

export default Home;
