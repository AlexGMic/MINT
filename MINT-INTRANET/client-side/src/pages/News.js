import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header'
import NewsContent from '../components/News/NewsContent'
import Sidebar from '../components/News/Sidebar'
import { fetchNews } from '../features/news/newSlicer'

function News() {

  const dispatch = useDispatch() 


  useEffect(()=>{
      document.title = 'News'
  }, [])

  useEffect(()=>{
    dispatch(fetchNews())
  }, [dispatch])

  return (
    <div>
      <Header />
      <Sidebar />
      <NewsContent />
      <Footer />
    </div>
  )
}

export default News
