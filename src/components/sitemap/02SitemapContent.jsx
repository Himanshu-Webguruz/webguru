import Link from "next/link";
import React from "react";

const SitemapContent = () => {
  return (
    <div className="sitemap-content-section pt-5 pb-3 pb-md-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4>
              <Link href="/about" className="about-link">
                About
              </Link>
            </h4>
            <h4>
              <Link href="#" className="about-link">
                Services
              </Link>
            </h4>
          </div>
        </div>
        <div className="row sitemap-row">
          <div className="col-md-4 col-lg-3 col-sm-6 col-12 mb-3 mb-md-0">
            <div className="sitemap-secton-1">
              <h3>
                <Link href="/services/search-engine-optimization">Search Engine Optimization</Link>
              </h3>
              <ul className="webdevlopment-link">
                <li>
                  <Link href="/services/organic-seo">Organic SEO</Link>
                </li>
                <li>
                  <Link href="/services/local-seo">Local SEO</Link>
                </li>
                <li>
                  <Link href="/services/technical-seo">Technical SEO</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-lg-3 col-sm-6 col-12 mb-3 mb-md-0">
            <div className="sitemap-secton-1">
              <h3>
                <Link href="/services/digital-marketing">Digital Marketing</Link>
              </h3>
              <ul className="webdevlopment-link">
                <li>
                  <Link href="/services/digital-marketing">Digital Marketing Services</Link>
                </li>
                <li>
                  <Link href="/services/content-management-system">Content Management System</Link>
                </li>
                <li>
                  <Link href="/services/pay-per-click-management">Pay Per Click Management</Link>
                </li>
                <li>
                  <Link href="/services/search-engine-optimization">Search Engine Optimization</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-lg-3 col-sm-6 col-12 mb-3 mb-md-0">
            <div className="sitemap-secton-1">
              <h3>
                <Link href="/services/hubspot-development">Hubspot Development</Link>
              </h3>
              <ul className="webdevlopment-link">
                <li>
                  <Link href="hubspot-services">Hubspot Services</Link>
                </li>
                <li>
                  <Link href="/hubspot-automation-services">Hubspot Automation Services</Link>
                </li>
                <li>
                  <Link href="/hubspot-cms-migration">Hubspot CMS Migration</Link>
                </li>
                <li>
                  <Link href="/hubspot-consulting">Hubspot Consulting</Link>
                </li>
                <li>
                  <Link href="/hubspot-migration-services">Hubspot Migration Services</Link>
                </li>
                <li>
                  <Link href="/hubspot-marketing-automation">Hubspot Marketing Automation</Link>
                </li>
                <li>
                  <Link href="/hubspot-developer">Hubspot Developer</Link>
                </li>
                <li>
                  <Link href="/hubspot-onboarding">Hubspot Onboarding</Link>
                </li>
                <li>
                  <Link href="/hubspot-crm-migration">Hubspot CRM Migration</Link>
                </li>
                <li>
                  <Link href="/hubspot-cms-development">Hubspot CMS Development</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-lg-3 col-sm-6 col-12 mb-3 mb-md-0">
            <div className="sitemap-secton-1">
              <h3>
                <Link href="/services/web-development">Web Development</Link>
              </h3>
              <ul className="webdevlopment-link">
              <li>
                  <Link href="/services/web-development">Web Development Servies</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* <div className="row sitemap-row">
          <div className="col-md-4 col-lg-3 col-sm-6 col-12 mb-3 mb-md-0">
            <div className="sitemap-secton-1">
              <h3>
                <Link href="#"> Marketing</Link>
              </h3>
              <ul className="webdevlopment-link">
                <li>
                  <Link href="">ASP.NET Development</Link>
                </li>
                <li>
                  <Link href="">PHP Development</Link>
                </li>
                <li>
                  <Link href="">Ruby On Rails Development</Link>
                </li>
                <li>
                  <Link href="">Python Development</Link>
                </li>
                <li>
                  <Link href="">Java Web Development</Link>
                </li>
                <li>
                  <Link href="">Full Stack JS</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-lg-3 col-sm-6 col-12 mb-3 mb-md-0">
            <div className="sitemap-secton-1">
              <h3>
                <Link href="#">E-Commerce Development</Link>
              </h3>
              <ul className="webdevlopment-link">
                <li>
                  <Link href="">ASP.NET Development</Link>
                </li>
                <li>
                  <Link href="">PHP Development</Link>
                </li>
                <li>
                  <Link href="">Ruby On Rails Development</Link>
                </li>
                <li>
                  <Link href="">Python Development</Link>
                </li>
                <li>
                  <Link href="">Java Web Development</Link>
                </li>
                <li>
                  <Link href="">Full Stack JS</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-lg-3 col-sm-6 col-12 mb-3 mb-md-0">
            <div className="sitemap-secton-1">
              <h3>
                <Link href="#">Web Design</Link>
              </h3>
              <ul className="webdevlopment-link">
                <li>
                  <Link href="">ASP.NET Development</Link>
                </li>
                <li>
                  <Link href="">PHP Development</Link>
                </li>
                <li>
                  <Link href="">Ruby On Rails Development</Link>
                </li>
                <li>
                  <Link href="">Python Development</Link>
                </li>
                <li>
                  <Link href="">Java Web Development</Link>
                </li>
                <li>
                  <Link href="">Full Stack JS</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-lg-3 col-sm-6 col-12 mb-3 mb-md-0">
            <div className="sitemap-secton-1">
              <h3>
                <Link href="#">IT Services</Link>
              </h3>
              <ul className="webdevlopment-link">
                <li>
                  <Link href="">ASP.NET Development</Link>
                </li>
                <li>
                  <Link href="">PHP Development</Link>
                </li>
                <li>
                  <Link href="">Ruby On Rails Development</Link>
                </li>
                <li>
                  <Link href="">Python Development</Link>
                </li>
                <li>
                  <Link href="">Java Web Development</Link>
                </li>
                <li>
                  <Link href="">Full Stack JS</Link>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
        <div className="row sitemap-row sitemap-blog">
          <div className="col-md-4 col-lg-3 col-sm-6 col-12 mb-3 mb-md-0">
            <h4>
              <Link href="#">Our Portfolio</Link>
            </h4>
          </div>
          <div className="col-md-4 col-lg-3 col-sm-6 col-12 mb-2 mb-md-0">
            <h4>
              <Link href="#">Resources</Link>
            </h4>
            <div className="sitemap-resources-link">
              <ul>
                <li>
                  <Link href="/blogs">Blog</Link>
                </li>
                <li>
                  <Link href="#">Infographics</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-lg-3 col-sm-6 col-12 mb-2 mb-md-0">
            <h4>
              <Link href="">Join Us</Link>
            </h4>
            <div className="sitemap-resources-link">
              <ul>
                <li>
                  <Link href="/careers">Careers</Link>
                </li>
                <li>
                  <Link href="#">Internship Program</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-lg-3 col-sm-6 col-12">
            <h4>
              <Link href="/contact-us">Contact</Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitemapContent;
