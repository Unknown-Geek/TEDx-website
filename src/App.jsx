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
import SpeakersList from './components/SpeakersList';
import SpeakersTitle from './components/SpeakersTitle';
import PreviousSpeakers from './components/PreviousSpeakers';
import PreviousSpeakersTitle from './components/PreviousSpeakersTitle';
import Ticket from './components/Ticket';

function App() {
  const [entryCompleted, setEntryCompleted] = useState(false)

  return (
    <div className='flex flex-col items-center justify-center gap-12 bg-[#FAFAFA]'>
      <Home />
      <Countdown />
      <Analytics />
      <About />
      <SpeakersTitle/>
      <SpeakersList />
      <PreviousSpeakersTitle/>
      <PreviousSpeakers/>
      <Ticket />
      <Footer />
    </div>
  )
}

export default App
