import React, { useState } from "react"
import Slider from "react-slick";

const BreakingNews = ({ breakingNews }) => {
  {/*
  const [breakingNews, setBreakingNews] = useState([
    {
      id: 1,
      image: "./images/thumb/news1.jpg",
      author: "david hall",
      date: "december 09, 2020",
      title: "Republican Senator Vital to Health"
    },
    {
      id: 2,
      image: "./images/thumb/news2.jpg",
      author: "david hall",
      date: "december 09, 2020",
      title: "Republican Senator Vital to Health"
    },
    {
      id: 3,
      image: "./images/thumb/news3.jpg",
      author: "david hall",
      date: "december 09, 2020",
      title: "Republican Senator Vital to Health"
    },
    {
      id: 4,
      image: "./images/thumb/news4.jpg",
      author: "david hall",
      date: "december 09, 2020",
      title: "Republican Senator Vital to Health"
    },
    {
      id: 5,
      image: "./images/thumb/news5.jpg",
      author: "david hall",
      date: "december 09, 2020",
      title: "Republican Senator Vital to Health"
    },
    {
      id: 6,
      image: "./images/thumb/news6.jpg",
      author: "david hall",
      date: "december 09, 2020",
      title: "Republican Senator Vital to Health"
    },
    {
      id: 7,
      image: "./images/thumb/news1.jpg",
      author: "david hall",
      date: "december 09, 2020",
      title: "Republican Senator Vital to Health"
    },
    {
      id: 8,
      image: "./images/thumb/news2.jpg",
      author: "david hall",
      date: "december 09, 2020",
      title: "Republican Senator Vital to Health"
    },
    {
      id: 9,
      image: "./images/thumb/news3.jpg",
      author: "david hall",
      date: "december 09, 2020",
      title: "Republican Senator Vital to Health"
    },
  ]); */}
  
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    lazyload: "progressive",
    responsive: [
      {
        breakpoint:768,
        settings: { 
          slidesToShow:2,
          slidesToScroll:2
        }
      },
        {
        breakpoint:480,
        settings:{
          slidesToShow:1,
          slidesToScroll:1
        }
      }
    ]
  };

  return (
    <section className="breaking-news bg-light">
      {/* <h2> Single Item</h2> */}
        <div className="container">
          <div className="row">
            <div className="col-md-12">
                <Slider {...settings} className="wrapp__list__article-responsive wrapp__list__article-responsive-carousel">
                  {
                    breakingNews.map((item) => (
                      <div key={item.id} className="item">
                        <div className="card__post card__post-list">
                          <div className="image-sm">
                            <a href="https://">
                              <img src={item.image} className="img-fluid" alt="" />
                            </a>
            							</div>
                          <div className="card__post__body ">
          									<div className="card__post__content">
          										<div className="card__post__author-info mb-2">
          											<ul className="list-inline">
          												<li className="list-inline-item">
          													<span className="text-primary">
          														by {item.author}
          													</span>
          												</li>
          												<li className="list-inline-item">
          													<span className="text-dark text-capitalize">
          														{item.date}
          													</span>
          												</li>          
          											</ul>
          										</div>
          										<div className="card__post__title">
          											<h6>
          												<a href="https://">
                                    {item.title}
          												</a>
          											</h6>          
          										</div>          
          									</div>      
          								</div>
                        </div>
                      </div>  
                    ))
                  }
        </Slider>
              </div>
            </div>
          </div>
      </ section>
  );
}

export default BreakingNews;