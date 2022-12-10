import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import SliderNav from "./SliderNav";
import TopNav from "./TopNav";
import { Cookies, useCookies } from 'react-cookie'

const styles = {
    sliderLinks:
      " hidden absolute w-[100%] opacity-0 py-[1em] px-0 bg-white translateY-[-140%] transition ease-in-out duration-[500] max-[700px]:block",
    sliderActive:
      "opacity-[1] z-[1]  translate-y-0 transition duration-[500] ease-in-out",
    atag: "hidden p-[1em] text-[555555] font-[500] text-center no-underline transition duration-[300] ease-out  border-t-[1px] border-[#efefef]",
    link: " w-[40%] flex items-center justify-between max-[1060px]:w-[60%] max-[700px]:hidden",
    linkaTag: "p-[0.3em] text-[#555555] transition duration-[300] ease-in-out",
};

function Header() {

    const [expanded, setExpanded] = useState(false);
    // eslint-disable-next-line
    const [token, setToken] = useCookies(['mytoken'])

    const logoutUser = (e)=>{
        e.preventDefault()
        // removeToken(['mytoken'])
        let cook = new Cookies()
        cook.remove('mytoken')
        setToken(null)
        window.location.href='/'
        // setToken('mytoken', '')
    }

    return (
      <>
        <div className="w-[100%] flex flex-col gap-[10px] bg-white sticky top-0 left-0 z-[30]  pt-4 pb-2">
          <TopNav />
  
          <div className="w-[90%]   mx-auto my-0">
            <div className="flex justify-between items-center">
              <div className="w-[20%] max-[700px]:w-[40%]">
                <img
                  className="w-[100%]"
                  src="https://mint.gov.et/wp-content/uploads/2020/09/logo_7.png"
                  alt=""
                />
              </div>
              <div className={styles.link}>
                <a className={styles.linkaTag} href="/home">
                  Home
                </a>
                <a className={styles.linkaTag} href="/news">
                  News
                </a>
                <a className={styles.linkaTag} href="/dashboard">
                  Dashboard
                </a>
                <a className={styles.linkaTag} href="/office365">
                  Office 365
                </a>
                <a className={styles.linkaTag} href="/DMINT">
                  DMINT
                </a>
              </div>
              <div className="flex gap-[10px] items-center text-[#262963]">
                <div
                  className="hidden p-[0.3rem] cursor-pointer text-center rounded-[3px] max-[700px]:block"
                  onClick={() => setExpanded(!expanded)}
                >
                  <p className="text-[2rem] cursor-pointer font-bold max-[300px]:text-[20px] ">
                    <FaBars />
                  </p>
                </div>
                <button onClick={logoutUser} className="bg-[#262963] py-2 px-4 text-white rounded-[5px] max-[300px]:text-[10px] max-[300px]:px-2">
                  Logout
                </button>
              </div>
            </div>
            <SliderNav expanded={expanded} />
          </div>
        </div>
      </>
    )
}

export default Header
