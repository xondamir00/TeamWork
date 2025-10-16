const newsData = [
  {
    id: 1,
    category: "BEYOND THE GRID",
    title: "Allan McNish on his F1 journey and winning ‘the Audi way’",
    time: "21 hours ago",
    image:
      "https://media.formula1.com/image/upload/c_fill,w_352/q_auto/v1740000000/fom-website/2025/Beyond%20The%20Grid/BTG_Mcnish_15102025_centre.webp",
  },
  {
    id: 2,
    category: "F1 UNLOCKED",
    title: "Win 2 Grandstand tickets to Las Vegas Grand Prix 2025",
    time: "October 15, 2025",
    image:
      "https://media.formula1.com/image/upload/c_fill,w_352/q_auto/v1740000000/fom-website/Unlocked2025/LVGP%20_landingpage%201920x1080.webp",
  },
  {
    id: 3,
    category: "",
    title: "What time is the 2025 United States Grand Prix?",
    time: "October 15, 2025",
    image:
      "https://media.formula1.com/image/upload/t_16by9South/c_fill,w_352/q_auto/v1740000000/fom-website/2025/Miscellaneous/GettyImages-2232318086-1.webp",
  },
  {
    id: 4,
    category: "",
    title: "What is the weather forecast for the United States Grand Prix?",
    time: "October 15, 2025",
    image:
      "https://media.formula1.com/image/upload/t_16by9South/c_fill,w_352/q_auto/v1740000000/fom-website/2025/Miscellaneous/GettyImages-2178416171.webp",
  },
];

const NewsPage = () => {
  return (
    <div className="my-5 text-gray-900 dark:text-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">LATEST NEWS</h1>
        <button className="text-sm text-blue-500 hover:underline">
          View all
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {newsData.map((news) => (
          <div
            key={news.id}
            className="flex flex-col sm:flex-row bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all"
          >
            <div className="sm:w-[30%] h-full ">
              <img
                src={news.image}
                alt={news.title}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="p-4 flex w-[65%] flex-col justify-between">
              <div>
                {news.category && (
                  <h6 className="text-xs uppercase font-semibold text-pink-600 dark:text-pink-400 mb-2">
                    {news.category}
                  </h6>
                )}
                <h4 className="text-lg font-semibold leading-snug mb-2">
                  {news.title}
                </h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {news.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
