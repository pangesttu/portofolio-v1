import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import "./index.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import AnimatedBackground from "./components/Background";
import Navbar from "./components/Navbar";
import Portofolio from "./Pages/Portofolio";
import ContactPage from "./Pages/Contact";
import ProjectDetails from "./components/ProjectDetail";
import WelcomeScreen from "./Pages/WelcomeScreen";
import { AnimatePresence } from "framer-motion";
import notfound from "./Pages/404";
import NotFoundPage from "./Pages/404";

const LandingPage = ({ showWelcome, setShowWelcome }) => {
  return (
    <>
      <AnimatePresence mode="wait">{showWelcome && <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />}</AnimatePresence>

      {!showWelcome && (
        <>
          <Navbar />
          <AnimatedBackground />
          <Home />
          <About />
          <Portofolio />
          <ContactPage />
          <footer className="bg-gradient-to-br from-[rgb(249,224,239)] via-[rgb(244,244,255)] to-[rgb(214,247,247)]">
            <center>
              <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" />
              <span className="block text-sm pb-4 text-[#a855f7] text-center dark:text-[#a855f7]">
                © 2025{" "}
                <a href="https://flowbite.com/" className="hover:underline">
                  Dimas Pangestu™
                </a>
                . All Rights Reserved.
              </span>
            </center>
          </footer>
        </>
      )}
    </>
  );
};

const ProjectPageLayout = () => (
  <>
    <ProjectDetails />
    <footer>
      <center>
        {/* <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" /> */}
        <span className="block text-sm pb-4 text-purple-500 text-center dark:text-purple-400">
          © 2025{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Dimas Pangestu
          </a>
          . All Rights Reserved.
        </span>
      </center>
    </footer>
  </>
);

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-[rgb(249,224,239)] via-[rgb(244,244,255)] to-[rgb(214,247,247)]">
        <Routes>
          <Route path="/" element={<LandingPage showWelcome={showWelcome} setShowWelcome={setShowWelcome} />} />
          <Route path="/project/:id" element={<ProjectPageLayout />} />
          <Route path="*" element={<NotFoundPage />} /> {/* Ini route 404 */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
