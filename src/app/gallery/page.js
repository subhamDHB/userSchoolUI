"use client";
import React, { useState } from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
export default function Gallery() {
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
    <div className="col-lg-4 col-md-6 col-sm-12" key={i}>
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
      <section
        className="page-title"
        style={{
          backgroundImage:
            "url(http://html.tonatheme.com/2021/drivega/assets/images/background/bg-8.jpg)",
        }}
      >
        <div className="container">
          <div className="content-box">
            <div className="content-wrapper">
              <div className="title">
                <h1>Gallery</h1>
              </div>
              <ul className="bread-crumb">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <BsArrowRight />
                  Gallery
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="gallery-sec" style={{ backgroundColor: "#6c5ebf1c" }}>
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
}
