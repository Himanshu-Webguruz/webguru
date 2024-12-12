import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContentBlogClient from "../../../components/blogComponents/ContentBlogClient";
import HiringForm from "@/components/PopUpForms/hiringform";

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

const Page = async ({ params }) => {
  const { slug } = params;

  const response = await fetch(
    `${process.env.NEXTAUTH_URL}/api/getdata?&limit=1000`
  );
  const { data } = await response.json();

  if (!response.ok || !data) {
    throw new Error("Failed to fetch posts");
  }

  const post = data.find((p) => p.slug === slug);
  if (!post) {
    notFound();
  }

  return (
    <>
      <section className="single-blog-main py-5">
        <div className="container">
          {/* <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center ">
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
                    {post.yoast_head_json.schema[
                      "@graph"
                    ][0].datePublished.slice(0, 10)}
                  </li>
                </ul>
                <ul className="social-icons">
                  Share this article:{" "}
                  <li className="px-2">
                    <a
                      href="https://www.facebook.com/webguruztechnologies/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faFacebook}
                        height={20}
                        aria-label="Facebook"
                      />
                    </a>
                  </li>
                  <li className="px-2">
                    <a
                      href="https://www.linkedin.com/company/webguru-technologies-pvt.-ltd./"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        height={20}
                        aria-label="LinkedIn"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}

          <ContentBlogClient post={post} categoryLinks={categoryLinks} />
        </div>
      </section>

      <section className="latest-blog py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center mb-4">
              <h2>
                Our Latest <span>Blog</span>
              </h2>
            </div>
            {data.slice(0, 3).map((latestPost, index) => (
              <div className="col-sm-4 col-xs-12" key={latestPost.slug}>
                <div className="blog-card-main">
                  <div className="image">
                    <Image
                      src={
                        latestPost.yoast_head_json.schema["@graph"][0]
                          .thumbnailUrl
                      }
                      alt={`img${index + 1}`}
                      width={700}
                      height={340}
                    />
                  </div>
                  <div className="content">
                    <ul>
                      <li>
                        <p>
                          {
                            latestPost.yoast_head_json.schema["@graph"][4].image
                              .caption
                          }
                        </p>
                      </li>
                      <li>
                        <p>
                          {latestPost.yoast_head_json.schema[
                            "@graph"
                          ][0].datePublished.slice(0, 10)}
                        </p>
                      </li>
                      <li>
                        <p>7 min read</p>
                      </li>
                    </ul>
                    <h4>
                      <Link href={`/blog/${latestPost.slug}`}>
                        {latestPost.title.rendered}
                      </Link>
                    </h4>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: latestPost.excerpt.rendered
                          .replace(/<p>/g, "")
                          .replace(/<\/p>/g, ""),
                      }}
                    />
                    <Link href={`/blog/${latestPost.slug}`} className="link-btn about--btn">
                      Read More       <svg
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
                      </svg>                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="blog-single-banner mb-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12">
              <div className="singleblog-img-content d-flex align-items-center">
                <Image src={logowhite} alt="Logo" />
                <div className="peraph-lists">
                {post.acf.bottom_form ? (
                  post.acf.bottom_form.bottom_form_data.map((detail, index) => (
                    <span key={index} className="detail-text">
                      {detail.bottom_form_text}
                    </span>
                  ))
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
      </section> */}

      <HiringForm />
    </>
  );
};

export default Page;

export async function generateMetadata({ params }) {
  const { slug } = params;

  const response = await fetch(
    `${process.env.NEXTAUTH_URL}/api/getdata?&limit=1000`
  );
  const { data } = await response.json();

  if (!response.ok || !data) {
    throw new Error("Failed to fetch posts");
  }

  const post = data.find((p) => p.slug === slug);
  return {
    title: post?.yoast_head_json.title || "Default Title",
    description: post?.yoast_head_json.description || "Default Description",
  };
}
