import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Game from './components/Game';
import Home from './components/Home';
import CardsList from './components/CardsList';

function App() {
  return (
    <div>
      <Router>
        <div>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/game" element={<Game />} />
              <Route path="/cards" element={<CardsList />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
