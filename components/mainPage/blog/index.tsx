import React from "react";
import Image from "next/image";

const Blog = () => {
  return (
    <div className="blog">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title">
              <i><Image src="/images/title.png" alt="Our Blog" width={62} height={50} layout='intrinsic'/></i>
              <h2>Our Blog</h2>
              <span>when looking at its layout. The point of using Lorem</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 mar_bottom">
            <div className="blog_box">
              <div className="blog_img_box">
                <figure><Image src="/images/blog_img1.png" width={348} height={310} layout='intrinsic' alt="#"/><span>02 FEB 2019</span></figure>
              </div>
              <h3>Spicy Barger</h3>
              <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced
                below for those interested. Sections 1.10.32 and 1.10.33 from &quot;de
                Finibus Bonorum et Malorum&quot; by Cicero are also reproduced in their
                exact original form, accompanied by English versions from the </p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 mar_bottom">
            <div className="blog_box">
              <div className="blog_img_box">
                <figure><Image src="/images/blog_img2.png" width={348} height={310} layout='intrinsic' alt="#"/>
                  <span>02 FEB 2019</span>
                </figure>
              </div>
              <h3>Egg & Tosh</h3>
              <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced
                below for those interested. Sections 1.10.32 and 1.10.33 from &quot;de
                Finibus Bonorum et Malorum&quot; by Cicero are also reproduced in their
                exact original form, accompanied by English versions from the </p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
            <div className="blog_box">
              <div className="blog_img_box">
                <figure>
                  <Image src="/images/blog_img3.png" width={348} height={310} layout='intrinsic' alt="#"/>
                  <span>02 FEB 2019</span>
                </figure>
              </div>
              <h3>Pizza</h3>
              <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced
                below for those interested. Sections 1.10.32 and 1.10.33 from &quot;de
                Finibus Bonorum et Malorum&quot; by Cicero are also reproduced in their
                exact original form, accompanied by English versions from the </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
