import ScrolledNews from "@/components/News/ScrolledNews";
import MainPageBanner from "@/components/UI/MainPageBanner";
import Navbar from "@/components/UI/Navbar";

export default function Home() {
  return (
    <>
     <Navbar/>
     <MainPageBanner/>
     <ScrolledNews/>
    </>
  );
}
