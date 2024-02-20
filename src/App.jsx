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
              <Route path="/game/All" element={<Game theme="All" />} />
              <Route path="/game/Inventions" element={<Game theme="Inventions" />} />
              <Route path="/game/Monuments" element={<Game theme="Monuments" />} />
              <Route path="/game/Musique" element={<Game theme="Musique" />} />
              <Route path="/game/Histoire" element={<Game theme="Histoire" />} />
              <Route path="/game/Personnalités" element={<Game theme="Personnalités" />} />
              <Route path="/cards" element={<CardsList />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
