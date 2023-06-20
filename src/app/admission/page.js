import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import AdmissionCss from "./../admission/Admission.css";
export default function Admission() {
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
                <h1>Admission</h1>
              </div>
              <ul className="bread-crumb">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <BsArrowRight />
                  Admission
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
                <h2 className="school-title">Admission From</h2>
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
                    <label className="mb-2">Date of Birth</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your Date of Birth"
                      name="dateOfBirth"
                    />
                  </div>
                  <div className="col-lg-4 md-6">
                    <label className="mb-2">Gender</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your Gender"
                      name="gender"
                    />
                  </div>
                  <div className="col-lg-4 md-6">
                    <label className="mb-2">Religion</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your Religion"
                      name="religion"
                    />
                  </div>
                  <div className="col-lg-4 md-6">
                    <label className="mb-2">City</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your City"
                      name="city"
                    />
                  </div>
                  <div className="col-lg-4 md-6">
                    <label className="mb-2">State</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your State"
                      name="state"
                    />
                  </div>
                  <div className="col-lg-4 md-6">
                    <label className="mb-2">Country</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your Country"
                      name="country"
                    />
                  </div>
                  <div className="col-lg-4 md-6">
                    <label className="mb-2">Guardian Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your Guardian Name"
                      name="guardianName"
                    />
                  </div>
                  <div className="col-lg-4 md-6">
                    <label className="mb-2">Relation</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your Relation"
                      name="relation"
                    />
                  </div>
                  <div className="col-lg-4 md-6">
                    <label className="mb-2">Contact Number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your Contact Number"
                      name="contactNumber"
                    />
                  </div>
                  <div className="col-lg-4 md-6">
                    <label className="mb-2">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your Address"
                      name="address"
                    />
                  </div>
                  <div className="col-lg-4 md-6">
                    <label className="mb-2">Pin code</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your Pin code"
                      name="pincode"
                    />
                  </div>
                  <div className="col-lg-4 md-6">
                    <label className="mb-2">Course</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your Course"
                      name="course"
                    />
                  </div>
                  <div className="col-lg-4 md-6">
                    <label className="mb-2">Nationality</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your Nationality"
                      name="nationality"
                    />
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
