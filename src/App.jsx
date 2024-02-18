import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Game from './components/Game';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Router>
        <div>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/game" element={<Game />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
