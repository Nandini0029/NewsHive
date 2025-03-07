import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './dashboard/layout/MainLayout';
import AdminIndex from './dashboard/pages/AdminIndex';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<MainLayout />} />
        <Route path="/dashboard/admin" element={<AdminIndex />} />
      </Routes>
    </BrowserRouter>
  );
}