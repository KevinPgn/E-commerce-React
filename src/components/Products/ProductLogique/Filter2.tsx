import { useShop } from "../../../store/Shop"
import "../Products.css"

export const Filter2 = () => {
  const priceFiler = useShop(state => state.priceFilter)
  const setPriceFilter = useShop(state => state.setPriceFilter)
  const shopLength = useShop(state => state.shopLength)

  console.log(priceFiler)

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPriceFilter(event.target.value);
  }

  return <>
    <div className="found">
      <span className="length">{shopLength} products found!</span>
      <div className="line"></div>

      <div className="sorts">
        <span>Sort by :</span>
        <select onChange={handleSortChange}>
          <option value="Lowest">Lowest price</option>
          <option value="Highest">Highest price</option>
        </select>
      </div>
    </div>
  </>
}
