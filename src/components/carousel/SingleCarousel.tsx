"use client";

import { SetStateAction, useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Circle } from "lucide-react";

type SlideImages = {
  url: string;
};

type SlideProps = {
  images: SlideImages[];
  navigation?: boolean;
  autoplay?: boolean;
  autoplayInterval?: number;
};

function SingleCarousel(props: SlideProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const prevSlide = () => {
    clearInterval(intervalRef.current as never);
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? props.images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = useCallback(() => {
    clearInterval(intervalRef.current as never);
    const isLastSlide = currentIndex === props.images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, props.images.length]);

  useEffect(() => {
    if (props.autoplay) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, props.autoplayInterval || 3000);
    }

    return () => clearInterval(intervalRef.current as never);
  }, [nextSlide, props.autoplay, props.autoplayInterval]);

  const goToSlide = (slideIndex: SetStateAction<number>) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="group relative m-auto h-96 w-full">
      <div
        className="h-full w-full bg-cover bg-center duration-300"
        style={{ backgroundImage: `url(${props.images[currentIndex].url})` }}
      />
      {/* Left Arrow */}
      <div className="absolute left-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block">
        <ChevronLeft onClick={prevSlide} size={30} strokeWidth={2} />
      </div>
      {/* Right Arrow */}
      <div className="absolute right-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block">
        <ChevronRight onClick={nextSlide} size={30} strokeWidth={2} />
      </div>
      {props.navigation ? (
        <div className="absolute bottom-0 right-1/2 flex justify-center py-2">
          {props.images.map((slide, slideIndex) => (
            <button key={slideIndex} onClick={() => goToSlide(slideIndex)}>
              <Circle
                stroke="#e5e7eb"
                {...(slideIndex === currentIndex && { stroke: "#e5e7eb", fill: "#ef4444" })}
                size={18}
                strokeWidth={1}
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default SingleCarousel;
