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
  console.log('Hotspots:', heroItems.hotspots);
  return (
    <section class="heroSlider">
      <div class="heroSlider__header">
        <a href="/">COLEÇÕES</a>
        <a href="/">VER TODAS</a>
      </div>
      <div class="heroSlider__viewport" ref={emblaRef}>
        <div class="heroSlider__container">
          {heroItems.map((item, index) => (
            <div class="heroSlider__slide" key={index}>
              <div class="backgroundImage">
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

              <div class="middleImages">
                <img
                  src={item.leftImage}
                  alt={item.altLeft}
                  class="heroSlider__slide-left-image"
                />
                <img
                  src={item.rightImage}
                  alt={item.altRight}
                  className="embla__slide-right-image"
                />
                <div class="mainTitleBackground">
                  <div dangerouslySetInnerHTML={{ __html: item.mainTitle }} />
                  <div class="heroSliderText_container"></div>
                </div>
              </div>
              <div class="frontTextContainer">
                <p class="hero__slide-paragraph">{item.paragraph}</p>
                <a href={item.link} className="embla__slide-link">
                  EXPLORAR
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controles de navegação */}
      <div class="embla__controls">
        <div class="heroSlider__buttons">
          <PrevButton
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
            class="carouselcollection__button--prev"
          />
          <NextButton
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
            class="carouselcollection__button--next"
          />
        </div>

        <div class="embla__dots">
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
