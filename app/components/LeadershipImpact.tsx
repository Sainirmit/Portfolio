import { LineChart, Users, TrendingUp } from "lucide-react";

export default function LeadershipImpact() {
  const impacts = [
    {
      icon: <LineChart className="w-8 h-8 text-blue-600" />,
      text: "Generated $25,000+ in revenue through strategic tech and business initiatives.",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      text: "Engaged with 500+ industry professionals, driving market expansion and client acquisition.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      text: "Enhanced team efficiency by 30% via Agile process optimization.",
    },
  ];

  return (
    <section id="leadership-impact" className="py-20 relative overflow-hidden">
      {/* Background with highlight effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-900 opacity-90 z-0"></div>
      <div className="absolute inset-0 bg-[url('/leadership-bg.svg')] opacity-10 z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">
          Leadership & Impact
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {impacts.map((impact, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-white/20 rounded-full mb-5">
                  {impact.icon}
                </div>
                <p className="text-white text-lg font-medium">{impact.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
