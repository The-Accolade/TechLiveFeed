import { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import BreakingNews from '../../components/BreakingNews/BreakingNews'
import PopularNews from '../../components/PopularNews/PopularNews'
import RecentPosts from '../../components/RecentPosts/RecentPosts'

import NewsImage1 from '../../assets/images/newsimage1.png'
import NewsImage2 from '../../assets/images/newsimage2.png'
import NewsImage3 from '../../assets/images/newsimage3.png'
import NewsImage4 from '../../assets/images/newsimage4.png'
import NewsImage5 from '../../assets/images/newsimage5.png'
import NewsImage6 from '../../assets/images/newsimage6.png'
import NewsImage7 from '../../assets/images/newsimage7.png'
import NewsImage8 from '../../assets/images/newsimage8.png'
import NewsImage9 from '../../assets/images/newsimage9.jpg'

import '../../assets/css/Home.css';

const Home = () => {
  const [breakingNews, setBreakingNews] = useState([
    {
      id: 1,
      image: NewsImage1,
      author: "david hall",
      date: "december 09, 2020",
      title: "Republican Senator Vital to Health",
      category: "Covid-19"
    },
    {
      id: 2,
      image: NewsImage2,
      author: "david hall",
      date: "december 09, 2020",
      title: "Republican Senator Vital to Health",
      category: "Covid-19"
    },
    {
      id: 3,
      image: NewsImage3,
      author: "david hall",
      date: "december 09, 2020",
      title: "Republican Senator Vital to Health",
      category: "Covid-19"
    },
    {
      id: 4,
      image: NewsImage4,
      author: "david hall",
      date: "december 09, 2020",
      title: "Republican Senator Vital to Health",
      category: "Covid-19"
    },
    {
      id: 5,
      image: NewsImage5,
      author: "david hall",
      date: "december 09, 2020",
      title: "Republican Senator Vital to Health",
      category: "Covid-19"
    },
    {
      id: 6,
      image: NewsImage6,
      author: "david hall",
      date: "december 09, 2020",
      title: "Republican Senator Vital to Health",
      category: "Covid-19"
    },
    {
      id: 7,
      image: NewsImage7,
      author: "david hall",
      date: "december 09, 2020",
      title: "Republican Senator Vital to Health",
      category: "Covid-19"
    },
    {
      id: 8,
      image: NewsImage8,
      author: "david hall",
      date: "december 09, 2020",
      title: "Republican Senator Vital to Health",
      category: "Covid-19"
    },
    {
      id: 9,
      image: NewsImage9,
      author: "david hall",
      date: "december 09, 2020",
      title: "Republican Senator Vital to Health",
      category: "Covid-19"
    },
  ]);
  return (
    <>
      <Navbar />
      <BreakingNews breakingNews={breakingNews} />
      <PopularNews popularNews={breakingNews} />
      <RecentPosts />
    </>
  )
}
export default Home;