import { useState } from "react";
import Slider from "react-slick";
import NewsCardComponent from "../NewsCardComponent/NewsCardHeroComponent";
import NewsCardRightComponent from "../NewsCardComponent/HeroCardRightComponent";

const PopularNews = ({ popularNews }) => {
  
  const settings = {
    slidesToShow: 1,
    autoplay: true,
    dots: false,
    lazyload: "progressive",
  };
  
  return (
    <section>
      <div className="popular__news-header">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-md-8">
              <Slider {...settings} className="card__post-carousel">
                {
                  popularNews.map((item, index) => index <= 6 && <NewsCardComponent item={item} />)
                }
              </Slider>
            </div>
            {/* <<<< RIGHT >>>> */}
            <div className="col-md-4">
              {
                popularNews.map((item, index) => index > 6 && <NewsCardRightComponent item={item} />)
              }            
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PopularNews;