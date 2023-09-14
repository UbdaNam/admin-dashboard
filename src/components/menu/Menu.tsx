import { Link } from "react-router-dom";
import "./menu.scss";
import { LiaHomeSolid } from "react-icons/lia";
import { BiGroup } from "react-icons/bi";

const Menu = () => {
  return (
    <div className="menu">
      <div className="item">
        <h3 className="title">Main</h3>
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
        <h3 className="title">Main</h3>
        <Link to="/" className="list-item">
          <LiaHomeSolid />
          <span className="menu-link">Home</span>
        </Link>
        <Link to="/profile" className="list-item">
          <BiGroup />
          <span className="menu-link">Profile</span>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
