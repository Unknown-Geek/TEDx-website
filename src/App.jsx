import Home from './components/Home';
import Countdown from './components/Countdown';
import { Analytics } from "@vercel/analytics/react";
import { About } from './components/About';
import "./styles/ScrollingText.css"

function App() {
  return (
    <div className='flex flex-col items-center justify-center gap-12'>
      <Home />
      <Countdown />
      <Analytics />
      <About  />
    </div>
  );
}

export default App;
