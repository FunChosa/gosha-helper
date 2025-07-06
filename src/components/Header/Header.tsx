import "./Header.css";
import Clown from "../../icons/clown.svg";

const Header = () => (
  <div className="header__container">
    <div className="header__title">
      <img src={Clown} alt="logo" className="header__logo" />
      gosha
    </div>
    <div className="header__search-container">
      <input type="number" placeholder="1754" className="header__search" />
      <button className="header__button">fast go</button>
    </div>
  </div>
);

export default Header;
