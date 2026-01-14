"use client";

import { useState } from "react";
import { Globe, Layers, Database, Cpu, Palette, Shield, Zap, Code2 } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/sections/navbar";
import AcademySection from "@/components/sections/academy-section";

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
      <section className="mx-auto max-w-5xl px-2 md:px-14 pb-8 md:h-full md:max-h-237.5 md:max-w-7xl pt-14 md:pt-20 relative z-30">
        <div className="container px-4 mx-auto">
          <AcademySection />
        </div>
      </section>
    </div>
  )
}

export default Academy
