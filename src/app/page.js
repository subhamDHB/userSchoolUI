import React from "react";
import "./Home.css";
import Slider from "@/Components/Slider/Slider";

import Home from "@/Components/Pages/Home";
import {
  getBannerData,
  getGalleryDataByPagination,
} from "@/ApiFunctions/apiFunction";

const Main = async () => {
  const BannerData = getBannerData();
  const GalleryData = getGalleryDataByPagination();

  const [banner, gallery] = await Promise.all([BannerData, GalleryData]);

  return (
    <>
      <Slider banner={banner} gallery={gallery} />
      <Home gallery={gallery} />
    </>
  );
};

export default Main;
