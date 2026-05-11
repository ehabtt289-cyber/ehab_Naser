"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Rocket, User, Briefcase, Mail, Menu, X } from "lucide-react"

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", icon: <Rocket size={18} />, link: "#home" },
    { name: "Skills", icon: <User size={18} />, link: "#skills" },
    { name: "Projects", icon: <Briefcase size={18} />, link: "#projects" },
    { name: "Contact", icon: <Mail size={18} />, link: "#contact" }
  ]

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-4 backdrop-blur-lg bg-black/40 border-b border-white/10"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-tight"
        >
          <span className="text-white">Ehab Naser </span>
          <span className="text-neon-blue">Portfolio</span>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.link}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative group text-slate-300 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium"
            >
              {link.icon}
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-neon-blue transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}

          <motion.button
          
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-neon-blue/10 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-neon-violet transition-colors"
            
          >
            <a href="cv.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              >
            Download CV
            </a>
          </motion.button>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            {navItems.map((link) => (
              <a
                key={link.name}
                href={link.link}
                onClick={() => setIsOpen(false)}
                className="text-white text-lg flex items-center gap-3"
              >
                {link.icon}
                {link.name}
              </a>
            ))}

            <button
              onClick={() => setIsOpen(false)}
              className="bg-neon-blue px-6 py-3 rounded-full text-white mt-6"
            >
              Download CV
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  )
}

export default Navbar