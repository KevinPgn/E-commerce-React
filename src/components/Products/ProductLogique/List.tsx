import { useInventaire } from '../../../store/Inventaire'
import { useShop } from '../../../store/Shop'
import '../Products.css'
import { FaHeart } from 'react-icons/fa'

//image, name, overview, price, category

export const List = () => {
  const shopping = useShop(state => state.shopping)
  const priceFilter = useShop(state => state.priceFilter)
  const categoryFilter = useShop(state => state.categoryFilter)
  const setShopLength = useShop(state => state.setShopLength)

  const addToInventaire = useInventaire(state => state.addToInventaire)
  
  
  const filtered = () => {
    let filteredShopping = shopping

    if (categoryFilter !== "All") {
      filteredShopping = shopping.filter(product => product.category === categoryFilter)
    }

    if (priceFilter === "Lowest") {
      filteredShopping = filteredShopping.sort((a, b) => a.price - b.price)
    } else if (priceFilter === "Highest") {
      filteredShopping = filteredShopping.sort((a, b) => b.price - a.price)
    }

    setShopLength(filteredShopping.length)

    return filteredShopping
  }

  const handleClicked = (id: number, image: string, name: string, price: number) => {
    addToInventaire(id, image, name, price)
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
              <button 
              onClick={() => handleClicked(product.id, product.image, product.name, product.price)}
              className='btn'>Add To Cart</button>
            </div>
          </article>
        })
      }
    </div>
  </>
}