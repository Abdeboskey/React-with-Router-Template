import logo from 'assets/seed.png';
import './App.css';
import Footer from 'components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Howdy y'all, I'm
        </p>
        <h1>
          Aaron Burris-DeBoskey
        </h1>
        <p>
          ~ a software engineer, musician, & inline skater from Denver, CO.
        </p>
      </header>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
