// src/app/blogs/page/[pageNumber]/page.jsx
import { getBlogData } from "../../../../../lib/blogsData";
import Link from "next/link";
import AllPost from "../../../../components/blogComponents/02AllPosts";
import ExploreTopic from "@/components/blogComponents/ExploreTopic";
import BlogNewsletter from "@/components/blogComponents/BlogNewsletter";
import "../../blogs.css";
import blogcat from "../../../../../public/images/blog-cat-icon.webp"
import Image from "next/image";
import HiringForm from "@/components/PopUpForms/hiringform";
export default async function BlogsPageNumber({ params }) {
  const pageNumber = parseInt(params.pageNumber, 10);
  const { posts, totalPages, currentPage } = await getBlogData(pageNumber);

  return (
    <section className="blog-content-main">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12">
          <ul className="new-categories">
                <li>

                  <Link href="/categories/web-design">
                    <Image src={blogcat} alt="Our Categories" />Web Design
                    </Link>
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
          posts={posts}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </div>
      <ExploreTopic />
      <BlogNewsletter />
      <HiringForm/>
    </section>
  );
}
export const metadata = {
  title: "Browse and Read Our Latest Web Technology Blogs - Webguruz",
  description:
    "Read insightful articles on web development, digital marketing, SEO, PPC, and SMO at Webguruz Blogs. Stay updated with the latest trends to boost your business.",
};