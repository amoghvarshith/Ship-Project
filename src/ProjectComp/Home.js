import React, { use } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate=useNavigate();
  const next=()=>{
    navigate('/mobilenumbers')
  }
  return (
    <div>
        <center>

        <h1>hii guys this is varshith</h1>
        <button onClick={next}> clickHere!!</button>

        </center>
      
    </div>
  )
}

export default Home
