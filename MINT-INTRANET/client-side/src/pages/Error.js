import React, {useEffect} from 'react'
import Header from '../components/Header'

function Error() {

  useEffect(()=>{
    document.title='Error'
  }, [])

  return (
    <div>
      <Header />
      <div>
        <h1>Error</h1>
      </div>
    </div>
  )
}

export default Error
