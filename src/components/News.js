/* eslint-disable react-hooks/exhaustive-deps */
import "./news.css"
import { React, useState ,useEffect} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
export default function News() {
  const [articles, setArticles] = useState([]);
  const [loader, setLoader] = useState(false);
  const [query, setQuery] = useState("");
  const [submit,setSubmit]=useState("kashmir");
  useEffect(() => {
   const url = `https://gnews.io/api/v4/top-headlines?apikey=04b1b2a9e1fe19a975c5a69afa6080e0&q=${submit}&lang=en&nullable=none&sortBy=publishedAt&page=3&lang=en&category=general`; 
   const fetchData = async () => {
    try {
      setLoader(true);
      let data = await fetch(url);
      let parsedData = await data.json();
      setArticles(parsedData.articles);
      setLoader(false);
    } catch (error) {
      console.log("error", error);
    }
  };
  fetchData();
  }, [submit])

  function handleSubmit(){
setSubmit(query)
  } 

  const align = {
    textAlign: "center",
    textDecoration: "none",
    color: "white"
  };
  return (
    <>
      <div>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        />

        <nav
          className="navbar navbar-expand navbar-dark bg-dark"
          aria-label="Second navbar example"
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              NewsDaily
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarsExample02"
              aria-controls="navbarsExample02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className=" collapse navbar-collapse mx-0"
              id="navbarsExample02"
            >
              <ul className="navbar-nav me-auto">
                <li className="nav-item"></li>
                <li className="nav-item"></li>
              </ul>
              <input
                className="form-control"
                id="s"
                placeholder="Search"
                value={query}
                autoComplete="off"
                onChange={e=>{setQuery(e.target.value)}}
                aria-label="Search"
              />
<span className="search border border-1 border-white rounded ms-2 me-0"  onClick={handleSubmit} >Search</span>



            </div>
          </div>
        </nav>
      </div>
      <div className="container my-3">
        <h1 style={align}>Top Headlines</h1>

        <hr className="border-1 border-white" />

        {loader && <Spinner />}
        <div className="row">
          {articles.map((element) => {
            return (
              <div className="col-md-4 col-lg-4 " key={element.url}>
                <NewsItem
                  title={element.title.slice(0, 40)}
                  description={element.description.slice(0, 40)}
                  image={element.image}
                  url={element.url}
                  publishedAt={element.publishedAt}
                  sourceName={element.source.name}
                />
                <br />
                <br />

              </div>
            );
          })}
          <hr />
          <br />
          <span style={align}>
            {" "}
            &copy;{" "}
            <span style={align}>
              {" "}
              Copyright 2023 |
              <a href="https://devdaim.me" style={align}>
                {" "}
                DevDaim
              </a>{" "}
            </span>
          </span>
        </div>
      </div>
    </>
  );
}

