import './App.css'
import { Blog } from './components/Home/Blog/Blog'
import { Features } from './components/Home/Featured/Features'
import { Footer } from './components/Home/Footer/Footer'
import { Hero } from './components/Home/Hero/Hero'
import { Infos } from './components/Home/Informations/Infos'
import { Navbar } from './components/Home/Navbar/Navbar'
import { Parallax } from './components/Home/Parallax/Parallax'

function App() {  

  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Parallax />
      <Blog />
      <Infos />
      <Footer />
    </>
  )
}

export default App
