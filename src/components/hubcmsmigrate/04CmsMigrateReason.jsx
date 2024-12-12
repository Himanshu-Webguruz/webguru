import React from "react";
import cmssol1 from "../../../public/images/Hubspotcmsimages/solution.webp";
import cmssol2 from "../../../public/images/Hubspotcmsimages/cms-sol2.webp";
import cmssol3 from "../../../public/images/Hubspotcmsimages/cms-sol3.webp";
import cmssol4 from "../../../public/images/Hubspotcmsimages/cms-sol4.webp";
import cmssol5 from "../../../public/images/Hubspotcmsimages/cms-sol5.webp";
import cmssol6 from "../../../public/images/Hubspotcmsimages/cms-sol6.webp";
import Image from "next/image";
const CmsMigrateReason = () => {
  return (
    <div className="HubSpot-cms py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-3">
            <h2>
              Why Migrate Your Website to <span>HubSpot CMS ?</span>
            </h2>
            <p>
              Unlock a world of possibilities with HubSpot CMS. Migrating to
              HubSpot’s platform ensures a seamless integration of marketing,
              sales, and customer experience, enhancing your online presence.
            </p>
          </div>
        </div>
        <div className="row cms-migration">
          <div className="col-lg-4 col-md-6">
            <div className="cms-card">
              <div className="cms-img">
                <Image src={cmssol1} alt="All-in-One Solution Icon" />
              </div>
              <h5>All-in-One Solution</h5>
              <p>
                HubSpot CMS combines website hosting, SEO tools, and marketing
                automation under one roof, eliminating the need for multiple
                platforms.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="cms-card">
              <div className="cms-img">
                <Image src={cmssol2} alt="Security Icon" />
              </div>
              <h5>Enhanced Security</h5>
              <p>
                With built-in SSL, web application firewall (WAF), and automatic
                updates, your website remains secure and up-to-date.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="cms-card">
              <div className="cms-img">
                <Image src={cmssol3} alt="Superior Performance Icon" />
              </div>
              <h5>Superior Performance</h5>
              <p>
                HubSpot CMS offers fast load times and optimal performance,
                improving user experience and search engine rankings.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="cms-card">
              <div className="cms-img">
                <Image src={cmssol4} alt="Content Delivery Icon" />
              </div>
              <h5>Personalized Content Delivery</h5>
              <p>
                Leverage smart content and dynamic personalization to deliver
                tailored experiences to your audience.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="cms-card">
              <div className="cms-img">
                <Image src={cmssol5} alt="Analytics & Reporting Icon" />
              </div>
              <h5>Advanced Analytics & Reporting</h5>
              <p>
                Gain actionable insights with HubSpot’s advanced reporting
                tools, helping you refine your strategies.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="cms-card">
              <div className="cms-img">
                <Image src={cmssol6} alt="Growth Icon" />
              </div>
              <h5>Scalable for Growth</h5>
              <p>
                HubSpot CMS grows with your business, allowing for seamless
                scalability and upgrades.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CmsMigrateReason;
