import React from "react";
import cmsmigration1 from "../../../public/images/Hubspotcmsimages/cms-migration-1.webp";
import cmsmigration2 from "../../../public/images/Hubspotcmsimages/cms-migration-2.webp";
import cmsmigration3 from "../../../public/images/Hubspotcmsimages/cms-migration-3.webp";
import cmsmigration4 from "../../../public/images/Hubspotcmsimages/cms-migration-4.webp";
import cmsmigration5 from "../../../public/images/Hubspotcmsimages/cms-migration-5.webp";
import cmsmigration6 from "../../../public/images/Hubspotcmsimages/cms-migration-6.webp";
import Image from "next/image";

const VariousTechMigrate = () => {
  return (
    <div className="hubProcess hubProcess_cms pt-5 pb-4 pt-5 pb-4">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-3 mb-md-5">
            <h2 className="mb-2">
              <span>HubSpot CMS Migration </span>
              <br /> Services We Offer
            </h2>
            <p className="mb-4">
              Transform your website with our comprehensive HubSpot CMS
              migration services:
            </p>
          </div>
        </div>
        <div className="row process">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="process-card">
              <div className="check-icon">
                <Image src={cmsmigration1} alt="Website Migration Icon" />
              </div>
              <div className="process text">
                <h5>Full Website Migration</h5>
                <p>
                  We handle the complete migration of your website, ensuring
                  every page, image, and asset transitions smoothly.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="process-card">
              <div className="check-icon">
                <Image src={cmsmigration2} alt="SEO Migration & Optimization Icon" />
              </div>
              <div className="process text">
                <h5>SEO Migration & Optimization</h5>
                <p>
                  Maintain your search engine rankings with our SEO-focused
                  migration strategy.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="process-card">
              <div className="check-icon">
                <Image src={cmsmigration3} alt="Content & Data Migration Icon" />
              </div>
              <div className="process text">
                <h5>Content & Data Migration</h5>
                <p>
                  Preserve your valuable content and data by migrating it
                  securely and efficiently to HubSpot CMS.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="process-card">
              <div className="check-icon">
                <Image src={cmsmigration4} alt="Third-Party Integrations Icon" />
              </div>
              <div className="process text">
                <h5>Third-Party Integrations</h5>
                <p>
                  Seamlessly connect HubSpot CMS with your existing tools and
                  software for a unified experience.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="process-card">
              <div className="check-icon">
                <Image src={cmsmigration5} alt="Custom Theme Development Icon" />
              </div>
              <div className="process text">
                <h5>Custom Theme Development</h5>
                <p>
                  Our developers create custom themes that reflect your brand
                  identity and optimize user experience.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="process-card">
              <div className="check-icon">
                <Image src={cmsmigration6} alt="Support & Maintenance Icon" />
              </div>
              <div className="process text">
                <h5>Ongoing Support & Maintenance</h5>
                <p>
                  Post-migration, we offer continuous support and maintenance to
                  ensure your website stays at peak performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VariousTechMigrate;
