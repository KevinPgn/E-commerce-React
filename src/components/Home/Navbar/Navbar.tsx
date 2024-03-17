import "./Navbar.css"
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import {Link} from 'react-router-dom'

export const Navbar = () => {
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
          <div className="heart">
            <CiHeart className="icon"/>
          </div>
          <div className="cart">
            <CiShoppingCart className="icon"/>
          </div>
          <div className="profile">
            <IoPersonOutline className="icon"/>
          </div>
        </div>
      </nav>
    </header>
  </>
}