import './App.scss';

import {BrowserRouter, Routes, Route, } from "react-router-dom";
// import your route components too

import React from 'react'
import Podcast from './pages/Podcast';
import Home from './pages/Home';
import Contact from './pages/Contact';
import OurCause from './pages/OurCause';
import Team from './pages/Team';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import ScrollButton from './components/ScrollButton';
import Volunteer from './components/Volunteer';
import MaidenProgram from './components/MaidenProgram';
import WhatWeDo from './components/WhatWeDo';
import ScrollToTop from './components/ScrollToTop';


const App = () => {
  return (
    <div className='contain'>

    <BrowserRouter>
<ScrollToTop>

    <NavBar />

    <Routes>

      <Route path="/" element={<Home />} />
        <Route path="podcast" element={<Podcast />} />
        <Route path="podcast/:slug" element={<MaidenProgram />} />
        <Route path="team" element={<Team />} />
        <Route path="ourcause" element={<OurCause />} />
        <Route path="contact" element={<Contact />} />
        <Route path="volunteer" element={<Volunteer />} />
        <Route path="maiden" element={<MaidenProgram />} />
        <Route path="whatwedo" element={<WhatWeDo/>} />

        <Route path="*" element={<Home />} />


    </Routes>

    <Footer />

    <ScrollButton />
</ScrollToTop>

  </BrowserRouter>

  </div>

  )
}

export default App