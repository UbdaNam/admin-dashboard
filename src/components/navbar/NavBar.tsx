import "./navbar.scss";
import logo from "../../assets/logo/admin-phatplus-lineal-color-96.png";
import {
  AiOutlineSearch,
  AiOutlineAppstore,
  AiOutlineExpand,
  AiOutlineUser,
  AiOutlineSetting,
} from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";

const NavBar = () => {
  return (
    <nav>
      <div className="logo flex-center">
        <img src={logo} alt="logo" />
      </div>
      <div className="links flex-center">
        <AiOutlineSearch />
        <AiOutlineAppstore />
        <AiOutlineExpand />
        <div className="notification">
          <IoNotificationsOutline />
          <span className="flex-center">1</span>
        </div>
        <div className="user">
          <AiOutlineUser />
          <span>Abdu</span>
        </div>
        <AiOutlineSetting />
      </div>
    </nav>
  );
};

export default NavBar;
