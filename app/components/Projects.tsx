import { Github, Globe } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "Hopple: AI-powered Project Management",
      description:
        "Built an AI-powered project management agent using Next.js, Node.js, and Python with LLM integration.",
      tags: ["Next.js", "Node.js", "Python", "LLM"],
      appStoreLink: "#",
      type: "Web App",
    },
    {
      title: "RndR - AR Interior Design App",
      description:
        "Developed an AR-based interior design iOS app achieving 95% rendering accuracy. Improved development speed by 30% using Agile methodologies.",
      tags: ["Swift", "AR", "iOS", "MVVM"],
      appStoreLink: "https://apps.apple.com/in/app/rndr/id6739525102",
      type: "iOS App",
    },
    {
      title: "Handwritten Character Recognition",
      description:
        "Created a deep-learning model with 92% accuracy, optimizing OCR applications.",
      tags: ["Python", "Deep Learning", "OCR"],
      appStoreLink: "https://github.com/Sainirmit/MachineLearning",
      type: "ML",
    },
    {
      title: "House Price Estimation",
      description:
        "Developed ML model for real estate valuation with 3% error rate.",
      tags: ["Python", "ML", "Data Analysis"],
      appStoreLink:
        "https://github.com/Sainirmit/Bharat-Intern/blob/main/House%20Price%20Prediction.py",
      type: "Data Science",
    },
    {
      title: "Flower Classification",
      description:
        "Achieved 97% accuracy using ML for automated species identification.",
      tags: ["Python", "ML", "Classification"],
      appStoreLink:
        "https://github.com/Sainirmit/Bharat-Intern/blob/main/IRES%20FLOWER.py",
      type: "Data Science",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-blue-50 to-white scroll-mt-24"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
          Key Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-200 to-blue-50 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {project.title}
                  </h3>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                    {project.type}
                  </span>
                </div>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-blue-100 text-blue-800 rounded-md text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.appStoreLink !== "#" && (
                  <Link
                    href={project.appStoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
                    aria-label={`View ${project.title} on ${
                      project.type === "iOS App" ? "App Store" : "GitHub"
                    }`}
                  >
                    {project.type === "iOS App" ? (
                      <Globe className="w-4 h-4" />
                    ) : (
                      <Github className="w-4 h-4" />
                    )}
                    <span>
                      {project.type === "iOS App"
                        ? "View on App Store"
                        : "View on GitHub"}
                    </span>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
