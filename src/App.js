import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NoPage from './pages/404'



function App() {
    return(
         <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='*' element={<NoPage />} />
            </Routes>
         </BrowserRouter>
    )
    
};

export default App 
    
      