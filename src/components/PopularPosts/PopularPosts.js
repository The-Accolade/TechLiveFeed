import { useState } from 'react'

const PopularPosts = () => {
    const [ popularPosts, setPopularPosts ] = useState([
        {
            id: 1,
            author: "david hall",
            date: "december 09, 2020",
            title: "Gegera Corona, Kekayaan Bos Zoom Nambah Rp 64 T dalam 3 Bulan - CNBC Indonesia",
            category: "covid-19"
        },
        {
            id: 2,
            author: "david hall",
            date: "march 01, 2020",
            title: "The West had a head start on virus preparations. Why didn't it take it?",
            category: "Startup"
        },
        {
            id: 3,
            author: "david hall",
            date: "march 01, 2020",
            title: "America's social-distancing deniers have arrived",
            category: "Covid-19"
        },
        {
            id: 4,
            author: "david hall",
            date: "march 01, 2020",
            title: "Egypt's soap operas defy a deadly virus for Ramadan prime time. But at what cost?",
            category: "Startup"
        },
    ])
  return (
    <div className="col-md-12 col-lg-4">
        <aside className="wrapper__list__article">
            <h4 className="border_section">popular post</h4>
            <div className="wrapper__list-number">
                {
                    popularPosts.map((post) => (
                        <div className="card__post__list" key={post.id}>
                            <div className="list-number">
                                <span>
                                    {post.id}
                                </span>
                            </div>
                            <a href="https://" className="category">
                                {post.category}
                            </a>
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <a href="#" className="author-info">
                                        by {post.author}
                                    </a>
								</li>
                                <li className="list-inline-item">
                                    <span>
                                        <i className="fa fa-calendar"></i>
                                        {post.date}
                                    </span>
								</li>
                                <li className="list-inline-item">
                                    <h5>
                                        <a href="https://">
                                            {post.title}
                                        </a>
                                    </h5>
                                </li>
                            </ul>

                        </div>
                    ))
                }
            </div>
        </aside>
    </div>
  )
}

export default PopularPosts