import * as React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Me from './pages/Me'
import Works from './pages/Works'
import Skill from './pages/Skill'

function App() {
  return (
    <Routes>
   
      <Route path="/" element={<Home />} />
      <Route path="/works" element={<Works />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/me" element={<Me />} />
      <Route path="/skills" element={<Skill/>}/>
    </Routes>
    
  );
}

function Blog() {
  window.location.href = 'https://mohitdotexe.hashnode.dev';
  return null;
}

export default App;
