import { useFavories } from '../../../store/Favories'
import { useInventaire } from '../../../store/Inventaire'
import { useProduct } from '../../../store/Product'
import { useShop } from '../../../store/Shop'
import '../Products.css'
import { FaHeart } from 'react-icons/fa'
import { FaHeartBroken } from 'react-icons/fa'
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from 'react-router-dom'

//image, name, overview, price, category

export const List = () => {
  const shopping = useShop(state => state.shopping)
  const priceFilter = useShop(state => state.priceFilter)
  const categoryFilter = useShop(state => state.categoryFilter)
  const setShopLength = useShop(state => state.setShopLength)
  const searchValue = useShop(state => state.searchValue)

  const favoriAdd = useFavories(state => state.favoryAdd)
  const favoriRemove = useFavories(state => state.favoryRemove)
  const favories = useFavories(state => state.favories)
  const addToInventaire = useInventaire(state => state.addToInventaire)
  const inventaire = useInventaire(state => state.inventaire)
  const productID = useProduct(state => state.ProductID)
  const setProductID = useProduct(state => state.setProductID)
  
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

    if(searchValue !== '') {
      filteredShopping = filteredShopping.filter(product => product.name.toLowerCase().includes(searchValue.toLowerCase()))
    }

    setShopLength(filteredShopping.length)

    return filteredShopping
  }

  const handleClicked = (id: string, image: string, name: string, price: number) => {
    addToInventaire(id, image, name, price)
  }

  return <>
    <div className="list-container">
      {
        filtered().map((product, index) => {
          return <article key={index} className='card' onClick={() => setProductID(product.id)}>
            <Link to={`/products/${productID}`}>
            <div className="category">{product.category}</div>
            <img src={product.image} alt={product.name} /></Link>
            <FaHeart className='heart' onClick={() => favoriAdd(product)}/>
            {favories.find(fav => fav.id === product.id) ? <FaHeartBroken className='heart' onClick={() => favoriRemove(product)}/> : null }
            <div className="content">
              <h3>{product.name}</h3>
              <p>{product.description.slice(0, 70)}</p>
              <p className='price'>${product.price}</p>
              <button 
              onClick={() => handleClicked(product.id, product.image, product.name, product.price)}
              className='btn'
              { ...inventaire.find((item) => item.id === product.id) ? {disabled: true} : {} }
              ><FaCartArrowDown /></button>
            </div>
          </article>
          
        })
      }
    </div>
  </>
}