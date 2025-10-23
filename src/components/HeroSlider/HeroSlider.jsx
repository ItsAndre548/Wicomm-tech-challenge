import { DotButton, useDotButton } from "../Carousel/EmblaCarouselDotButton";
import Hotspot from "../hotspot/Hotspot";
import "../hotspot/Hotspot.css";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./HeroSliderArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import "./HeroSlider.css";

export default function HeroSlider({ heroItems, options }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  return (
    <section className="heroSlider">
      <div className="heroSlider__header">
        <a href="/">COLEÇÕES</a>
        <a href="/">VER TODAS</a>
      </div>
      {/* <Hotspot {...heroItems.hotspotItem} /> */}
      <div className="heroSlider__viewport" ref={emblaRef}>
        <div className="heroSlider__container">
          {heroItems.map((item, index) => (
            <div className="heroSlider__slide" key={index}>
              <div className="backgroundImage">
                {item.paragraphBGimage ? (
                  <img
                    src={item.paragraphBGimage}
                    alt={item.paragraphBGimage}
                    width={568}
                    height={568}
                  />
                ) : null}
                {item.rightBGimage ? (
                  <img
                    alt={item.rightBGimage}
                    src={item.rightBGimage}
                    width={298}
                    height={298}
                  />
                ) : null}
              </div>

              <div className="middleImages">
                <img
                  src={item.leftImage}
                  alt={item.altLeft}
                  className="heroSlider__slide-left-image"
                />
                <img
                  src={item.rightImage}
                  alt={item.altRight}
                  className="embla__slide-right-image"
                />
                <div className="mainTitleBackground">
                  <div dangerouslySetInnerHTML={{ __html: item.mainTitle }} />
                  <div className="heroSliderText_container"></div>
                </div>
              </div>
              <div className="frontTextContainer">
                <p className="hero__slide-paragraph">{item.paragraph}</p>
                <a href={item.link} className="embla__slide-link">
                  EXPLORAR
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controles de navegação */}
      <div className="embla__controls">
        <div className="heroSlider__buttons">
          <PrevButton
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
            className="carouselcollection__button--prev"
          />
          <NextButton
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
            className="carouselcollection__button--next"
          />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              class={`embla__dot${
                index === selectedIndex ? " embla__dot--selected" : ""
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
