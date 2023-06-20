import React from "react";
import FooterCss from "./../Footer/Footer.css";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaRegFlag,
  FaPhoneVolume,
  FaClock,
  FaLongArrowAltRight,
} from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer
        className="main-footer"
        style={{
          backgroundImage:
            "url(http://html.tonatheme.com/2021/drivega/assets/images/background/bg-1.jpg)",
        }}
      >
        <div className="container-fluid">
          <div className="widgets-section">
            <div className="row clearfix">
              <div className="column col-lg-3 col-md-6">
                <div className="widget about-widget">
                  <div className="logo">
                    <h5 className="mb-0">
                      Bharatpur St. Mary (Eng.) School (H.S)
                    </h5>
                    {/* <a href="index.html">
                      <img src="assets/images/logo-2.png" alt="" />
                    </a> */}
                  </div>
                  <div className="text">
                    Integer lobortis sem consequat imperd In nulla viverra ut
                    lorem ut dapibus con etur diam. Nun biendum diet condime sed
                    ipsum duis temor lacinia.<Link href="/">Read more</Link>
                  </div>
                  <ul className="social-links">
                    <li>
                      <a href="#">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <BsTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaLinkedinIn />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* <div className="column col-lg-3 col-md-6">
                <div className="widget newsletter-widget">
                  <h3 className="widget-title">Newsletter Signup</h3>
                  <div className="widget-content">
                    <div className="text">
                      Enter your email address to get latest <br /> updates and
                      offers from us.
                    </div>
                    <div className="newsletter-form">
                      <form className="ajax-sub-form" method="post">
                        <div className="form-group">
                          <input
                            type="email"
                            placeholder="Email Address..."
                            id="subscription-email"
                          />
                          <button type="submit" className="theme-btn">
                            <FaLongArrowAltRight />
                          </button>
                          <label
                            className="subscription-label"
                            htmlFor="subscription-email"
                          ></label>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="column col-lg-2 col-md-6">
                <div className="widget links-widget">
                  <h3 className="widget-title">Quick Links</h3>
                  <div className="widget-content">
                    <ul>
                      <li>
                        <a href="#">About Us</a>
                      </li>
                      <li>
                        <a href="#">Gallery</a>
                      </li>
                      <li>
                        <a href="#">Notice Board</a>
                      </li>
                      <li>
                        <a href="#">Recruitment</a>
                      </li>
                      <li>
                        <a href="#">Admission</a>
                      </li>
                      <li>
                        <a href="#">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="column col-lg-3 col-md-6">
                <div className="widget contact-widget">
                  <h3 className="widget-title">Contact Us</h3>
                  <div className="widget-content">
                    <ul className="contact-info">
                      <li>
                        <div className="icon">
                          <FaRegFlag />
                        </div>
                        <div className="text">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <FaPhoneVolume />
                        </div>
                        <div className="text">
                          Helpline 24/7 <br />
                          <a href="tel:+1(700)3330088">+91 0000 0000 00</a>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <FaClock />
                        </div>
                        <div className="text">
                          Mon to Friday <br /> 9:00 am to 7:00 pm
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="column col-lg-4 col-md-12">
                <div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.3295115011747!2d88.08285087624324!3d23.877931478583687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f99b8935eb0199%3A0x4a5c1af790c00202!2sBharatpur%20St.%20Mary%20(Eng.)%20School%20(HS)!5e0!3m2!1sen!2sin!4v1687181726293!5m2!1sen!2sin"
                    width="100%"
                    height="350"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="wrapper-box">
              <div className="copyright">
                <div className="text text-center">
                  &copy; 2023 YEASITECH. All rights reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
