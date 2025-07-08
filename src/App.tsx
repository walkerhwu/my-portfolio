import './App.css'
import NavBar from "./components/navbar.tsx";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Life from "./pages/Life";
import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
   const items = ["Home", "Experience", "Life", "Contact"];
    return (
        <BrowserRouter>
            <div className="app-container">
                <NavBar brandName="" navItems={items} />
                <main className="sections-container">
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/experience" element={<Experience />} />
                        <Route path="/life" element={<Life />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/" element={<Navigate to="/home" replace />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    )
}

export default App
