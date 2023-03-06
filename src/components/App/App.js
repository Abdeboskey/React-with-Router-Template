import { Routes, Route } from 'react-router-dom';
import sunflower from 'assets/seed.png';
import Layout from 'components/Layout/Layout';
import SoftwareLayout from 'components/Layout/SoftwareLayout';
import Software from 'pages/Software/Software';
import MusicLayout from 'components/Layout/MusicLayout';
import SkatingLayout from 'components/Layout/SkatingLayout';
import Home from 'pages/Home/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={sunflower} className="sunflower" alt="A light blue sunflower spinning slowly in the top-right corner" />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="software" element={<SoftwareLayout />}>
            <Route index element={<Software />} />
            <Route path="background" element={<h1>Background</h1>} />
            <Route path="portfolio" element={<h1>Portfolio</h1>} />
            <Route path="stack" element={<h1>Stack</h1>} />
            <Route path="resume" element={<h1>Resume</h1>} />
          </Route>
          <Route path="music" element={<MusicLayout />}>
          </Route>
          <Route path="skating" element={<SkatingLayout />}>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
