import Home from './components/Home';
import Countdown from './components/Countdown';
import { Analytics } from "@vercel/analytics/react";
import { About } from './components/About';

function App() {
  return (
    <div>
      <Home />
      <Countdown />
      <Analytics />
      <About />
    </div>
  );
}

export default App;
