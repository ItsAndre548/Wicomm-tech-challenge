import "./App.css";
import BenefitsSlider from "./components/benefits-slider/BenefitsSlider";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import CategoriesProductsShelf from "./components/products/CategoriesProductsShelf";
import EmblaCarousel from "./components/Carousel/EmblaCarousel";

function App() {
  const headerLogo = "/Assets/HeaderLogo.png";
  const slides = [
    { src: "/Assets/banner_01.png", href: "/new-colection" },
    { src: "/Assets/banner_02.png", href: "/our-cats" },
    { src: "/Assets/banner_03.png", href: "/more-cats" },
  ];
  const navItems = [
    { href: "/blog", label: "blog" },
    { href: "/lookbook", label: "lookbook" },
    { href: "/about", label: "sobre a Gat" },
    { href: "/whishlist", label: "whishlist" },
  ];
  const itemsCollection = [
    { src: "/Assets/menu_01.png", collectionName: "Produtos" },
    { src: "/Assets/menu_02.png", collectionName: "Coleções" },
  ];
  const cartIcon = "/Assets/cart.png"
  const searchIcon = "/Assets/search.svg"
  const userIcon = "/Assets/user.png"

  const mainBenefit = {
    number: "10",
    title: "Benefício Principal",
    description: "Lorem ipsum dolor sit amet, consectetur."
  };

  const secondaryBenefits = [
    {
      title: "Benefício Secundário",
      description: "Lorem ipsum dolor sit amet, consectetur al muactib."
    },
    {
      title: "Benefício Secundário",
      description: "Lorem ipsum dolor sit amet, consectetur al muactib."
    },
    {
      title: "Benefício Secundário",
      description: "Lorem ipsum dolor sit amet, consectetur al muactib."
    }
  ];

  const sliderItems = [
    "Benefício Terciário",
    "Benefício Terciário",
    "Lisan Al Gaib",
    "Benefício Terciário",
    "Benefício Terciário",
    "Lisan Al Gaib"
  ];
  const OPTIONS = { loop: true };
  return (
    <>
      <Header
        headerLogo={headerLogo}
        navItems={navItems}
        itemsCollection={itemsCollection}
        searchIcon={searchIcon}
        userIcon={userIcon}
        cartIcon={cartIcon}
      />
      <EmblaCarousel slides={slides} options={OPTIONS} />
      <BenefitsSlider secondaryBenefits={secondaryBenefits} sliderItems={sliderItems} mainBenefit={mainBenefit}/>
      <CategoriesProductsShelf />
      <Footer />
    </>
  );
}

export default App;
