import { Paintbrush, Compass, BookOpen, Music, Baby } from "lucide-react";

export default function Programs() {
  const programs = [
    {
      name: "Playgroup",
      age: "1.5 - 2.5 Years",
      description: "Focuses on sensory exploration, coordination, and building social confidence through fun-filled activities.",
      features: ["Fine Motor Development", "Storytelling & Rhymes", "Sensory Toys & Clay Play", "Socializing Skills"],
      color: "border-brand-yellow/30 bg-brand-yellow/5 text-brand-orange hover:bg-brand-yellow/10",
      badgeColor: "bg-brand-yellow text-slate-800",
      icon: Music,
    },
    {
      name: "Nursery",
      age: "2.5 - 3.5 Years",
      description: "Introduces pre-reading and writing concepts along with artistic skills in a highly interactive format.",
      features: ["Basic Literacy & Phonics", "Numbers & Counting", "Arts, Crafts & Coloring", "Puppet Shows & Drama"],
      color: "border-brand-pink/30 bg-brand-pink/5 text-brand-pink hover:bg-brand-pink/10",
      badgeColor: "bg-brand-pink text-white",
      icon: Paintbrush,
    },
    {
      name: "Junior KG / LKG",
      age: "3.5 - 4.5 Years",
      description: "Nurtures cognitive growth, phonic reading, vocabulary, and basic mathematical operations.",
      features: ["Writing Sentences", "Advanced Math Concepts", "Public Speaking Exercises", "Interactive Science Play"],
      color: "border-brand-blue/30 bg-brand-blue/5 text-brand-blue hover:bg-brand-blue/10",
      badgeColor: "bg-brand-blue text-white",
      icon: Compass,
    },
    {
      name: "Senior KG / UKG",
      age: "4.5 - 5.5 Years",
      description: "Prepares young learners for formal schooling with an emphasis on independent reading and critical thinking.",
      features: ["Self-Expression & Speech", "Basic Addition/Subtraction", "Environmental Awareness", "Creative Problem Solving"],
      color: "border-brand-purple/30 bg-brand-purple/5 text-brand-purple hover:bg-brand-purple/10",
      badgeColor: "bg-brand-purple text-white",
      icon: BookOpen,
    },
    {
      name: "Day Care",
      age: "1.5 - 8.5 Years",
      description: "Provides a safe, hygienic, and nurturing environment for children with supervised play, resting spaces, and engaging activities.",
      features: ["Safe & Hygienic Environment", "Supervised Play & Activities", "Nutritious Meals Available", "Nap & Rest Areas"],
      color: "border-brand-teal/30 bg-brand-teal/5 text-brand-teal hover:bg-brand-teal/10",
      badgeColor: "bg-brand-teal text-white",
      icon: Baby,
    },
  ];

  return (
    <section id="programs" className="py-20 bg-amber-50/20 dark:bg-[#25180E] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-blue font-display font-semibold text-sm uppercase tracking-wider bg-brand-blue/10 px-4 py-1.5 rounded-full">
            Our Programs
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 dark:text-[#FFF5EB] mt-4 mb-6 leading-tight">
            Curriculum Tailored for Every Milestone
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            We offer age-appropriate programs that build solid foundations for your child's physical, emotional, and intellectual growth.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {programs.map((program, idx) => {
            const Icon = program.icon;
            return (
              <div
                key={idx}
                className={`border-2 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 shadow-sm ${program.color}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`font-display text-xs font-bold px-3 py-1 rounded-full ${program.badgeColor}`}>
                      Age: {program.age}
                    </span>
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-slate-800 dark:text-[#FFF5EB] mb-2">
                    {program.name}
                  </h3>

                  <p className="text-slate-600 dark:text-[#E8D4C4] text-sm leading-relaxed mb-6">
                    {program.description}
                  </p>
                </div>

                <div className="border-t border-slate-200/50 dark:border-[#2C1F14]/50 pt-4 mt-4">
                  <span className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-3">
                    Curriculum Highlights:
                  </span>
                  <ul className="space-y-2">
                    {program.features.map((feat, fidx) => (
                      <li key={fidx} className="flex items-center gap-2 text-slate-700 dark:text-[#E8D4C4] text-sm">
                        <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${program.badgeColor.split(" ")[0]}`} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
