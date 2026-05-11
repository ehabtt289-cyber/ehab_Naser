"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView, animate } from "framer-motion"
import { Code2, Globe, Layout, Cpu, Database, Layers } from "lucide-react"



/* ============================= */
/*      Skills Circle Component  */
/* ============================= */

function SkillsCircle({ percentage, title, icon: Icon, index }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, percentage, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (value) => setCount(Math.round(value)),
      })
      return () => controls.stop()
    }
  }, [isInView, percentage])

  const radius = 50
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (count / 100) * circumference

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -10, scale: 1.08 }}
      className="flex flex-col items-center gap-5 group"
    >
      <div className="relative w-28 h-28 md:w-36 md:h-36 flex items-center justify-center">

        <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">

          {/* Gradient */}
          <defs>
            <linearGradient id={`gradient-${index}`}>
              <stop offset="0%" stopColor="#00f5ff" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>

          {/* Background circle */}
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="transparent"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="8"
          />

          {/* Animated circle */}
          <motion.circle
            cx="60"
            cy="60"
            r={radius}
            fill="transparent"
            stroke={`url(#gradient-${index})`}
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            initial={{ strokeDashoffset: circumference }}
            animate={isInView ? { strokeDashoffset: offset } : {}}
            transition={{ duration: 2, ease: "easeOut" }}
            className="drop-shadow-[0_0_20px_#00f5ff]"
          />
        </svg>

        {/* Center content */}
         <div className="absolute flex flex-col items-center justify-center">

             <Icon
               size={22}
               className="text-white mb-1 group-hover:text-cyan-400 transition-colors"
             />

             {/* الرقم واضح بدون text-transparent */}
             <span className="text-2xl md:text-3xl font-extrabold text-cyan-400 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]">
               {count}%
             </span>

           </div>
      </div>

      <h3 className="text-sm md:text-lg text-slate-200 text-center">
        {title}
      </h3>
    </motion.div>
  )
}



/* ============================= */
/*         Main Section          */
/* ============================= */

export default function Skills() {

  const skills = [
    { title: "JavaScript", percentage: 80, icon: Code2 },
    { title: "React", percentage: 75, icon: Code2 },
    { title: "Next.js", percentage: 70, icon: Layers },
    { title: "Tailwind CSS", percentage: 85, icon: Layout },
    { title: "Node.js", percentage: 65, icon: Cpu },
    { title: "MongoDB", percentage: 60, icon: Database },
    { title: "UI/UX Design", percentage: 70, icon: Layout },
    { title: "Responsive Design", percentage: 85, icon: Globe },
  ]

  return (
    <section className="relative py-32 overflow-hidden">

      {/* 🌊 Huge glowing water orb */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[900px] h-[900px] bg-gradient-to-tr from-cyan-500/20 via-purple-500/20 to-blue-500/20 
                        rounded-full blur-[200px] animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            My <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-neon-blue">Skills</span>
          </motion.h2>

          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            I build modern, scalable, and responsive web applications using powerful tools and technologies.
          </p>
        </div>

        {/* Glass container */}
        <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-[60px] 
                        px-8 py-14 md:px-16 md:py-20">

          {/* Inner glow accents */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/10 blur-[120px] rounded-full" />
           
          <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-16 gap-x-8 justify-items-center">
            {skills.map((skill, index) => (
              <SkillsCircle
                key={skill.title}
                {...skill}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}