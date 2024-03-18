import { useShop } from "../../../store/Shop"
import "../Products.css"

export const Search = () => {
  const searchValue = useShop(state => state.searchValue)
  const setSearchValue = useShop(state => state.setSearchValue)

  return <>
    <input className="search" type="text" placeholder="Find Your Product..." value={searchValue}
    onChange={(e) => setSearchValue(e.target.value)}
    />
  </>
}