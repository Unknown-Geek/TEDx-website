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
      const handleVideoEnd = () => setVideoEnded(true)
      video.addEventListener("ended", handleVideoEnd)
      return () => video.removeEventListener("ended", handleVideoEnd)
    }
  }, [])

  // Detect scroll, keyboard, and touch input
  useEffect(() => {
    const handleScroll = (event) => {
      if (event.deltaY < 0) onScrollUp()
    }

    const handleKeyDown = (event) => {
      if (event.key === "ArrowUp") onScrollUp()
    }

    const handleTouchStart = (event) => {
      const startY = event.touches[0].clientY
      const handleTouchMove = (moveEvent) => {
        const endY = moveEvent.touches[0].clientY
        if (endY < startY - 50) {
          onScrollUp()
          window.removeEventListener("touchmove", handleTouchMove)
        }
      }
      window.addEventListener("touchmove", handleTouchMove)
    }

    window.addEventListener("wheel", handleScroll)
    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("touchstart", handleTouchStart)

    return () => {
      window.removeEventListener("wheel", handleScroll)
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("touchstart", handleTouchStart)
    }
  }, [onScrollUp])

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {/* Video (Responsive & Properly Scaled) */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-contain md:object-cover"
      >
        <source src="/assets/Intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Scroll-Up Icon (Perfectly Centered at Bottom) */}
      <AnimatePresence>
        {videoEnded && (
          <motion.div
            className="absolute bottom-10 left-0 w-full flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onScrollUp}
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
            >
              <ArrowUpCircle
                className="text-white"
                size={56} // Adjusted for visibility
                strokeWidth={2.5}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
