import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./dashboard/layout/MainLayout";
import AdminIndex from "./dashboard/pages/AdminIndex";
import News from "./info/News";

function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Main Dashboard Layout */}
        <Route path="/" element={<MainLayout />}>
          {/* Redirect base URL to /dashboard/admin */}
          <Route index element={<Navigate to="/dashboard/admin" />} />

          {/* Admin Panel */}
          <Route path="dashboard/admin" element={<AdminIndex />} />

          {/* Placeholder for Writer Panel */}
          <Route path="dashboard/writer" element={<div>Writer Panel Coming Soon!</div>} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
