import "../../infographics/style.css";

import Image from "next/image";
import SearchBar from "@/components/blogComponents/SearchBar";
import CategoryInfo from "@/components/blogComponents/CategoryInfo";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
const page = async ({ params }) => {
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
      {/* banner of infographic */}

      <section className="infographic-banner py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 info-banner-content inner-page text-center">
              <h1 className="color-wt">Top Infographic By Our Experts</h1>
            </div>
          </div>
        </div>
      </section>

      {/* banner of infographic */}
      <section className="information-inner-page py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="info-main-image">
                <Image
                  src={post.yoast_head_json.schema["@graph"][0].thumbnailUrl}
                  alt="Infographic Image"
                  height={900}
                  width={900}
                  priority
                />
              </div>
              <div className="authorized-info-by">
                <div className="author-content-img d-flex align-items-center mb-2">
                  {post.yoast_head_json.schema["@graph"][4] && (
                    <Image
                      src={post.yoast_head_json.schema["@graph"][4].image.url}
                      alt="Author"
                      width={20}
                      height={20}
                    />
                  )}
                  {post.yoast_head_json.schema["@graph"][4] && (
                    <span>
                      {" "}
                      {post.yoast_head_json.schema["@graph"][4].image.caption}
                    </span>
                  )}
                  <div className="date-issued">
                    {post.yoast_head_json.schema[
                      "@graph"
                    ][0].datePublished.slice(0, 10)}
                  </div>
                </div>
              </div>
              <div className="information-content">
                <h2>{post.title.rendered}</h2>
                <Image
                  src={post.acf.inforgaphic_image}
                  alt="Infographic Image"
                  height={900}
                  width={900}
                  style={{ height: "1000px", width: "500px" }}
                />
              </div>
            </div>

            <div className="search-and-category col-md-4 py-5">
              <SearchBar />
              <div className="categories-main">
                <CategoryInfo />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Featuredblog/>
    </>
  );
};

export default page;
