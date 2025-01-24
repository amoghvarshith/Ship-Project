import React,{useState,useEffect} from "react";

function Child() {
  const[name,setName]=useState("king of india")
  useEffect(()=>
    console.log(name),[name]);

  return (
    <div>
      <h1>Name updation program</h1>
      <h2>{name}</h2>
      <button onClick={()=>setName("Amogh Reddy")}>click once</button>
      
    </div>
  )
}

export default Child



