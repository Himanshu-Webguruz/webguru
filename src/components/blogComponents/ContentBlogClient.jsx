"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logowhite from "/public/images/singleblogimages/logo-wht.svg";
import system from "/public/images/singleblogimages/systm.svg";
import crossarow from "/public/images/singleblogimages/crossarow.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  faXTwitter,
  faLinkedin,
  faFacebook,
  faWhatsapp,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

const ContentBlogClient = ({ post, categoryLinks }) => {
  const [activeSection, setActiveSection] = useState(null);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const shareUrl = typeof window !== "undefined" ? window.location.href : ""; // Get current URL
  const title = post.title.rendered;

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(shareUrl)
        .then(() => {
          setTooltipVisible(true);
          setTimeout(() => setTooltipVisible(false), 2000);
        })
        .catch((error) => {
          console.error("Failed to copy link: ", error);
          alert("Failed to copy link.");
        });
    }
  };
  const scrollToShareSection = () => {
    const section = document.querySelector(".social-icon"); // Target the social section
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "center", // Align it at the top of the viewport
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      {
        post.acf.post_inner_details.length > 0 &&
          post.acf.post_inner_details.forEach((detail, index) => {
            const section = document.getElementById(`section-${index}`);
            if (section) {
              const rect = section.getBoundingClientRect();
              if (rect.top <= 120 && rect.bottom >= 30) {
                setActiveSection(index);
              }
            }
          });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [post.acf.post_inner_details]);

  const scrollToSection = (index) => {
    const section = document.getElementById(`section-${index}`);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 90, // Adjust scroll position if needed
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="row">
      <div className="col-lg-9 col-md-8 col-12" key={post._id}>
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main text-start ">
            <Image
              src={post.yoast_head_json.schema["@graph"][0].thumbnailUrl}
              width={825}
              height={431}
              alt="singleblog"
              priority
            />
            <h1 className="mb-3 inner-heading">{post.title.rendered}</h1>
            <div className="published-main pt-4 d-flex align-items-center justify-content-between">
              <ul className="d-flex align-items-center">
                <li className="me-2 pe-2">
                  <span>Published on: </span>
                  {post.yoast_head_json.schema["@graph"][0].datePublished.slice(
                    0,
                    10
                  )}
                </li>
              </ul>
              <span
                className="social-icons share-span"
                onClick={scrollToShareSection}
              >
                Share this article
              </span>
            </div>
          </div>
        </div>
        {post.acf.post_inner_details.length > 0 && (
          <div className="inner-description">
            {post.acf.post_inner_details.map((detail, index) => (
              <div key={index}>
                {detail.heading && (
                  <h4 id={`section-${index}`}>{detail.heading}</h4>
                )}
                <div dangerouslySetInnerHTML={{ __html: detail.description }} />
              </div>
            ))}
          </div>
        )}
        <section className="blog-single-banner mb-5">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-xs-12">
                <div className="singleblog-img-content d-flex align-items-center">
                  <Image src={logowhite} alt="Logo" />
                  <div className="peraph-lists">
                    {post?.acf?.bottom_form?.bottom_form_data?.length > 0 ? (
                      post.acf.bottom_form.bottom_form_data.map(
                        (detail, index) => (
                          <span key={index} className="detail-text">
                            {detail.bottom_form_text}
                          </span>
                        )
                      )
                    ) : (
                      <h3>
                        Bring Your Brand to Life With
                        <span>Innersive & Interactive Storytelling</span>
                      </h3>
                    )}
                  </div>
                  <Image src={crossarow} alt="Cross Arrow" />
                  <Image src={system} alt="System" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="blog-single-categories">
          <h4>Tags</h4>
          <ul className="d-flex flex-wrap text-capitalize single-cat">
            {Object.keys(categoryLinks).map((category) => (
              <li key={category}>
                <Link href={categoryLinks[category]}>
                  {category.replace(/-/g, " ")}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="social-icon">
          <h4>Share:</h4>
          <ul className="icon-list">
            <li>
              <button onClick={handleCopyLink} className="copy-link-btn">
                <FontAwesomeIcon
                  icon={faCopy}
                  height={20}
                  aria-label="Copy Link"
                />
              </button>
              {tooltipVisible && (
                <div className="tooltip">
                  <span>Link copied!</span>
                </div>
              )}
            </li>
            <li>
              <FacebookShareButton url={shareUrl} quote={title}>
                <FontAwesomeIcon
                  icon={faFacebook}
                  height={20}
                  aria-label="Facebook"
                />
              </FacebookShareButton>
            </li>
            <li>
              <LinkedinShareButton url={shareUrl} title={title}>
                <FontAwesomeIcon
                  icon={faLinkedin}
                  height={20}
                  aria-label="LinkedIn"
                />
              </LinkedinShareButton>
            </li>
            <li>
              <TwitterShareButton url={shareUrl} title={title}>
                <FontAwesomeIcon
                  icon={faXTwitter}
                  height={20}
                  aria-label="Twitter"
                />
              </TwitterShareButton>
            </li>
            <li>
              <PinterestShareButton
                url={shareUrl}
                media={post.yoast_head_json.schema["@graph"][0].thumbnailUrl}
              >
                <FontAwesomeIcon
                  icon={faPinterest}
                  height={20}
                  aria-label="Pinterest"
                />
              </PinterestShareButton>
            </li>
            <li>
              <WhatsappShareButton url={shareUrl} title={title}>
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  height={20}
                  aria-label="WhatsApp"
                />
              </WhatsappShareButton>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-xs-12">
        {post.acf.list_all_category && (
          <span className="tag">{post.acf.list_all_category.join(", ")}</span>
        )}

        <div className="author-card">
          <h4>Author</h4>
          <div className="author-content-img d-flex align-items-center mb-4">
            {post.yoast_head_json.schema["@graph"][4] && (
              <Image
                src={post.yoast_head_json.schema["@graph"][4].image.url}
                alt="Author"
                width={20}
                height={20}
              />
            )}

            <div className="content">
              {post.yoast_head_json.schema["@graph"][4] && (
                <h5>
                  {" "}
                  {post.yoast_head_json.schema["@graph"][4].image.caption}
                </h5>
              )}

              <p className="mb-0">Webguruz Technology Pvt. Ltd.</p>
            </div>
          </div>
          {post.yoast_head_json.schema["@graph"][4] && (
            <p>{post.yoast_head_json.schema["@graph"][4].description}</p>
          )}
        </div>
        <div className="table-content">
          <h4>Table of Contents</h4>
          <ul>
            {post.acf.post_inner_details.length > 0 && (
              <div className="inner-description">
                {post.acf.post_inner_details.map((detail, index) => (
                  <li
                    key={index}
                    className={activeSection === index ? "content-active" : ""}
                  >
                    {detail.heading && (
                      <span
                        style={{ cursor: "pointer" }} // Make it look like a link
                        onClick={() => scrollToSection(index)}
                      >
                        {detail.heading}
                      </span>
                    )}
                  </li>
                ))}
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContentBlogClient;
