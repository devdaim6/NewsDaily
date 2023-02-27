import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, image, url, publishedAt } =
      this.props;

let date=new Date(publishedAt);

      const imgSize = {
      height: "160px",
    };

    return (
      <>
        <div>
          <div className="card mx-auto" style={{ width: "18rem" }}>
            <img
              src={image}
              style={imgSize}
              className="card-img-top"
              alt="loading ..."
            />
            <div className="card-body bg-black text-white">
              <h5 className="card-title bg-black text-white">{title}...</h5>
              <span className="card-text bg-black text-white">{description}...</span><br />
              {/* <span className="card-text bg-black text-white">
              Source : {sourceName}
              </span> */}
              <p className="card-text bg-black text-white">{date.toLocaleString()}</p>
              <a
                href={url}
                target="_blank"
                className="btn btn-sm btn-outline-dark text-white"
                rel="noreferrer"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
