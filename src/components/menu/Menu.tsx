import { Link } from "react-router-dom";
import "./menu.scss";
import { menu } from "../../data/menu";

const Menu = () => {
  return (
    <div className="menu">
      {menu.map(({ id, title, listItems }) => (
        <div className="item" key={id}>
          <h3 className="title">{title}</h3>
          {listItems.map((listItem) => (
            <Link to={listItem.url} className="list-item" key={listItem.id}>
              {listItem.icon && <listItem.icon />}
              <span className="menu-link">{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
