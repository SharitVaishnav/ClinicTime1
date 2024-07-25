import React, { useState } from 'react';
import '../caraousal.css'; // Import CSS for carousel styles

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'photo2.jpg',
    'photo5.jpg',
    'photo10.jpg',
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="carousel mx-auto -z-5">
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            key={index}
            className={index === currentIndex ? 'slide active' : 'slide'}
          >
            <img src={image} alt={`Slide ${index}`} className='h-[20rem] w-[40rem] max-[640px]:w-[30rem] max-[640px]:h-[15rem] z-[-100px]'/>
          </div>
        ))}
      </div>
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default CarouselComponent;
