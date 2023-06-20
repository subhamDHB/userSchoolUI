import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
export default function Recruitment() {
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
                <h1>Recruitment</h1>
              </div>
              <ul className="bread-crumb">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <BsArrowRight />
                  Recruitment
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="career-bg">
        <div className="container mt-5">
          <div className="row">
            <div className="school-main-title">
              <div className="school-heading-subheading center-align text-center">
                <h2 className="school-title">Recruitment From</h2>
                <div className="school-heading-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  debitis tempore temporibus obcaecati fuga, rem molestiae,
                  asperiores provident maiores consectetur, odio quae non ea quo
                  voluptas sapiente placeat illum! Molestiae!
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="sm-12">
              <div className="form-inner">
                <div className="row mb-3 g-3">
                  <div className="col-lg-4 md-6">
                    <label className="mb-2">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your Full Name"
                      name="fullName"
                    />
                  </div>
                  <div className="col-lg-4 md-6">
                    <label className="mb-2">Contact No</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your Contact No"
                      name="contactNo"
                    />
                  </div>
                  <div className="col-lg-4 md-6">
                    <label className="mb-2">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your Email"
                      name="email"
                    />
                  </div>
                  <div className="col-lg-4 md-6">
                    <label className="mb-2">Highest Qualification</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your Highest Qualification"
                      name="highestQualification"
                    />
                  </div>
                  <div className="col-lg-4 md-6">
                    <label className="mb-2">Post Applied For</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your Post"
                      name="postApplied"
                    />
                  </div>
                  <div className="col-lg-4 md-6">
                    <label className="mb-2">Upload Your CV</label>
                    <input type="file" className="form-control" name="cv" />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-12 text-center mt-4">
                    <button
                      className="theme-btn btn-style-one text-center"
                      type="submit"
                    >
                      <span>Submit</span>
                    </button>
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
