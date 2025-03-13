import Header from "../components/Header";
import Footer from "../components/Footer";
import Projects from "../components/Projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-200 to-blue-50">
      <Header />
      <div className="pt-24">
        <Projects />
      </div>
      <Footer />
    </main>
  );
}
