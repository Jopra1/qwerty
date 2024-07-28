import React from 'react'
import "./App.css"
// import Head1 from './Components/Head1'
import Head2 from './Components/Head2'
import Home from './Components/Home'
import About from './Components/About'

import { BrowserRouter as Router, Route, Routes} from "react-router-dom"

export const App = () => {
  return (
   
    
    <Router>
    <Head2></Head2>
      <Routes>
      <Route path='/' element={<Home />} />

      <Route path='/about' element={<About />} />
      </Routes>
   
  </Router>
  )
}
export default App