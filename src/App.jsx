import Home from './components/Home';
import Countdown from './components/Countdown';
import { Analytics } from "@vercel/analytics/react";
import { About } from './components/About';
import Footer from './components/Footer';
import "./styles/ScrollingText.css"
import SocialIcons from './components/SocialIcons';

function App() {
  return (
    <div className='flex flex-col items-center justify-center gap-12'>
      <Home/>
      <About/>
      <Countdown/>
      <Footer />
    </div>
  );
}

export default App;
