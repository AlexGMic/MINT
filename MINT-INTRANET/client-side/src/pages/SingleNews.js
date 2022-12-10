import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchNews } from '../features/news/newSlicer'
import Header from '../components/Header'
import Footer from '../components/Footer/Footer'

function SingleNews() {

    const dispatch = useDispatch()
    const newsList = useSelector((state)=>state.news.data)

    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(()=>{
        getNews().catch((err)=>{
            setError(err.message)
            setLoading(false)
        })
        // eslint-disable-next-line
    }, [])

    useEffect(()=>{
        dispatch(fetchNews())
    }, [dispatch])

    const {id} = useParams()

    useEffect(()=>{
      document.title=`News-${id}`
    }, [id])

    const getNews = async ()=>{
        setLoading(true)
        const response = await fetch(`/api/article-list/${id}`)
        if(!response.ok){
            throw Error("Couldn't fetch data!!!")
        }
        else{
            const data = await response.json()
            setNews(data) 
            setLoading(false)  
        }
    }

    const similarnews = newsList.filter((item) => {
        return news.id===item.id ? '' : item.category === news.category;
    });

  return (
    <div>
        <Header />
        {loading && <div className='text-center m-16'><h1 className='text-red-600'>Loading...</h1></div>}
        {error && <div className='text-center m-16'><h1 className='text-red-600'>{error}</h1></div>}
      <div className="w-[80%] mx-auto flex-col gap-[40px] my-[50px] max-[960px]:flex-col max-[960px]:items-center">
        <div className="w-[90%] text-center m-auto mb-16 max-[960px]:w-[90%]">
            <h1 className="font-bold text-[2em] max-[1210px]:text-[1.5em]">
                {news.title}
            </h1> 
        </div>
        <div className="w-[90%] m-auto max-[960px]:w-[90%]">
          <img className="w-[100%] mb-16 object-cover" src={news.imageURL} alt="" />
          <p className="text-gray-700">{news.description}</p>
        </div>
      </div>
      <div className="w-[80%] mx-auto py-4">
        <div className="py-4">
          <p className="text-[30px] font-bold text-[#262963] ">Suggested News</p>
        </div>
        <div className="grid grid-cols-4 gap-4 max-[1400px]:grid-cols-3 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1">
          {similarnews.map((item) => {
            return (
              <Link reloadDocument to={`/news/${item.id}`} key={item.id}>
                <div className='shadow-2xl p-4 mb-16 hover:scale-105 transition-transform duration-500'>
                  <div>
                    <img className='h-[200px] object-cover' src={item.imageURL} alt="" />
                  </div>
                  <div>
                    <h1 className="text-[18px] font-bold py-2">{item.title}</h1>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        
      </div>
      <Footer />
    </div>
  )
}

export default SingleNews
