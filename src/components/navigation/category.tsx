import { ExternalLink } from "lucide-react";

const links = [
  { id: 1, title: "F1® STORE", url: "#" },
  { id: 2, title: "F1® FANTASY", url: "#" },
  { id: 3, title: "F1® PREDICT", url: "#" },
  { id: 4, title: "LIVE TIMING", url: "#" },
];

const Category = () => {
  return (
    <div className=" grid sm:grid-cols-2 lg:grid-cols-4 my-5 gap-3 ">
      {links.map((link) => (
        <a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between w-full px-5 py-3 
                     bg-indigo-200 dark:bg-indigo-400/30 text-black dark:text-white 
                     font-semibold rounded-lg transition-all 
                     hover:bg-indigo-300 dark:hover:bg-indigo-500/40"
        >
          <span>{link.title}</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      ))}
    </div>
  );
};

export default Category;
