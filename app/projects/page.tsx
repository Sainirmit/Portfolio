import Header from "../components/Header";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import EtherealBackground from "../components/EtherealBackground";

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <EtherealBackground />
      <Header />
      <div className="pt-20">
        <Projects />
      </div>
      <Footer />
    </main>
  );
}
