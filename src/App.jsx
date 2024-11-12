import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

// Pages
import Home from './Pages/Home'
import About from './Pages/About'
import Work from './Pages/Work'
import Contact from './Pages/Contact'

// Comp
import Layout from './Components/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to='/home'/>} />
        <Route path='/' element={<Layout/>}>
          <Route path='/home' element={<Home/> } />
          <Route path='/about' element={<About/> } />
          <Route path='/work' element={<Work/> } />
          <Route path='/contact' element={<Contact/> } />
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
