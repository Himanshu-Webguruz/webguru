import React from "react";
import Image from "next/image";
import servimg1 from "../../../public/images/hubservicesimg/services-present-1.webp";
import servimg2 from "../../../public/images/hubservicesimg/services-present-2.webp";
import servimg3 from "../../../public/images/hubservicesimg/services-present-3.webp";
import servimg4 from "../../../public/images/hubservicesimg/services-present-4.webp";
import servimg5 from "../../../public/images/hubservicesimg/services-present-5.webp";
import servimg6 from "../../../public/images/hubservicesimg/services-present-6.webp";
import Link from "next/link";
const HubServicesPresent = () => {
  return (
    <div className="our-hubspot-services hubspot-present-services  whyhrs py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main mb-3 mb-md-5 text-center">
            <h2>
              <span>HubSpot Services </span> We Offer
            </h2>
          </div>
        </div>
        <div className="row hub-services">
          <div className="col-lg-4 col-md-6 col-12 box-1">
            <div className="services-box">
              <div className="services-img">
                <Image src={servimg1} alt="HubSpot Onboarding Icon" />
              </div>
              <div className="services-text">
                <h5>HubSpot Onboarding</h5>
                <p>
                Seamless setup and configuration tailored to your business needs.
                </p>
                <Link href="/hubspot-onboarding" className="read-more">
                  read more
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 box-2">
            <div className="services-box">
              <div className="services-img">
                <Image src={servimg2} alt="HubSpot Design & Development Icon" />
              </div>
              <div className="services-text">
                <h5>HubSpot Design & Development</h5>
                <p>
                Customized templates and designs to reflect your brand.
                </p>
                <Link href="/hubspot-development" className="read-more">
                  read more
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 box-3">
            <div className="services-box">
              <div className="services-img">
                <Image src={servimg3} alt="HubSpot Automation Icon" />
              </div>
              <div className="services-text">
                <h5>HubSpot Automation</h5>
                <p>
                Workflow automation to save time and enhance efficiency.
                </p>
                <Link href="/hubspot-automation-services" className="read-more">
                  read more
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 box-4">
            <div className="services-box">
              <div className="services-img">
                <Image src={servimg4} alt="HubSpot Consulting Icon" />
              </div>
              <div className="services-text">
                <h5>HubSpot Consulting</h5>
                <p>
                Strategic advice and insights for optimal HubSpot utilization.
                </p>
                <Link href="/hubspot-consulting" className="read-more">
                  read more
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 box-5">
            <div className="services-box">
              <div className="services-img">
                <Image src={servimg5} alt="HubSpot CMS Development Icon" />
              </div>
              <div className="services-text">
                <h5>HubSpot CMS Development</h5>
                <p>
                Powerful, user-friendly websites built on the HubSpot CMS.
                </p>
                <Link href="/hubspot-cms-development" className="read-more">
                  read more
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 box-6">
            <div className="services-box">
              <div className="services-img">
                <Image src={servimg6} alt="HubSpot Migration Icon" />
              </div>
              <div className="services-text">
                <h5>HubSpot Migration</h5>
                <p>
                Effortless migration from your existing platform to HubSpot.
                </p>
                <Link href="/hubspot-migration-services" className="read-more">
                  read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HubServicesPresent;
