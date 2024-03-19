import { FaHeartBroken } from "react-icons/fa"
import { useFavories } from "../../store/Favories"
import "./Favories.css"
import { useInventaire } from "../../store/Inventaire"

export const Favories = () => {
  const favories = useFavories(state => state.favories)
  const favoriRemove = useFavories(state => state.favoryRemove)

  const addToInventaire = useInventaire(state => state.addToInventaire)

  const handleClicked = (id: string, image: string, name: string, price: number) => {
    addToInventaire(id, image, name, price)
  }

  return <>
  <div className="list-favory">
    {favories.length === 0 && <h1 className='empty'>Your favories is empty</h1>}
    {
        favories.map((product, index) => {
          return <article key={index} className='card'>
            <div className="category">{product.category}</div>
            <img src={product.image} alt={product.name} />
            <FaHeartBroken className='heart' onClick={() => favoriRemove(product)}/>
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