import { Calendar, Building2 } from "lucide-react";
import Link from "next/link";

export default function Experience() {
  const experiences = [
    {
      title: "Founding Team Member",
      company: "Wynngrid",
      appStoreLink: "https://wynngrid.com/",
      period: "December 2024 - Present",
      description: "",
      responsibilities: [
        "Generated $20,000+ in revenue by building Wynngrid's digital presence, leading to its first major interior design deal.",
        "Increased sales conversion by 20% through data-driven customer acquisition and product optimization.",
        "Improved operational efficiency by 30% by implementing Agile workflows and automation.",
        "Engaged with 500+ homeowners, architects, and interior designers, refining platform offerings and expanding market reach.",
      ],
    },
    {
      title: "Founding Team Member",
      company: "Elevvia",
      appStoreLink: "https://www.elevvia.tech/",
      period: "August 2024 - Present",
      description: "",
      responsibilities: [
        "Secured $5,000+ in revenue in 3 months by developing and selling AI-driven digital solutions to SMBs.",
        "Boosted client operational efficiency by 40% through AI-based business automation.",
        "Accelerated project delivery by 25% via optimized Agile workflows and sprint execution.",
        "Built and deployed 5+ scalable web applications, driving digital transformation for small and medium businesses.",
      ],
    },
    {
      title: "iOS Developer",
      company: "StitchIt App Team",
      appStoreLink: "#",
      period: "June 2024 - August 2024",
      description: "",
      responsibilities: [
        "Increased app engagement by 35% through UI enhancements and improved user flows.",
        "Reduced frontend latency by 20%, optimizing platform responsiveness.",
        "Ensured on-time feature rollouts by streamlining Agile sprint execution.",
      ],
    },
    {
      title: "iOS Developer Intern",
      company: "Infosys, Mysore DC",
      appStoreLink:
        "https://drive.google.com/file/d/1-ICV6Aeg4JoHeVfGkf1t2SNipopOTn-N/view?usp=sharing",
      period: "May 2024 - June 2024",
      description: "",
      responsibilities: [
        "Developed a Library Management System, enhancing efficiency for three user roles.",
        "Improved team productivity by 15% through Agile sprint optimizations.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-blue-100 to-white scroll-mt-24"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
          Professional Experience
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
              {exp.appStoreLink && exp.appStoreLink !== "#" && (
                <Link
                  href={exp.appStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-semibold text-gray-900 mr-2"
                  aria-label={`Visit ${exp.company} website`}
                >
                  <div className="flex items-center gap-2 text-blue-600 text-underline mt-1 text-sm">
                    <Building2 className="w-4 h-4" aria-hidden="true" />
                    <span>{exp.company}</span>
                  </div>
                </Link>
              )}
              {exp.appStoreLink === "#" && (
                <div className="flex items-center gap-2 text-blue-600 text-underline mt-1 text-sm">
                  <Building2 className="w-4 h-4" aria-hidden="true" />
                  <span>{exp.company}</span>
                </div>
              )}
              <div className="flex items-center gap-2 text-gray-600 mt-2">
                <Calendar className="w-4 h-4" aria-hidden="true" />
                <span>{exp.period}</span>
              </div>
              {exp.description && (
                <p className="text-gray-700 mb-4">{exp.description}</p>
              )}
              <ul className="list-disc list-inside space-y-2 text-gray-700 mt-4">
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
