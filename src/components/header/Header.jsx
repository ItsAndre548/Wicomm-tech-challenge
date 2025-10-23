import "./Header.css";
import Collections from "./Collections";
import NavHeader from "./NavHeader";
import HeaderSearch from "./HeaderSearch";
import UserContainer from "./UserContainer";
import CartButton from "./CartButton";

export default function Header({
  navItems,
  headerLogo,
  itemsCollection,
  searchIcon,
  userIcon,
  cartIcon,
}) {
  return (
    <header>
      <div className="leftContainer">
        <div className="logoBar">
          <img
            src={headerLogo}
            className="imgLogoBar"
            width={85}
            height={40}
            alt="Wicomm cat icon"
          />
        </div>
        <Collections itemsCollection={itemsCollection} />
      </div>
      <div className="rightContainer">
        <NavHeader navItems={navItems}  contexto="header" />
        <HeaderSearch searchIcon={searchIcon} />
        <UserContainer userIcon={userIcon} />
        <CartButton cartIcon={cartIcon} />
      </div>
    </header>
  );
}
