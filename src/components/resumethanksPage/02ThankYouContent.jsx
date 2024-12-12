import Image from "next/image";
import thanks from "../../../public/images/resume-thanks.webp";
import Link from "next/link";

const ThankYouContent = () => {
  return (
    <>
      <section className="resume-thanks-banner py-5"></section>
      <section className="resume-thanks-content pt-5 pb-3">
        <div class="container">
          <div class="row ">
            <div class="col-12 col-md-6">
              <h1>
                Thank <strong>You!</strong>
              </h1>
              <p>
                Your Email has been sent. Someone from our HR team will get back
                to you within 1-2 business days.
              </p>
            </div>
            <div class="col-12 col-md-6 text-center">
              {/* <img src="resume-thank-you-image.jpg" alt="Thank You" class="img-fluid"> */}
              <Image src={thanks} alt="Resume Thank You" />
            </div>
          </div>
        </div>
      </section>
      <div className="thank-you-list">
        <div className="container">
        <div className="row pb-5">
          <div className="resume-linking col-12">
            <h3>
              While we get back to you why not visit <br /> these useful links:
            </h3>
            <ul>
              <li>
                <Link href={"/about"}>Our Company</Link> is here for you to
                read.
              </li>
              <li>
                Look through our <Link href={"/"}>various projects.</Link>
              </li>
              <li>
                Understand the <Link href={"/how-we-work"}>way we operate</Link>
              </li>
              <li>
                Our <Link href={"/"}>Portfolio</Link>
              </li>
              <li>
                You can read <Link href={"/blogs"}>our blog</Link> and subscribe
                if you like it.
              </li>
              <li>
                What <Link href={"/"}>employees speak about us</Link>
              </li>
              <li>
                Life at <Link href={"/"}>Webguruz</Link>
              </li>
              <li>
                {" "}
                <Link href={"/"}>Job</Link> Position
              </li>
              <li>
                {" "}
                <Link href={"/"}>About</Link> us
              </li>
              <li className="resume-social">
                Join us on{" "}
                <a
                  href="https://www.linkedin.com/company/webguru-technologies-pvt.-ltd./"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our LinkedIn page"
                >
                  {" "}
                  LinkedIn
                </a>
                ,
                <a
                  href="https://twitter.com/Webguruz"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Twitter profile"
                >
                  {" "}
                  Twitter
                </a>
                , and{" "}
                <a
                  href="https://www.facebook.com/webguruztechnologies/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Facebook page"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default ThankYouContent;
