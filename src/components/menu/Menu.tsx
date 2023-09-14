import { Link } from "react-router-dom";
import "./menu.scss";
import { LiaHomeSolid } from "react-icons/lia";
import { BiGroup } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Menu = () => {
  return (
    <div className="menu">
      <div className="item">
        <h3 className="title">MAIN</h3>
        <Link to="/" className="list-item">
          <LiaHomeSolid />
          <span className="menu-link">Home</span>
        </Link>
        <Link to="/profile" className="list-item">
          <BiGroup />
          <span className="menu-link">Profile</span>
        </Link>
      </div>
      <div className="item">
        <h3 className="title">LISTS</h3>
        <Link to="/profile" className="list-item">
          <BiGroup />
          <span className="menu-link">Users</span>
        </Link>
        <Link to="/" className="list-item">
          <AiOutlineShoppingCart />
          <span className="menu-link">Products</span>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
