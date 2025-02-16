import Home from './components/Home';
import Countdown from './components/Countdown';
import { Analytics } from "@vercel/analytics/react";
import { About } from './components/About';
import Footer from './components/Footer';
import "./styles/ScrollingText.css"
import SpeakersList from './components/SpeakersList';
import SpeakersTitle from './components/SpeakersTitle';
import PreviousSpeakers from './components/PreviousSpeakers';
import PreviousSpeakersTitle from './components/PreviousSpeakersTitle';
import Ticket from './components/Ticket';
import Highlights_title from './components/Highlights_title';
import Highlights from './components/Highlights';
import Highlights_text from './components/Highlights_text';


function App() {
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
      <Highlights_title/>
      <Highlights/>
      <Highlights_text/>
      <Ticket />
      <Footer />
    </div>
  );
}

export default App;
