import { useShop } from '../../../store/Shop'
import '../Products.css'
import { FaHeart } from 'react-icons/fa'

//image, name, overview, price, category

export const List = () => {
  const shopping = useShop(state => state.shopping)
  const priceFilter = useShop(state => state.priceFilter)
  const categoryFilter = useShop(state => state.categoryFilter)

  console.log(shopping)
  
  const filtered = () => {
    if(categoryFilter !== "All") {
      return shopping.filter(product => product.category === categoryFilter)
    } else {
      return shopping
    }
  }

  return <>
  <div className="list-container">
    {
      filtered().map((product, index) => {
        return <article key={index} className='card'>
          <div className="category">{product.category}</div>
          <img src={product.image} alt={product.name} />
          <FaHeart className='heart' />
          <div className="content">
            <h3>{product.name}</h3>
            <p>{product.description.slice(0, 70)}</p>
            <p className='price'>${product.price}</p>
            <button className='btn'>Add To Cart</button>
          </div>
        </article>
      })
    }
  </div>
  </>
}