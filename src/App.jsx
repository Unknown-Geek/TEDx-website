import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Home from "./components/Home"
import Countdown from "./components/Countdown"
import { Analytics } from "@vercel/analytics/react"
import { About } from "./components/About"
import Footer from "./components/Footer"
import Entry from "./components/Entry"
import SpeakersList from "./components/SpeakersList"
import SpeakersTitle from "./components/SpeakersTitle"
import PreviousSpeakers from "./components/PreviousSpeakers"
import PreviousSpeakersTitle from "./components/PreviousSpeakersTitle"
import Ticket from "./components/Ticket"
import "./styles/ScrollingText.css"

function App() {
  const [entryCompleted, setEntryCompleted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768) // Mobile = width < 768px
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  // Different animation speeds
  const transitionSpeed = isMobile ? 1.2 : 0.8 // Slower on mobile

  return (
    <div className="flex flex-col items-center justify-center gap-12 bg-[#FAFAFA] overflow-hidden">
      {/* Animate Entry and Main Content */}
      <AnimatePresence mode="wait">
        {!entryCompleted && (
          <motion.div
            key="entry"
            initial={{ y: 0 }}
            animate={{ y: 0 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: transitionSpeed, ease: "easeInOut" }}
          >
            <Entry onScrollUp={() => setEntryCompleted(true)} />
          </motion.div>
        )}

      <motion.div
        key="main-content"
        initial={{ y: "100%", opacity: 0 }}
        animate={entryCompleted ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
        transition={{ duration: transitionSpeed, ease: "easeInOut" }}
        className="w-full space-y-12"
      >
        <Home />
        <Countdown />
        <About />
        <SpeakersTitle />
        <SpeakersList />
        <PreviousSpeakersTitle />
        <PreviousSpeakers />
        <Ticket />
        <Footer />
      </motion.div>

      <Analytics />
      </AnimatePresence>
    </div>

  )
}

export default App