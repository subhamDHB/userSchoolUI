import ContactCss from "./../contact/Contact.css";
import { MdLocationPin } from "react-icons/md";
import { BsFillEnvelopeCheckFill, BsArrowRight } from "react-icons/bs";
import { FaPhoneVolume } from "react-icons/fa";
import Link from "next/link";
// import Image from "next/image";

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
                <li>
                  <BsArrowRight />
                  Get In Touch
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-section">
        <div className="container">
          <div className="row">
            <div className="top-content mb-4 d-flex justify-content-between align-items-center">
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
          <div className="tab-area mt-4">
            <div className="row">
              <div className="col-lg-4 contact-info-block">
                <div className="inner-box">
                  <div className="icon">
                    <MdLocationPin />
                  </div>
                  <h4>Office Address</h4>
                  <div className="text">
                    V3HP+55F, Kandi-Katwa Rd,
                    <br /> Bharatpur, West Bengal 742301
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
                      Hotline: <a href="tel:080060020">0000 0000</a>
                    </li>
                    <li>
                      Mob: <a href="tel:+1(246)3330791">+91 0000 00000</a>
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
                      <a href="mailto:learning@drivega.net">lorem@gmail.net</a>
                    </li>
                    <li>
                      <a href="mailto:support@thedomain.com">
                        support@gmail.com
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
                <img
                  src="https://scontent.fccu25-1.fna.fbcdn.net/v/t1.6435-9/68657550_881820308859505_8611115721436430336_n.jpg?_nc_cat=107&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Ja2qtuEodssAX_jV7QF&_nc_ht=scontent.fccu25-1.fna&oh=00_AfDIHJyA2bLGdOi7TJz7JIRZw_m5EZx-t2cmB5FU7Mkh7g&oe=64B3E189"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="sec-title mb-30">
                <div className="sub-title">countless benefits of lorem</div>
                <h2 className="mb-4">
                  Any Questions? Fill-In <br /> The Form & Send Today!
                </h2>
              </div>
              <div className="contact-form">
                <form>
                  <div className="row">
                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="fullName"
                        placeholder="Your Full Name"
                        required
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <input
                        type="phone"
                        name="phoneNumber"
                        placeholder="Your Phone Number"
                        required
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        required
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <textarea name="message" placeholder="Massage"></textarea>
                    </div>
                    <div className="form-group col-md-12">
                      <button className="theme-btn btn-style-one" type="submit">
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
