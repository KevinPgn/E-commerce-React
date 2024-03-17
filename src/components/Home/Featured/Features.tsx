import { FaCartArrowDown, FaMedal, FaShippingFast, FaTrophy } from "react-icons/fa";
import { useShop } from "../../../store/Shop";
import "./Features.css";

export const Features = () => {
  const shopping = useShop(state => state.shopping.splice(0, 4));

  console.log(shopping);
  
  
  return <>
  <section className="features-info">
    <div className="content-infos">
      <div className="block">
        <FaShippingFast className="icon"/>
        <span>Free shipping & Returns</span>
      </div>
      <div className="block">
        <FaMedal className="icon"/>
        <span>Quality & Award Winner</span>
      </div>
      <div className="block">
        <FaTrophy className="icon"/>
        <span>Best Seller of the Month</span>
      </div>
    </div>
  </section>

  <section className="features-product">
    <h2>Featured Products</h2>

    <div className="product-list">
      {shopping?.map((product, index) => {
        return <div key={index} className="product-card">
          <img src={product.image} alt={product.name} />
          <div className="content-product">
            <h3>{product.name}</h3>
            <p>{product.description.split('').splice(0, 60).join('')}</p>
            <span>€{product.price.toFixed(2)}</span>
            <button><FaCartArrowDown className="add"/></button>
          </div>
        </div>
      })}
    </div>
  </section>
  </>
}