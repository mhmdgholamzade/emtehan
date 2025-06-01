import React from 'react';

const BlogCard = ({ date, month, image, title, description, tags, readTime, comments }) => {
  return (
    <div className="blog-list col-lg-4 col-md-6 col-sm-10 mx-auto">
      <div className="blog-img">
        <div className="post-date">
          <span className="date">{date}</span>
          <span className="month">{month}</span>
        </div>
        <img src={image} alt="blog-image" />
      </div>
      <div className="blog-item">
        <div className="post-title">
          <a href="#0">
            <h3>{title}</h3>
          </a>
        </div>
        <div className="post-content mb-5">
          <p className="mb-5">{description}</p>
          <a href="#0" className="button">
            Read More <i className="fa fa-long-arrow-right"></i>
          </a>
        </div>
        <div className="post-meta mt-5">
          <ul>
            <li>
              <i className="fa fa-tags"></i>
              <span>{tags}</span>
            </li>
            <li>
              <i className="fa fa-book"></i>
              <span>{readTime}</span>
            </li>
            <li>
              <i className="fa fa-comment"></i>
              <a href="#0">{comments}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
