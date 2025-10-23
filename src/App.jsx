import "./App.css";
import BenefitsSlider from "./components/benefits-slider/BenefitsSlider";
import Footer from "./components/footer/Footer.jsx";
import Header from "./components/header/Header";
import CategoriesProduct from "./components/products/CategoriesProduct";
import EmblaCarousel from "./components/Carousel/EmblaCarousel";
import HeroSlider from "./components/HeroSlider/HeroSlider";
import CategoriesNavigation from "./components/CategoriesNavigation/CategoriesNavigation";
import HotspotGallery from "./components/hotspot/HotSpotGallery";
import VideoWithText from "./components/videoWithText/VideoWithText";

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
  const footerNavItems = [
    { href: "/blog", label: "BLOG" },
    { href: "/lookbook", label: "LOOKBOOK" },
    { href: "/about", label: "SOBRE A GAT" },
    { href: "/whishlist", label: "WISHLIST" },
];
  const itemsCollection = [
    { src: "/Assets/menu_01.png", collectionName: "Produtos" },
    { src: "/Assets/menu_02.png", collectionName: "Coleções" },
  ];
  const cartIcon = "/Assets/cart.png";
  const searchIcon = "/Assets/search.svg";
  const userIcon = "/Assets/user.png";

  const HeroCarousel = [
    {
      mainTitle: "MINIMA<br>LISMO",
      leftImage: "/Assets/productImage.png",
      altLeft: "arranhador",
      rightImage: "/Assets/ProductHover.png",
      altRight: "casa para gatos",
      paragraphBGimage: "/Assets/Rectangle33.svg",
      rightBGimage: "/Assets/Rectangle34.svg",
      paragraph:
        "Also reality power discussion buy-in closest goto model. Have protocol at long practices low-hanging data most driver's.",
      hotspots: [
        {
          top: "47%",
          left: "11%",
          buttonLetter: "1",
          title: "Lorem Ipsum Dolor Sit",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br> <br>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
          link: "/lorem-ipsum",
          linkText: "VER SELEÇÃO",
        },
      ],
    },
    {
      mainTitle: "MINIMA<br>LISMO",
      leftImage: "/Assets/productImage.png",
      altLeft: "arranhador",
      rightImage: "/Assets/ProductHover.png",
      altRight: "casa para gatos",
      paragraph:
        "Also reality power discussion buy-in closest goto model. Have protocol at long practices low-hanging data most driver's.",
    },
  ];

  const mainBenefit = {
    number: "10",
    title: "Benefício Principal",
    description: "Lorem ipsum dolor sit amet, consectetur.",
  };

  const secondaryBenefits = [
    {
      title: "Benefício Secundário",
      description: "Lorem ipsum dolor sit amet, consectetur al muactib.",
    },
    {
      title: "Benefício Secundário",
      description: "Lorem ipsum dolor sit amet, consectetur al muactib.",
    },
    {
      title: "Benefício Secundário",
      description: "Lorem ipsum dolor sit amet, consectetur al muactib.",
    },
  ];

  const sliderItems = [
    "Benefício Terciário",
    "Benefício Terciário",
    "Lisan Al Gaib",
    "Benefício Terciário",
    "Benefício Terciário",
    "Lisan Al Gaib",
  ];
  const categorieTitle = "<strong>Queri<br>dinho</strong><br>deles";
  const categorieNav = [
    {
      name: "CLÁSSICO",
      icon: "/Assets/classico.png",
      width: "38",
      height: "42",
      link: "/classic",
    },
    {
      name: "MINIMALISMO",
      icon: "/Assets/minimalismo.png",
      width: "36",
      height: "37",
      link: "/minimalismo",
    },
    {
      name: "MAXIMALISMO",
      icon: "/Assets/maximalismo.png",
      width: "42",
      height: "32",
      link: "/maximalismo",
    },
    {
      name: "BOHO",
      icon: "/Assets/boho.png",
      width: "46",
      height: "32",
      link: "/boho",
    },
  ];

  const product = [
    {
      img: "/Assets/ProductImage.png",
      title: "Toca Túnel Módulos",
      imgHover: "/Assets/ProductHover.png",
      price: "0000,00",
      discountPrice: "00,00",
      discountCoupon: "10%",
      launch: true,
    },
    {
      img: "/Assets/ProductImage.png",
      title: "Toca Túnel Módulos",
      imgHover: "/Assets/ProductHover.png",
      price: "0000,00",
      discountPrice: "00,00",
      discountCoupon: "10%",
      launch: true,
    },
    {
      img: "/Assets/ProductImage.png",
      title: "Toca Túnel Módulos",
      imgHover: "/Assets/ProductHover.png",
      price: "0000,00",
      discountPrice: "00,00",
      discountCoupon: "10%",
      launch: true,
    },
  ];
  const paymentsIcons = [
    { src: "/Assets/payment/americanexpress.png" },
    { src: "/Assets/payment/discover.png"},
    { src: "/Assets/payment/visa.png" },
    { src: "/Assets/payment/mastercard.png" },
    { src: "/Assets/payment/elo.png" },
    { src: "/Assets/payment/pix.png" },
    { src: "/Assets/payment/hipercard.png" },
  ];
  const securityIcons = [
    { src: "/Assets/secureSeals/empresaBcertificada.png", windth: 68, height: 100 },
    { src: "/Assets/secureSeals/opinioesverdadeiras.png", windth: 68, height: 75 },
    { src: "/Assets/secureSeals/encryption.png", windth: 110, height: 46 },
  ];
  const Socials = [
    { src: "/Assets/socials/instagram.png", link: "/instagram", width: 19, height: 19 },
    { src: "/Assets/socials/youtube.png", link: "/youtube", width: 19, height: 19 },
    { src: "/Assets/socials/linkedin.png", link: "/linkedin", width: 19, height: 19 },
    { src: "/Assets/socials/facebook.png", link: "/facebook", width: 9, height: 18 },
  ]

  const FAQ = [
    { label: "FAQ", link: "/faq" },
    { label: "Sobre nossos produtos",link: "/prazos-de-entrega" },
    { label: "Trocas e devoluções", link: "/trocas-e-devolucoes"},
    { label: "Entregas", link: "/entregas", width: 68 },
    { label: "Indique e ganhe", link: "/indique-e-ganhe" },
    { label: "Garantias", link: "/garantias" },
  ]
  const hotspotItems = [
    {
      top: "47%",
      left: "11%",
      buttonLetter: "1",
      title: "Lorem Ipsum Dolor Sit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br> <br>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      link: "/lorem-ipsum",
      linkText: "VER SELEÇÃO",
    },
    {
      top: "53%",
      left: "24.5%",
      buttonLetter: "2",
      title: "Lorem Ipsum Dolor Sit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br> <br>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      link: "/lorem-ipsum",
      linkText: "VER SELEÇÃO",
    },
    {
      top: "11%",
      left: "32%",
      buttonLetter: "3",
      title: "Lorem Ipsum Dolor Sit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br> <br>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      link: "/lorem-ipsum",
      linkText: "VER SELEÇÃO",
    },
    {
      top: "23%",
      left: "51.5%",
      buttonLetter: "4",
      title: "Lorem Ipsum Dolor Sit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br> <br>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      link: "/lorem-ipsum",
      linkText: "VER SELEÇÃO",
    },
    {
      top: "49%",
      left: "58%",
      buttonLetter: "5",
      title: "Lorem Ipsum Dolor Sit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br> <br>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      link: "/lorem-ipsum",
      linkText: "VER SELEÇÃO",
    },
  ];
  const paymentTitle = "FORMAS DE PAGAMENTO"
  const logoFooter = "/Assets/logofooter.png"
  const certificate = "CERTIFICADOS E SEGURANÇA"
  const video = [
    {
      videoSrc: "/Assets/catVideo.mp4",
      title: "DECORAR ARRANHAR& RELAXAR",
      description:
        "Hammer can low idea of. Lunch able design items needle here stop drive. / or devil pants game close. Prioritize out key view / vendor we've. 4-blocker gave shift ideal based post.",
      link: "/ver-video",
      linkText: "MAIS SOBRE A GAT",
      thumbnailUrl: "/Assets/catTumbnail.jpg",
    },
  ];
  const contactNumber = "(51) 9999-9999"
  const contactEmail = "ajuda@gat.com.br"
  const formImage = "/Assets/formImage.png"

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
      <BenefitsSlider
        secondaryBenefits={secondaryBenefits}
        sliderItems={sliderItems}
        mainBenefit={mainBenefit}
      />
      <HeroSlider heroItems={HeroCarousel} options={OPTIONS} />
      <CategoriesProduct categories={categorieTitle} products={product} />
      <CategoriesNavigation categories={categorieNav} />
      <HotspotGallery
        backgroundImage="/Assets/CatsPlayingHouse.png"
        hotspotItem={hotspotItems}
      />
      <VideoWithText {...video[0]} />
      <Footer   formImage={formImage} logoFooter={logoFooter} certificate={certificate} contactNumber={contactNumber} contactEmail={contactEmail} footerNavItems={footerNavItems} paymentTitle={paymentTitle} paymentsIcons={paymentsIcons} Socials={Socials} securityIcons={securityIcons} faq={FAQ} />
    </>
  );
}

export default App;
