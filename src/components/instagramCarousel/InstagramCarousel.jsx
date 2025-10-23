import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./instagramCarousel.css";

const InstagramCarousel = (props) => {
  const { slides, upperParagraph, upperTitle, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  return (
    <section className="socialCarousel">
      <div className="socialCarousel__viewport" ref={emblaRef}>
          <p class="socialCarouselParagraph">Faça parte da comunidade de gatunos que amam design e papelão compartilhando a hashtag:</p>
          <h2 class="socialCarouselTitle">#AdoradoresDePapelão</h2>
        <div className="socialCarousel__container">
          {slides.map((slide, index) => (
            <div className="socialCarousel__slide" key={index}>
              <div className="socialCarousel__slide__number">
                {slide.src && (
                  <img src={slide.src} width="270px" height="481px" alt={slide.src} />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramCarousel;

