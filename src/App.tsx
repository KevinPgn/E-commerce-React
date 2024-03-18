import './App.css'
import { Navbar } from './components/Home/Navbar/Navbar'
import { Home } from './pages/HomePage'
import {Routes, Route} from 'react-router-dom'
import { AboutPage } from './pages/AboutPage'
import { Footer } from './components/Home/Footer/Footer'
import { ProductsPage } from './pages/ProductsPage'
import { CartContainer } from './components/CartContainer/CartContainer'

function App() {  

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
      <CartContainer />
      <Footer />
    </>
  )
}

export default App
