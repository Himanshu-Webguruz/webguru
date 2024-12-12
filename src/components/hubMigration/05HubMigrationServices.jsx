import React from "react";
import migrate1 from "../../../public/images/hubspotmigrationimages/migration1.webp";
import migrate2 from "../../../public/images/hubspotmigrationimages/migration2.webp";
import migrate3 from "../../../public/images/hubspotmigrationimages/migration3.webp";
import migrate4 from "../../../public/images/hubspotmigrationimages/migration4.webp";
import migrate5 from "../../../public/images/hubspotmigrationimages/migration5.webp";
import migrate6 from "../../../public/images/hubspotmigrationimages/migration6.webp";
import migrate7 from "../../../public/images/hubspotmigrationimages/migration7.webp";
import migrate8 from "../../../public/images/hubspotmigrationimages/migration8.webp";
import Image from "next/image";
const HubMigrationServices = () => {
  return (
    <div className="Migration-services pt-5 pb-4">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center">
            <h2 className="mb-4">
              <span>HubSpot Migration Services </span> We Offer
            </h2>
            <p>
              We specialize in migrating data, workflows, and assets from a
              variety of platforms to HubSpot. Each migration is customized to
              ensure accuracy, continuity, and performance:
            </p>
          </div>
        </div>
        <div className="row Migration-row mt-3">
          <div className="col-xl-3 col-md-4 col-sm-6 col-12">
            <div className="Migration-card">
              <div className="card-icon d-flex align-items-center">
                <Image src={migrate2} alt="Marketo to HubSpot Migration" />
              </div>
              <div className="card-services-content">
                <div className="card text border-0">
                  <h5>Marketo to HubSpot Migration</h5>
                  <p>
                    Transfer your marketing automation data and campaigns
                    seamlessly for improved results.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-4 col-sm-6 col-12">
            <div className="Migration-card">
              <div className="card-icon d-flex align-items-center">
                <Image src={migrate7} alt="Wix to HubSpot Migration" />
              </div>
              <div className="card-services-content">
                <div className="card text border-0">
                  <h5>Wix to HubSpot Migration</h5>
                  <p>
                    Improve your site performance and marketing capabilities by
                    migrating from Wix to HubSpot.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-4 col-sm-6 col-12">
            <div className="Migration-card">
              <div className="card-icon d-flex align-items-center">
                <Image src={migrate6} alt="Salesforce to HubSpot Migration" />
              </div>
              <div className="card-services-content">
                <div className="card text border-0">
                  <h5>Salesforce to HubSpot Migration</h5>
                  <p>
                    Migrate CRM data, including contacts and opportunities, with
                    precision and accuracy.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-4 col-sm-6 col-12">
            <div className="Migration-card">
              <div className="card-icon d-flex align-items-center">
                <Image src={migrate5} alt="Bitrix24 to HubSpot Migration" />
              </div>
              <div className="card-services-content">
                <div className="card text border-0">
                  <h5>Bitrix24 to HubSpot Migration</h5>
                  <p>
                    Move your CRM and marketing data to HubSpot for a more
                    cohesive approach.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-4 col-sm-6 col-12">
            <div className="Migration-card">
              <div className="card-icon d-flex align-items-center">
                <Image src={migrate3} alt="PipeDrive to HubSpot Migration" />
              </div>
              <div className="card-services-content">
                <div className="card text border-0">
                  <h5>PipeDrive to HubSpot Migration</h5>
                  <p>
                    Transition sales pipelines and workflows smoothly, enhancing
                    your sales efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-4 col-sm-6 col-12">
            <div className="Migration-card">
              <div className="card-icon d-flex align-items-center">
                <Image src={migrate1} alt="Zoho to HubSpot Migration" />
              </div>
              <div className="card-services-content">
                <div className="card text border-0">
                  <h5>Zoho to HubSpot Migration</h5>
                  <p>
                    Ensure all customer data is migrated accurately to leverage
                    HubSpot’s powerful tools.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-4 col-sm-6 col-12">
            <div className="Migration-card">
              <div className="card-icon d-flex align-items-center">
                <Image src={migrate8} alt="WordPress to HubSpot Migration" />
              </div>
              <div className="card-services-content">
                <div className="card text border-0">
                  <h5>WordPress to HubSpot Migration</h5>
                  <p>
                    Shift your website, blogs, and pages to HubSpot’s CMS for
                    better content management.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-4 col-sm-6 col-12">
            <div className="Migration-card">
              <div className="card-icon d-flex align-items-center">
                <Image src={migrate4} alt="Zendesk to HubSpot Migration" />
              </div>
              <div className="card-services-content">
                <div className="card text border-0">
                  <h5>Zendesk to HubSpot Migration</h5>
                  <p>
                    Transition customer service data for a unified customer
                    experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HubMigrationServices;
