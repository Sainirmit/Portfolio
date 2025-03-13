import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import LeadershipImpact from "./components/LeadershipImpact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-200 to-blue-50">
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
