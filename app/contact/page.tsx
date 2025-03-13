import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-200 to-blue-50">
      <Header />
      <div className="pt-24">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
