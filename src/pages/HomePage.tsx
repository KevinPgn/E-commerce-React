import { Blog } from "../components/Home/Blog/Blog"
import { Features } from "../components/Home/Featured/Features"
import { Footer } from "../components/Home/Footer/Footer"
import { Hero } from "../components/Home/Hero/Hero"
import { Infos } from "../components/Home/Informations/Infos"
import { Parallax } from "../components/Home/Parallax/Parallax"

export const Home = () => {
  return <>
    <Hero />
    <Features />
    <Parallax />
    <Blog />
    <Infos />
    <Footer />
  </>
}