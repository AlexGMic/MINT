import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { allNews as AllNew, latestNews as LatestNew, technologyNews, internationalNews } from '../../features/news/newSlicer'
import NoNews from './NoNews';
import { Link } from 'react-router-dom';

function NewsContent() {
    const dispatch = useDispatch();
    const news = useSelector((state) => state.news)
    const newsList = useSelector((state) => state.news.filtered);
    // const btnClick = React.useRef()

    // useEffect(() => {
    //     btnClick.current.click()
    // }, [])
    

    const interNews = (e) => {
        e.preventDefault();
        dispatch(internationalNews("International-News"));
    };
    const techNews = (e) => {
        e.preventDefault();
        dispatch(technologyNews("Technology-News"));
    };
    const latestNews = (e) => {
        e.preventDefault();
        dispatch(LatestNew("Latest-News"));
    };
    const allNews = (e) => {
        e.preventDefault();
        dispatch(AllNew());
    };
  return (
    <div className="w-[100%] py-4">
      <div className="w-[100%]">
        <div className="w-[100%]  flex gap-[10px] justify-center mt-20 my-[20px]  font-bold max-[400px]:hidden">

          <button
            onClick={allNews}
            className="py-1 px-4 focus:bg-[#262963] focus:text-white hover:bg-[#262963] rounded-[5px] hover:text-white max-[600px]:text-[12px] max-[600px]:bg-white max-[600px]:flex max-[600px]:flex-col max-[600px]:justify-center max-[600px]:items-center"
          >
            <i className="fa fa-infinity"></i> All
          </button>
          <button
            onClick={interNews}
            className="py-2 px-4 focus:bg-[#262963] focus:text-white hover:bg-[#262963] rounded-[5px]   hover:text-white max-[600px]:text-[12px] max-[600px]:bg-white max-[600px]:flex max-[600px]:flex-col max-[600px]:justify-center max-[600px]:items-center "
          >
            <i className="fa fa-globe"></i> International
          </button>
          <button
            onClick={techNews}
            className="p-4 focus:bg-[#262963] focus:text-white hover:bg-[#262963] rounded-[5px]  hover:text-white max-[600px]:text-[12px] max-[600px]:bg-white max-[600px]:flex max-[600px]:flex-col max-[600px]:justify-center max-[600px]:items-center "
          >
            <i className="fa fa-microchip"></i> Technology
          </button>
          <button
            onClick={latestNews}
            className="p-4 focus:bg-[#262963] focus:text-white hover:bg-[#262963] rounded-[5px] hover:text-white max-[600px]:text-[12px] max-[600px]:bg-white max-[600px]:flex max-[600px]:flex-col max-[600px]:justify-center max-[600px]:items-center"
          >
            <i className="fa fa-newspaper"></i> Latest
          </button>
          
        </div>
      </div>
      {news.loading && <h1>Loading...</h1>}
      {news.error && <h1>{news.error}</h1>}
      {newsList.length === 0 ? (
        <NoNews />
      ) : (
        <div className="w-[80%] grid grid-cols-3 gap-[20px] my-[4em] mx-auto max-[1150px]:grid-cols-2 max-[600px]:grid-cols-1 max-[600px]:w-[90%] max-[400px]:mt-[30px]">
          {newsList.map((items) => {
            return (

                <Link to={`/news/${items.id}`} key={items.id} className="no-underline">
                    <div className="w-[100%] p-2 shadow-2xl hover:scale-105 transition-transform duration-500 cursor-pointer" key={items.id}>
                        <div className="w-[100%]">
                        <img className="h-[250px] object-cover" src={items.imageURL} alt="" />
                        </div>

                        <div>
                        <h1 className="text-[1.2em] font-bold py-1">{items.title.slice(0,50)}...</h1>
                        <p className="text-[0.9em]">{items.description.slice(0,150)}...</p>
                        </div>
                    </div>
                </Link>
              
            );
          })}

          {/* third */}
        </div>
      )}
    </div>
  )
}

export default NewsContent
