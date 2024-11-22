import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Solutions from './pages/Solutions';
import Industries from './pages/Industries';
import Usecases from './pages/Usecases';
import Resources from './pages/Resources';
import News from './pages/News';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/Usecases" element={<Usecases />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/news" element={<News />} />
         </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
