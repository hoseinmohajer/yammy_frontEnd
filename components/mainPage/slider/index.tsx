import React from "react";
import Image from "next/image";

const Slider = () => {
  return (
    <div className="slider_section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="full">
              <div id="main_slider" className="carousel vert slide" data-ride="carousel" data-interval="5000">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="slider_cont">
                          <h3>Discover Restaurants<br/>That deliver near You </h3>
                          <p>It is a long established fact that a reader will
                            be distracted by the readable content of a page
                            when looking at its layout.</p>
                          <a className="main_bt_border" href="#">Order Now</a>
                        </div>
                      </div>
                      <div className="col-md-7">
                        <div className="slider_image full text_align_center">
                          <Image width={851} height={687} layout='intrinsic' className="img-responsive" src="/images/burger_slide.png" alt="burger_slide"/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="slider_cont">
                          <h3>That&apos;s Deliciouse<br/>Something that you want </h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, omnis.</p>
                          <a className="main_bt_border" href="#">Take it now</a>
                        </div>
                      </div>
                      <div className="col-md-7 full text_align_center">
                        <div className="slider_image">
                          <Image width={851} height={687} layout='intrinsic' className="img-responsive" src="/images/fast_food_slide.jpg" alt="fast_food_slide"/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="slider_cont">
                          <h3>Do you Like It<br/>Order it now </h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, omnis.</p>
                          <a className="main_bt_border" href="#">Call us to give it</a>
                        </div>
                      </div>
                      <div className="col-md-7 full text_align_center">
                        <div className="slider_image">
                          <Image width={851} height={687} layout='intrinsic' className="img-responsive" src="/images/pizza_slide.jpg" alt="pizza_slide"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
                  <i className="fa fa-angle-up"/>
                </a>
                <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
                  <i className="fa fa-angle-down"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
