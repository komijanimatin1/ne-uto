import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NewsCard from "./NewsCard";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface NewsItem {
  title: string;
  pubDate: string;
  author: string;
  link: string;
  source: string;
  content: string;
}

interface ScrolledNewsProps {
  data: NewsItem[];
  sectionTitle:string;
}

export default function ScrolledNews({ data, sectionTitle }: ScrolledNewsProps) {
  return (
    <div className="w-11/12 overflow-x-scroll overflow-y-hidden p-4 mt-8 mx-auto h-max border-3 border-gray-200 rounded-2xl">
      <h3 className="text-gray-400 text-3xl">{sectionTitle} :</h3>
      <div className="w-max p-4 flex flex-row gap-4">
        {data.map((news, index) => (
          <NewsCard key={index} news={news} />
        ))}
        <div className="flex items-center">
          <FontAwesomeIcon
            icon={faArrowRight}
            className="w-12 h-12 p-1 text-gray-400 border-2 border-gray-400 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
