import NewsBanner from "../News/NewsBanner";
import ScrolledNews from "../News/ScrolledNews";

const importantMovies = [
  {
    title: "Dune: Part Two Breaks Box Office Records",
    pubDate: "Tue, 08 Jul 2025 12:00:00 -0700",
    author: "Frank Herbert",
    link: "https://www.movieweb.com/articles/dune-part-two-box-office-success",
    source: "movieweb.com",
    image: "https://www.movieweb.com/uploads/dune-part-two.jpg",
    content:
      "The spice must flow! Dune: Part Two has shattered box office expectations with its stunning visuals and epic storytelling. Fans and newcomers alike are flocking to theaters to witness the next chapter of Paul Atreides’ journey. Sandworms, betrayals, and destiny collide in this cinematic masterpiece."
  },
  {
    title: "Avengers: Secret Wars Trailer Drops",
    pubDate: "Tue, 08 Jul 2025 14:30:00 -0700",
    author: "Stan Lee",
    link: "https://www.movieweb.com/articles/avengers-secret-wars-trailer",
    source: "movieweb.com",
    image: "https://www.movieweb.com/uploads/avengers-secret-wars.jpg",
    content:
      "Marvel fans, assemble! The first trailer for Avengers: Secret Wars just dropped and it’s packed with multiverse madness. From cameos to jaw-dropping battles, the hype is real. Could this be the most ambitious Marvel movie yet?"
  },
  {
    title: "Inside Out 2 Brings Pixar Magic Back",
    pubDate: "Tue, 08 Jul 2025 16:00:00 -0700",
    author: "Pete Docter",
    link: "https://www.movieweb.com/articles/inside-out-2-review",
    source: "movieweb.com",
    image: "Unknown",
    content:
      "Joy, Sadness, Anger, and the gang are back in Inside Out 2. Pixar delivers another emotional rollercoaster that tugs at your heartstrings and leaves you laughing through the tears. A must-watch for all ages."
  }
];

export default function MoviesSection() {
  return (
    <section className="w-full py-6">
      {/* important movies section */}
      <div className="flex overflow-x-auto gap-4 p-4 hide-scrollbar bg-gray-900">
        {importantMovies.map((movie, index) => (
          <NewsBanner
            key={index}
            title={movie.title}
            pubDate={movie.pubDate}
            author={movie.author}
            link={movie.link}
            source={movie.source}
            image={movie.image}
            content={movie.content}
          />
        ))}
      </div>

      {/* other movies section */}
      <div>
        <ScrolledNews data={importantMovies} sectionTitle="Other Movie News" />
      </div>
    </section>
  );
}
