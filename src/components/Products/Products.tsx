import { Filter } from "./ProductLogique/Filter"
import { Filter2 } from "./ProductLogique/Filter2"
import { List } from "./ProductLogique/List"
import { Search } from "./ProductLogique/Search"
import "./Products.css"

export const Products = () => {
  return <>
    <section className="products">
      <Search />
      <Filter2 />
      <main>
        <Filter />
        <List />
      </main>
    </section>
  </>
}