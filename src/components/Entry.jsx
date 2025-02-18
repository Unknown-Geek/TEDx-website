"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpCircle } from "lucide-react"

export default function Entry({ onScrollUp }) {
  const [videoEnded, setVideoEnded] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.addEventListener("ended", () => setVideoEnded(true))
      return () => video.removeEventListener("ended", () => setVideoEnded(true))
    }
  }, [])

  // Auto-scroll after video ends
  useEffect(() => {
    if (videoEnded) {
      const timeout = setTimeout(onScrollUp, 500) // Faster transition
      return () => clearTimeout(timeout)
    }
  }, [videoEnded, onScrollUp])

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-contain md:object-cover"
      >
        <source src="/assets/Intro.mp4" type="video/mp4"/>
      </video>

      {/* Scroll-Up Icon (Now visible from the start & clickable) */}
      <motion.div
        className="absolute bottom-10 left-0 w-full flex justify-center cursor-pointer"
        initial={{ opacity: 0.4 }} // Dimmed initially
        animate={{ opacity: videoEnded ? 1 : 0.4 }} // Fully visible after video
        onClick={onScrollUp} // Skip animation on click
      >
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
        >
          <ArrowUpCircle className="text-white" size={56} strokeWidth={2.5} />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
