import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NewsCard from "./NewsCard";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const mockData = [

  {
    title: "Final Fantasy 9 Anniversary Video Refuels Rumors Of A Remake",
    pubDate: "Mon, 07 Jul 2025 05:34:00 -0700",
    author: "Jane Doe",
    link: "https://www.gamespot.com/articles/lego-icons-optimus-prime-transformers-building-set/1100-6509331/?ftag=CAD-01-10abi2f",
    source: "gamespot.com",
    content:
      "Get ready, adventurers! The latest anniversary video for Final Fantasy 9 has reignited the hype for a potential remake. Dive back into the world of Gaia with enhanced graphics and gameplay that will blow the minds of both veterans and newbies alike. Stay tuned as this epic tale unfolds once more!"
  },
  {
    title: "The Legend of Zelda: Tears of the Kingdom - A Masterpiece in Gaming",
    pubDate: "Mon, 07 Jul 2025 05:34:00 -0700",
    author: "John Smith",
    link: "https://www.gamespot.com/articles/the-legend-of-zelda-tears-of-the-kingdom-review/1100-6509332/?ftag=CAD-01-10abi2f",
    source: "gamespot.com",
    content:
      "The Legend of Zelda: Tears of the Kingdom has been hailed as a masterpiece in gaming. With its stunning visuals, immersive gameplay, and captivating story, it has set a new standard for open-world adventures. Players are encouraged to explore every nook and cranny of the vast world, uncovering secrets and solving puzzles along the way."
  }, {
    title: "Cyberpunk 2077: Phantom Liberty Expansion - A New Era for Night City",
    pubDate: "Mon, 07 Jul 2025 05:34:00 -0700",
    author: "Alice Johnson",
    link: "https://www.gamespot.com/articles/cyberpunk-2077-phantom-liberty-expansion-review/1100-6509333/?ftag=CAD-01-10abi2f",
    source: "gamespot.com",
    content: "The Cyberpunk 2077: Phantom Liberty expansion takes players back to Night City with a gripping new storyline and enhanced gameplay mechanics. As tensions rise and new factions emerge, players must navigate the dangerous streets and make choices that will impact the future of the city."
  }, {
    title: "Star Wars Jedi: Survivor - A Journey Through the Galaxy",
    pubDate: "Mon, 07 Jul 2025 05:34:00 -0700",
    author: "Mark Thompson",
    link: "https://www.gamespot.com/articles/star-wars-jedi-survivor-review/1100-6509334/?ftag=CAD-01-10abi2f",
    source: "gamespot.com",
    content: "Star Wars Jedi: Survivor takes players on an epic journey through the galaxy, following the story of Cal Kestis as he battles the Empire and uncovers new secrets. With stunning visuals and engaging gameplay, it's a must-play for fans of the franchise."
  }, {
    title: "Assassin's Creed Mirage - A Return to Form",
    pubDate: "Mon, 07 Jul 2025 05:34:00 -0700",
    author: "Emily Davis",
    link: "https://www.gamespot.com/articles/assassins-creed-mirage-review/1100-6509335/?ftag=CAD-01-10abi2f",
    source: "gamespot.com",
    content: "Assassin's Creed Mirage marks a return to the series' roots, focusing on stealth and exploration. Set in a beautifully recreated historical setting, players will experience a rich narrative and engaging gameplay that pays homage to the franchise's legacy."
  }
];

export default function ScrolledNews() {
  return (
    <div className=" w-11/12 overflow-x-scroll overflow-y-hidden p-4 mt-8 mx-auto h-max border-3 border-gray-200 rounded-2xl">
      <h3 className="text-gray-400 text-3xl">Important news :</h3>
      <div className="w-max p-4 flex flex-row gap-4">
        {mockData.map((news, index) => (
          <NewsCard key={index} news={news} />
        ))}
        <div className="flex items-center">
          <FontAwesomeIcon icon={faArrowRight} className="w-12 h-12 p-1 text-gray-400  border-2 border-gray-400 rounded-full" />

        </div>
      </div>
    </div>
  )
}