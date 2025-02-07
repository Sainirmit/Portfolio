import { Github, Globe } from "lucide-react"
import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      title: "RNDR - AR Interior Design App",
      description:
        "Led development of an AR-based interior design app for real-time space visualization. Released on App Store.",
      tags: ["Swift", "AR", "iOS", "MVVM"],
      appStoreLink: "https://apps.apple.com/in/app/rndr/id6739525102",
      type: "iOS App",
    },
    {
      title: "House Price Estimation",
      description: "Applied advanced regression techniques to predict house prices with a 3% average deviation.",
      tags: ["Python", "ML", "Data Analysis"],
      appStoreLink: "https://github.com/Sainirmit/Bharat-Intern/blob/main/House%20Price%20Prediction.py",
      type: "Data Science",
    },
    {
      title: "Flower Classification",
      description: "Achieved 97% accuracy in classifying flower species using machine learning algorithms.",
      tags: ["Python", "ML", "Classification"],
      appStoreLink: "https://github.com/Sainirmit/Bharat-Intern/blob/main/IRES%20FLOWER.py",
      type: "Data Science",
    },
    {
      title: "Handwritten Character Recognition",
      description: "Developed a handwritten character recognition model using neural networks in Python.",
      tags: ["Python", "ML", "Neural Networks"],
      appStoreLink: "https://github.com/Sainirmit/MachineLearning",
      type: "ML",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-200 to-blue-50 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                    {project.type}
                  </span>
                </div>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-md text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={project.appStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
                >
                  {project.type === "iOS App" ? <Globe className="w-4 h-4" /> : <Github className="w-4 h-4" />}
                  <span>{project.type === "iOS App" ? "View on App Store" : "View on GitHub"}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

