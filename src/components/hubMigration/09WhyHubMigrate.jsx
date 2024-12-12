import Image from "next/image";
import StationIcon1 from "/public/images/hubspotmigrationimages/stationicon1.webp";
import StationIcon2 from "/public/images/hubspotmigrationimages/stationicon2.webp";
import StationIcon3 from "/public/images/hubspotmigrationimages/stationicon3.webp";
import StationIcon4 from "/public/images/hubspotmigrationimages/stationicon4.webp";
import StationIcon5 from "/public/images/hubspotmigrationimages/stationicon5.webp";
import StationIcon6 from "/public/images/hubspotmigrationimages/stationicon6.webp";
const WhyHubMigrate = () => {
  return (
    <div className="web-scalable why-hub-migration py-5">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-sm-9 col-xs-12 heading-main text-center pb-5">
            <h2>
            Our Specialties as a <span>HubSpot Migration Partner</span>
            </h2>
            
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="web-development-stations-wrap migration-wrap">
              <div className="inner-flex-statins-list">
                <Image src={StationIcon1} alt="Data Migrations Icon" />
                <h3 className="station-develop-title">
                Expertise in complex data migrations
                </h3>
               
              </div>

              <div className="inner-flex-statins-list">
                <Image
                  src={StationIcon2}
                  alt="Data Security Protocols Icon"
                />
                <h3 className="station-develop-title">
                Robust data security protocols
                </h3>
              </div>

              <div className="inner-flex-statins-list">
                <Image src={StationIcon3} alt="Workflows and Automation Icon" />
                <h3 className="station-develop-title">Tailored workflows and automation</h3>
                
              </div>

              <div className="inner-flex-statins-list">
                <Image src={StationIcon4} alt="Support and Training Icon" />
                <h3 className="station-develop-title">Comprehensive support and training</h3>
              </div>

              <div className="inner-flex-statins-list">
                <Image
                  src={StationIcon5}
                  alt="Account Managers Icon"
                />
                <h3 className="station-develop-title">
                Dedicated account managers
                </h3>
              </div>

              <div className="inner-flex-statins-list">
                <Image src={StationIcon6} alt="Scalable Solutions Icon" />
                <h3 className="station-develop-title">
                Scalable solutions for growing businesses
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyHubMigrate;
