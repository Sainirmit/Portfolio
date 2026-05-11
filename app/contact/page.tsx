import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import EtherealBackground from "../components/EtherealBackground";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <EtherealBackground />
      <Header />
      <div className="pt-20">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
