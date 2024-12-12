"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

const categoryLinks = {
  "artificial-intelligence": "/categories/artificial-intelligence",
  blogging: "/categories/blogging",
  "brand-marketing": "/categories/brand-marketing",
  "content-marketing": "/categories/content-marketing",
  "digital-marketing": "/categories/digital-marketing",
  ecommerce: "/categories/ecommerce",
  "email-marketing": "/categories/email-marketing",
  "facebook-marketing": "/categories/facebook-marketing",
  frameworks: "/categories/frameworks",
  "full-stack-javascript-development":
    "/categories/full-stack-javascript-development",
  "google-remarketing": "/categories/google-remarketing",
  hubspot: "/categories/hubspot",
  infographic: "/categories/infographic",
  infusionsoft: "/categories/infusionsoft",
  "internet-marketing": "/categories/internet-marketing",
  "ios-app": "/categories/ios-app",
  "iphone-app-development": "/categories/iphone-app-development",
  "java-development": "/categories/java-development",
  joomla: "/categories/joomla",
  "linkedin-marketing": "/categories/linkedin-marketing",
  "logo-design": "/categories/logo-design",
  magento: "/categories/magento",
  "main-post": "/categories/main-post",
  "mobile-application-development":
    "/categories/mobile-application-development",
  "office-culture": "/categories/office-culture",
  "online-reputation-management": "/categories/online-reputation-management",
  orm: "/categories/orm",
  "paid-marketing": "/categories/paid-marketing",
  php: "/categories/php",
  seo: "/categories/seo",
  shopify: "/categories/shopify",
  "social-media-marketing": "/categories/social-media-marketing",
  "titanium-development": "/categories/titanium-development",
  "web-application-development": "/categories/web-application-development",
  "web-design": "/categories/web-design",
  "web-developments": "/categories/web-developments",
  wordpress: "/categories/wordpress",
};

const AllPost = ({ posts, currentPage, totalPages }) => {
  
  const router = useRouter();

  const handlePageChange = (newPage) => {
    router.push(newPage === 1 ? "/blogs" : `/blogs/page/${newPage}/`);
  };

  const pageButtons = 5;
  const halfButtons = Math.floor(pageButtons / 2);
  // const startPage = Math.max(1, currentPage - halfButtons);
  const endPage = Math.min(totalPages, currentPage + halfButtons);
  const adjustedStartPage = Math.max(1, endPage - pageButtons + 1);
  const adjustedEndPage = Math.min(
    totalPages,
    adjustedStartPage + pageButtons - 1
  );

  return (
    <>
      <div className="row bog-post-main">
        <div className="col-sm-12 col-xs-12 heading-main mb-4">
          <h2>
            Latest <span>Posts</span>
          </h2>
        </div>
        <div className="col-sm-8 col-xs-12 bog-post bottom">
          {posts.length > 0 ? (
            posts.map((post, index) => {
              const thumbnailUrl =
                post.yoast_head_json.schema["@graph"][0].thumbnailUrl;
              const hasImage = !!thumbnailUrl;
              return (
                
                <div
                  key={index}
                  className={`blog-image-content ${
                    !hasImage ? "no-image" : ""
                  }`}
                >
                 
                  {hasImage && (
                    <div className="image">
                      <Image
                        src={thumbnailUrl}
                        alt={post.title.rendered}
                        width={700}
                        height={340}
                      />
                    </div>
                  )}
                  <div className="content">
                    <span className="technology text-capitalize">
                      {post.acf.list_all_category}
                    </span>
                    <h4>
                      <Link href={`/blog/${post.slug}`}>
                        {post.title.rendered}
                      </Link>
                    </h4>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.excerpt.rendered
                          .replace(/<p>/g, "")
                          .replace(/<\/p>/g, ""),
                      }}
                    />
                    <span className="name">
                      {post.yoast_head_json.schema["@graph"][4]?.image
                        ?.caption || "No caption available"}
                      <span className="date">
                        {post.yoast_head_json.schema[
                          "@graph"
                        ][0].datePublished.slice(0, 10)}
                      </span>
                    </span>
                    <Link href={`/blog/${post.slug}`} className="link-btn about--btn">
                       Read More      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="arrow-right"
                        className="svg-inline--fa fa-arrow-right ps-1"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                        ></path>
                      </svg>
                      </Link>
                  </div>
                  
                </div>
              );
            })
          ) : (
            <p>No matching posts found</p>
          )}
        </div>

        <div className="col-sm-4 col-xs-12">
          <div className="categories-main">
            <SearchBar />
            <div className="categories">
              <h4>Categories</h4>
              <select
                onChange={(e) => {
                  if (e.target.value) {
                    router.push(e.target.value);
                  }
                }}
                defaultValue=""
              >
                <option value="" disabled>
                  Select a category
                </option>
                {Object.keys(categoryLinks).map((category) => (
                  <option key={category} value={categoryLinks[category]}>
                    {category.replace(/-/g, " ")}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="row pagination-sub">
          <div className="col-sm-12 col-xs-12 pagination-number">
            <ul className="d-flex align-items-center justify-content-center">
              <li className="btn-no-color">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage <= 1}
                  aria-label="Previous page"
                >
                  <FontAwesomeIcon icon={faCaretLeft} height="1em" />
                </button>
              </li>
              {adjustedStartPage > 1 && (
                <>
                  <li>
                    <button onClick={() => handlePageChange(1)}>1</button>
                  </li>
                  {adjustedStartPage > 2 && (
                    <li className="btn-no-color">...</li>
                  )}
                </>
              )}
              {Array.from(
                { length: adjustedEndPage - adjustedStartPage + 1 },
                (_, index) => (
                  <li key={adjustedStartPage + index}>
                    <button
                      onClick={() =>
                        handlePageChange(adjustedStartPage + index)
                      }
                      className={
                        adjustedStartPage + index === currentPage
                          ? "active"
                          : ""
                      }
                    >
                      {adjustedStartPage + index}
                    </button>
                  </li>
                )
              )}
              {adjustedEndPage < totalPages && (
                <>
                  {adjustedEndPage < totalPages - 1 && (
                    <li className="btn-no-color">...</li>
                  )}
                  <li>
                    <button onClick={() => handlePageChange(totalPages)}>
                      {totalPages}
                    </button>
                  </li>
                </>
              )}
              <li className="btn-no-color">
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage >= totalPages}
                  aria-label="Next page"
                >
                  <FontAwesomeIcon icon={faCaretRight} height="1em" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllPost;