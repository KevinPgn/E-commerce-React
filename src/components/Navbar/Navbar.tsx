import "./Navbar.css"
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";

export const Navbar = () => {
  return <>
    <header>
      <nav>
        <div className="left">
          <div className="logo">Shopp<span>Hub</span></div>
        </div>
        <div className="mid">
          <a href="">Home</a>
          <a href="">Products</a>
          <a href="">About</a>
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