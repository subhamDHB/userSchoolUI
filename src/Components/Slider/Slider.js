"use client";
import React from "react";
import SliderCss from "./../Slider/Slider.css";
import Carousel from "react-bootstrap/Carousel";
import { HiArrowNarrowRight } from "react-icons/hi";
import { BannerOne, BannerTwo } from "@/Images";
import Image from "next/image";

const Slider = () => {
  return (
    <Carousel fade className="banner">
      <Carousel.Item>
        <Image className="d-block w-100" src={BannerTwo} alt="First slide" />
        <Carousel.Caption>
          <h2 className="animate fadeInUp one">Lorem Ipsum</h2>
          <h6 className="animate fadeInUp two">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
            <br />
            dolor praesentium beatae molestias quis,{" "}
          </h6>
          <div className="slider-btn">
            <button className="animate fadeInUp three">
              <HiArrowNarrowRight />
              Read More
            </button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className="d-block w-100" src={BannerOne} alt="Second slide" />
        <Carousel.Caption>
          <h2 className="animate fadeInUp one">Lorem Ipsum</h2>
          <h6 className="animate fadeInUp two">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
            <br />
            dolor praesentium beatae molestias quis,{" "}
          </h6>
          <div className="slider-btn">
            <button className="animate fadeInUp three">
              <HiArrowNarrowRight />
              Read More
            </button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
