import { Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import RedPage from './components/Red';
import BluePage from './components/Blue';

function App() {
  return (
    <div>
      <Menu />
      <hr />
      <Routes>
        <Route path="/red" element={<RedPage />} />
        <Route path="/blue" element={<BluePage />} />
      </Routes>
    </div>
  );
}

export default App;
