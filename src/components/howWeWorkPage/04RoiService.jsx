import Image from "next/image";


import abtesting from "../../../public/images/howworkimages/ROI-icon-3.webp"
import competitor from "../../../public/images/howworkimages/ROI-icon-img-1.webp"
import digitalmarketing from "../../../public/images/howworkimages/ROI-icon-img-4.webp"
import roi from "../../../public/images/howworkimages/ROI-icon-img-2.webp"


const services = [
  {
    src: competitor,
    title: "Dedicated teams",
    description:
      "You are given a Product Manager, Tech Lead, Developers and a UX Specialist.",
      alt:'Competitor Analysis Icon'
  },
  {
    src: roi,
    title: "Dedicated teams",
    description:
      "You are given a Product Manager, Tech Lead, Developers and a UX Specialist.",
       alt:'ROI Icon'
  },
  {
    src: abtesting,
    title: "Dedicated teams",
    description:
      "You are given a Product Manager, Tech Lead, Developers and a UX Specialist.",
       alt:'A/B Testing Icon'
  },
  {
    src: digitalmarketing,
    title: "Dedicated teams",
    description:
      "You are given a Product Manager, Tech Lead, Developers and a UX Specialist.",
       alt:'Ad Creation & Optimization Icon'
  },
];

const RoiService = () => {
  return (
    <>
      <section className="roi-working py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center mb-5">
              <span>Development Process</span>
              <h2>
              <strong>ROI</strong> ( Return on investment )
              </h2>
            </div>
          </div>
          <div className="row">
            {services.map((service, index) => (
              <div key={index} className="col-sm-3 col-xs-12 mb-4">
                <div className="roi-cards ">
                  <div className="roi-icon">
                  <Image src={service.src} alt={service.title} />
                    </div>
                  <h5>{service.title}</h5>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default RoiService;
