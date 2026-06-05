import Image from "next/image";

export default function Gallery() {
  const images = [
    {
      src: "/images/photo_2026-06-04_22-30-09.jpg",
      title: "Active Playtime",
      tag: "Play Area",
      desc: "Safe and clean indoor activities space.",
      span: "md:col-span-2 md:row-span-1",
    },
    {
      src: "/images/playschool_classroom.png",
      title: "Creative Learning Zone",
      tag: "Classroom",
      desc: "Bright classroom setup with child-friendly furniture.",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      src: "/images/playschool_playground.png",
      title: "Outdoor Play Park",
      tag: "Playground",
      desc: "Lush green outdoor play zone with swings.",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      src: "/images/photo_2026-06-04_22-30-17.jpg",
      title: "Interactive Education",
      tag: "Activities",
      desc: "Teacher guided building block sessions.",
      span: "md:col-span-2 md:row-span-1",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-white dark:bg-[#1A1108] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-pink font-display font-semibold text-sm uppercase tracking-wider bg-brand-pink/10 px-4 py-1.5 rounded-full">
            Our Gallery
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 dark:text-[#FFF5EB] mt-4 mb-6 leading-tight">
            Take a Peek into Our Colorful Campus
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            A glimpse of the environment we build every day—filled with colors, laughter, creative tools, and exploration.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`relative overflow-hidden rounded-3xl group shadow-md aspect-[4/3] ${img.span}`}
            >
              {/* Image */}
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-w-768px) 100vw, 33vw"
              />

              {/* Overlay (always visible slightly on mobile, slides up on hover) */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/25 to-transparent opacity-90 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div>
                  <span className="inline-block bg-brand-teal text-white font-display text-xs font-bold px-3 py-1 rounded-full mb-3">
                    {img.tag}
                  </span>
                  <h3 className="text-white font-display text-xl font-bold mb-1">
                    {img.title}
                  </h3>
                  <p className="text-slate-200 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {img.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
