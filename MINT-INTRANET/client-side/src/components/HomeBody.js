import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function HomeBody() {

    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(()=>{
        // fetch('/api/article-list/').then((resp)=>resp.json()).then((data)=>console.log(data))
        getNews().catch((err)=>{
            setError(err.message)
            setLoading(false)
        })
        // eslint-disable-next-line
    }, [])

    const getNews = async ()=>{
        setLoading(true)
        const response = await fetch('/api/article-list/')
        if(!response.ok){
            throw Error("Couldn't fetch data!!!")
        }
        else{
            const data = await response.json()
            setNews(data) 
            setLoading(false)  
        }
    }

  return (
    <div className="w-[80%] mx-auto" id='Latest-News'>
      <p className="text-center font-bold text-[30px] text-[#262963] mt-[40px]">
        Latest News
      </p>
      <div className="grid grid-cols-3 gap-[2em]  my-[50px]  max-[1000px]:grid-cols-2 max-[680px]:grid-cols-1">
        {loading && <div><p>Loading...</p></div>}
        {error && <div><p>{error}</p></div>}
        {
        news && news.map((items) => {
          console.log(items)
          return items.category==="Latest-News" ? <Link to={`/news/${items.id}`} key={items.id} ><div
              className=" mx-auto p-2 bg-white hover:scale-110 transition duration-[500ms]  overflow-hidden shadow-xl max-[730px]:w-[100%] "
              key={items.id}
            >
              <div>
                <img src={items.imageURL} className="w-[100%] h-[240px] object-cover max-[680px]:h-[100%]" alt="" />
              </div>
              <div className="flex flex-col p-4 rounded-[20px] gap-[10px]">
                <p className="font-bold max-[1160px]:text-[0.9rem]">{items.title}</p>
              </div>
            </div></Link> : ''
          ;
        })}
      </div>
    </div>
  )
}

export default HomeBody
