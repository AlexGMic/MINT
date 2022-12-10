import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { searchNews } from '../../features/news/newSlicer';

function Sidebar() {

    const [input, setInput] = useState("");
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(searchNews(input))
    }, [input, dispatch])

  return (
    <div className="w-[100%]  p-4 bg-[#262963] flex justify-center items-center fixed z-10">
      <div className="w-[40%] flex justify-center max-[1110px]:w-[60%] max-[750px]:w-[100%]">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="py-2 px-4 w-[80%] mx-auto rounded-[20px] outline-none border-none"
          placeholder="Search"
        />
      </div>
    </div>
  )
}

export default Sidebar
