import ContactCss from "./../contact/Contact.css";
import { MdLocationPin } from "react-icons/md";
import { BsFillEnvelopeCheckFill } from "react-icons/bs";
import { FaPhoneVolume } from "react-icons/fa";
import Link from "next/link";

export default function Contact() {
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
                <h1>Contact Us</h1>
              </div>
              <ul className="bread-crumb">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>Get In Touch</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-section">
        <div className="container">
          <div className="row">
            <div className="top-content m-0 d-flex justify-content-between align-items-center">
              <div className="sec-title">
                <div className="sub-title">instructors help you succeed </div>
                <h2>
                  Bharatpur St. Mary (H.S) <br /> - News & Updates
                </h2>
              </div>
              <div className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
                <br />
                velit quibusdam eaque magni modi odio. Molestiae est ducimus
                <br />
                maxime ab dicta dolore id, hic consectetur beatae.
              </div>
            </div>
          </div>
          <div className="tab-area">
            <div className="row">
              <div className="col-lg-4 contact-info-block">
                <div className="inner-box">
                  <div className="icon">
                    <MdLocationPin />
                  </div>
                  <h4>Office Address</h4>
                  <div className="text">
                    72 MainSail Drive, St. 12/B <br /> Calibry, Florida 25502 -
                    USA
                  </div>
                </div>
              </div>
              <div className="col-lg-4 contact-info-block">
                <div className="inner-box">
                  <div className="icon">
                    <FaPhoneVolume />
                  </div>
                  <h4>Phone Us</h4>
                  <ul>
                    <li>
                      Hotline: <a href="tel:080060020">0800 60020</a>
                    </li>
                    <li>
                      Mob: <a href="tel:+1(246)3330791">+1 (246) 333 0791</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 contact-info-block">
                <div className="inner-box">
                  <div className="icon">
                    <BsFillEnvelopeCheckFill />
                  </div>
                  <h4>Send Message</h4>
                  <ul>
                    <li>
                      <a href="mailto:learning@drivega.net">
                        learning@drivega.net
                      </a>
                    </li>
                    <li>
                      <a href="mailto:support@thedomain.com">
                        support@thedomain.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-form-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="image">
                <img src="assets/images/resource/image-23.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="sec-title mb-30">
                <div className="sub-title">countless benefits of drivega</div>
                <h2>
                  Any Questions? Fill-In <br /> The Form & Send Today!
                </h2>
              </div>
              <div className="contact-form">
                <form
                  method="post"
                  action="inc/sendemail.php"
                  id="contact-form"
                >
                  <div className="row">
                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="name"
                        value=""
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <input
                        type="email"
                        name="email"
                        value=""
                        placeholder="Your Email"
                        required
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="subject"
                        value=""
                        placeholder="Subject"
                        required
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <textarea
                        name="form_message"
                        placeholder="Massage"
                      ></textarea>
                    </div>
                    <div className="form-group col-md-12">
                      <button
                        className="theme-btn btn-style-one"
                        type="submit"
                        data-loading-text="Please wait..."
                      >
                        <span>Send Message</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
