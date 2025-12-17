import { Routes, Route, Navigate } from 'react-router-dom';
import InitialScreen from './screens/initialScreen';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<InitialScreen />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}