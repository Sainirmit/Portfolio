import Link from "next/link"
import { Award } from "lucide-react"

export default function Certifications() {
  const certifications = [
    {
      title: "Explore Machine Learning using Python",
      institution: "Infosys Springboard",
      link: "https://drive.google.com/file/d/1d4p_ynrV1YsrdjmnwaE_aucbKbUk83TX/view?usp=sharing",
    },
    {
      title: "Meta IOS Developer",
      institution: "Meta",
      link: "https://coursera.org/share/6f8205dbdf7455f931273638ed11691b",
    },
    {
      title: "Introduction to Swift Programming",
      institution: "University Of Toronto",
      link: "https://coursera.org/share/84705067fa892db4947228f3af6bf794",
    },
    {
      title: "Software Engineering",
      institution: "Hong Kong University of Science and Technology",
      link: "https://coursera.org/share/54b84cb3f6fca03677d23709165aee76",
    },
    {
      title: "Introduction to Programming in Swift 5",
      institution: "Learn Quest",
      link: "https://coursera.org/share/8201558ffd2d637e2f80f836438c126a",
    },
    {
      title: "Introduction to Cloud Computing",
      institution: "IBM",
      link: "https://coursera.org/share/e094e9fdfb867e9bea060a78368f7218",
    },
    {
      title: "Prototyping and Design",
      institution: "University of Minnesota",
      link: "https://coursera.org/share/2ab93f4f30c50b7cf943859c1c533527",
    },
    {
      title: "Foundations of User Experience (UX) Design",
      institution: "Google UX Design Certificate",
      link: "https://coursera.org/share/f6b9d297a11e9760e974ea4af4abed7f",
    },
    {
      title: "Start the UX Design Process: Empathize, Define, and Ideate",
      institution: "Google UX Design Certificate",
      link: "https://coursera.org/share/274bcc6c942550c7914b6fdb6a60ef68",
    },
    {
      title: "Build Wireframes and Low-Fidelity Prototypes",
      institution: "Google UX Design Certificate",
      link: "https://coursera.org/share/1fddc1d1a840151eea8f57e187a86dcc",
    },
    {
      title: "Agile Scrum Certification",
      institution: "Infosys Springboard",
      link: "https://drive.google.com/file/d/1I-fp3OEDFIWCXEWcLXTFT-nqkabagkwH/view?usp=sharing",
    },
    {
      title: "Agile Scrum in Practice",
      institution: "Infosys Springboard",
      link: "https://drive.google.com/file/d/1BOUm1lgGHOKE2mQto0mVBuyswZ4KlI9x/view?usp=sharing",
    },
  ]

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-blue-100 to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-200 to-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{cert.title}</h3>
                  <p className="text-gray-600">{cert.institution}</p>
                  <Link
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 text-sm mt-2 inline-block"
                  >
                    View Certificate
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

