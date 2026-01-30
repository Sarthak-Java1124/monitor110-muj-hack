import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FooterMetrics } from "@/components/FooterMetrics";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-monee-black selection:bg-monee-green selection:text-black">
      <Navbar />
      <Hero />
      <FooterMetrics />
    </main>
  );
}
