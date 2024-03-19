import { useProduct } from '../../store/Product'
import './ProductInfo.css'

export const ProductInfo = () => {
  const productID = useProduct(state => state.ProductID)
  
  return <>
    <div className="product-info-container">
      <h1>Product Info</h1>
      <p>{productID}</p>
    </div>
  </>
}