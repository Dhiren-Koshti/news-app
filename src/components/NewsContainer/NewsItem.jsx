import React from "react";

export default function NewsItem(props) {
  let { title, description, imageUrl, newsUrl, author, date } = props;
  return (
    <div className="news-card">
      <img src={imageUrl} alt="News Article 1" className="news-image" />
      <div className="news-content">
        <h2 className="news-title">{title}</h2>
        <p className="news-description">{description}</p>
        <div className="news-meta">
          <span className="news-author">By {author}</span>
          <span className="news-date">{new Date(date).toString()}</span>
        </div>
        <a
          href={newsUrl}
          className="news-readmore"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More
        </a>
      </div>
    </div>
  );
}
