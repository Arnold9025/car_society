"use client"
import { useState } from 'react';
import Image from 'next/image';
import { CustomButton } from '.';
import './style.css'
const Slider = () => {
  const [itemActive, setItemActive] = useState(0);
  const handleScroll = () => {

  }
  const handleNext = () => {
    setItemActive((prevItemActive) => (prevItemActive + 1) % items.length);
  };

  const handlePrev = () => {
    setItemActive((prevItemActive) => (prevItemActive - 1 + items.length) % items.length);
  };

  const handleThumbnailClick = (index:number) => {
    setItemActive(index);
  };

  return (
    <div className="slider">
      <div className="list">
        {items.map((item, index) => (
          <div className={`item ${index === itemActive ? 'active' : ''}`} key={index}>
            <Image src={item.src} alt={`Slider ${index + 1}`} fill />
            <div className="content">
                <p>{item.category}</p>
              <h2 className='hero__title'>{item.title}</h2>
              <p className='hero__subtitle'>{item.description}</p>
              <CustomButton
        title="Explore Cars"
        containerStyles="bg-primary-green text-white rounded-full mt-10"
        handleClick={handleScroll}
        btnType="button"
        />
            </div>
          </div>
        ))}
      </div>
      <div className="arrows">
        <button id="prev" onClick={handlePrev}>
          {'<'}
        </button>
        <button id="next" onClick={handleNext}>
          {'>'}
        </button>
      </div>
      <div className="thumbnail">
        {items.map((item, index) => (
          <div
            className={`item ${index === itemActive ? 'active' : ''}`}
            onClick={() => handleThumbnailClick(index)}
            key={index}
          >
            <Image src={item.src} alt={`Slider ${index + 1}`} width={1000} height={1000} />
            <div className="content">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;

// Données de test
const items = [
  {
    src: '/img5.jpg',
    category: 'MOTORS',
    title: 'Explore',
    description: 'Explore new horizons with freedom at your fingertips.',
    name: 'Explore',
  },
  {
    src: '/img6.jpg',
    category: 'SUPERCARS',
    title: 'Travel',
    description: 'Travel with style and comfort wherever your journey takes you.',
    name: 'Travel',
  },
  {
    src: '/img7.jpg',
    category: 'BERLINES',
    title: 'Unleash',
    description: 'Unleash your spirit of adventure and discover the world.',
    name: 'Unleash',
  },
  {
    src: '/img9.jpg',
    category: 'SUV',
    title: 'Every',
    description: 'Every mile traveled is a new story waiting to be told.',
    name: 'Every',
  },
 
];
