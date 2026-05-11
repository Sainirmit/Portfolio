import Header from "../components/Header";
import Footer from "../components/Footer";
import Certifications from "../components/Certifications";
import EtherealBackground from "../components/EtherealBackground";

export default function CertificatesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <EtherealBackground />
      <Header />
      <div className="pt-20">
        <Certifications />
      </div>
      <Footer />
    </main>
  );
}
