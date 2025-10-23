import "./App.css";
import BenefitsSlider from "./components/benefits-slider/BenefitsSlider.jsx";
import Footer from "./components/footer/Footer.jsx";
import Header from "./components/header/Header.jsx";
import CategoriesProduct from "./components/products/CategoriesProduct.jsx";
import BannerCarousel from "./components/Carousel/BannerCarousel.jsx";
import HeroSlider from "./components/HeroSlider/HeroSlider.jsx";
import CategoriesNavigation from "./components/CategoriesNavigation/CategoriesNavigation.jsx";
import HotspotGallery from "./components/hotspot/HotSpotGallery.jsx";
import VideoWithText from "./components/videoWithText/VideoWithText.jsx";
import InstagramCarousel from "./components/instagramCarousel/InstagramCarousel.jsx";

function App() {
  //Header

  const headerLogo = "/Assets/header/HeaderLogo.png";

  const navItems = [
    { href: "/blog", label: "blog" },
    { href: "/lookbook", label: "lookbook" },
    { href: "/about", label: "sobre a Gat" },
    { href: "/whishlist", label: "whishlist" },
  ];

  const itemsCollection = [
    { src: "/Assets/header/menu_01.png", collectionName: "Produtos" },
    { src: "/Assets/header/menu_02.png", collectionName: "Coleções" },
  ];
  const searchIcon = "/Assets/header/search.svg";
  const userIcon = "/Assets/header/user.png";
  const cartIcon = "/Assets/header/cart.png";

  //main carousel

  const slides = [
    {
      src: "/Assets/banner/banner_01.png",
      alt: "nossa nova coleção",
      href: "/new-colection",
      btnText: "VER COLEÇÃO",
    },
    {
      src: "/Assets/banner/banner_02.png",
      alt: "gato dormindo",
      href: "/our-cats",
    },
    {
      src: "/Assets/banner/banner_03.png",
      alt: "gato no sol",
      href: "/more-cats",
    },
  ];

  //carousel beneficts

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

  //Hero Carousel

  const HeroCarousel = [
    {
      mainTitle: "MINIMA<br>LISMO",
      leftImage: "/Assets/productImage.png",
      altLeft: "arranhador",
      rightImage: "/Assets/ProductHover.png",
      altRight: "casa para gatos",
      paragraphBGimage: "/Assets/heroSlide/Rectangle33.svg",
      rightBGimage: "/Assets/heroSlide/Rectangle34.svg",
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

  //product gallery

  const categorieTitle = "<strong>Queri<br>dinho</strong><br>deles";

  const product = [
    {
      img: "/Assets/productImage.png",
      title: "Toca Túnel Módulos",
      imgHover: "/Assets/ProductHover.png",
      price: "0000,00",
      discountPrice: "00,00",
      discountCoupon: "10%",
      launch: true,
    },
    {
      img: "/Assets/productImage.png",
      title: "Toca Túnel Módulos",
      imgHover: "/Assets/ProductHover.png",
      price: "0000,00",
      discountPrice: "00,00",
      discountCoupon: "10%",
      launch: true,
    },
    {
      img: "/Assets/productImage.png",
      title: "Toca Túnel Módulos",
      imgHover: "/Assets/ProductHover.png",
      price: "0000,00",
      discountPrice: "00,00",
      discountCoupon: "10%",
      launch: true,
    },
  ];


  //categorie Navigation

  const categorieNav = [
    {
      name: "CLÁSSICO",
      icon: "/Assets/navsection/classico.png",
      width: "38",
      height: "42",
      link: "/classic",
    },
    {
      name: "MINIMALISMO",
      icon: "/Assets/navsection/minimalismo.png",
      width: "36",
      height: "37",
      link: "/minimalismo",
    },
    {
      name: "MAXIMALISMO",
      icon: "/Assets/navsection/maximalismo.png",
      width: "42",
      height: "32",
      link: "/maximalismo",
    },
    {
      name: "BOHO",
      icon: "/Assets/navsection/boho.png",
      width: "46",
      height: "32",
      link: "/boho",
    },
  ];

  //HOTSPOTGALLERY
  const hotSpotGalleryBackground = "/Assets/CatsPlayingHouse.png";

  const hotspotItems = [
    {
      top: "47%",
      left: "19%",
      buttonLetter: "1",
      title: "Lorem Ipsum Dolor Sit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br> <br>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      link: "/lorem-ipsum",
      linkText: "VER SELEÇÃO",
    },
    {
      top: "54%",
      left: "34.5%",
      buttonLetter: "2",
      title: "Lorem Ipsum Dolor Sit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br> <br>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      link: "/lorem-ipsum",
      linkText: "VER SELEÇÃO",
    },
    {
      top: "10%",
      left: "42%",
      buttonLetter: "3",
      title: "Lorem Ipsum Dolor Sit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br> <br>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      link: "/lorem-ipsum",
      linkText: "VER SELEÇÃO",
    },
    {
      top: "23%",
      left: "61.5%",
      buttonLetter: "4",
      title: "Lorem Ipsum Dolor Sit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br> <br>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      link: "/lorem-ipsum",
      linkText: "VER SELEÇÃO",
    },
    {
      top: "50%",
      left: "68%",
      buttonLetter: "5",
      title: "Lorem Ipsum Dolor Sit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br> <br>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      link: "/lorem-ipsum",
      linkText: "VER SELEÇÃO",
    },
  ];

  //video with text

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

  //instagram slides

  const instagramSlides = [
    { src: "/Assets/instagramgallery/Group36.png" },
    { src: "/Assets/instagramgallery/Group37.png" },
    { src: "/Assets/instagramgallery/Group38.png" },
    { src: "/Assets/instagramgallery/Group39.png" },
    { src: "/Assets/instagramgallery/Group40.png" },
  ];
  const upperParagraph =
    "Faça parte da comunidade de gatunos que amam design e papelão compartilhando a hashtag: ";
  const upperTitle = "#AdoradoresDePapelão";

  //FORM IMAGE

  const formImage = "/Assets/formImage.png";

  //footer
  const logoFooter = "/Assets/footer/logofooter.png";

  //footer navigaton
  const footerNavItems = [
    { href: "/blog", label: "BLOG" },
    { href: "/lookbook", label: "LOOKBOOK" },
    { href: "/about", label: "SOBRE A GAT" },
    { href: "/whishlist", label: "WISHLIST" },
  ];

  //footer payment method
  const paymentsIcons = [
    { src: "/Assets/footer/payment/americanexpress.png" },
    { src: "/Assets/footer/payment/discover.png" },
    { src: "/Assets/footer/payment/visa.png" },
    { src: "/Assets/footer/payment/mastercard.png" },
    { src: "/Assets/footer/payment/elo.png" },
    { src: "/Assets/footer/payment/pix.png" },
    { src: "/Assets/footer/payment/hipercard.png" },
  ];
  const paymentTitle = "FORMAS DE PAGAMENTO";

  //footer certificates
  const certificate = "CERTIFICADOS E SEGURANÇA";
  const securityIcons = [
    {
      src: "/Assets/footer/certificate/empresaBcertificada.png",
      windth: 68,
      height: 100,
    },
    {
      src: "/Assets/footer/certificate/opinioesverdadeiras.png",
      windth: 68,
      height: 75,
    },
    {
      src: "/Assets/footer/certificate/encryption.png",
      windth: 110,
      height: 46,
    },
  ];

  //FAQ
  const FAQ = [
    { label: "FAQ", link: "/faq" },
    { label: "Sobre nossos produtos", link: "/prazos-de-entrega" },
    { label: "Trocas e devoluções", link: "/trocas-e-devolucoes" },
    { label: "Entregas", link: "/entregas", width: 68 },
    { label: "Indique e ganhe", link: "/indique-e-ganhe" },
    { label: "Garantias", link: "/garantias" },
  ];

  //footer contact
  const contactNumber = "(51) 9999-9999";
  const contactEmail = "ajuda@gat.com.br";

  //footer social medias
  const Socials = [
    {
      src: "/Assets/footer/social/instagram.png",
      link: "/https://www.instagram.com/",
      width: 19,
      height: 19,
    },
    {
      src: "/Assets/footer/social/youtube.svg",
      link: "https://www.youtube.com/",
      width: 19,
      height: 19,
    },
    {
      src: "/Assets/footer/social/linkedin.png",
      link: "https://www.linkedin.com/",
      width: 19,
      height: 19,
    },
    {
      src: "/Assets/footer/social/facebook.png",
      link: "https://www.facebook.com/",
      width: 9,
      height: 18,
    },
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
      <BannerCarousel slides={slides} options={OPTIONS} />
      <BenefitsSlider
        secondaryBenefits={secondaryBenefits}
        sliderItems={sliderItems}
        mainBenefit={mainBenefit}
      />
      <HeroSlider heroItems={HeroCarousel} options={OPTIONS} />
      <CategoriesProduct
        categories={categorieTitle}
        products={product}
      />
      <CategoriesNavigation categories={categorieNav} />
      <HotspotGallery
        backgroundImage={hotSpotGalleryBackground}
        hotspotItem={hotspotItems}
      />
      <VideoWithText {...video[0]} />
      <InstagramCarousel
        upperParagraph={upperParagraph}
        upperTitle={upperTitle}
        slides={instagramSlides}
        options={OPTIONS}
      />
      <Footer
        formImage={formImage}
        logoFooter={logoFooter}
        certificate={certificate}
        contactNumber={contactNumber}
        contactEmail={contactEmail}
        footerNavItems={footerNavItems}
        paymentTitle={paymentTitle}
        paymentsIcons={paymentsIcons}
        Socials={Socials}
        securityIcons={securityIcons}
        faq={FAQ}
      />
    </>
  );
}

export default App;
