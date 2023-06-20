"use client";
import React from "react";
import SliderCss from "./../Slider/Slider.css";
import Carousel from "react-bootstrap/Carousel";
import { HiArrowNarrowRight } from "react-icons/hi";
import { BannerOne, BannerTwo } from "@/Images";
import Image from "next/image";

const Slider = ({ banner }) => {
  return (
    <>
      <Carousel fade className="banner">
        {banner.data.length ? (
          banner?.data?.map((ele, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={ele?.file}
                alt="First slide"
              />
              <Carousel.Caption>
                <h2 className="animate fadeInUp one">{ele?.title}</h2>
                <h6 className="animate fadeInUp two">
                  {ele?.description}
                  <br />
                </h6>
                <div className="slider-btn">
                  <button className="animate fadeInUp three">
                    <HiArrowNarrowRight />
                    Read More
                  </button>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          ))
        ) : (
          <>
            <Carousel.Item key={index}>
              <Image
                className="d-block w-100"
                src={BannerOne}
                alt="First slide"
              />
              <Carousel.Caption>
                <h2 className="animate fadeInUp one">Title</h2>
                <h6 className="animate fadeInUp two">
                  Description
                  <br />
                </h6>
                <div className="slider-btn">
                  <button className="animate fadeInUp three">
                    <HiArrowNarrowRight />
                    Read More
                  </button>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </>
        )}
      </Carousel>
    </>
  );
};

export default Slider;
