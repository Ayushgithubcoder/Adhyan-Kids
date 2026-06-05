import { Shield, Sparkles, Smile, Heart, Check } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Safe & Secure",
      description: "Our premises feature complete CCTV coverage, round-the-clock security guards, and child-safe play zones.",
      icon: Shield,
      color: "bg-brand-pink/10 text-brand-pink border-brand-pink/20",
    },
    {
      title: "Play-Based Curriculum",
      description: "We focus on cognitive development through music, storytelling, arts, crafts, and interactive games.",
      icon: Sparkles,
      color: "bg-brand-yellow/10 text-brand-orange border-brand-yellow/20",
    },
    {
      title: "Loving & Trained Staff",
      description: "Our teachers are certified experts in early childhood education, ensuring personalized attention for every child.",
      icon: Heart,
      color: "bg-brand-purple/10 text-brand-purple border-brand-purple/20",
    },
    {
      title: "Healthy & Clean Environment",
      description: "Classrooms and toys are sanitized daily. We maintain high standards of hygiene and child friendly amenities.",
      icon: Smile,
      color: "bg-brand-teal/10 text-brand-teal border-brand-teal/20",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-[#1A1108] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header text */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-orange font-display font-semibold text-sm uppercase tracking-wider bg-brand-orange/10 px-4 py-1.5 rounded-full">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 dark:text-[#FFF5EB] mt-4 mb-6 leading-tight">
            Nurturing Environment for Your Little Ones
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            At Adhyan Kidz, we ensure that your child's first step away from home is filled with joy, comfort, safety, and immense learning opportunities.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className={`card-hover-effect bg-white dark:bg-[#25180E] border dark:border-[#2C1F14]/40 rounded-3xl p-8 flex flex-col items-center text-center shadow-sm ${feature.color.split(" ")[2]}`}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-inner ${feature.color.split(" ")[0]} ${feature.color.split(" ")[1]}`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="font-display text-xl font-bold text-slate-800 dark:text-[#FFF5EB] mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-[#E8D4C4] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Small stats banner */}
        <div className="mt-20 bg-gradient-to-r from-brand-blue/10 via-brand-yellow/10 to-brand-pink/10 dark:from-[#25180E] dark:to-[#1A1108] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-white dark:border-[#2C1F14]/50">
          <div className="max-w-xl">
            <h3 className="font-display text-2xl font-bold text-slate-800 dark:text-[#FFF5EB] mb-3">
              Give Your Child the Perfect Start
            </h3>
            <p className="text-slate-600 dark:text-[#E8D4C4] text-sm leading-relaxed">
              Admissions are open for the current academic session. Contact us today or visit our campus in Modipuram, Meerut to book a counseling session.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
            <a
              href="#admissions"
              className="bg-brand-pink text-white font-display font-bold px-8 py-3.5 rounded-full hover:bg-brand-pink/90 hover:scale-105 transition-all shadow-md text-center"
            >
              Apply Online
            </a>
            <a
              href="https://maps.app.goo.gl/MhWLAWeYvDEnS1oH7"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-[#2C1F14] text-slate-700 dark:text-[#FFF5EB] border border-slate-200 dark:border-[#423122] font-display font-bold px-8 py-3.5 rounded-full hover:bg-slate-50 dark:hover:bg-[#3B2C20] transition-all text-center flex items-center justify-center gap-2"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
