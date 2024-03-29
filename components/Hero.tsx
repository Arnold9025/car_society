"use client"


import Image from "next/image"
import { CustomButton } from "."
const Hero = () => {
  const handleScroll = () => {

  }
  return (
    <div className="hero">
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero=image.png" alt="hero" fill className="object-contain"/>
          <div className="hero__image-overlay"></div>
        </div>
      </div>
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, Book, rent a car quickly and easily
        </h1>
        <p className="hero__subtitle"> Streamline your car rental experience with our effortless booking process</p>
        <CustomButton
        title="Explore Cars"
        containerStyles="bg-primary-green text-white rounded-full mt-10"
        handleClick={handleScroll}
        btnType="button"
        />
      </div>
      
    </div>
  )
}

export default Hero