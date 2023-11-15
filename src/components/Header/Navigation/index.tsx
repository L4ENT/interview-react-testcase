import "./styles.scss";
import NavigationItem from "./NavigationItem";
import { CartIcon, CatalogIcon } from "@/components/Icons";

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li className="navigation__item">
          <NavigationItem icon={<CatalogIcon />} to="/interview-react-testcase">
            Каталог
          </NavigationItem>
        </li>
        <li className="navigation__item">
          <NavigationItem
            icon={<CartIcon />}
            to="/interview-react-testcase/cart"
          >
            Корзина
          </NavigationItem>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
