import { Routes, Route } from 'react-router-dom';
import sunflower from 'assets/seed.png';
import Header from 'components/Header/Header';
// import Footer from 'components/Footer/Footer';
import './App.css';

import Home from 'pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <img src={sunflower} className="sunflower" alt="A light blue sunflower spinning slowly in the top-right corner" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/software" element={<h1>Software</h1>} />
        <Route path="/music" element={<h1>Music</h1>} />
        <Route path="/skating" element={<h1>Skating</h1>} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
