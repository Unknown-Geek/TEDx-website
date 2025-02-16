import { useState } from "react"
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

  return (
    <div className="flex flex-col items-center justify-center bg-[#FAFAFA] overflow-hidden min-h-screen">
      <AnimatePresence mode="wait">
        {!entryCompleted && (
          <motion.div
            key="entry"
            initial={{ y: 0 }}
            animate={{ y: 0 }}
            exit={{ y: "-100%", opacity: 0 }} // Moves up & fades out
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <Entry onScrollUp={() => setEntryCompleted(true)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content slides in *simultaneously* as Entry moves up */}
      <motion.div
        key="main-content"
        initial={{ y: "100%", opacity: 0 }} // Start off-screen
        animate={entryCompleted ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }} // Slide up *while* Entry scrolls
        transition={{ duration: 0.8, ease: "easeInOut" }}
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
    </div>
  )
}

export default App
