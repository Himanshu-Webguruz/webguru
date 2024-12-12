import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const HubOnboardForm = () => {
  return (
    <>
      <section
        className="ppcbannerservice hub-onboard-form py-5"
        id="onboard-form"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              <h2 className="color-wt">
                Achieve More with <strong>WebGuruz’s HubSpot Expertise</strong>
              </h2>
              <p className="color-wt">
                WebGuruz combines technical proficiency and strategic insights
                to set your business up for success with HubSpot. Whether you&apos;re
                new to the platform or looking to enhance your existing setup,
                our experienced team will guide you every step of the way. We
                take pride in helping businesses unlock their potential through
                personalized onboarding solutions.
              </p>
            </div>
            <div className="col-sm-6 col-xs-12 formppc hub-ranking">
              {/* <HubspotForm /> */}
              <WebdevForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HubOnboardForm;
