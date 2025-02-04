import './globals.css'
// pages/Home.tsx
import Header from "../src/components/Header";
import Sidebar from "../src/components/Sidebar";
import MainContent from "../src/components/MainContent";
import Footer from "../src/components/Footer";

export default function Home() {
  return (
    <div className="bg-black h-screen text-zinc-50 flex flex-col">
      <Header />
      <div className="flex flex-1 gap-4">
        <Sidebar />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}
