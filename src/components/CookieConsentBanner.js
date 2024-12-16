"use client";
import React from "react";
import CookieConsent from "react-cookie-consent";
import Link from "next/link";
import Cookies from "js-cookie";

const CookieConsentBanner = () => {
  const handleAccept = () => {
    const consentData = {
      consentId: generateUniqueId(),
      consent: "yes",
      necessary: "yes",
      functional: "yes",
      analytics: "yes",
      performance: "yes",
      advertisement: "yes",
    //   timestamp: new Date().toISOString(),
    };

    // Convert the consent data to a plain key-value string
    const consentString = `consentId:${consentData.consentId},consent:${consentData.consent},necessary:${consentData.necessary},functional:${consentData.functional},analytics:${consentData.analytics},performance:${consentData.performance},advertisement:${consentData.advertisement}`;

    // Store consent details in a cookie (for 1 days)
    Cookies.set("myCookie", consentString, { expires: 1 });

    // Optionally, store in localStorage (can be accessed later in JavaScript)
    localStorage.setItem("userConsent", consentString);


  };

  const generateUniqueId = () => {
    return Math.random().toString(36).substring(2, 106);
  };

  return (
    <CookieConsent
      location="bottom"
      buttonText="OK"
      cookieName="myCookie"
      style={{ background: "#000", color: "#FFF" }}
      buttonStyle={{
        backgroundColor: "#000",
        color: "#FFF",
        fontSize: "15px",
        borderRadius: "12px",
        borderColor: "#fff",
      }}
      expires={1} // Expires in 1 day
      onAccept={handleAccept}
    >
      We use cookies to make your experience better. For additional details,
      please refer to our{" "}
      <Link href="/privacy">
        <span style={{ color: "#4CAF50", textDecoration: "underline" }}>
          privacy policy
        </span>
      </Link>{" "}
      page.
    </CookieConsent>
  );
};
export default CookieConsentBanner;
