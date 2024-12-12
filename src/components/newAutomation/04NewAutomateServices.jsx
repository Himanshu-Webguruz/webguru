import React from "react";
import Image from "next/image";
import afordableseoone from "../../../public/images/hubSpot-marketing-autoimg/new-market1.webp";
import afordableseotwo from "../../../public/images/hubSpot-marketing-autoimg/new-market2.webp";
import afordableseothree from "../../../public/images/hubSpot-marketing-autoimg/new-market3.webp";
import afordableseofour from "../../../public/images/hubSpot-marketing-autoimg/new-market4.webp";
import afordableseofive from "../../../public/images/hubSpot-marketing-autoimg/new-market5.webp";
import afordableseosix from "../../../public/images/hubSpot-marketing-autoimg/new-market6.webp";

const NewAutomateServices = () => {
  return (
    <>
      <section className="local-service technical-service new-automate-services py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center mb-4">
              <h2>
                <span>Comprehensive Hubspot Marketing Automation </span>
                <br /> Services We Offer
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4 col-xs-12">
              <div className="seo-card text-center p-3 mb-4">
                <div className="seoservice-icon">
                  <Image src={afordableseoone} alt="Lead Nurturing Campaigns Icon" />
                </div>
                <div className="content">
                  <h3 className="mb-3">Lead Nurturing Campaigns</h3>
                  <p>
                    Automatically guide prospects through the sales funnel with
                    personalized email campaigns and trigger-based
                    communication.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-xs-12">
              <div className="seo-card text-center p-3 mb-4">
                <div className="seoservice-icon">
                  <Image src={afordableseotwo} alt="CRM Integration and Optimization Icon" />
                </div>
                <div className="content">
                  <h3 className="mb-3">CRM Integration and Optimization</h3>
                  <p>
                    Sync your marketing efforts seamlessly with sales using
                    HubSpot CRM automation and leverage its capabilities for
                    growth.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-xs-12">
              <div className="seo-card text-center p-3 mb-4">
                <div className="seoservice-icon">
                  <Image
                    src={afordableseothree}
                    alt="Behavioral Tracking Icon"
                  />
                </div>
                <div className="content">
                  <h3 className="mb-3">Behavioral Tracking</h3>
                  <p>
                    Monitor user behavior on your website and email campaigns to
                    deliver targeted and relevant messages.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-xs-12">
              <div className="seo-card text-center p-3 mb-4">
                <div className="seoservice-icon">
                  <Image
                    src={afordableseofour}
                    alt="Social Media Management Icon"
                  />
                </div>
                <div className="content">
                  <h3 className="mb-3">Automated Social Media Management</h3>
                  <p>
                    Schedule posts, track engagement, and measure performance
                    effortlessly.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-xs-12">
              <div className="seo-card text-center p-3 mb-4">
                <div className="seoservice-icon">
                  <Image src={afordableseofive} alt="Performance Analytics Icon" />
                </div>
                <div className="content">
                  <h3 className="mb-3">Performance Analytics</h3>
                  <p>
                    Gain insights with detailed reports and dashboards to
                    measure campaign effectiveness.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-xs-12">
              <div className="seo-card text-center p-3 mb-4">
                <div className="seoservice-icon">
                  <Image src={afordableseosix} alt="Content Personalization Icon" />
                </div>
                <div className="content">
                  <h3 className="mb-3">Content Personalization</h3>
                  <p>
                    Use dynamic content strategies to create customized
                    experiences for each customer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewAutomateServices;
