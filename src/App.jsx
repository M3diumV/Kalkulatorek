import { Routes, Route } from 'react-router-dom';
import LandingView from './views/LandingView';
import MainView from './views/MainView';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingView />} />
      <Route path="/kalkulator" element={<MainView />} />
    </Routes>
  );
}
