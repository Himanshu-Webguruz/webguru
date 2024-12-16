"use client";
import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import logo from "../../public/images/header-logo-one.webp";
import Link from "next/link";
import Image from "next/image";
import ModalForm from "./PopUpForms/GetQuoteForm";
import loc1 from "../../public/images/loc-1.svg";
import usa from "../../public/usa.png"

const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeService, setActiveService] = useState("");
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const aboutDropdownRef = useRef(null);

  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);
  const resourcesDropdownRef = useRef(null);
  useEffect(() => {
    const handleMouseEnter = (setDropdown) => {
      if (window.innerWidth > 991) {
        setDropdown(true);
      }
    };

    const handleMouseLeave = (setDropdown) => {
      if (window.innerWidth > 991) {
        setDropdown(false);
      }
    };

    const resourcesDropdownElement = resourcesDropdownRef.current;

    if (resourcesDropdownElement) {
      resourcesDropdownElement.addEventListener("mouseenter", () =>
        handleMouseEnter(setIsResourcesDropdownOpen)
      );
      resourcesDropdownElement.addEventListener("mouseleave", () =>
        handleMouseLeave(setIsResourcesDropdownOpen)
      );
    }

    return () => {
      if (resourcesDropdownElement) {
        resourcesDropdownElement.removeEventListener("mouseenter", () =>
          handleMouseEnter(setIsResourcesDropdownOpen)
        );
        resourcesDropdownElement.removeEventListener("mouseleave", () =>
          handleMouseLeave(setIsResourcesDropdownOpen)
        );
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (pathname && pathname.includes("/services")) {
      setActiveService(pathname);
    } else if (pathname && pathname.includes("/blogs")) {
      setActiveService("/blogs");
    } else if (pathname && pathname.includes("/infographics")) {
      setActiveService("/infographics");
    } else {
      setActiveService("");
    }
  }, [pathname]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
    setIsAboutDropdownOpen(false);
  };

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  // Close dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      if (
        aboutDropdownRef.current &&
        !aboutDropdownRef.current.contains(event.target)
      ) {
        setIsAboutDropdownOpen(false);
      }
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  // Handle hover effect on desktop
  useEffect(() => {
    const handleMouseEnter = (setDropdown) => {
      if (window.innerWidth > 991) {
        setDropdown(true);
      }
    };

    const handleMouseLeave = (setDropdown) => {
      if (window.innerWidth > 991) {
        setDropdown(false);
      }
    };

    const dropdownElement = dropdownRef.current;
    const aboutDropdownElement = aboutDropdownRef.current;

    if (dropdownElement) {
      dropdownElement.addEventListener("mouseenter", () =>
        handleMouseEnter(setIsDropdownOpen)
      );
      dropdownElement.addEventListener("mouseleave", () =>
        handleMouseLeave(setIsDropdownOpen)
      );
    }

    if (aboutDropdownElement) {
      aboutDropdownElement.addEventListener("mouseenter", () =>
        handleMouseEnter(setIsAboutDropdownOpen)
      );
      aboutDropdownElement.addEventListener("mouseleave", () =>
        handleMouseLeave(setIsAboutDropdownOpen)
      );
    }

    return () => {
      if (dropdownElement) {
        dropdownElement.removeEventListener("mouseenter", () =>
          handleMouseEnter(setIsDropdownOpen)
        );
        dropdownElement.removeEventListener("mouseleave", () =>
          handleMouseLeave(setIsDropdownOpen)
        );
      }
      if (aboutDropdownElement) {
        aboutDropdownElement.removeEventListener("mouseenter", () =>
          handleMouseEnter(setIsAboutDropdownOpen)
        );
        aboutDropdownElement.removeEventListener("mouseleave", () =>
          handleMouseLeave(setIsAboutDropdownOpen)
        );
      }
    };
  }, []);

  return (
    <header className={`hdrtopsst ${isScrolled ? "onScroll" : ""}`}>
      <section className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-sm-2 col-xs-12"></div>
            <div className="col-sm-10 col-xs-12 contact-right">
              <ul>
                <li>
                  <span className="loc-icon">
                    <Image src={usa} alt="India-Icon" width={5} height={5} />
                  </span>
                  <Link href="tel:+1 (213) 715-5368">
                  +1 (213) 715-5368 (Sales)
                    
                  </Link>
                </li>
                <li>
                  <Link href="tel:(+91) 959 201 6444">
                    <span className="loc-icon">
                      <Image src={loc1} alt="India-Icon" width={5} height={5} />
                    </span>
                    (+91) 708 723 3361 (Sales)
                   
                  </Link>
                </li>
                <li>
                  <ModalForm />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <nav className="navbar navbar-expand-lg navigation-main" ref={menuRef}>
        <div className="container">
          <Link className="navbar-brand" href="/">
            <Image src={logo} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-controls="navbarScroll"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse menu ${
              isMenuOpen ? "show" : ""
            }`}
            id="navbarScroll"
          >
            <ul className="navbar-nav me-0 ms-auto navbar-nav-scroll d-flex align-items-center">
              <li
                className="px-3 py-2 sub-menu"
                onClick={(e) => {
                  if (window.innerWidth <= 991) {
                    e.preventDefault();
                    setIsAboutDropdownOpen(!isAboutDropdownOpen);
                  }
                }}
                ref={aboutDropdownRef}
              >
                <Link href="#" onClick={(e) => e.preventDefault()}>
                  About
                </Link>
                {isAboutDropdownOpen && (
                  <ul className="dropdown-content">
                    <div className="row">
                      <div className="col">
                        {[
                          "/about",
                          "/how-we-work",
                          "/mvp-development",
                          "/awards-and-recognition",
                          "/agile-software-development",
                          "/leadership-team",
                          "/client-testimonials",
                        ].map((aboutLink, index) => (
                          <li
                            key={index}
                            onClick={() => setIsAboutDropdownOpen(false)}
                            className={
                              pathname === aboutLink ? "active-service" : ""
                            }
                          >
                            <Link href={aboutLink} onClick={closeMenu}>
                              {aboutLink === "/about"
                                ? "Our Company"
                                : aboutLink === "/mvp-development"
                                ? "Startup and MVP"
                                : aboutLink
                                    .split("/")
                                    .pop()
                                    .replace(/-/g, " ")
                                    .replace(/\b\w/g, (char) =>
                                      char.toUpperCase()
                                    )}
                            </Link>
                          </li>
                        ))}
                      </div>
                    </div>
                  </ul>
                )}
              </li>
              <li
                className="px-3 py-2 sub-menu"
                onClick={(e) => {
                  if (window.innerWidth <= 991) {
                    e.preventDefault();
                    toggleDropdown();
                  }
                }}
                ref={dropdownRef}
              >
                <Link href="#" onClick={(e) => e.preventDefault()}>
                  Services
                </Link>
                {isDropdownOpen && (
                  <ul className="dropdown-content">
                    <div className="row">
                      <div className="col">
                        {[
                          "/services/digital-marketing",
                          "/services/web-development",
                          "/services/hubspot-development",
                          "/services/content-management-system",
                          "/services/pay-per-click-management",
                          "/services/search-engine-optimization",
                          "/services/organic-seo",
                          "/services/local-seo",
                          "/services/technical-seo",
                          "/seo-packages", // Include your new route here
                        ].map((service, index) => {
                          // Extract and format the label
                          const parts = service.split("/");
                          const label =
                            parts.length > 2
                              ? parts[2]
                                  .replace(/-/g, " ")
                                  .replace(/\b\w/g, (char) =>
                                    char.toUpperCase()
                                  )
                              : parts[1]
                                  .replace(/-/g, " ")
                                  .replace(/\b\w/g, (char) =>
                                    char.toUpperCase()
                                  );

                          return (
                            <li
                              key={index}
                              onClick={() => setIsDropdownOpen(false)}
                              className={
                                activeService === service
                                  ? "active-service"
                                  : ""
                              }
                            >
                              <Link href={service} onClick={closeMenu}>
                                {label}
                              </Link>
                            </li>
                          );
                        })}
                      </div>
                    </div>
                  </ul>
                )}
              </li>
              <li className="px-3 py-2">
                <Link href="/" onClick={closeMenu}>
                  Our Portfolio
                </Link>
              </li>
              <li
                className="resources-class px-3 py-2 sub-menu"
                onClick={(e) => {
                  if (window.innerWidth <= 991) {
                    e.preventDefault();
                    setIsResourcesDropdownOpen(!isResourcesDropdownOpen);
                  }
                }}
                ref={resourcesDropdownRef}
              >
                <Link href="#" onClick={(e) => e.preventDefault()}>
                  Resources
                </Link>
                {isResourcesDropdownOpen && (
                  <ul className="dropdown-content">
                    <div className="row">
                      <div className="col">
                        {[
                          { path: "/blogs", label: "Blogs" },
                          { path: "/infographics", label: "Infographics" },
                        ].map(({ path, label }, index) => (
                          <li
                            key={index}
                            className={
                              activeService === path ? "active-service" : ""
                            }
                            onClick={() => setIsResourcesDropdownOpen(false)}
                          >
                            <Link href={path} onClick={closeMenu}>
                              {label}
                            </Link>
                          </li>
                        ))}
                      </div>
                    </div>
                  </ul>
                )}
              </li>

              <li className="px-3 py-2">
                <Link href="/careers" onClick={closeMenu}>
                  Join Us
                </Link>
              </li>
              <li className="contactMain px-2">
                <Link href="/contact-us" onClick={closeMenu}>
                  <span>Contact Us</span>
                </Link>
              </li>
              {/* <li className="contactMain bookAppoint px-2">
                <Link href="/book-an-appointment" onClick={closeMenu}>
                  <span>Book An Appointment</span>
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
