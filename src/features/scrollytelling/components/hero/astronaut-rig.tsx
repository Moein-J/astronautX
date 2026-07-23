'use client'

import { motion } from 'motion/react'

type TAstronautRigProps = {
  className?: string
  isFloating?: boolean
  scale?: number
}

export function AstronautRig({
  className = '',
  isFloating = true,
  scale = 1,
}: TAstronautRigProps) {
  return (
    <motion.div
      className={`relative inline-block select-none ${className}`}
      style={{ scale }}
      animate={
        isFloating
          ? {
              y: [0, -22, 0, 16, 0],
              rotate: [0, 3.5, -2.5, 1.5, 0],
            }
          : {}
      }
      transition={{
        duration: 7.5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {/* Outer Ethereal Cosmic Aura */}
      <div className="absolute inset-0 -z-10 scale-150 transform animate-pulse rounded-full bg-linear-to-r from-cyan-500/30 via-purple-500/20 to-indigo-500/30 blur-3xl" />

      {/* Floating Sparkle Particles around Helmet */}
      <motion.div
        className="absolute -top-4 left-1/4 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_10px_#22d3ee]"
        animate={{
          y: [0, -10, 0],
          opacity: [0.3, 1, 0.3],
          scale: [0.8, 1.3, 0.8],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 -right-6 h-2.5 w-2.5 rounded-full bg-purple-300 shadow-[0_0_12px_#c084fc]"
        animate={{
          y: [0, 12, 0],
          opacity: [0.4, 0.9, 0.4],
          scale: [1, 0.7, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.8,
        }}
      />

      {/* Vector Astronaut SVG */}
      <svg
        width="300"
        height="380"
        viewBox="0 0 280 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full drop-shadow-[0_20px_45px_rgba(6,182,212,0.4)]"
      >
        <defs>
          {/* Visor Gradient */}
          <linearGradient id="visorGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="35%" stopColor="#0284c7" />
            <stop offset="75%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#9333ea" />
          </linearGradient>

          {/* Suit Metallic Gradient */}
          <linearGradient id="suitMetallic" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="60%" stopColor="#e2e8f0" />
            <stop offset="100%" stopColor="#cbd5e1" />
          </linearGradient>

          {/* Dark Joint Armor */}
          <linearGradient id="armorJoint" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#334155" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>

          {/* Thruster Flame Gradient */}
          <linearGradient id="thrusterFire" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="1" />
            <stop offset="40%" stopColor="#818cf8" stopOpacity="0.8" />
            <stop offset="80%" stopColor="#c084fc" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Life Support Backpack */}
        <rect
          x="65"
          y="90"
          width="150"
          height="160"
          rx="24"
          fill="#1e293b"
          stroke="#475569"
          strokeWidth="4"
        />
        {/* Oxygen Tank Tubes */}
        <path
          d="M 80 130 C 50 140, 50 190, 85 200"
          stroke="#38bdf8"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 200 130 C 230 140, 230 190, 195 200"
          stroke="#a855f7"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />

        {/* Thruster Jet Flames */}
        <motion.path
          d="M 75 250 Q 80 300 85 325 Q 75 300 75 250 Z"
          fill="url(#thrusterFire)"
          animate={{ scaleY: [0.85, 1.25, 0.9], opacity: [0.7, 1, 0.8] }}
          transition={{
            duration: 0.35,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        <motion.path
          d="M 195 250 Q 200 300 205 325 Q 195 300 195 250 Z"
          fill="url(#thrusterFire)"
          animate={{ scaleY: [1.1, 0.8, 1.2], opacity: [0.8, 0.6, 0.95] }}
          transition={{
            duration: 0.3,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />

        {/* Legs */}
        <path
          d="M 95 230 L 85 300 C 85 315, 110 325, 120 310 L 125 240 Z"
          fill="url(#suitMetallic)"
          stroke="#cbd5e1"
          strokeWidth="2"
        />
        <path
          d="M 185 230 L 195 300 C 195 315, 170 325, 160 310 L 155 240 Z"
          fill="url(#suitMetallic)"
          stroke="#cbd5e1"
          strokeWidth="2"
        />
        {/* Boots */}
        <path
          d="M 75 300 C 75 290, 120 290, 120 308 C 120 322, 70 322, 75 300 Z"
          fill="url(#armorJoint)"
        />
        <path
          d="M 205 300 C 205 290, 160 290, 160 308 C 160 322, 210 322, 205 300 Z"
          fill="url(#armorJoint)"
        />

        {/* Torso / Suit Body */}
        <path
          d="M 90 120 C 90 100, 190 100, 190 120 L 195 235 C 195 250, 85 250, 85 235 Z"
          fill="url(#suitMetallic)"
          stroke="#94a3b8"
          strokeWidth="3"
        />

        {/* Chest Control Console */}
        <rect
          x="110"
          y="135"
          width="60"
          height="55"
          rx="10"
          fill="#0f172a"
          stroke="#38bdf8"
          strokeWidth="2"
        />
        {/* Console LEDs */}
        <circle
          cx="123"
          cy="150"
          r="4"
          fill="#ef4444"
          className="animate-ping"
        />
        <circle cx="140" cy="150" r="4" fill="#22c55e" />
        <circle cx="157" cy="150" r="4" fill="#38bdf8" />
        {/* Telemetry Gauge Bar */}
        <rect x="120" y="165" width="40" height="6" rx="3" fill="#1e293b" />
        <rect x="120" y="165" width="28" height="6" rx="3" fill="#22d3ee" />

        {/* Arms */}
        {/* Left Arm */}
        <path
          d="M 90 120 C 65 140, 50 170, 60 200 C 65 210, 75 210, 80 195 C 75 175, 85 150, 100 135 Z"
          fill="url(#suitMetallic)"
          stroke="#cbd5e1"
          strokeWidth="2"
        />
        <circle cx="58" cy="205" r="14" fill="url(#armorJoint)" />

        {/* Right Arm */}
        <path
          d="M 190 120 C 215 135, 230 160, 220 195 C 215 205, 205 205, 200 190 C 205 170, 195 145, 180 135 Z"
          fill="url(#suitMetallic)"
          stroke="#cbd5e1"
          strokeWidth="2"
        />
        <circle cx="222" cy="198" r="14" fill="url(#armorJoint)" />

        {/* Shoulder Armor Pads */}
        <ellipse cx="92" cy="125" rx="16" ry="12" fill="url(#armorJoint)" />
        <ellipse cx="188" cy="125" rx="16" ry="12" fill="url(#armorJoint)" />

        {/* Helmet Outer Dome */}
        <circle
          cx="140"
          cy="75"
          r="54"
          fill="url(#suitMetallic)"
          stroke="#94a3b8"
          strokeWidth="3"
        />

        {/* Helmet Visor */}
        <ellipse
          cx="140"
          cy="75"
          rx="44"
          ry="36"
          fill="url(#visorGlow)"
          stroke="#e2e8f0"
          strokeWidth="2"
        />

        {/* Visor Glare / Reflection Highlights */}
        <path
          d="M 115 50 C 135 44, 160 48, 172 58 C 160 52, 135 52, 118 60 Z"
          fill="#ffffff"
          opacity="0.85"
        />
        <circle cx="168" cy="62" r="3.5" fill="#ffffff" opacity="0.9" />

        {/* Helmet Side Lights */}
        <circle cx="84" cy="75" r="5" fill="#38bdf8" />
        <circle cx="84" cy="75" r="2" fill="#ffffff" />
        <circle cx="196" cy="75" r="5" fill="#38bdf8" />
        <circle cx="196" cy="75" r="2" fill="#ffffff" />
      </svg>
    </motion.div>
  )
}
