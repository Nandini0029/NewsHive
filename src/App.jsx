import { Routes, Route, HashRouter as Router, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import NewsInfo from "./Pages/NewsInfo";
import MainLayout from "./dashboard/layout/MainLayout";

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root to /NewsHive */}
        <Route path="/" element={<Navigate to="/NewsHive" />} />

        {/* Define Routes */}
        <Route path="/NewsHive" element={<Home />} />
        <Route path="/admin" element={<MainLayout />} />
        <Route path="/news/:id" element={<NewsInfo/>}/>
        {/* Catch-all route for 404 */}
        <Route path="*" element={<Navigate to="/NewsHive" />} />
      </Routes>
    </Router>
  );
}

export default App;
