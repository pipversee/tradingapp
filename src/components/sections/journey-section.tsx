// "use client";

// import React from 'react';
// import { milestones } from '@/lib';
// import { motion } from "framer-motion";

// const JourneySection = () => {
//   return (
//     <section className="mx-auto px-6 py-24 sm:py-32 max-w-5xl md:max-w-7xl relative overflow-hidden">
//       {/* Header Area */}
//       <div className="flex flex-col items-center mb-16 relative z-10">
//         <div className="relative mb-8 group">
//           <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full opacity-50 group-hover:opacity-75 transition-opacity" />
//           <video
//             className="relative z-10 w-30 h-30 md:w-35 md:h-35 drop-shadow-[0_0_30px_rgba(161,252,234,0.3)]"
//             autoPlay
//             loop
//             muted
//             playsInline
//             src="https://resend.com/static/landing-page/3d-react.mp4"
//           />
//         </div>

//         <h2 className="font-serif text-[48px] md:text-[56px] tracking-tight leading-[1.1] text-white text-center mb-4">
//           Our Journey
//         </h2>
//         <p className="text-[16px] md:text-[18px] leading-[1.6] text-[#888888] text-center max-w-2xl text-balance">
//           The complete timeline of our trading evolution. Every milestone, mistake, and moment of growth.
//         </p>
//       </div>

//       {/* Timeline */}
//       <div className="relative max-w-4xl mx-auto">
//         {/* Timeline Line */}
//         <div className="absolute left-[11px] top-0 bottom-0 w-[2px] bg-[linear-gradient(to_bottom,hsl(142, 69%, 58%),hsl(142, 72%, 39%))] z-10" />

//         {/* Timeline Steps */}
//         <div className="space-y-16">
//           {milestones.map((milestone, index) => (
//             <motion.div
//               key={milestone.date}
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="relative pl-12"
//             >
//               {/* Timeline Node */}
//               <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-[linear-gradient(135deg,hsl(142, 69%, 58%),hsl(142, 72%, 39%))] border-4 border-background shadow-node z-20" />

//               {/* Content */}
//               <div>
//                 <span className="text-sm font-medium text-timeline-accent tracking-wide">
//                   {milestone.date}
//                 </span>
//                 <h3 className="text-xl font-medium text-foreground mt-1 mb-2">
//                   {milestone.title}
//                 </h3>
//                 <p className="text-muted-foreground leading-relaxed">
//                   {milestone.description}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default JourneySection;