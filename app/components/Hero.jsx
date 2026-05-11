"use client"
import { useRef, useEffect, useState } from "react"
import { motion, useTransform, useSpring, useMotionValue } from "framer-motion"

function Hero() {
  const containerRef = useRef(null)
  const [stars, setStars] = useState([])

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 30 })

  const rotateX = useTransform(mouseYSpring, [-300, 300], [10, -10])
  const rotateY = useTransform(mouseXSpring, [-300, 300], [-10, 10])

  // Mouse move only on desktop
  useEffect(() => {
    if (window.innerWidth < 768) return

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      x.set(clientX - innerWidth / 2)
      y.set(clientY - innerHeight / 2)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [x, y])

  // Button magnetic effect
  const buttonRef = useRef(null)
  const [btnPos, setBtnPos] = useState({ x: 0, y: 0 })

  const handleBtnMouseMove = (e) => {
    if (window.innerWidth < 768) return
    const { clientX, clientY } = e
    const { left, top, width, height } =
      buttonRef.current.getBoundingClientRect()

    const centerX = left + width / 2
    const centerY = top + height / 2

    setBtnPos({
      x: (clientX - centerX) * 0.3,
      y: (clientY - centerY) * 0.3,
    })
  }

  const handleBtnMouseLeave = () => {
    setBtnPos({ x: 0, y: 0 })
  }

  useEffect(() => {
    setStars(
      Array.from({ length: 20 }, () => ({
        width: Math.random() * 15 + 5,
        height: Math.random() * 15 + 5,
        top: Math.random() * 100,
        left: Math.random() * 100,
      }))
    )
  }, [])

  const headline = "I'm Ehab Naser, Full Stack Developer Using MERN Stack"
  const words = headline.split(" ")

  return (
    <section
      ref={containerRef}
         className="min-h-screen flex items-center pt-24 md:pt-0 overflow-hidden mt-20                                                                                                                                                                                                                                                                                                                                                               "
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">

        {/* LEFT CONTENT */}
        <div className="text-center md:text-left space-y-6">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-neon-blue font-semibold tracking-widest text-sm uppercase flex items-center justify-center md:justify-start gap-2"
          >
            <span className="w-8 h-[1px] bg-neon-blue hidden md:block" />
            <span>Full Stack Developer</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-white">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.07,
                  ease: [0.2, 0.65, 0.3, 0.9],
                }}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-slate-400 text-base sm:text-lg md:text-xl max-w-xl mx-auto md:mx-0 leading-relaxed"
          >
            I'm a passionate full stack developer with expertise in the MERN stack.
            I create beautiful, functional websites and applications that provide seamless user experiences.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

            <motion.a
              href="#projects"
              ref={buttonRef}
              onMouseMove={handleBtnMouseMove}
              onMouseLeave={handleBtnMouseLeave}
              animate={{ x: btnPos.x, y: btnPos.y }}
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-8 py-4 bg-neon-blue rounded-full font-bold text-white shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] transition-all overflow-hidden group"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>

            <motion.a
              href="#contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="px-8 py-4 border border-white/20 rounded-full font-bold text-white hover:bg-white/5 transition-colors"
            >
              Lets Talk
            </motion.a>

          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <motion.div
          style={{ rotateX, rotateY, perspective: 1000 }}
          className="relative flex justify-center items-center mt-12 md:mt-0"
        >
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 2, -2, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full relative"
          >

            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-40 blur-3xl animate-pulse" />

            <div className="absolute inset-6 bg-cosmic-blue/80 backdrop-blur-3xl rounded-full border border-white/10 shadow-inner overflow-hidden">

              {stars.map((star, i) => (
                <div
                  key={i}
                  className="absolute bg-white/20 rounded-full"
                  style={{
                    width: star.width,
                    height: star.height,
                    top: `${star.top}%`,
                    left: `${star.left}%`,
                  }}
                />
              ))}

            </div>

            <div className="absolute inset-0 flex items-center justify-center">
               <motion.div
                 animate={{ y: [-10, 10, -10] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-40 h-40 sm:w-48 sm:h-48 md:w-72 md:h-72 bg-[url('/ehabimg.jpg')] bg-cover bg-center drop-shadow-[0_0_20px_rgba(59,130,246,0.5)] rounded-full border-4 border-neon-blue/30"
               />
            </div>

          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero
//nm rn dev
//npm run dev                                                                                                                                                                                                                                                                                                                                                      