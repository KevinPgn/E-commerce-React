import { useShop } from "../../../store/Shop"
import "../Products.css"

export const Filter = () => {
  const categoryFilter = useShop(state => state.categoryFilter)
  const setCategoryFilter = useShop(state => state.setCategoryFilter)
  
  console.log(categoryFilter)
  
  return <>
      <div className="filter-container">
        <div className="title"><h2>Categories</h2></div>
        <div className="clear">
          <span>Filter</span>
          <button onClick={() => setCategoryFilter('All')}>Clear Filters</button>
        </div>

        <div className="select-category">
          <span className="title-category">Select a Category :</span>
          <div>
            <input type="radio" name="category"  onChange={() => setCategoryFilter("All")}/>
            <span>All</span>
          </div>
          <div>
            <input type="radio" name="category"  onChange={() => setCategoryFilter("office")}/>
            <span>Office</span>
          </div>
          <div>
            <input type="radio" name="category"  onChange={() => setCategoryFilter("living room")}/>
            <span>Living Room</span>
          </div>
          <div>
            <input type="radio" name="category"  onChange={() => setCategoryFilter("kitchen")}/>
            <span>Kitchen</span>
          </div>
          <div>
            <input type="radio" name="category"  onChange={() => setCategoryFilter("bedroom")}/>
            <span>Bedroom</span>
          </div>
          <div>
            <input type="radio" name="category"  onChange={() => setCategoryFilter("dining")}/>
            <span>Dining</span>
          </div>
          <div>
            <input type="radio" name="category" onChange={() => setCategoryFilter("kids")}/>
            <span>Kids</span>
          </div>
        </div>
      </div>
  </>
}