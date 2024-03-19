import "./Navbar.css"
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import {Link} from 'react-router-dom'
import { useInventaire } from "../../../store/Inventaire";
import { useShop } from "../../../store/Shop";
import { useFavories } from "../../../store/Favories";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";

export const Navbar = () => {
  const inventaire = useInventaire(state => state.inventaire)
  const favories = useFavories(state => state.favories)
  const toggleCart = useShop(state => state.toggleCart)

  const [toggleLink, setToggleLink] = useState(false)


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
              <CiHeart className="icon heart"/>
            </Link>
            <div className="cart">
              <span>{inventaire.length}</span>
              <CiShoppingCart className="icon carticon" onClick={() => toggleCart()}/>
            </div>
            <div className="profile">
              <IoPersonOutline className="icon"/>
            </div>
            <div className="burger" onClick={() => setToggleLink(!toggleLink)}>
              <CiMenuBurger className="icon"/>
            </div>
          </div>
        </nav>
      </header>
      {toggleLink && (
          <div className={toggleLink ? "menu-link active":"menu-link"}>
            <Link to="/" onClick={() => setToggleLink(false)}>Home</Link>
            <Link to="/products" onClick={() => setToggleLink(false)}>Products</Link>
            <Link to="/about" onClick={() => setToggleLink(false)}>About</Link>
          </div>
      )}
    </>
}