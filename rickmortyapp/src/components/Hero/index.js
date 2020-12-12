import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Jumbotron,
  Button,
} from "reactstrap";
const items = [
  {
    src: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    altText: "Slide 1",
    caption: "Slide 1",
  },
  {
    src: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    altText: "Slide 2",
    caption: "Slide 2",
  },
  {
    src: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    altText: "Slide 3",
    caption: "Slide 3",
  },
];
const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });
  return (
    <div className="slider">
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
      <div>
        <Jumbotron className="bg-info clearfix">
          <h1 className="display-3">Api de rick y morty blenio</h1>
          <p className="lead">
            This is a simple hero unit, a simple Jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr className="my-2" />
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <p className="lead">
            <Button
              target="_blank"
              href="https://rickandmortyapi.com/documentation/#get-all-characters"
              color="primary"
            >
              Visita la api de rick y morty
            </Button>
          </p>
        </Jumbotron>
      </div>
    </div>
  );
};

export default Hero;
