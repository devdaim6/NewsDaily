import News from "./components/News"
import React from 'react'
import { useState } from "react"

function App() {
const [query,setQuery]=useState();
function search(){
let text=document.getElementById("search").value;
setQuery(text);
}
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

  <div className="collapse navbar-collapse" id="navbarsExample02">
    <ul className="navbar-nav me-auto">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="/">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/news">News</a>
      </li>
    </ul>

    <form role="search">
    <input className="form-control" type="search"  id="search" autoFocus placeholder="Search" aria-label="Search" />
    
  </form>
    <button onClick={search} className="btn btn-sm mx-3 btn-outline-secondary text-white">Search</button>
  </div>
</div>
</nav>
      
      <News search={query}/>
   
    </div>
     
    
     
      </>
    
  )
}

export default App
