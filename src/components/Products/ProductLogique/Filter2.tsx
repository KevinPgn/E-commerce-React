import { useShop } from "../../../store/Shop"
import "../Products.css"

export const Filter2 = () => {
  const shopping = useShop(state => state.shopping)
  const priceFiler = useShop(state => state.priceFilter)
  const setPriceFilter = useShop(state => state.setPriceFilter)

  console.log(priceFiler)

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPriceFilter(event.target.value);
  }

  return <>
    <div className="found">
      <span className="length">{shopping.length} products found!</span>
      <div className="line"></div>

      <div className="sorts">
        <span>Sort by :</span>
        <select onChange={handleSortChange}>
          <option value="lowers">Lowers price</option>
          <option value="higher">Higher price</option>
        </select>
      </div>
    </div>
  </>
}
