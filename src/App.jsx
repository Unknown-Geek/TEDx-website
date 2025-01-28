import Home from './components/Home';
import Countdown from './components/Countdown';
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div>
      <Home />
      <Countdown />
      <Analytics />
    </div>
  );
}

export default App;
