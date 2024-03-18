import { useInventaire } from "../../store/Inventaire"
import { useShop } from "../../store/Shop"
import "./CartContainer.css"
import { ImCross } from "react-icons/im";


export const CartContainer = () => {
  const inventaire = useInventaire(state => state.inventaire)
  const cartOpen = useShop(state => state.cartOpen)
  const toggleCart = useShop(state => state.toggleCart)

  const addMoreQuantity = useInventaire(state => state.addMoreQuantity)
  const removeQuantity = useInventaire(state => state.removeQuantity)

  console.log(inventaire)
  
  return (
    <>
      <div className={cartOpen ? "cartContainer active" : "cartContainer"}>
        <ImCross className="close" onClick={() => toggleCart()}/>

        {inventaire.length === 0 ? <h1>Cart is empty</h1> :
          <div className="cart">
            {inventaire.map((product, index) => {
              return <div key={index} className="cartProduct">
                <img src={product.image} alt={product.name} />
                <div className="info">
                  <h3>{product.name}</h3>
                  <p className="price">${product.price}</p>
                  <div className="quantity">
                    <button onClick={() => removeQuantity(product.id)}>-</button>
                    <p>{product.quantity}</p>
                    <button onClick={() => addMoreQuantity(product.id)}>+</button>
                  </div>
                </div>
              </div>
            })}
          <div className="total">
            <h3>Total: ${inventaire.reduce((acc, product) => acc + (product.price * product.quantity), 0)}</h3>
          </div>
          </div>

        }
      </div>
    </>
  );
}
