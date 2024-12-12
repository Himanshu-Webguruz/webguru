

import "./blogs.css";
import AllPost from "../../components/blogComponents/02AllPosts";
import Link from "next/link";
import ExploreTopic from "@/components/blogComponents/ExploreTopic";
import BlogNewsletter from "@/components/blogComponents/BlogNewsletter";
import HiringForm from "@/components/PopUpForms/hiringform";
import blogcat from "../../../public/images/blog-cat-icon.webp"
import Image from "next/image";

const page = async ({ searchParams }) => {
  const params = await searchParams;
  const page = params.page ? parseInt(params.page) : 1;
  const limit = 10;

  const response = await fetch(
    `${process.env.NEXTAUTH_URL}/api/getdata?page=${page}` //&per_page=${limit}
  );

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  const { data, currentPage, totalPages } = await response.json();
console.log('my data is >>',data[0])
  return (
    <>
      <section className="blog-content-main">
        <div className="container">
          <h1 className="text-center mb-4">
            Our <span>Blogs</span>
          </h1>
          <div className="row">
            <div className="col-sm-12 col-xs-12">
              <ul className="new-categories">
                <li>

                  <Link href="/categories/web-design">
                    <Image src={blogcat} alt="Our Categories" />Web Design</Link>
                </li>
                <li>

                  <Link href="/categories/online-reputation-management">
                    <Image src={blogcat} alt="Our Categories" />
                    Online Reputation Management
                  </Link>
                </li>
                <li>

                  <Link href="/categories/magento">
                    <Image src={blogcat} alt="Our Categories" />Magento</Link>
                </li>
                <li>
                  <Link href="/categories/internet-marketing">
                    <Image src={blogcat} alt="Our Categories" />
                    Internet Marketing
                  </Link>
                </li>
                <li>
                  <Link href="/categories/google-remarketing">
                    <Image src={blogcat} alt="Our Categories" />
                    Google Remarketing
                  </Link>
                </li>

                <li>

                  <Link href="/categories/facebook-marketing">
                    <Image src={blogcat} alt="Our Categories" />
                    Facebook Marketing
                  </Link>
                </li>
                <li>

                  <Link href="/categories/ecommerce">
                    <Image src={blogcat} alt="Our Categories" />
                    Ecommerce
                  </Link>
                </li>
                <li>

                  <Link href="/categories/hubspot">
                    <Image src={blogcat} alt="Our Categories" />
                    Hubspot
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <AllPost
            posts={data}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </div>
        <ExploreTopic />
        <BlogNewsletter />
        <HiringForm />
      </section>
      {/* <div className="social-sharing-icons-wrap d-none">
        <div className="container">
                 <div className="social-sharing-icons">
                 <h4 className="icons-heading">Share</h4>
          <div className="social-sharing-icons__list">
  
            <ul>
              <li className="copy">
                {" "}
                <a onclick="dasdasdsa()" href="javascript:void(0)">
                  <i className="fa fa-copy"></i>
                </a>
              </li>
              <li className="facebook">
                <a
                  href="https://www.facebook.com/sharer.php?u=https://api.webguruz.in/blog/essential-ppc-services-for-the-dental-industry-in-2025/"
                  target="_blank"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="twitter">
                <a
                  href="https://twitter.com/share?text=Essential PPC Services for the Dental Industry in 2025 &amp;url=https://api.webguruz.in/blog/essential-ppc-services-for-the-dental-industry-in-2025/"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="16"
                    viewBox="0 0 512 512"
                    className="twitter"
                  >
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                  </svg>
                </a>
              </li>
              <li className="linkedin">
                {" "}
                <a
                  href="http://www.linkedin.com/shareArticle?mini=true&amp;url=https://api.webguruz.in/blog/essential-ppc-services-for-the-dental-industry-in-2025/"
                  target="_blank"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li className="pinterest">
                {" "}
                <a
                  href="https://pinterest.com/pin/create/button/?url=https://api.webguruz.in/blog/essential-ppc-services-for-the-dental-industry-in-2025/"
                  target="_blank"
                >
                  <i className="fab fa-pinterest-p"></i>
                </a>{" "}
              </li>
              <li className="envelope">
                {" "}
                <a
                  href="mailto:?subject=Essential PPC Services for the Dental Industry in 2025&amp;body=Essential PPC Services for the Dental Industry in 2025 - https://api.webguruz.in/blog/essential-ppc-services-for-the-dental-industry-in-2025/"
                  title="Essential PPC Services for the Dental Industry in 2025"
                  target="_blank"
                >
                  <i className="fas fa-envelope"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </div> */}
    </>
  );
};

export default page;
export const metadata = {
  title: "Browse and Read Our Latest Web Technology Blogs - WebGuruz",
  description:
    "Read insightful articles on web development, digital marketing, SEO, PPC, and SMO at WebGuruz Blogs. Stay updated with the latest trends to boost your business.",
};
