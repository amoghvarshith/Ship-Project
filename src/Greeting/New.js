import React ,{useState} from 'react';

function New() {
    const[Name,setName]=useState("king")
    const change=(e)=>{
        setName(e.target.value);
    }

  return (
    <div>
        <h1>{Name}</h1>
        <button onChange={change} > done</button>
        
      
    </div>
  )
}

export default New
