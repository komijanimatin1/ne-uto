import Image from "next/image";

interface NewsBannerProps {
  title: string;
  pubDate: string;
  author: string;
  link: string;
  source: string;
  image: string | undefined;
  content: string;
}

export default function NewsBanner({
  title,
  pubDate,
  author,
  link,
  source,
  image,
  content,
}: NewsBannerProps) {
  return (
    <div className="flex-shrink-0 w-80 md:w-96 bg-white rounded-2xl shadow-lg overflow-hidden mr-4">
      {/* Conditional image section */}
      {image && image !== "Unknown" ? (
        <div className="relative w-full h-48">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      ) : (
        <div className="relative bg-[#800020] w-full h-48">
          <Image
            src="/assets/pics/onlyLogo.PNG"
            alt="Fallback Logo"
            fill
            className="object-contain opacity-80"
          />
        </div>
      )}

      {/* News content section */}
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <p className="text-xs text-gray-500 mb-1">
          {pubDate} | {author || "Unknown"} | {source}
        </p>
        <p className="text-sm text-gray-700 mb-3 line-clamp-3">{content}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-600 hover:underline font-medium"
        >
          Read more
        </a>
      </div>
    </div>
  );
}
