const NewsCardHeroComponent = ({ item }) => {
  return (
    <div className="item" key={item.id}>
        <div className="card__post">
            <div className="card__post__body">
                <a href="https://">
                    <img src={item.image} className="img-fluid" alt="" />
                </a>
                <div className="card__post__content bg__post-cover">
                    <div className="card__post__category">
                        covid-19
                    </div>
                    <div className="card__post__title">
                        <h2>
                            <a href="https://">
                                {item.title}
                            </a>
                        </h2>
                    </div>
                    <div className="card__post__author-info">
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <a href="https://">
                                    by {item.author}
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <span>
                                    {item.date}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>  
        </div>
    </div>
  )
}

export default NewsCardHeroComponent;