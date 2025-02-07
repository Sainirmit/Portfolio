import Link from "next/link";
import { Award } from "lucide-react";

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
    {
      title: "Software Engineering and Agile Software Development",
      institution: "Infosys Springboard",
      link: "https://drive.google.com/file/d/1srpbW_5lhnZWfAFryGUZgSlWovFH1XfI/view?usp=sharing", // Replace with actual link
    },
    {
      title: "Programming Fundamentals in Swift",
      institution: "Meta",
      link: "https://coursera.org/share/197cdb1030c2a157766155baf95eff7e", // Replace with actual link
    },
    {
      title: "Version Control",
      institution: "Meta",
      link: "https://coursera.org/share/72bb08b9daf2940fb07724e73b2e985b", // Replace with actual link
    },
    {
      title: "Introduction to iOS Mobile Application Development",
      institution: "Meta",
      link: "https://coursera.org/share/6e6f5f9be308f752dccd5eda3f4a8e8a", // Replace with actual link
    },
    {
      title: "Principles of UX/UI Design",
      institution: "Meta",
      link: "https://coursera.org/share/e093193fdcbb5b0f4e911d6d2b70e3fb", // Replace with actual link
    },
    {
      title: "Create the User Interface with SwiftUI",
      institution: "Meta",
      link: "https://coursera.org/share/34674af188c366f93d4436e85f40fe29", // Replace with actual link
    },
    {
      title: "Working with Data in iOS",
      institution: "Meta",
      link: "https://coursera.org/share/b69ca2db1b8a8972501e175b803c0ace", // Replace with actual link
    },
    {
      title: "Mobile Development and JavaScript",
      institution: "Meta",
      link: "https://coursera.org/share/2b1e8509af8fbadaca2a9094c0d22c84", // Replace with actual link
    },
    {
      title: "Advanced Programming in Swift",
      institution: "Meta",
      link: "https://coursera.org/share/7c7424930b4ef088e1b98d3ff4e444d9", // Replace with actual link
    },
    {
      title: "React Native",
      institution: "Meta",
      link: "https://coursera.org/share/9c9bca6e77b1559f10fecca47c2f5c12", // Replace with actual link
    },
    {
      title: "React Basics",
      institution: "Meta",
      link: "https://coursera.org/share/0b67f54d0eac60ba125159e0d8e823c0", // Replace with actual link
    },
    {
      title: "iOS App Capstone",
      institution: "Meta",
      link: "https://coursera.org/share/ec287d95e37567328a2ed093155fbb33", // Replace with actual link
    },
  ];

  return (
    <section
      id="certifications"
      className="py-20 bg-gradient-to-br from-blue-100 to-white"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
          Certifications
        </h2>
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
                  <h3 className="text-lg font-semibold text-gray-800">
                    {cert.title}
                  </h3>
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
  );
}
