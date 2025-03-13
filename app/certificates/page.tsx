import Header from "../components/Header";
import Footer from "../components/Footer";
import Certifications from "../components/Certifications";

export default function CertificatesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-200 to-blue-50">
      <Header />
      <div className="pt-24">
        <Certifications />
      </div>
      <Footer />
    </main>
  );
}
