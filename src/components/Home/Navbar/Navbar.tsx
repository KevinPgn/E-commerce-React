import "./Navbar.css"
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import {Link} from 'react-router-dom'
import { useInventaire } from "../../../store/Inventaire";
import { useShop } from "../../../store/Shop";
import { useFavories } from "../../../store/Favories";

export const Navbar = () => {
  const inventaire = useInventaire(state => state.inventaire)
  const favories = useFavories(state => state.favories)
  const toggleCart = useShop(state => state.toggleCart)


  return <>
    <header>
      <nav>
        <div className="left">
          <div className="logo">Shopp<span>Hub</span></div>
        </div>
        <div className="mid">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
        </div>
        <div className="right">
          <Link to='/favories' className="heart">
            <span>{favories.length}</span>
            <CiHeart className="icon"/>
          </Link>
          <div className="cart">
            <span>{inventaire.length}</span>
            <CiShoppingCart className="icon" onClick={() => toggleCart()}/>
          </div>
          <div className="profile">
            <IoPersonOutline className="icon"/>
          </div>
        </div>
      </nav>
    </header>
  </>
}