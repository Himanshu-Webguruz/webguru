import React from "react";

const DeveloperTech = () => {
  return (
    <div className="devTechnology-section pt-5 pb-3 pb-md-5 ">
      <div className="container">
        <div className="row">
          <div className=" col-12 heading-main mb-4 text-center">
            <h2>
             
              <span>Technology Stack</span> We Excel In
            </h2>
            <p>
            Our Hubspot application developers harness the power of cutting-edge technologies to craft robust, scalable, and future-ready solutions tailored to meet diverse business needs. By staying up-to-date with the latest advancements in development frameworks, APIs, and design tools, we ensure that every project we deliver is built on a foundation of innovation and efficiency. This approach not only enhances performance but also provides the flexibility needed to scale and adapt as your business grows and evolves in an ever-changing digital landscape.
            </p>
          </div>
        </div>
        <div className="row technology-card">
          {/* Frameworks */}
          <div className="col-md-4 col-12 mb-4 mb-md-0">
            <div className="tech-one">
              <h5>Frameworks</h5>
              <ul>
                <li>React.js</li>
                <li>Angular</li>
                <li>Vue.js</li>
                <li>Node.js</li>
                <li>Laravel</li>
                <li>Django</li>
              </ul>
            </div>
          </div>

          {/* APIs */}
          <div className="col-md-4 col-12 mb-4 mb-md-0">
            <div className="tech-one">
              <h5>APIs</h5>
              <ul>
                <li>HubSpot API</li>
                <li>REST API</li>
                <li>GraphQL</li>
                <li>Zapier</li>
                <li>Salesforce API</li>
                <li>Google API</li>
              </ul>
            </div>
          </div>

          {/* Design & UI */}
          <div className="col-md-4 col-12 mb-4 mb-md-0">
            <div className="tech-one">
              <h5>Design & UI</h5>
              <ul>
                <li>Figma</li>
                <li>Adobe XD</li>
                <li>Sketch</li>
                <li>Bootstrap</li>
                <li>Tailwind CSS</li>
                <li>Material UI</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperTech;
