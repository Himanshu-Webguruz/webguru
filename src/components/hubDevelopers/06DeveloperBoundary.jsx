import React from "react";
import group1 from "../../../public/images/hubspot-developer-img/developer-service1.webp";
import group2 from "../../../public/images/hubspot-developer-img/developer-service2.webp";
import group3 from "../../../public/images/hubspot-developer-img/developer-service3.webp";
import group4 from "../../../public/images/hubspot-developer-img/developer-service4.webp";
import group5 from "../../../public/images/hubspot-developer-img/developer-service5.webp";
import Image from "next/image";
const DeveloperBoundary = () => {
  return (
    <div className="Our-Developers-section py-5 ">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main mb-4 mb-md-5 text-center">
            <h2>
              <span>Our HubSpot </span> Development Services
            </h2>
          </div>
        </div>
        <div className="row our-developer text-center align-itmes-center justify-content-center">
          <div className="col-md-4 col-12 mb-4">
            <div className="our-dev-box">
              <div className="box-img mb-4">
                <Image src={group1} alt="HubSpot API Integrations Icon" />
              </div>
              <div className="our-box-content">
                <h5>
                HubSpot API <br/>Integrations
                </h5>
                <p>
                We specialize in creating custom API integrations that automate workflows, synchronize data, and improve overall efficiency. Whether you need to integrate with Salesforce, Google Analytics, or other business applications, our developers ensure a smooth and secure connection tailored to your specific needs.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 mb-4">
            <div className="our-dev-box">
              <div className="box-img mb-4">
                <Image src={group2} alt="Custom HubSpot Solutions Icon" />
              </div>
              <div className="our-box-content">
                <h5>
                Custom HubSpot <br/>Solutions
                </h5>
                <p>
                From developing bespoke modules to implementing tailored workflows, our Hubspot application developers create solutions that align with your business goals. Our expertise allows us to build intuitive, scalable, and results-driven HubSpot features that enhance your marketing, sales, and customer service strategies.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 mb-4">
            <div className="our-dev-box">
              <div className="box-img mb-4">
                <Image src={group3} alt="HubSpot CMS Development Icon" />
              </div>
              <div className="our-box-content">
                <h5>
                HubSpot CMS <br/>Development
                </h5>
                <p>
                WebGuruz offers HubSpot CMS development services that help you create engaging, high-performance websites. Our developers craft custom themes and templates optimized for speed, usability, and SEO. By leveraging HubSpot’s CMS capabilities, we build dynamic websites that not only look great but also deliver exceptional user experiences, driving more traffic and conversions.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 mb-4">
            <div className="our-dev-box">
              <div className="box-img mb-4">
                <Image src={group4} alt="HubSpot CRM Setup & Optimization Icon" />
              </div>
              <div className="our-box-content">
                <h5>
                HubSpot CRM Setup<br/> & Optimization
                </h5>
                <p>
                Our team ensures a smooth CRM implementation tailored to your business processes. We customize fields, pipelines, and workflows to streamline data management and improve lead tracking. Additionally, we provide optimization services to enhance CRM performance, ensuring your sales and marketing teams can operate more effectively.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 mb-4">
            <div className="our-dev-box">
              <div className="box-img mb-4">
                <Image src={group5} alt="Marketing Automation with HubSpot Icon" />
              </div>
              <div className="our-box-content">
                <h5>
                Marketing Automation <br/>with HubSpot
                </h5>
                <p>
                We develop custom marketing automation workflows, including email campaigns, lead scoring, and segmentation. Our solutions help you deliver personalized content to the right audience at the right time, maximizing your marketing efforts and driving business growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperBoundary;
