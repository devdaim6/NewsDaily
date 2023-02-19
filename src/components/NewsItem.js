import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, image, url, publishedAt, sourceUrl, sourceName } =
      this.props;

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
              <h5 className="card-title bg-black text-white">{title}...</h5>
              <p className="card-text bg-black text-white">{description}...</p>
              <p className="card-text bg-black text-white">{publishedAt}a</p>
              <p className="card-text bg-black text-white">
                <a href={sourceUrl}>{sourceName}</a>
              </p>
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
