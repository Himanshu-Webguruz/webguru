import React from "react";
import Link from "next/link";
import Image from "next/image";
import SearchBar from "@/components/blogComponents/SearchBar";
import "./style.css";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
import CategoryInfo from "@/components/blogComponents/CategoryInfo";

const page = async ({ searchParams }) => {
  const params = await searchParams;
  const page = params.page ? parseInt(params.page) : 1;
  const response = await fetch(
    `${process.env.NEXTAUTH_URL}/api/getdata?page=${page}&limit=${100}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const { data } = await response.json();

  return (
    <>
      <div className="infographics-section py-5">
        <div className="container">
          <div className="row pt-2 pt-md-5 pb-3 pb-md-5">
            <div className="col-12 text-center">
              <h1 className="title mb-5">Infographics</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 col-12">
              <div className="row">
                {data.map(
                  (post, index) =>
                    post.acf.inforgaphic_image !== false && (
                      <div key={index} className="col-md-6 col-12 mb-4 mb-md-5">
                        <div className="infographics-card-main">
                          <div className="info-img">
                            <Link href={`/infographic/${post.slug}`}>
                              <Image
                                src={
                                  post.yoast_head_json.schema["@graph"][0]
                                    .thumbnailUrl
                                }
                                alt="Infographic Image"
                                height={900}
                                width={900}
                              />
                            </Link>
                          </div>
                          <div className="infor-title">
                            <Link href={`/infographic/${post.slug}`}>
                              <h4>{post.title.rendered}</h4>
                            </Link>
                          </div>
                        </div>
                      </div>
                    )
                )}
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="search-and-category infor aside">
                {/* Additional content for the aside */}
                <SearchBar />
                <div className="categories-main">
                  <CategoryInfo />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Featuredblog />
    </>
  );
};

export default page;
