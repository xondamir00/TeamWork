import Category from "@/components/navigation/category";
import NewsPage from "@/components/news/News-Page";

const Latest = () => {
  return (
    <div>
      <NewsPage />
      <div className=" w-full lg:w-[60%] mx-auto">
        <img
          src="https://tpc.googlesyndication.com/simgad/14467276505324443777"
          alt="Banner"
          className="w-full "
        />
      </div>
      <Category />
    </div>
  );
};

export default Latest;
