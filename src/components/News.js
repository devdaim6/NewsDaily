import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export default class News extends Component {
  articles = [];
  constructor() {
    super();
    this.state = {
      articles: [],
      loader: false,
    };
  }
  
  async componentDidMount() {
    let url = `https://gnews.io/api/v4/search?apikey=04b1b2a9e1fe19a975c5a69afa6080e0&lang=en&sortBy=publishedAt&q=${this.props.search}`;
    this.setState({ loader: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, loader: false });
  }
  render() {
    const align = {
      textAlign: "center",
      textDecoration: "none",
      color:"white"
    };

    return (
      <>
        <div className="container my-3">
          <h1 style={align}>Top Headlines</h1>
          
          <hr className="border-1 border-white"/>
          
          {this.state.loader && <Spinner />}
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4 sm-10 lg-4" key={element.url}>
                  <NewsItem
                    title={element.title.slice(0, 45)}
                    description={element.description.slice(0, 88)}
                    image={element.image}
                    url={element.url}
                    publishedAt={element.publishedAt}
                    sourceName={element.source.name}
                    sourceUrl={element.source.url}
                  />
                  <br />
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
                <a href="devdaim.me" style={align}>
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
}
