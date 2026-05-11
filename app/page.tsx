import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import LeadershipImpact from "./components/LeadershipImpact";
import Footer from "./components/Footer";
import EtherealBackground from "./components/EtherealBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <EtherealBackground />
      <Header />
      <Hero />
      <LeadershipImpact />
      <Experience />
      <Skills />
      <Education />
      <Footer />
    </main>
  );
}
