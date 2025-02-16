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
    <div className="flex flex-col items-center justify-center gap-12 bg-[#FAFAFA] overflow-hidden">
      {/* Animate Entry and Main Content */}
      <AnimatePresence mode="wait">
        {!entryCompleted && (
          <motion.div
            key="entry"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5, ease: "easeOut" }} // Reduced delay
          >
            <Entry onScrollUp={() => setEntryCompleted(true)} />
          </motion.div>
        )}

        {entryCompleted && (
          <motion.div
            key="main-content"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }} // Faster transition
            className="w-full"
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

export default App