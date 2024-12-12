import React from "react";
import Image from "next/image";
import system1 from "../../../public/images/hubSpot-marketing-autoimg/market-auto1.webp";
import system2 from "../../../public/images/hubSpot-marketing-autoimg/market-auto2.webp";
import system3 from "../../../public/images/hubSpot-marketing-autoimg/market-auto3.webp";
import system4 from "../../../public/images/hubSpot-marketing-autoimg/market-auto4.webp";
import system5 from "../../../public/images/hubSpot-marketing-autoimg/market-auto5.webp";
import system6 from "../../../public/images/hubSpot-marketing-autoimg/market-auto6.webp";
const NewAutomateProcess = () => {
  return (
    <div className="automation-section newhubprocess-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-12 mx-auto heading-main text-center mb-3 mb-md-5">
            <h2>
              <span>Our Hubspot Marketing </span> Automation Process
            </h2>
          </div>
        </div>
        <div className="row automation-row">
          <div className="col-md-4 col-sm-6 col-12 mb-4 ">
            <div className="newprocess-card text-center">
              <div className="autoimg">
                <Image src={system1} alt="Discovery and Consultation Icon" />
              </div>
              <div className="auto-text">
                <h5>Discovery and Consultation</h5>
                <p>
                  We take the time to understand your goals, challenges, and
                  target audience to ensure we align our strategy with your
                  vision.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-12 mb-4 ">
            <div className="newprocess-card text-center">
              <div className="autoimg">
                <Image src={system2} alt="Strategy Development Icon" />
              </div>
              <div className="auto-text">
                <h5>Strategy Development</h5>
                <p>
                  With a clear understanding of your business, we design a
                  customized automation strategy that aligns with your
                  objectives.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-12 mb-4 ">
            <div className="newprocess-card text-center">
              <div className="autoimg">
                <Image src={system3} alt="Platform Setup Icon" />
              </div>
              <div className="auto-text">
                <h5>Platform Setup</h5>
                <p>
                  We configure your HubSpot platform to suit your existing
                  systems and marketing workflows. This includes setting up your
                  CRM, email templates, analytics tools, and any third-party
                  integrations to create a cohesive ecosystem.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-12 mb-4 ">
            <div className="newprocess-card text-center">
              <div className="autoimg">
                <Image src={system4} alt="Workflow Design Icon" />
              </div>
              <div className="auto-text">
                <h5>Workflow Design</h5>
                <p>
                  We create detailed campaigns, workflows, and triggers that
                  automate repetitive tasks while delivering a personalized
                  customer experience.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-12 mb-4 ">
            <div className="newprocess-card text-center">
              <div className="autoimg">
                <Image src={system5} alt="Testing and Optimization Icon" />
              </div>
              <div className="auto-text">
                <h5>Testing and Optimization</h5>
                <p>
                  We analyze every aspect of your workflows and campaigns to
                  ensure they are error-free and delivering the desired results.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-12 mb-4 ">
            <div className="newprocess-card text-center">
              <div className="autoimg">
                <Image src={system6} alt="Training and Support Icon" />
              </div>
              <div className="auto-text">
                <h5>Training and Support</h5>
                <p>
                  We provide comprehensive training sessions and ongoing support
                  to ensure your staff is confident in using HubSpot tools
                  effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewAutomateProcess;
