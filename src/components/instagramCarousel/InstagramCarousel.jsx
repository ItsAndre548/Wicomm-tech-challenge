import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./instagramCarousel.css";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./InstagramCarouselArrowButtons";

const InstagramCarousel = (props) => {
  const { slides, upperParagraph, upperTitle, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="socialCarousel">
      <div className="socialCarousel__viewport" ref={emblaRef}>
        <p className="socialCarouselParagraph">
          {upperParagraph}
        </p>
        <h2 className="socialCarouselTitle">{upperTitle}</h2>
        <div className="socialCarousel__container">
          {slides.map((slide, index) => (
            <div className="socialCarousel__slide" key={index}>
              <div className="socialCarousel__slide__number">
                {slide.src && (
                  <img
                    src={slide.src}
                    width="270px"
                    height="481px"
                    alt={slide.src}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="instagram__controls">
        <div className="instagram__buttons">
          {/* <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} /> */}
        </div>
      </div>
    </section>
  );
};

export default InstagramCarousel;
