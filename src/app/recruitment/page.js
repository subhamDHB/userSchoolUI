import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
export default function Notice() {
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
    </>
  );
}
