import "./Blog.css"
import Chair from "../../../assets/chair.png"

export const Blog = () => {
  return <>
    <section className="blog">
      <div className="container">
        <div className="left">
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Minus doloribus error officia dicta et consequuntur, necessitatibus iure asperiores porro quis.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, animi!
          </p>
          <button>Discover More</button>
        </div>
        <div className="right">
          <img src={Chair} alt="" />
        </div>
      </div>
    </section>
  </>
}