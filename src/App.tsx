import './App.css'
import { Navbar } from './components/Home/Navbar/Navbar'
import { Home } from './pages/HomePage'
import {Routes, Route} from 'react-router-dom'
import { AboutPage } from './pages/AboutPage'
import { Footer } from './components/Home/Footer/Footer'

function App() {  

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
