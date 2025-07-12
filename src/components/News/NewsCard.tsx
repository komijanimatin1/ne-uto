import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface NewsCardProps {
  news: {
    title: string;
    content: string;
    link: string;
    author?: string;
    pubDate?: string;
    source?: string;
  };
}

export default function NewsCard({ news }: NewsCardProps) {
  const { title, content, link } = news;

  // Limit description to 15 words
  const shortDescription =
    content.split(" ").slice(0, 10).join(" ") + "...";

  return (
    <div className=" w-64 rounded-3xl flex flex-col bg-white shadow-sm hover:shadow-md transition-shadow border border-gray-200">
      {/* Image */}
      <div className="relative bg-[#800020] w-full h-48 rounded-t-3xl overflow-hidden">
        <Image
          src="/assets/pics/onlyLogo.PNG"
          alt="News Cover"
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
          {title}
        </h2>
        <p className="text-sm text-gray-600">{shortDescription}</p>

        <Link
          href={link}
          className="text-gray-600 flex items-center gap-1 mt-2 hover:text-gray-800 transition-colors"
        >
          Read more
          <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
}
