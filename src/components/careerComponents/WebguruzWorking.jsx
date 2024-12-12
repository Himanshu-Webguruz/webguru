import React from "react";
import careersadvantageicon1 from "../../../public/images/careerimages/careers-advantage-icon-1.webp";
import careersadvantageicon2 from "../../../public/images/careerimages/careers-advantage-icon-2.webp";
import careersadvantageicon3 from "../../../public/images/careerimages/careers-advantage-icon-3.webp";
import careersadvantageicon4 from "../../../public/images/careerimages/careers-advantage-icon-4.webp";
import careersadvantageicon5 from "../../../public/images/careerimages/careers-advantage-icon-5.webp";
import careersadvantageicon6 from "../../../public/images/careerimages/careers-advantage-icon-6.webp";
import careersadvantageicon7 from "../../../public/images/careerimages/careers-advantage-icon-7.webp";
import careersadvantageicon8 from "../../../public/images/careerimages/careers-advantage-icon-8.webp";
import Image from "next/image";
const WebguruzWorking = () => {
  return (
    <div className="webguru-working-career py-5 text-center">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>
              Working with Webguruz has <br />{" "}
              <strong>numerous advantages :</strong>
            </h2>
          </div>
          <div className="col-md-6 col-12">
            <div className="webguru-working-icon-text">
              <div className="working-icon">
                <Image src={careersadvantageicon1} alt="Carrer Image 1" />
              </div>
              <div className="working-text">
                <p>
                  <span></span>Learning Without Stopping
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="webguru-working-icon-text">
              <div className="working-icon">
                <Image src={careersadvantageicon2} alt="Carrer Image 2" />
              </div>
              <div className="working-text">
                <p>
                  <span></span>
                  Bonus incentive for Referrals
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="webguru-working-icon-text">
              <div className="working-icon">
                <Image src={careersadvantageicon3} alt="Carrer Image 3" />
              </div>
              <div className="working-text">
                <p>
                  <span></span>Salary that Beats the Competition
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="webguru-working-icon-text">
              <div className="working-icon">
                <Image src={careersadvantageicon4} alt="Carrer Image 4" />
              </div>
              <div className="working-text">
                <p>
                  <span></span>Assistance & Leadership training
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="webguru-working-icon-text">
              <div className="working-icon">
                <Image src={careersadvantageicon5} alt="Carrer Image 5" />
              </div>
              <div className="working-text">
                <p>
                  <span></span>Versatile Remote Work
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="webguru-working-icon-text">
              <div className="working-icon">
                <Image src={careersadvantageicon6} alt="Carrer Image 6" />
              </div>
              <div className="working-text">
                <p>
                  <span></span>Individual Health Insurance Plans
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="webguru-working-icon-text">
              <div className="working-icon">
                <Image src={careersadvantageicon7} alt="Carrer Image 7" />
              </div>
              <div className="working-text">
                <p>
                  <span></span>Food Allowance
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="webguru-working-icon-text">
              <div className="working-icon">
                <Image src={careersadvantageicon8} alt="Carrer Image 8" />
              </div>
              <div className="working-text">
                <p>
                  <span></span>On Site Opportunity
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="career-mail-us mt-5 row">
          <div className="col-12">
            <div className="heading-mail">
              <h2>
                Unfulfilled by your current role? We&apos;re hiring bright minds!{" "}
                <br />
                <strong> Let&apos;s talk possibilities.</strong>
              </h2>

              <a
                href="mailto:info@webguruz.in"
                target="_blank"
                rel="noopener noreferrer"
                className="explore-btn"
              >
                email us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebguruzWorking;
