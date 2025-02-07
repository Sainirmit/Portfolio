export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Swift", "Java", "Python"],
    },
    {
      title: "iOS Development",
      skills: ["SwiftUI", "UIKit", "XCode", "Firebase", "ARKit"],
    },
    {
      title: "Web Development",
      skills: [
        "HTML",
        "CSS",
        "React",
        "Javascript",
        "NodeJS",
        "Next.js",
        "TailwindCSS",
      ],
    },
    {
      title: "Data Science & ML",
      skills: ["Machine Learning", "Data Science"],
    },
    {
      title: "Project Management",
      skills: ["Agile", "JIRA", "SCRUM", "Project Management"],
    },
    {
      title: "Architecture & Design",
      skills: ["MVVM", "MVC", "UI/UX Design"],
    },
    {
      title: "Version Control & DevOps",
      skills: ["Git", "GitHub", "Bitbucket", "Docker"],
    },
    {
      title: "Soft Skills",
      skills: [
        "Strong Communication",
        "Team Management",
        "Adaptability",
        "Leadership",
        "Project Planning",
        "+",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-blue-100 to-white"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-200 to-blue-50 p-6 rounded-xl shadow-md"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
