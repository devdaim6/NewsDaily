import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, image, url ,publishedAt,source} = this.props;
  
    const imgSize = {
      height: "160px",
    };

    return (
      <>
        <div>
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={image}
              style={imgSize}
              className="card-img-top"
              alt="img"
            />
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <p className="card-text">{publishedAt}a</p>
              <p className="card-text"><a href={url}>{source}</a></p>
              <a
                href={url}
                target="_blank"
                className="btn btn-sm btn-outline-dark"
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
