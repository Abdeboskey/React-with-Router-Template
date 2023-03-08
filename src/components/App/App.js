import { Routes, Route } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
