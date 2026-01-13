"use client";

import { useState } from "react";
import { Globe, Layers, Database, Cpu, Palette, Shield, Zap, Code2 } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/sections/navbar";

const categories = ["All", "Beginner", "Intermediate", "Advanced"] as const;
type Category = (typeof categories)[number];

const courses = [
  {
    icon: Globe,
    title: "Web Fundamentals",
    description: "Master HTML, CSS, and JavaScript from scratch with hands-on projects.",
    category: "Beginner",
  },
  {
    icon: Layers,
    title: "React Mastery",
    description: "Build modern, scalable applications with React and its ecosystem.",
    category: "Intermediate",
  },
  {
    icon: Database,
    title: "Full-Stack Projects",
    description: "Create complete applications with databases, APIs, and deployment.",
    category: "Advanced",
  },
  {
    icon: Cpu,
    title: "AI Integrations",
    description: "Leverage AI APIs and machine learning in your applications.",
    category: "Advanced",
  },
  {
    icon: Palette,
    title: "Design Systems",
    description: "Create consistent, beautiful interfaces with reusable components.",
    category: "Intermediate",
  },
  {
    icon: Shield,
    title: "Security Essentials",
    description: "Protect your applications with modern security best practices.",
    category: "Intermediate",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimize your apps for speed and deliver exceptional experiences.",
    category: "Advanced",
  },
  {
    icon: Code2,
    title: "TypeScript Basics",
    description: "Add type safety to your JavaScript projects with TypeScript.",
    category: "Beginner",
  },
];

const Academy = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredCourses = courses.filter(
    (course) => activeCategory === "All" || course.category === activeCategory
  );

  return (
    <div>
      <Navbar />
      {/* Floor Background Layer */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none hidden md:block">
        <Image
          alt="Floor background"
          src="https://resend.com/_next/image?url=%2Fstatic%2Flanding-page%2Fbg-hero-1.jpg&w=3840&q=100&dpl=dpl_4tUqZd5uM7Tom4zJTxfJ7UkQvKFx"
          fill
          priority
          className="object-cover opacity-80 transition-opacity duration-500"
          style={{ objectPosition: 'center top' }}
        />
      </div>
      {/* <section className="mx-auto max-w-5xl px-2 md:px-14 pb-8 md:h-full md:max-h-237.5 md:max-w-7xl pt-14 md:pt-20 relative z-30">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-center mb-14"
          >
            <h2 className="text-[2.75rem] leading-[1.15] font-semibold tracking-[-0.04em] text-popover mb-5">
              Welcome to the Academy
            </h2>
            <p className="text-[18px] leading-[1.6] text-[#666666] max-w-xl mx-auto font-normal">
              Master every skill with curated learning paths.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center mb-12"
          >
            <div className="inline-flex items-center p-1 bg-white border border-[#eaeaea] rounded-full">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`relative px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${activeCategory === category
                    ? "text-white"
                    : "text-[#666666] hover:text-popover"
                    }`}
                >
                  {activeCategory === category && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-popover rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{category}</span>
                </button>
              ))}
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
            >
              {filteredCourses.map((course, index) => (
                <motion.div
                  key={course.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                  className="group relative"
                >
                  <div className="h-full p-6 bg-black border border-white/22rounded-2xl transition-all duration-300 hover:border-[#d4d4d4] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1">
                    <div className="w-12 h-12 mb-5 rounded-xl bg-destructive-foreground border border-[#eaeaea] flex items-center justify-center transition-all duration-300 group-hover:bg-[#f0f7ff] group-hover:border-[#0070f3]/20">
                      <course.icon
                        className="w-6 h-6 text-muted-foreground transition-colors duration-300 group-hover:text-[#0070f3]"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div className="mb-3 flex items-center gap-2">
                      <h3 className="text-[1rem] font-semibold text-popover tracking-[-0.01em]">
                        {course.title}
                      </h3>
                    </div>
                    <p className="text-sm text-[#666666] leading-relaxed mb-4">
                      {course.description}
                    </p>
                    <span className="inline-block px-3 py-1 text-xs font-medium text-[#666666] bg-black rounded-full">
                      {course.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center mt-14"
          >
            <button className="group relative inline-flex items-center justify-center h-12 px-8 text-[0.9375rem] font-medium text-[#0a0a0a] bg-white border border-[#eaeaea] rounded-full transition-all duration-300 hover:border-[#d4d4d4] hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
              <span>Browse All Courses</span>
              <svg
                className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </motion.div>
        </div>
      </section> */}
    </div>
  )
}

export default Academy
