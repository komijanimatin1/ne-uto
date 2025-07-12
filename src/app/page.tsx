import GamesSection from "@/components/GamesSection/GamesSection";
import ScrolledNews from "@/components/News/ScrolledNews";
import MainPageBanner from "@/components/UI/MainPageBanner";
import Navbar from "@/components/UI/Navbar";

export default function Home() {
  return (
    <>
      {/* This is the main page of the application */}
      {/* Intro of the application that contains the main banner and the navbar */}
      <Navbar />
      <MainPageBanner />
      <ScrolledNews />

      {/*Games section (important and other games news) */}
      <GamesSection />
    </>
  );
}
