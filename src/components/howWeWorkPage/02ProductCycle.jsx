import React from "react";
import product1 from "../../../public/images/howworkimages/product1.webp";
import product2 from "../../../public/images/howworkimages/product2.webp";
import product3 from "../../../public/images/howworkimages/product3.webp";
import product4 from "../../../public/images/howworkimages/product4.webp";
import product5 from "../../../public/images/howworkimages/product5.webp";
import product6 from "../../../public/images/howworkimages/product6.webp";
import Image from "next/image";
import Link from "next/link";
const ProductCycle = () => {
  return (
    <>
      <section className="product-cycle py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 text-center heading-main">
              <span className="d-inline-block mb-2">Development Process</span>
              <h2 className="mb-4">
              Our <strong> Step by Step Product Cycle</strong> for Outstanding<br/> product Delivery system
              </h2>
            </div>
            <div className="col-sm-12 col-xs-12 mt-4">
              <div className="how-we-work">
                <ul>
                  <li>
                    <div className="list-wrap">
                      <div className="content-part">
                        <h3 className="mb-4">
                          <span
                            className="ez-toc-section"
                            id="Clients_Information"
                          ></span>
                          Client’s Information
                        </h3>
                        <p>
                          Every great project starts with a deep understanding.
                          In our first consultation, we take the time to learn
                          about your business goals, target audience, and
                          expectations. We ask questions, discuss ideas, and
                          gather insights to help us see the project through
                          your eyes. This stage helps establish a shared vision
                          and set clear objectives, forming a solid foundation
                          for success.
                        </p>
                        <Link href={'/'} className="explore-btn red-btn work-btn">Read More</Link>
                      </div>
                      <div className="image-part">
                        <Image src={product1} alt="Initial Consultation" />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list-wrap">
                      <div className="content-part">
                        <h3 className="mb-4">
                          <span
                            className="ez-toc-section"
                            id="What_Client_wants"
                          ></span>
                          What Client wants
                        </h3>
                        <p>
                          With a well-defined goal in place, our team dives into
                          planning. This involves creating a roadmap that
                          includes project timelines, milestones, and resources
                          needed. We outline each phase of the project,
                          assigning tasks to ensure smooth workflow and minimal
                          delays. By aligning with you on the project plan, we
                          aim for clarity and transparency before moving
                          forward.
                        </p>
                        <Link href={'/'} className="explore-btn red-btn work-btn">Read More</Link>
                      </div>
                      <div className="image-part">
                        <Image src={product2} alt="Project Planning" />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list-wrap">
                      <div className="content-part">
                        <h3 className="mb-4">
                          <span
                            className="ez-toc-section"
                            id="Work_Process"
                          ></span>
                         Work Process
                        </h3>
                        <p>
                          The design phase is where creativity meets
                          functionality. Our designers focus on creating an
                          attractive and intuitive user experience, one that
                          resonates with your brand and engages users
                          effectively. From selecting color schemes to designing
                          layouts and prototypes, every decision is geared
                          towards maximizing user satisfaction and enhancing
                          usability.
                        </p>
                        <Link href={'/'} className="explore-btn red-btn work-btn">Read More</Link>
                      </div>
                      <div className="image-part">
                        <Image
                          src={product3}
                          alt="Design and User Experience"
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list-wrap">
                      <div className="content-part">
                        <h3 className="mb-4">
                          <span
                            className="ez-toc-section"
                            id="Work_Update"
                          ></span>
                          Work Update
                        </h3>
                        <p>
                          In the development stage, our tech team brings the
                          design to life. Using the latest frameworks and coding
                          standards, we create responsive and scalable
                          applications. Whether it&apos;s a website, app, or
                          complex software, we integrate key features to ensure
                          high performance. Our developers work closely with
                          designers and testers, maintaining code quality and
                          adhering to project timelines.
                        </p>
                        <Link href={'/'} className="explore-btn red-btn work-btn">Read More</Link>
                      </div>
                      <div className="image-part">
                        <Image
                          src={product4}
                          alt="Development and Integration"
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list-wrap">
                      <div className="content-part">
                        <h3 className="mb-4">
                          <span
                            className="ez-toc-section"
                            id="Timely_feedback"
                          ></span>
                          Timely feedback
                        </h3>
                        <p>
                          Quality is non-negotiable. In this phase, we
                          rigorously test every aspect of the project, from
                          functionality and security to user experience. Using
                          both automated and manual testing methods, our QA team
                          identifies and resolves potential issues. This ensures
                          that the final product meets our standards and
                          performs flawlessly on launch.
                        </p>
                        <Link href={'/'} className="explore-btn red-btn work-btn">Read More</Link>
                      </div>
                      <div className="image-part">
                        <Image
                          src={product5}
                          alt="Quality Assurance and Testing"
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list-wrap">
                      <div className="content-part">
                        <h3 className="mb-4">
                          <span
                            className="ez-toc-section"
                            id="Product_Delivery"
                          ></span>
                          Product Delivery
                        </h3>
                        <p>
                          After final approvals, it&apos;s time for the big
                          reveal. We handle the deployment process carefully to
                          ensure a smooth launch. Even after the project goes
                          live, our commitment continues with ongoing support.
                          We provide regular updates, monitor performance, and
                          address any issues that may arise, helping you achieve
                          long-term success.
                        </p>
                        <Link href={'/'} className="explore-btn red-btn work-btn">Read More</Link>
                      </div>
                      <div className="image-part">
                        <Image
                          src={product6}
                          alt="Launch and Post-Delivery Support"
                        />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductCycle;
