import React, { useEffect } from 'react'
import Header from '../components/Header'
import { FaCommentAlt, FaVideo } from 'react-icons/fa'
import Footer from '../components/Footer/Footer'
import { Link } from 'react-router-dom'

function Dashboard() {

    useEffect(()=>{
        document.title='Dashboard'
    }, [])

  return (
    <div className="w-[100%]">
      <Header />
      <div className="w-[90%] my-[100px] mx-auto flex justify-center gap-[30px] max-[700px]:flex-col max-[700px]:items-center">
        <div className="w-[40%] px-2 py-4 bg-white shadow-2xl flex flex-col items-center  max-[700px]:w-[90%]">
          <div className="mt-8">
            <FaCommentAlt className="text-[150px] text-[#262963] max-[800px]:text-[100px]" />
          </div>

          <p className="text-[#262963] font-extrabold mt-8 max-[300px]:text-[1em]">
            Chat Room
          </p>

          <Link
            className="text-white mt-8 py-2 px-20 bg-[#262963] rounded-[5px] max-[800px]:px-16 max-[300px]:px-6 max-[300px]:text-[0.7em]"
            to={"/dashboard/rooms"}
          >
            Enter Room
          </Link>
        </div>
        {/* video */}
        <div className="w-[40%] px-2 py-4 bg-white shadow-2xl flex flex-col items-center max-[700px]:w-[90%]">
          <div className="mt-8">
            <FaVideo className="text-[150px] text-[#262963] max-[800px]:text-[100px]" />
          </div>

          <p className="text-[#262963] font-extrabold mt-8 max-[300px]:text-[1em]">
            Meeting room
          </p>

          <Link
            className="text-white mt-8 py-2 px-20 bg-[#262963] rounded-[5px] max-[800px]:px-14 max-[300px]:px-6 max-[300px]:text-[0.7em]"
            to="/dashboard/meeting"
          >
            Create Meeting
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Dashboard
