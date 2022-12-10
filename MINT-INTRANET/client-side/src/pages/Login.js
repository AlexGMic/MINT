import React, { useState } from 'react'
import { useCookies } from 'react-cookie'
import Spinner from 'react-bootstrap/Spinner';
// import "bootstrap/dist/css/bootstrap.min.css";
import {genSalt, hash} from 'bcryptjs-react'

function Login() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  // const [datatoken, setDatatoken] = useState('')
  // eslint-disable-next-line
  const [token, setToken] = useCookies(['mytoken'])
  

  // useEffect(() => {
    
  //   if (token['mytoken']){
  //     // history.push(`/home/${token['mytoken']}`)
  //     // <Navigate to={'/home'} replace/>
      
  //   }
  // }, [token])

  const hashedToken = async (token)=>{
    const hashed = await genSalt(25)
    const hashedVal = await hash(token, hashed)
    return hashedVal
  }
  

  const logUser = async ()=>{
    setLoading(true)
    const response = await fetch('/auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username: username, password: password})
    })
    
    const data = await response.json()
    if (response.status === 200){
      setToken('mytoken', hashedToken(data.token))
      setLoading(false)
      window.location.href='/home'
    }
    else{
      setUsername('')
      setPassword('')
      setLoading(false)
      alert("Incorrect Username or Password!")
    }
    // then((resp)=>resp.json()).then(data=>setToken('mytoken', data.token)).catch(err=>console.log(err.message))
  }

  return (
    <div  className="w-[100%] h-[600px] flex  justify-center items-center">
      <div className="flex justify-center gap-[10px] w-[60%] h-[70%] bg-white shadow-2xl rounded-[10px] max-[1150px]:w-[50%] max-[850px]:w-[80%] max-[600px]:w-[90%] max-[600px]:py-6">
        <div className="w-[50%] h-[100%] max-[1150px]:hidden">
          <img
            className="w-[100%] h-[100%] object-cover  pointer-events-none rounded-tl-[10px] rounded-bl-[10px] "
            src="https://www.cyberium.info/wp-content/uploads/2022/07/why-is-cybersecurity-important.jpg"
            alt=""
          />
        </div>
        <div className="w-[50%] flex flex-col items-center justify-center max-[1150px]:w-[100%]">
          <div className="flex justify-center w-[100%] items-center ">
            {/* <i className="fas fa-user"></i> */}
            <img
              className="object-cover w-[60%]"
              src="https://mint.gov.et/wp-content/uploads/2020/09/logo_7.png"
              alt=""
            />
          </div>
          <div className="flex flex-col  items-center gap-[30px] mt-10 w-[70%] max-[600px]:w-[80%]">
            <input
              className="bg-slate-200 text-[14px] rounded-[5px] outline-none  border py-2 px-4 w-[90%] "
              type="text"
              placeholder="Username"
              required value={username} onChange={(e)=>{setUsername(e.target.value)}}
            />
            <input
              className="bg-slate-200 text-[14px] rounded-[5px] outline-none  border py-2 px-4 w-[90%] "
              type="password"
              placeholder="Password"
              required value={password} onChange={(e)=>{setPassword(e.target.value)}}
            />
            <button onClick={logUser} className="text-[14px] text-center bg-[#121931] rounded-[5px] cursor-pointer py-2 px-6 text-white font-bold">
              {loading?<Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
              </Spinner>:'Login'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
