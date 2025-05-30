import React, { useState, useEffect } from 'react';
import slider1 from "./image/slider1.jpg";
import slider2 from "./image/slider2.jpg";
import slider3 from "./image/slider3.jpg";

const AutoSlider = () => {
  const slides = [
    {
      id: 1,
      url: slider1,
      title: "Believe in Allah’s Ability",
      description:
        "The heart that beats for Allah is always a stranger among the hearts that beat for the Dunya (World).",
      buttonText: 'Discover More',
    },
    {
      id: 2,
      url: slider2,
      title: 'Turn To Allah Before You Return To Allah',
      description: 'The heart that beats for Allah is always a stranger among the hearts that beat for the Dunya (World).',
      buttonText: 'Learn More',
    },
    {
      id: 3,
      url: slider3,
      title: 'Allah Makes The Impossible Possible',
      description: 'The heart that beats for Allah is always a stranger among the hearts that beat for the Dunya (World).',
      buttonText: 'Get Started',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className="w-full h-full bg-cover bg-center duration-700"
        style={{
          backgroundImage: `url(${slides[currentIndex].url})`,
        }}
      >
        {/* Content Overlay */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-start px-20">
          <div className="text-white max-w-2xl space-y-5">
            <h2 className="text-5xl md:text-6xl font-bold font-serif leading-tight">
              {slides[currentIndex].title}
            </h2>
            <p className="text-lg md:text-xl">{slides[currentIndex].description}</p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition">
              {slides[currentIndex].buttonText}
            </button>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white text-3xl rounded-full p-2 z-10"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white text-3xl rounded-full p-2 z-10"
      >
        ❯
      </button>
    </div>
  );
};

export default AutoSlider;
