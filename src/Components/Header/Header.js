"use client";
import React from "react";
import Link from "next/link";
import HeaderCss from "./../Header/Header.css";
import { BsFacebook, BsTwitter, BsLinkedin, BsInstagram } from "react-icons/bs";
import { MdLocationPin, MdLocalPhone } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { usePathname } from "next/navigation";
const Header = () => {
  const path = usePathname();
  return (
    <>
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle">
              <RxCross1 />
            </span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>
      <div className="site-navbar-wrap">
        <div className="site-navbar-top">
          <div className="container-fluid py-2">
            <div className="menu-area">
              <div className="row align-items-center">
                <div className="col-9 top-left-bar">
                  <div className="d-flex mr-auto">
                    <Link
                      href="#"
                      className="d-flex align-items-center mr-4 first-ele"
                    >
                      <MdLocationPin />
                      <span className="d-none d-md-inline-block">
                        V3HP+55F, Kandi-Katwa Rd, Bharatpur
                      </span>
                    </Link>
                    <Link
                      href="#"
                      className="d-flex align-items-center mr-auto"
                    >
                      <MdLocalPhone />
                      <span className="d-none d-md-inline-block">
                        +91 0000 0000 00
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="col-3 text-right">
                  <div className="mr-auto">
                    <Link href="#" className="p-2 pl-0">
                      <BsFacebook />
                    </Link>
                    <Link href="#" className="p-2 pl-0">
                      <BsTwitter />
                    </Link>
                    <Link href="#" className="p-2 pl-0">
                      <BsLinkedin />
                    </Link>
                    <Link href="#" className="p-2 pl-0">
                      <BsInstagram />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-navbar site-navbar-target js-sticky-header">
          <div className="container-fluid">
            <div className="menu-area">
              <div className="row align-items-center">
                <div className="col-3 main-logo text-center">
                  <h1 className="my-0 site-logo">
                    <Link href="index.html">
                      Bharatpur St. Mary (Eng.)
                      <br /> <small>High School</small>
                      {/* <img src={Logo} alt="" /> */}
                    </Link>
                  </h1>
                </div>
                <div className="col-9">
                  <nav className="site-navigation text-right" role="navigation">
                    <div className="container">
                      <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3">
                        <Link
                          href="#"
                          className="site-menu-toggle js-menu-toggle text-white"
                        >
                          <span className="icon-menu h3">
                            <FaBars />
                          </span>
                        </Link>
                      </div>
                      <ul className="site-menu main-menu js-clone-nav d-none d-lg-block">
                        <li className={path == "/" ? "active" : ""}>
                          <Link href="/" className="nav-link">
                            Home
                          </Link>
                        </li>
                        <li className={path == "/about" ? "active" : ""}>
                          <Link href="/about" className="nav-link">
                            About Us
                          </Link>
                        </li>
                        {/* <li className="has-children">
                        <Link href="#" className="nav-link">
                          Clients
                        </Link>
                        <ul className="dropdown arrow-top">
                          <li>
                            <Link href="/clients" className="nav-link">
                              Clients
                            </Link>
                          </li>
                          <li>
                            <Link href="/testimonials" className="nav-link">
                              Testimonials
                            </Link>
                          </li>
                        </ul>
                      </li> */}
                        <li className={path == "/gallery" ? "active" : ""}>
                          <Link href="/gallery" className="nav-link">
                            Gallery
                          </Link>
                        </li>
                        <li className={path == "/notice" ? "active" : ""}>
                          <Link href="/notice" className="nav-link">
                            Notice Board
                          </Link>
                        </li>
                        <li className={path == "/recruitment" ? "active" : ""}>
                          <Link href="/recruitment" className="nav-link">
                            Recruitment
                          </Link>
                        </li>
                        <li className={path == "/admission" ? "active" : ""}>
                          <Link href="/admission" className="nav-link">
                            Admission
                          </Link>
                        </li>
                        <li className={path == "/contact" ? "active" : ""}>
                          <Link href="/contact" className="nav-link">
                            Contact Us
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
