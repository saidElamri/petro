import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Solutions from "./pages/Solutions";
import Dashboard from "./pages/Dashboard";
import Chatbot from "./components/chatbot"
import Contact from "./pages/Contact";
 
export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact" element={<Contact />} />
    
      </Routes>
      <Chatbot />
    </div>
  );
}
