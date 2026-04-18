import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import PresentationOverview from './components/PresentationOverview'
import TheorySection from './components/TheorySection'
import TypesOfConnections from './components/TypesOfConnections'
import DialecticalCategories from './components/DialecticalCategories'
import PracticalConnections from './components/PracticalConnections'
import MethodologicalMeaning from './components/MethodologicalMeaning'
import InteractiveGame from './components/InteractiveGame'
import Footer from './components/Footer'
import FallingFlowers from './components/FallingFlowers'
import VideoSection from './components/VideoSection'
import CardGame from './components/CardGame'
import MindmapPage from './components/MindmapPage'

const HomePage = () => (
  <>
    <div id="home">
      <HeroSection />
    </div>
    <div id="theory">
      <TheorySection />
    </div>
    <div id="dialectics">
      <DialecticalCategories />
    </div>
    <div id="connections">
      <TypesOfConnections />
    </div>
    <div id="cases">
      <PracticalConnections />
    </div>
    <div id="methodology">
      <MethodologicalMeaning />
    </div>

    <InteractiveGame />
  </>
)

function App() {
  return (
    <BrowserRouter>
      <main className="bg-soviet-offwhite min-h-screen text-zinc-800">
        <FallingFlowers />
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Navigate to="/overview" replace />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/overview" element={<PresentationOverview />} />
          <Route path="/video" element={<VideoSection />} />
          <Route path="/game" element={<CardGame />} />
          <Route path="/mindmap-detail" element={<MindmapPage />} />
        </Routes>
        
        <Footer />
      </main>
    </BrowserRouter>
  )
}

export default App
