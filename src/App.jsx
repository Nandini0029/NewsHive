import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./dashboard/layout/MainLayout";
import AdminIndex from "./dashboard/pages/AdminIndex";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      {/* <Route path='/login' element={<Login />} /> */}
        {/* Main Dashboard Layout */}
        <Route path="/dashboard" element={<MainLayout />}>
          {/* Default redirect to admin */}
          <Route index element={<Navigate to="/dashboard/admin" />} />

          {/* Admin Panel */}
          <Route path="admin" element={<AdminIndex />} />

          {/* Placeholder for Writer Panel (you can add the component later) */}
          <Route path="writer" element={<div>Writer Panel Coming Soon!</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;