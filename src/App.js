import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NoPage from './pages/404'
import About from './pages/A_propos'
import Logement from './pages/Logements'




function App() {
    return(
         <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='*' element={<NoPage />} />
                <Route path='/About' element={<About />} />
                <Route path='/Logement/:id' element={<Logement />} />
            </Routes>
         </BrowserRouter>
    )
    
};

export default App 
    
      