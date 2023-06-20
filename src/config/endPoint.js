export const endpoints = {
  deactivateUser: "users/deactivateUser", //userId
  editUser: "users/edit", //userId
  userList: "users/list",
  createBlog: "blogs/create",
  blogList: "blogs/list",
  editBlog: "blogs/edit", //blogId
  login: "users/login",
  signUp: "users/signUp",
  createUser: "users/signUp",
  sendCode: "users/reset",
  resetPassword: "users/resetPassword",
  getContacts: "contactUs/list",
  deleteContact: "contactUs",
  createContact: "contactUs/create",
  getCMS: "cms/list",
  editCMS: "cms/edit",
  createCMS: "cms/create",
  deleteCMS: "cms/delete",
  deactivateCMS: "cms/deActive",
  getMeta: "meta/list",
  addMeta: "meta/create",
  getBanner: "banner/list",
  allBanner: "banner/all",

  createBanner: "banner/create",
  getGalleryData: "gallery/list",
  allGallery: "gallery/all",
  createGalleryData: "gallery/create",
  editBanners: "banner/edit", //BannerId
  deleteBanner: "banner/delete", //BannerId
  editGallery: "gallery/edit",
  deleteGallery: "gallery/delete",
  singleGalleryData: "gallery/single",
  editMeta: "meta/edit", //idMeta
  deleteMeta: "meta/delete", //id meta
};
