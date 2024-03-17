import "./Infos.css"
import { FaUserSecret } from "react-icons/fa";
import { FaWarehouse } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";

export const Infos = () => {
  return <>
    <section className="infos">
      <div className="container">
        <div className="block">
          <FaUserSecret className="icon"/>
          <h3>Privacy</h3>
          <p>Your privacy is important to us. We will never share your information with anyone.</p>
        </div>
        <div className="block">
          <FaWarehouse className="icon"/>
          <h3>Quality</h3>
          <p>Our products are made with the highest quality materials and are built to last.</p>
        </div>
        <div className="block">
          <FaTruck className="icon"/>
          <h3>Shipping</h3>
          <p>We offer free shipping on all orders over $100. Orders under $100 are subject to a $10 shipping fee.</p>
        </div>
      </div>
    </section>
  </>
}