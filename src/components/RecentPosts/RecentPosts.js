import { useState } from 'react';

import PopularPosts from '../PopularPosts/PopularPosts';
import OtherRecentPosts from './OtherRecentPosts'

import NewsImage1 from '../../assets/images/medium/newsimage8.png'
import NewsImage2 from '../../assets/images/medium/newsimage9.png'

const RecentPosts = () => {
    const [recentPosts, setResentPosts] = useState([
        {
            id: 1,
            image: NewsImage1,
            author: "david hall",
            date: "december 09, 2020",
            title: "Republican Senator Vital to Health indonesia.",
            category: "politics"
        },
        {
            id: 2,
            image: NewsImage2,
            author: "david hall",
            date: "december 09, 2020",
            title: "Republican Senator Vital to Health",
            category: "Covid-19"
        },
    ])
    return (
        <section className="pt-0">
            <div className="popular__section-news">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-8">
                            <div className="wrapper__list__article">
                                <h4 className="border_section">recent post</h4>
                            </div>
                            <div className="row">
                                {
                                    recentPosts.map((story) => (
                                      <div className="col-sm-12 col-md-6 mb-4" key={story.id}>
                                            <div className="card__post">
                                                <div className="card__post__body card__post__transition">
                                                    <a href="https://">
                                                        <img src={story.image} className="img-fluid" alt="" />
                                                    </a>
                                                    <div className="card__post__content bg__post-cover">
                                                        <div className="card__post__category">
                                                            politics
                                                        </div>
                                                        <div className="card__post__title">
                                                            <h5>
                                                                <a href="https://">
                                                                    {story.title}
                                                                </a>
                                                            </h5>
                                                        </div>
                                                        <div className="card__post__author-info">
                                                            <ul className="list-inline">
                                                                <li className="list-inline-item">
                                                                    <a href="https://">
                                                                        by {story.author}
                                                                    </a>
                                                                </li>
                                                                <li className="list-inline-item">
                                                                    <span>
                                                                        {story.date}
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    ))
                                }

                            </div> 
                            <OtherRecentPosts />                           
                        </div>
                        <PopularPosts />
                    </div>
                </div>
            </div>
	    </section>
    );
}

export default RecentPosts;