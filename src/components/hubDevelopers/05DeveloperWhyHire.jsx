import React from "react";
import whyimg from "../../../public/images/hubspot-developer-img/why-developer.webp";
import happy1 from "../../../public/images/hubspot-developer-img/developer-reason1.webp";
import happy2 from "../../../public/images/hubspot-developer-img/developer-reason2.webp";
import happy3 from "../../../public/images/hubspot-developer-img/developer-reason3.webp";
import happy4 from "../../../public/images/hubspot-developer-img/developer-reason4.webp";
import happy5 from "../../../public/images/hubspot-developer-img/developer-reason5.webp";
import Image from "next/image";
const DeveloperWhyHire = () => {
  return (
    <div className="hubdev-whyhire py-5">
      <div className="container">
        <div className="row align-items-center ">
          <div className="col-md-6  heading-main">
            <div className="hub-certified-content devwhy-content">
              <h2>
                Why Hire Our <br />
                <span>HubSpot Developers?</span>
              </h2>
              <p>
                Choosing WebGuruz means partnering with a team dedicated to
                delivering exceptional results. Our developers are not just
                HubSpot experts but also problem-solvers who bring strategic
                insights to every project.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="certified-img dev-why-img">
              <Image src={whyimg} alt="HubSpot Developers" />
            </div>
          </div>
          <div className="col-12 whyhire-card">
            <div className="row align-items-center text-center pt-4">
              <div className="col mx-1 mb-4 mb-md-0 dev-why-hire-card">
                {" "}
                <div className="img">
                  <Image
                    src={happy1}
                    alt="Certified Hubspot App Developers Icon"
                  />
                </div>
                Certified Hubspot <br />
                App Developers
              </div>
              <div className="col mx-1 mb-4 mb-md-0 dev-why-hire-card">
                {" "}
                <div className="img">
                  <Image src={happy2} alt="On-Time Delivery Icon" />
                </div>
                On-Time <br />
                Delivery
              </div>
              <div className="col mx-1 mb-4 mb-md-0 dev-why-hire-card">
                {" "}
                <div className="img">
                  <Image src={happy3} alt="Expertise Across Verticals Icon" />
                </div>
                Expertise Across <br />
                Verticals
              </div>
              <div className="col mx-1 mb-4 mb-md-0 dev-why-hire-card">
                {" "}
                <div className="img">
                  <Image src={happy4} alt="Scalable Solutions Icon" />
                </div>
                Scalable <br />
                Solutions
              </div>
              <div className="col mx-1 mb-4 mb-md-0 dev-why-hire-card">
                {" "}
                <div className="img">
                  <Image src={happy5} alt="Support Icon" />
                </div>
                End-to-End <br />
                Support
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperWhyHire;
