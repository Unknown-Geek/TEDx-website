"use client"

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

export default function App() {
  const [entryCompleted, setEntryCompleted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  const transitionSpeed = isMobile ? 0.8 : 0.6

  return (
    <div className="flex flex-col items-center justify-center bg-[#FAFAFA] overflow-hidden">
      <AnimatePresence mode="sync">
        {!entryCompleted ? (
          <motion.div
            key="entry"
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: transitionSpeed, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="fixed inset-0 z-10"
          >
            <Entry onScrollUp={() => setEntryCompleted(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="main-content"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: transitionSpeed, ease: [0.43, 0.13, 0.23, 0.96] }}
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
        )}
      </AnimatePresence>
      <Analytics />
    </div>
  )
}

