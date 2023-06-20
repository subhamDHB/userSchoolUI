const { config } = require("@/config/apiConfig");
const { endpoints } = require("@/config/endPoint");

async function getGalleryData(ele = 8, page = 1) {
  const response = await fetch(
    `${config.BASE_URL}${endpoints.getGalleryData}?elements=${ele}&page=${page}`,
    {
      next: { revalidate: 10 },
    }
  );
  if (!response.ok) {
    throw new Error("Error Happened");
  }
  if (response.ack == 0) {
    throw new Error("Error Happened");
  }
  return response.json();
}

async function getGalleryDataByPagination() {
  const response = await fetch(`${config.BASE_URL}${endpoints.allGallery}`, {
    cache: "no-cache",
  });
  if (!response.ok) {
    throw new Error("Error Happened");
  }
  if (response.ack == 0) {
    throw new Error("Error Happened");
  }
  return response.json();
}

async function getBannerData() {
  const response = await fetch(`${config.BASE_URL}${endpoints.allBanner}`, {
    next: { revalidate: 10 },
  });
  if (response.ack == 0) {
    throw new Error("Error Happened");
  }

  if (!response.ok) {
    throw new Error("Error Happened");
  }
  return response.json();
}

export { getBannerData, getGalleryData, getGalleryDataByPagination };
