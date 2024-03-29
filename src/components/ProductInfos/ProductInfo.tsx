import { useProduct } from '../../store/Product'
import { useShop } from '../../store/Shop'
import './ProductInfo.css'
import { useState } from 'react'
import { FaCartShopping } from 'react-icons/fa6'
import { FaHeart } from 'react-icons/fa6'
import { FaStar } from 'react-icons/fa6'
import { useInventaire } from '../../store/Inventaire'
import { useFavories } from '../../store/Favories'

export const ProductInfo = () => {
  const productID = useProduct(state => state.ProductID)
  const shopping = useShop(state => state.shopping)
  const [slider, setSlider] = useState<number>()
  const inventaire = useInventaire(state => state.inventaire)
  const imgs = ["https://www.course-api.com/images/store/extra-product-1.jpeg", "https://www.course-api.com/images/store/extra-product-2.jpeg", "https://www.course-api.com/images/store/extra-product-3.jpeg", "https://www.course-api.com/images/store/extra-product-4.jpeg"]  

  const addToInventaire = useInventaire(state => state.addToInventaire)
  const favoryAdd = useFavories(state => state.favoryAdd)


  return <>
    <div className="product-info-container">
      {
        shopping?.map((product, index) => {
          if (product.id === productID) {
            return (
              <div key={index} className="product-info">
                <div className="left">
                  <img className='img-principal' src={typeof slider !== "number" ? product.image : imgs[slider]} alt={product.name} />
                  
                  <div className="other-images">
                  <img src={product.image} alt={product.name} onClick={() => setSlider(product.image)}/>
                   {
                      imgs.map((img, index) => {
                        return <img key={index} src={img} alt={product.name} onClick={() => setSlider(index)}/>
                      })
                   }
                  </div>
                </div>
                <div className="right">
                  <h2 className='title'>{product.name}</h2>
                   <div className="stars">
                    <span>
                      <FaStar className='star'/>
                      <FaStar className='star'/>
                      <FaStar className='star'/>
                      <FaStar className='star'/>
                      <FaStar className='star'/>
                    </span>
                    <span>5 (234 Reviews)</span>
                   </div>
                  <p className="price">${product.price}</p>
                  <p className='description'>{product.description}</p>
                  
                  <div className="category">
                    <span>Category: <span className='normal'>{product.category}</span></span>
                    <span>Brand: <span className='normal'>{product.company}</span></span>
                    <span>Available: <span className='normal'>In Stock</span></span>
                  </div>

                  <div className="line"></div>

                  <div className="content-btn">
                    <button className='add-to-cart'
                    { ...inventaire.find((item) => item.id === product.id) ? {disabled: true} : {} }
                    onClick={() => addToInventaire(product.id, product.image, product.name, product.price)}><FaCartShopping /> Add to cart</button>
                    <button className='add-to-wishlist' onClick={() => favoryAdd(product)}><FaHeart /> Add to wishlist</button>
                  </div>
                </div>
              </div>
            )
          }
          return null
        })
      }
    </div>
  </>
}