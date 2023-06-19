import Image from "next/image";
import Link from "next/link";
import { FaPhoneVolume } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { aboutOne, aboutTwo } from "@/Images";
export default function About() {
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
                <h1>About Us</h1>
              </div>
              <ul className="bread-crumb">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <BsArrowRight />
                  About Us
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="about-section" style={{ backgroundColor: "#6c5ebf1c" }}>
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
    </>
  );
}
