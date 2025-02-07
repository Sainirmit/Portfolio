import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function About() {
  const skills = [
    "Swift",
    "Java",
    "Python",
    "SwiftUI",
    "UI Kit",
    "XCode",
    "ARKit",
    "Firebase",
    "HTML/CSS",
    "React",
    "JavaScript",
    "NodeJS",
    "NextJS",
    "TailwindCSS",
    "Machine Learning",
    "Data Science",
    "Agile Methodologies",
    "JIRA",
    "SCRUM",
    "Soft Skills",
    "Project Management",
    "MVVM",
    "MVC",
    "UI/UX Design",
    "Bitbucket",
    "Git",
    "GitHub",
    "Docker",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-blue-50">
      {/* Header */}
      <header className="flex items-center justify-between p-6">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-800 transition-colors"
          >
            Go back to Home
          </Link>
        </div>
        <div className="flex items-center gap-2"></div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-200/50 to-pink-200/50 rounded-3xl blur-3xl"></div>
            <Image
              src="/About.JPG"
              alt="Profile"
              width={500}
              height={500}
              className="relative rounded-3xl"
              priority
            />
          </div>
          <div className="space-y-6">
            <h1 className="text-6xl font-bold">Hi there!</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Driven by curiosity and a relentless pursuit of innovation, I
              thrive on building products that solve real-world problems. Every
              project I take on is a reflection of my desire to create, refine,
              and push boundaries. From shaping immersive digital experiences to
              crafting intuitive solutions, my journey is fueled by a deep love
              for technology and design. Explore my work and join me in shaping
              the future.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">My Journey So Far</h2>
            <p className="text-gray-600 leading-relaxed">
              Always eager to take on new challenges, I have worked with lean
              startups and played a key role in building innovative products.
              From leading iOS development to managing cross-functional teams, I
              thrive in fast-paced environments where creativity meets strategy.
              As a founding team member at Elevvia, I have contributed to web
              development, AI solutions, and product management. My journey has
              also taken me through impactful roles in interior design, AR
              technology, and proptech solutions, all driven by my passion for
              technology and problem-solving. Currently, I am focused on
              building scalable, user-centric products that bridge the gap
              between technology and real-world needs.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="px-4 py-2 bg-blue-300 text-black hover:bg-white/70 transition-colors"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
