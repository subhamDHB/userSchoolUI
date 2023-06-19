"use client";
import React, { useState } from "react";
// import "./Home.css";
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
    "https://scontent.fccu25-1.fna.fbcdn.net/v/t1.6435-9/67983655_881820528859483_3074455568933453824_n.jpg?_nc_cat=107&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=D6UgnxBAK90AX9vIAKF&_nc_ht=scontent.fccu25-1.fna&oh=00_AfClATpUIbU0mUEwhx9yel1ovtMaX45C3C0JYLHTLhjayQ&oe=64B3E74E",
    "https://scontent.fccu25-1.fna.fbcdn.net/v/t1.6435-9/68657550_881820308859505_8611115721436430336_n.jpg?_nc_cat=107&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Ja2qtuEodssAX_jV7QF&_nc_ht=scontent.fccu25-1.fna&oh=00_AfDIHJyA2bLGdOi7TJz7JIRZw_m5EZx-t2cmB5FU7Mkh7g&oe=64B3E189",
    "https://scontent.fccu25-1.fna.fbcdn.net/v/t39.30808-6/272152306_326565839477302_5375006510599573145_n.jpg?_nc_cat=100&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=9-bEgdt4I_4AX_lmnc9&_nc_ht=scontent.fccu25-1.fna&oh=00_AfCha3WEI3fcgMVzA2H23oq-hhdoxXtsRVZYMxNEQT7LPQ&oe=64915440",
    "https://scontent.fccu25-1.fna.fbcdn.net/v/t1.6435-9/54222381_788110161563854_5638746658930950144_n.jpg?_nc_cat=111&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=pilRM5QBCe4AX-Gxxwp&_nc_ht=scontent.fccu25-1.fna&oh=00_AfAr4v6y-SpOTNeyGpbXDikanL-FmiI8r7QLlhXCHqL-LQ&oe=64B3E489",
    "https://scontent.fccu25-1.fna.fbcdn.net/v/t39.30808-6/214943514_192446602889227_7287335049682468856_n.jpg?_nc_cat=101&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=mvhZ63wcAYoAX8mx_G0&_nc_ht=scontent.fccu25-1.fna&oh=00_AfBlGeDNDFP-Y5SHWT3HzMrJNGah-VU1tEjfQfTSVV29tw&oe=6491330A",
    "https://scontent.fccu25-1.fna.fbcdn.net/v/t1.6435-9/67916042_881820365526166_734796035930456064_n.jpg?_nc_cat=108&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=D-JGc91HlzcAX_UV6aI&_nc_ht=scontent.fccu25-1.fna&oh=00_AfAW_opGg9HHxrA63EUnkkEXrpa52Jg3Q2iV9yJwLdKB2Q&oe=64B3D2E6",
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
          <div className="row mt-5">{imageCards}</div>
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
