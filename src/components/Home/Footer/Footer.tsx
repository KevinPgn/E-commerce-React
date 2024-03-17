import "./Footer.css"
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return <>
    <footer>
      <div className="container">
        <div className="block">
          <h3>About Us</h3>
          <p>Our mission is to provide the highest quality products at the best prices. 
            We are constantly working to improve our products and services to better serve our customers.
          </p>

          <div className="social">
            <h3>Social Media</h3>
            <FaFacebookF className="facebook icon"/>
            <FaXTwitter className="twitter icon"/>
            <FaInstagram className="instagram icon"/>
          </div>
        </div>
        <div className="block">
          <h3>Informations</h3>
          <a href="">About Us</a>
          <a href="">Delivery Information</a>
          <a href="">Privacy Policy</a>
          <a href="">Terms & Conditions</a>
          <a href="">FAQ</a>
          <a href="">Contact Us</a>
          <a href="">Products</a>
        </div>
        <div className="block">
          <h3>Account Info</h3>
          <a href="">Login & Register</a>
          <a href="">Order History</a>
          <a href="">Shipping Info</a>
          <a href="">Refund Policy</a>
          <a href="">Responsive Website</a>
          <a href="">Subscription</a>
          <a href="">Activities</a>
        </div>
        <div className="block">
          <h3>Our Services</h3>
          <a href="">New Products</a>
          <a href="">Top Sellers</a>
          <a href="">Special Offers</a>
          <a href="">Manufacturers</a>
          <a href="">Suppliers</a>
        </div>
      </div>
      <div className="line"></div>
      <p className="madeby">© 2024 Made By TeruBW for Front-end Project Development</p>
    </footer>
  </>
}