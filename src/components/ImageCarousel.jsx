import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsDot } from "react-icons/bs";

const images = [
  "/home/carousel1.webp",
  "/home/carousel2.webp",
  "/home/carousel3.webp",
  "/home/carousel4.webp",
  "/home/carousel5.webp",
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(nextSlide, 2000);
    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;

    if (distance > 50) {
      nextSlide();
    } else if (distance < -50) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className="relative w-full max-w-screen-xl mx-auto overflow-hidden px-4">
      {/* Carousel Images */}
      <div
        className="relative rounded-2xl overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-[28rem] object-cover rounded-2xl shadow-xl transition-all duration-700 ease-in-out"
        />

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-5 transform -translate-y-1/2 text-white z-10 hover:scale-110 transition bg-transparent"
        >
          <FaChevronLeft size={28} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-5 transform -translate-y-1/2 text-white z-10 hover:scale-110 transition bg-transparent"
        >
          <FaChevronRight size={28} />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`text-3xl ${i === currentIndex ? "text-blue-600" : "text-gray-300"}`}
          >
            <BsDot />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
