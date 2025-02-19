import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
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
import Highlights_title from "./components/Highlights_title"
import Highlights_text from "./components/Highlights_text"
import Highlights from "./components/Highlights"
import Ticket from "./components/Ticket"
import Merch from "./components/Merch"
import WebTeam from "./components/WebTeam"

import "./styles/ScrollingText.css"

function AnimatedRoutes({ entryCompleted, setEntryCompleted, transitionSpeed }) {
  const location = useLocation()

  return (
    <AnimatePresence mode="sync">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <AnimatePresence mode="sync" initial={false}>
              {!entryCompleted && !location.state?.fromMerch ? (
                <motion.div
                  key="entry"
                  initial={{ y: 0 }}
                  exit={{ y: "-100%" }}
                  transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
                  className="fixed inset-0 z-10"
                >
                  <Entry onScrollUp={() => setEntryCompleted(true)} />
                </motion.div>
              ) : (
                <motion.div
                  key="main-content"
                  initial={location.state?.fromMerch ? { x: "-100%" } : { y: "100%" }}
                  animate={{ x: 0, y: 0 }}
                  exit={location.state?.toMerch ? { x: "-100%" } : { x: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: [0.43, 0.13, 0.23, 0.96]
                  }}
                  className="w-full space-y-12"
                >
                  <Home />
                  <Countdown />
                  <About />
                  <SpeakersTitle />
                  <SpeakersList />
                  <PreviousSpeakersTitle />
                  <PreviousSpeakers />
                  <Highlights_title />
                  <Highlights />
                  <Highlights_text />
                  {/* <Ticket /> */}
                  <Footer />
                </motion.div>
              )}
            </AnimatePresence>
          }
        />
        <Route
          path="/merch"
          element={
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.3,
                ease: [0.43, 0.13, 0.23, 0.96]
              }}
              className="w-screen h-full md:h-screen"
            >
              <Merch />
            </motion.div>
          }
        />
        <Route
          path="/team"
          element={
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.3,
                ease: [0.43, 0.13, 0.23, 0.96]
              }}
              className="w-screen h-full"
            >
              <WebTeam />
            </motion.div>
          }
        />

      </Routes>
    </AnimatePresence>
  )
}

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
    <BrowserRouter>
      <div className="flex flex-col items-center justify-center bg-[#FAFAFA] overflow-hidden">
        <AnimatedRoutes
          entryCompleted={entryCompleted}
          setEntryCompleted={setEntryCompleted}
          transitionSpeed={transitionSpeed}
        />
        <Analytics />
      </div>
    </BrowserRouter>
  )
}