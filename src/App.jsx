import Home from './components/Home';
import Countdown from './components/Countdown';
import { Analytics } from "@vercel/analytics/react";
import { About } from './components/About';
import Footer from './components/Footer';
import "./styles/ScrollingText.css"
import SpeakersList from './components/SpeakersList';
import SpeakersTitle from './components/SpeakersTitle';

function App() {
  return (
    <div className='flex flex-col items-center justify-center gap-12 bg-[#FAFAFA]'>
      <Home />
      <Countdown />
      <Analytics />
      <About />
      <SpeakersTitle/>
      <SpeakersList />
      <Footer />
    </div>
  );
}

export default App;
