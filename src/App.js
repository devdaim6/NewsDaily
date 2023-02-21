import News from "./components/News"
import React from 'react'
// import { useState } from "react"
function App() {
/*   const [Query,setQuery]=useState("football");
  let text;
  function handleOnChange(){
text=document.getElementById("s").value;
setQuery(text);
console.log(text)
console.log(Query)
} */
  return (
    <>
    <div>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" />
   
   <nav className="navbar navbar-expand navbar-dark bg-dark" aria-label="Second navbar example">
<div className="container-fluid">
  <a className="navbar-brand" href="/">NewsDaily</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className=" collapse navbar-collapse mx-0" id="navbarsExample02">
    <ul className="navbar-nav me-auto">
      <li className="nav-item">
      </li>
      <li className="nav-item">
       
      </li>
    </ul>

    <input className="form-control"  id="s" placeholder="Search"   aria-label="Search" />
  
 

    <button  className="btn btn-sm mx-1 btn-outline-secondary text-white" >Search</button>
  </div>
</div>
</nav>
      
      <News search={""}/>
   
    </div>
     
    
     
      </>
    
  )
}

export default App
