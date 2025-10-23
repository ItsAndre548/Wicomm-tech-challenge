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
      <div class="leftContainer">
        <div class="logoBar">
          <img
            src={headerLogo}
            class="imgLogoBar"
            width={85}
            height={40}
            alt="Wicomm cat icon"
          />
        </div>
        <Collections itemsCollection={itemsCollection} />
      </div>
      <container class="rightContainer">
        <NavHeader navItems={navItems}  contexto="header" />
        <HeaderSearch searchIcon={searchIcon} />
        <UserContainer userIcon={userIcon} />
        <CartButton cartIcon={cartIcon} />
      </container>
    </header>
  );
}
