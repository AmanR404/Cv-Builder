import './index.css'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import About from './components/About'
import Personalinfo from './components/DetailsFilling Parts/Personalinfo'
import Experience from './components/DetailsFilling Parts/Experience'
import Education from './components/DetailsFilling Parts/Education'
import KeySkills from './components/DetailsFilling Parts/KeySkills'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Preview from './components/Preview'

function App() {
  return (
    <><Router>
      <Navbar/>
        <Routes>
              <Route path='/' element={<Dashboard/>}/>
              <Route path="/about" element={<About />} />

              <Route path='/personal' element={<Personalinfo/>}/>
              <Route path='/experience' element={<Experience/>}/>
              <Route path='/education' element={<Education/>}/>
              <Route path='/skills' element={<KeySkills/>}/>

              <Route path='/preview' element={<Preview/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App