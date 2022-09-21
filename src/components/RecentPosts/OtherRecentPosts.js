import { useState } from 'react'

import News1 from '../../assets/images/newsimage10.jpg'
import News2 from '../../assets/images/newsimage11.jpg'
import News3 from '../../assets/images/newsimage12.jpg'
import News4 from '../../assets/images/newsimage17.png'

const OtherRecentPosts = () => {
    const [ otherRecentNews, setOtherRecentNews ] = useState([
        {
            id: 1,
            image: News1,
            author: "david hall",
            date: "december 09, 2020",
            title: "6 Best Tips for Building a Good Shipping Boat",
            category: "politics",
            body: "Maecenas accumsan tortor ut velit pharetra mollis. Proin eu nisl et arcu iaculis placerat sollicitudin ut est. In fringilla dui dui."
        },
        {
            id: 2,
            image: News2,
            author: "david hall",
            date: "december 09, 2020",
            title: "meeting room is empety because of the covid-19",
            category: "politics",
            body: "Maecenas accumsan tortor ut velit pharetra mollis. Proin eu nisl et arcu iaculis placerat sollicitudin ut est. In fringilla dui dui."
        },
        {
            id: 3,
            image: News3,
            author: "david hall",
            date: "december 09, 2020",
            title: "meeting room is empety because of the covid-19",
            category: "politics",
            body: "Maecenas accumsan tortor ut velit pharetra mollis. Proin eu nisl et arcu iaculis placerat sollicitudin ut est. In fringilla dui dui."
        },
        {
            id: 4,
            image: News4,
            author: "david hall",
            date: "december 09, 2020",
            title: "meeting room is empety because of the covid-19",
            category: "politics",
            body: "Maecenas accumsan tortor ut velit pharetra mollis. Proin eu nisl et arcu iaculis placerat sollicitudin ut est. In fringilla dui dui."
        },
    ])
  return (
    
    <div className="row ">
        <div className="col-sm-12 col-md-6">
            <div className="wrapp__list__article-responsive">
                <div className="mb-3">
                    {
                        otherRecentNews.map((otherNews, index) => index > 1 &&
                            <div className="card__post card__post-list" key={otherNews.id}>
                                <div className="image-sm">
                                    <a href="https://">
                                        <img src={otherNews.image} className="img-fluid" alt="" />
                                    </a>
                                </div>


                                <div className="card__post__body ">
                                    <div className="card__post__content">

                                        <div className="card__post__author-info mb-2">
                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    <span className="text-primary">
                                                        by {otherNews.author}
                                                    </span>
                                                </li>
                                                <li className="list-inline-item">
                                                    <span className="text-dark text-capitalize">
                                                        {otherNews.date}
                                                    </span>
                                                </li>

                                            </ul>
                                        </div>
                                        <div className="card__post__title">
                                            <h6>
                                                <a href="https://">
                                                    {otherNews.title}
                                                </a>
                                            </h6>
                                            <p className="d-none d-lg-block d-xl-block">
                                                {otherNews.body}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
        <div className="col-sm-12 col-md-6">
            <div className="wrapp__list__article-responsive">
                {
                    otherRecentNews.map((otherNews, index) => index < 2 &&
                        <div className="mb-3" key={otherNews.id}>
                            <div className="card__post card__post-list">
                                <div className="image-sm">
                                    <a href="https://">
                                        <img src={otherNews.image} className="img-fluid" alt="" />
                                    </a>
                                </div>

                                <div className="card__post__body ">
                                    <div className="card__post__content">

                                        <div className="card__post__author-info mb-2">
                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    <span className="text-primary">
                                                        by {otherNews.author}
                                                    </span>
                                                </li>
                                                <li className="list-inline-item">
                                                    <span className="text-dark text-capitalize">
                                                        {otherNews.date}
                                                    </span>
                                                </li>

                                            </ul>
                                        </div>
                                        <div className="card__post__title">
                                            <h6>
                                                <a href="https://">
                                                    {otherNews.title}
                                                </a>
                                            </h6>
                                            <p className="d-none d-lg-block d-xl-block">
                                                {otherNews.body}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div> 
    </div>
  )
}

export default OtherRecentPosts