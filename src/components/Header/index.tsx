import Typography from "../Typogrphy";
import Navigation from "./Navigation";
import "./styles.scss";

function Header() {
  return (
    <header className="header">
      <Typography className="header__title" variant="title" kind="p">
        Интерьер.
      </Typography>
      <Navigation />
    </header>
  );
}

export default Header;
