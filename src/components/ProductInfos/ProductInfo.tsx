import { useProduct } from '../../store/Product'
import { useShop } from '../../store/Shop'
import './ProductInfo.css'
import { useState } from 'react'

export const ProductInfo = () => {
  const productID = useProduct(state => state.ProductID)
  const shopping = useShop(state => state.shopping)
  const [slider, setSlider] = useState(0)
  const imgs = ["https://www.course-api.com/images/store/extra-product-1.jpeg", "https://www.course-api.com/images/store/extra-product-2.jpeg", "https://www.course-api.com/images/store/extra-product-3.jpeg", "https://www.course-api.com/images/store/extra-product-4.jpeg"]  

  return <>
    <div className="product-info-container">
      {
        shopping?.map((product, index) => {
          if (product.id === productID) {
            return (
              <div key={index} className="product-info">
                <div className="left">
                  <img src={typeof slider === "number" ? imgs[slider] : slider} alt={product.name} />

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
                  <h2>{product.name}</h2>
                  <p>{product.description}</p>
                  <p>Price: {product.price}€</p>
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