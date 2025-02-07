import { Calendar, Building2 } from "lucide-react";
import Link from "next/link";

export default function Experience() {
  const experiences = [
    {
      title: "Founding Team Member",
      company: "Wynngrid",
      appStoreLink: "https://wynngrid.com/",
      period: "August 2024 - December 2024",
      description:
        "Wynngrid aims to be a single point of contact for all homeowner needs by connecting top-notch interior designers and architects with homeowners who align with their design language and vision. Our platform simplifies the home design journey, ensuring a seamless experience from concept to execution.",
      responsibilities: [
        "Product Management: Leading tech product development and strategy",
        "Technology Oversight: Working with developers on scalable solutions",
        "Business Development: Conducting customer interviews and market research",
        "Project Execution: Managing sprints using Agile methodologies",
        "Stakeholder Coordination: Driving innovation and execution",
      ],
    },
    {
      title: "Founding Team Member",
      company: "Elevvia",
      appStoreLink: "https://www.elevvia.tech/",
      period: "August 2024 - December 2024",
      description:
        "Elevvia Tech was a collaborative venture founded by me and three colleagues from my university, driven by a shared vision to empower SMBs and individuals with cutting-edge digital solutions. Recognizing the challenges faced by businesses in adapting to an increasingly digital landscape, we set out to bridge the gap between technology and business needs. Our mission was to provide scalable, cost-effective, and user-centric solutions—ranging from web development and AI-driven automation to strategic consulting—helping businesses streamline operations, enhance their online presence, and drive growth.",
      responsibilities: [
        "Web Development: Designed and developed responsive, high-performance websites and web applications to enhance online presence.",
        "AI Solutions: Implemented AI-driven automation, data analysis, and optimization tools to streamline business operations.",
        "Lead Generation: Identified and pursued potential clients, growing our client base through targeted outreach and strategic networking.",
        "Project Management: Ensured seamless execution of projects by defining product requirements in collaboration with stakeholders, managing sprints and tracking progress using Jira and Linear, conducting sprint reviews, and proactively resolving blockers, and coordinating team efforts and prioritizing tasks via Slack.",
      ],
    },
    {
      title: "iOS Developer Intern",
      company: "Infosys",
      appStoreLink:
        "https://drive.google.com/file/d/1-ICV6Aeg4JoHeVfGkf1t2SNipopOTn-N/view?usp=sharing",
      period: "May 2024 - June 2024",
      description:
        "At Infosys Mysore DC, I worked as an iOS Developer, focusing on frontend development, UI design, and implementing app architecture. During my time there, I honed my skills in Swift, SwiftUI, and MVVM architecture while collaborating with a team to build scalable and user-friendly applications.",
      responsibilities: [
        "Developed a Library Management System with three terminals for Librarian, Admin, and Member roles, optimizing data management and user interaction. ",
        "Operated within an agile team of 9, leveraging Jira for project management",
        "Adopted MVC architecture for app development.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-blue-100 to-white"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
          Work Experience
        </h2>
        <div className="space-y-12 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-200 to-blue-50 p-6 rounded-xl shadow-md"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {exp.title}
              </h3>
              {exp.appStoreLink && (
                <Link
                  href={exp.appStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-semibold text-gray-900 mr-2"
                >
                  <div className="flex items-center gap-2 text-blue-600 text-underline mt-1 text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>{exp.company}</span>
                  </div>
                </Link>
              )}
              <div className="flex items-center gap-2 text-gray-600 mt-2">
                <Calendar className="w-4 h-4" />
                <span>{exp.period}</span>
              </div>
              <p className="text-gray-700 mb-4">{exp.description}</p>
              <h4 className="text-lg font-semibold mb-4 text-gray-800">
                Key Responsibilities:
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="ml-4">
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
