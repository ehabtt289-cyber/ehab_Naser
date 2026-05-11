"use client"

import { useState, useEffect } from "react"

function StarBackground() {
  const [mounted, setMounted] = useState(false)
  const [stars, setStars] = useState([])
  const [blueStars, setBlueStars] = useState([])
  const [shootingStars, setShootingStars] = useState([])
  const [meteors, setMeteors] = useState([])

  useEffect(() => {
    setStars(
      [...Array(60)].map((_, i) => ({
        id: `star-${i}`,
        size: Math.random() * 2 + 1,
        top: Math.random() * 100,
        left: Math.random() * 100,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 5,
      }))
    )

    setBlueStars(
      [...Array(40)].map((_, i) => ({
        id: `blue-star-${i}`,
        size: Math.random() * 3 + 1,
        top: Math.random() * 100,
        left: Math.random() * 100,
        duration: Math.random() * 6 + 4,
        delay: Math.random() * 8,
        opacity: Math.random(),
      }))
    )

    setShootingStars(
      [...Array(4)].map((_, i) => ({
        id: `shooting-${i}`,
        top: Math.random() * 50,
        left: Math.random() * 100,
        delay: Math.random() * 20,
      }))
    )

    setMeteors(
      [...Array(5)].map((_, i) => {
        const angle = Math.random() * 360
        const distance = 1400
        return {
          id: `meteor-${i}`,
          top: Math.random() * 80,
          left: Math.random() * 100,
          delay: Math.random() * 10,
          duration: Math.random() * 4 + 4,
          angle,
          distance,
        }
      })
    )

    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-cosmic-black">

        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              width: star.size,
              height: star.size,
              top: `${star.top}%`,
              left: `${star.left}%`,
              animationDuration: `${star.duration}s`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}

        {blueStars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-neon-blue rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]"
            style={{
              width: star.size,
              height: star.size,
              top: `${star.top}%`,
              left: `${star.left}%`,
              animationDuration: `${star.duration}s`,
              animationDelay: `${star.delay}s`,
              opacity: star.opacity,
            }}
          />
        ))}

        {shootingStars.map((star) => (
          <div
            key={star.id}
            className="absolute w-[2px] h-24 bg-gradient-to-t from-transparent via-white to-transparent rotate-45 animate-shooting-star"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}

        {meteors.map((meteor) => (
          <div
            key={meteor.id}
            className="absolute meteor"
            style={{
              top: `${meteor.top}%`,
              left: `${meteor.left}%`,
              animationDelay: `${meteor.delay}s`,
              animationDuration: `${meteor.duration}s`,
              "--angle": `${meteor.angle}deg`,
              "--distance": `${meteor.distance}px`,
            }}
          />
        ))}

      </div>

      <style jsx>{`
        @keyframes shooting-star {
          0% {
            transform: translateX(100%) translateY(-100%) rotate(45deg);
            opacity: 1;
          }
          100% {
            transform: translateX(-1000%) translateY(1000%) rotate(45deg);
            opacity: 0;
          }
        }

        .animate-shooting-star {
          animation: shooting-star 12s linear infinite;
        }

        @keyframes meteor-move {
          0% {
            transform: rotate(var(--angle)) translateX(0);
            opacity: 1;
          }
          100% {
            transform: rotate(var(--angle)) translateX(var(--distance));
            opacity: 0;
          }
        }

        .meteor {
          width: 6px;
          height: 6px;
          background: white;
          border-radius: 50%;
          position: absolute;
          box-shadow: 0 0 20px white;
          transform-origin: center;
          animation: meteor-move linear infinite;
        }

        .meteor::after {
          content: "";
          position: absolute;
          top: 50%;
          left: -220px;
          width: 220px;
          height: 3px;
          transform: translateY(-50%);
          background: linear-gradient(
            to right,
            transparent,
            rgba(255, 255, 255, 0.8)
          );
        }
      `}</style>
    </div>
  )
}

export default StarBackground
