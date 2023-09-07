import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Menu from "../components/menu/Menu";
import NavBar from "../components/navbar/NavBar";

const Layout = () => {
  return (
    <div className="main">
      <NavBar />
      <div className="main-container">
        <div className="menu-container">
          <Menu />
        </div>
        <div className="content-container">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
