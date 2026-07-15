"use client";

import Image from "next/image";
import { ArrowRight, Star, Heart, GraduationCap } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-amber-100/50 via-amber-50/20 to-white dark:from-[#2A1E17] dark:via-[#1F1712] dark:to-[#1A1108] transition-colors duration-300"
    >
      {/* Background Decorative Items */}
      <div className="absolute top-12 left-6 w-8 h-8 text-brand-pink/40 animate-float-slow">
        <Heart className="w-full h-full fill-current" />
      </div>
      <div className="absolute top-1/4 right-8 w-10 h-10 text-brand-yellow/60 animate-float-medium">
        <Star className="w-full h-full fill-current" />
      </div>
      <div className="absolute bottom-8 left-10 w-12 h-12 text-brand-blue/30 animate-float-medium">
        <GraduationCap className="w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* School Name Banner in the Top Center */}
        <div className="flex flex-col items-center justify-center mb-8 md:mb-12 text-center animate-fade-in">
          <img
            src="/images/banner_trans.png"
            alt="Adhyan Kidz Play School"
            className="h-16 sm:h-24 md:h-28 w-auto object-contain drop-shadow-sm transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & CTA */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="inline-block bg-brand-blue/15 text-brand-blue font-display font-semibold px-4 py-1.5 rounded-full text-sm mb-4">
              ✨ Admissions Open for 2026 - 2027
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-slate-800 dark:text-[#FFF5EB] leading-tight mb-6">
              Where Learning is a{" "}
              <span className="text-brand-orange relative inline-block">
                Playful
                <svg
                  className="absolute left-0 -bottom-2 w-full h-3 text-brand-yellow"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,5 Q50,10 100,5"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                </svg>
              </span>{" "}
              Journey!
            </h1>
            <p className="text-lg text-slate-600 dark:text-[#E8D4C4] max-w-md mb-8 leading-relaxed">
              At <strong className="text-brand-purple font-semibold dark:text-brand-purple">Adhyan Kidz</strong>, we provide a fun, safe, and nurturing environment where your child can grow, explore, and develop a lifelong love for learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="#admissions"
                className="inline-flex items-center justify-center gap-2 bg-brand-orange text-white font-display font-bold px-8 py-4 rounded-full hover:bg-brand-orange/95 hover:scale-105 transition-all shadow-lg hover:shadow-brand-orange/30 group"
              >
                Book a Free Tour
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#programs"
                className="inline-flex items-center justify-center bg-white text-slate-700 border-2 border-slate-200 font-display font-bold px-8 py-4 rounded-full hover:bg-slate-50 transition-colors"
              >
                Explore Programs
              </a>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-6 mt-12 border-t border-slate-200/60 dark:border-[#2C1F14]/60 pt-8 w-full max-w-md">
              <div>
                <span className="block font-display text-2xl md:text-3xl font-extrabold text-brand-blue">
                  100%
                </span>
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Safe Space
                </span>
              </div>
              <div>
                <span className="block font-display text-2xl md:text-3xl font-extrabold text-brand-pink">
                  Play-based
                </span>
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Learning
                </span>
              </div>
              <div>
                <span className="block font-display text-2xl md:text-3xl font-extrabold text-brand-teal">
                  1:10
                </span>
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Teacher Ratio
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none flex justify-center">
              {/* Decorative background circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-brand-yellow/30 rounded-full blur-3xl -z-10" />

              {/* Photo 1 (Main Hero Image) */}
              <div className="relative z-10 w-72 h-72 sm:w-[320px] sm:h-[320px] rotate-[-4deg] rounded-3xl overflow-hidden border-8 border-white dark:border-[#25180E] shadow-xl hover:rotate-0 transition-transform duration-500 group">
                <Image
                  src="/images/activities_kids_playing.png"
                  alt="Adhyan Kidz environment and play school activities"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-w-72) 100vw, 320px"
                  priority
                />
              </div>

              {/* Photo 2 (Secondary Hero Image - Class activities) */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 z-20 w-52 h-52 sm:w-[240px] sm:h-[240px] rotate-[8deg] rounded-3xl overflow-hidden border-8 border-white dark:border-[#25180E] shadow-2xl hover:rotate-0 transition-transform duration-500 group">
                <Image
                  src="/images/activities_kids_learning.png"
                  alt="Adhyan Kidz classroom setup"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-w-52) 100vw, 240px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
