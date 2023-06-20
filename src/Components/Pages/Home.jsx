"use client";
import React, { useMemo, useState } from "react";
import Link from "next/link";
import { FaPhoneVolume } from "react-icons/fa";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";
import { NoImage, aboutOne, aboutTwo } from "@/Images";

export const Home = ({ gallery }) => {
  const [imageToShow, setImageToShow] = useState("");
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);

  let ImageDisplayBanner =
    gallery.data.length &&
    gallery?.data?.map((ele, index) => (
      <div className="col-lg-4 col-md=6 col-sm-12" key={index}>
        <div className="gallery-main">
          <div className="gallery-img">
            <img src={ele?.file} alt={`banner${index}`} />
          </div>
        </div>
      </div>
    ));

  let galleryRenderImages = useMemo(() => {
    if (ImageDisplayBanner.length > 6) {
      return ImageDisplayBanner.splice(0, 6);
    }
    return ImageDisplayBanner;
  }, [gallery]);

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
                    <Link href="aaa">
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
      <div className="quote-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-8">
              <aside className="fancy-quote">
                <h2>From The Desk Of Principal</h2>
                <blockquote>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Nulla itaque obcaecati error cum eligendi dolorem quidem
                    eius, veniam consectetur architecto, fuga veritatis illo,
                    doloribus provident sunt quibusdam vitae. Numquam, iste!
                    fuga veritatis illo, doloribus provident sunt quibusdam
                    vitae. Numquam, iste!
                  </p>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Nulla itaque obcaecati error cum eligendi dolorem quidem
                    eius, veniam consectetur architecto, fuga veritatis illo,
                    doloribus provident sunt quibusdam vitae. Numquam, iste!
                  </p>
                </blockquote>
                <span>
                  &#8212; Lorem ipsum, <cite>ipsum dolor sit amet. 2023</cite>
                </span>
              </aside>
            </div>
          </div>
        </div>
      </div>

      <div className="gallery-sec">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sec-title text-center mb-4">
                <div className="sub-title">Gallery</div>
                <h2 className="mb-4">Our Gallery</h2>
              </div>
            </div>
          </div>
          <div className="row mt-5">{galleryRenderImages}</div>
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

export default Home;
