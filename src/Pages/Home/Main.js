"use client";
import React, { useState } from "react";
import HomeCss from "./../Home/Home.css";
import Slider from "@/Components/Slider/Slider";
import Link from "next/link";
import { FaPhoneVolume } from "react-icons/fa";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";
import { aboutOne, aboutTwo } from "@/Images";

const Main = () => {
  const [imageToShow, setImageToShow] = useState("");
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);
  const getGallery = [
    "https://unsplash.it/1000/600?image=1069",
    "https://unsplash.it/1000/600?image=1068",
    "https://unsplash.it/1000/600?image=1081",
    "https://unsplash.it/1000/600?image=855",
    "https://unsplash.it/1000/600?image=824",
    "https://unsplash.it/1000/600?image=655",
  ];
  const imageCards = getGallery.map((image, i) => (
    <div className="col-lg-4 col-md=6 col-sm-12" key={i}>
      <div className="gallery-main">
        <div className="gallery-img">
          <img onClick={() => showImage(image)} src={image} alt="" />
        </div>
      </div>
    </div>
  ));

  const showImage = (image) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
  };
  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };
  const showNext = (e) => {
    e.stopPropagation();
    let currentIndex = getGallery.indexOf(imageToShow);
    if (currentIndex >= getGallery.length - 1) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = getGallery[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };
  const showPrev = (e) => {
    e.stopPropagation();
    let currentIndex = getGallery.indexOf(imageToShow);
    if (currentIndex <= 0) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = getGallery[currentIndex - 1];
      setImageToShow(nextImage);
    }
  };
  return (
    <>
      <Slider />
      <div className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="image-block">
                <div className="image-one">
                  <Image src={aboutOne} alt="" />
                </div>
                <div className="image-two">
                  <Image src={aboutTwo} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content-block">
                <div className="sec-title mb-4">
                  <div className="sub-title">About Us</div>
                  <h2>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
                  </h2>
                </div>
                <div className="text">
                  Nunc quam arcu, pretium quis quam sed, laoreet efficitur
                  liquam volutpat. lobortis sem consequat consequat imperdiet.
                  In nulla sed viverraut loremut tetur diam nunc bibendum
                  imperdiets. Lorem ipsum dolor sit amet, consec isicing elit
                  eiusmod tempor incididunt labore do consequat.
                </div>
                <div className="text">
                  Nunc quam arcu, pretium quis quam sed, laoreet efficitur
                  liquam volutpat. lobortis sem consequat consequat imperdiet.
                </div>
                <div className="bottom-content">
                  <h4>Call Us</h4>
                  <div className="contact-number">
                    <Link href="">
                      <div className="call">
                        <FaPhoneVolume />
                      </div>
                      +91 00 0000 0000
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gallery-sec">
        <div className="container">
          <div className="row">{imageCards}</div>
        </div>
      </div>
      {lightboxDisplay ? (
        <div id="light-box" onClick={hideLightBox}>
          <button onClick={showPrev}>
            <AiOutlineArrowLeft />
          </button>
          <img id="light-box-img" src={imageToShow} alt="" />
          <button onClick={showNext}>
            <AiOutlineArrowRight />
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Main;
