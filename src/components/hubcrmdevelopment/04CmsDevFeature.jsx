import React from "react";
import features1 from '../../../public/images/hubspotcmsdevimg/cms-dev-feat1.webp'
import features2 from '../../../public/images/hubspotcmsdevimg/cms-dev-feat2.webp'
import features3 from '../../../public/images/hubspotcmsdevimg/cms-dev-feat3.webp'
import features4 from '../../../public/images/hubspotcmsdevimg/cms-dev-feat4.webp'
import features5 from '../../../public/images/hubspotcmsdevimg/cms-dev-feat5.webp'
import features6 from '../../../public/images/hubspotcmsdevimg/cms-dev-feat6.webp'
import features7 from '../../../public/images/hubspotcmsdevimg/cms-dev-feat7.webp'
import features8 from '../../../public/images/hubspotcmsdevimg/cms-dev-feat8.webp'
import Image from "next/image";
const CmsDevFeature = () => {
  return (
    <div className="feature-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center">
            <h2 className="mb-5">
              <span>Features that Streamline </span> Website Management & <br/>Deliver Exceptional User Experiences
            </h2>
          </div>
        </div>
        <div className="row feature">
          <div className="col-lg-3 col-md-4 col-sm-6 text-center">
            <div className="feature-card">
              <div className="card-img">
                <Image src={features1} alt="Drag-and-Drop Editor Icon" />
              </div>
              <div className="feature text">
                <h6>Drag-and-Drop Editor</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 text-center">
            <div className="feature-card">
              <div className="card-img">
                <Image src={features2} alt="SEO Recommendations Icon" />
              </div>
              <div className="feature text">
                <h6>SEO Recommendations</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 text-center">
            <div className="feature-card">
              <div className="card-img">
                <Image src={features3} alt="Mobile Optimization Icon" />
              </div>
              <div className="feature text">
                <h6>Mobile Optimization</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 text-center">
            <div className="feature-card">
              <div className="card-img">
                <Image src={features4} alt="Content Personalization Icon" />
              </div>
              <div className="feature text">
                <h6>Content Personalization</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 text-center">
            <div className="feature-card">
              <div className="card-img">
                <Image src={features5} alt="Robust Security Icon" />
              </div>
              <div className="feature text">
                <h6>Robust Security</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 text-center">
            <div className="feature-card">
              <div className="card-img">
                <Image src={features6} alt="Multi-Language Support Icon" />
              </div>
              <div className="feature text">
                <h6>Multi-Language Support</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 text-center">
            <div className="feature-card">
              <div className="card-img">
                <Image src={features7} alt="Customizable Templates Icon" />
              </div>
              <div className="feature text">
                <h6>Customizable Templates</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 text-center">
            <div className="feature-card">
              <div className="card-img">
                <Image src={features8} alt="Integration with HubSpot CRM Icon" />
              </div>
              <div className="feature text">
                <h6>Integration with HubSpot CRM</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CmsDevFeature;
