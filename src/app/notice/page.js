"use client";
import React, { useState } from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import NoticeCss from "./../notice/Notice.css";
export default function Notice() {
  const [isRunning, setIsRunning] = useState(true);

  const handleMouseOver = () => {
    setIsRunning(false); // Stop the marquee animation
  };

  const handleMouseOut = () => {
    setIsRunning(true); // Start the marquee animation
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
                <h1>Notice Board</h1>
              </div>
              <ul className="bread-crumb">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <BsArrowRight />
                  Notice Board
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="notice-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="notice">
                <div className="notice_title">
                  <h3>News And Notice</h3>
                </div>
                <div className="notice_list">
                  <div
                    className={`marquee ${isRunning ? "running" : ""}`}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                  >
                    <ul>
                      <li>
                        <Link href="">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </Link>
                        <img
                          src="https://www.eiti.org.in/assets/froantend/images/new.gif"
                          alt=""
                        />
                      </li>
                      <li>
                        <Link href="">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </Link>
                        <img
                          src="https://www.eiti.org.in/assets/froantend/images/new.gif"
                          alt=""
                        />
                      </li>
                      <li>
                        <Link href="">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </Link>
                        <img
                          src="https://www.eiti.org.in/assets/froantend/images/new.gif"
                          alt=""
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
