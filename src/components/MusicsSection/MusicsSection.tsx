import NewsBanner from "../News/NewsBanner";
import ScrolledNews from "../News/ScrolledNews";

const importantMusics = [
  {
    title: "Taylor Swift’s Eras Tour Breaks Global Records",
    pubDate: "Wed, 09 Jul 2025 10:15:00 -0700",
    author: "Unknown",
    link: "https://www.billboard.com/articles/taylor-swift-eras-tour-records",
    source: "billboard.com",
    image: "https://www.billboard.com/uploads/taylor-swift-eras-tour.jpg",
    content:
      "Taylor Swift continues to make history as her Eras Tour becomes the highest-grossing tour of all time. From sold-out stadiums to surprise guest performances, fans can’t get enough of the pop icon’s musical journey."
  },
  {
    title: "New Post Malone Album Tops Charts",
    pubDate: "Wed, 09 Jul 2025 12:00:00 -0700",
    author: "Unknown",
    link: "https://www.billboard.com/articles/post-malone-new-album",
    source: "billboard.com",
    image: "Unknown",
    content:
      "Post Malone’s latest album is dominating streaming platforms and the Billboard Hot 100. With a mix of emotional ballads and party anthems, it’s clear the artist has struck gold once again."
  },
  {
    title: "Beyoncé Announces Renaissance World Tour",
    pubDate: "Wed, 09 Jul 2025 14:45:00 -0700",
    author: "Beyoncé",
    link: "https://www.billboard.com/articles/beyonce-renaissance-world-tour",
    source: "billboard.com",
    image: "https://www.billboard.com/uploads/beyonce-renaissance.jpg",
    content:
      "Queen Bey is back! Beyoncé’s Renaissance World Tour promises a dazzling experience for fans worldwide. Expect jaw-dropping choreography, powerful vocals, and iconic fashion moments."
  }
];

export default function MusicsSection() {
  return (
    <section className="w-full py-6">
      <div className="flex overflow-x-auto gap-4 p-4 hide-scrollbar bg-[#002b23]">
        {importantMusics.map((music, index) => (
          <NewsBanner
            key={index}
            title={music.title}
            pubDate={music.pubDate}
            author={music.author}
            link={music.link}
            source={music.source}
            image={music.image}
            content={music.content}
          />
        ))}
      </div>
        <div>
            <ScrolledNews data={importantMusics} sectionTitle="Other Music News" /></div>
    </section>
  );
}
