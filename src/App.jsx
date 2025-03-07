import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './dashboard/layout/MainLayout';
import AdminIndex from './dashboard/pages/AdminIndex';
import e from 'cors';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/NewsHive" element={<MainLayout />} />
        <Route path="/NewsHive/admin" element={<AdminIndex />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;