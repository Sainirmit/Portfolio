import { Calendar, GraduationCap } from "lucide-react"

export default function Education() {
  const education = [
    {
      school: "Metropolia University Of Applied Science",
      location: "Myyrmakki, Finland",
      degree: "ICT Summer School",
      period: "5th August 2024 - 23rd August 2024",
    },
    {
      school: "Metropolia University Of Applied Science",
      location: "Myyrmakki, Finland",
      degree: "ICT Summer School",
      period: "1st August 2023 - 25th August 2023",
    },
    {
      school: "Chitkara University",
      location: "Punjab, India",
      degree: "Bachelors Of Engineering, Computer Science",
      period: "September 2021 - August 2025",
    },
  ]

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Education</h2>
        <div className="space-y-8 max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-200 to-blue-50 p-6 rounded-xl shadow-md">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800">{edu.school}</h3>
                  <p className="text-gray-600">{edu.location}</p>
                  <p className="text-gray-700 mt-1">{edu.degree}</p>
                  <div className="flex items-center gap-2 text-gray-500 mt-2">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

