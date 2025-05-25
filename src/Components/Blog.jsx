import React from 'react'

function Blog() {
  return (
    <div>
      <section className="blog padding" id="blog" data-scroll-index="6">
        <div className="container">
            <div className="row">

                
                <div className="text-center">
                    <h2 className="heading-primary mb-5">Our Blog</h2>
                    <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
                        dolores! Iure perspiciatis, minus modi ratione est maiores. Perferendis, porro aperiam.</p>
                </div>
               
                <div className="blog-list col-lg-4 col-md-6 col-sm-10 mx-auto">
                    <div className="blog-img">
                        <div className="post-date">
                            <span className="date">20</span>
                            <span className="month">feb</span>
                        </div>
                        <img src="img/hero-03.jpg" alt="blog-image" />
                    </div>
                    <div className="blog-item">
                        <div className="post-title">
                            <a href="#0">
                                <h3>5 Best Responsive Web Design Practices</h3>
                            </a>
                        </div>
                        <div className="post-content mb-5">
                            <p className="mb-5">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit minima placeat aut
                                obcaecati iusto qui.
                            </p>
                            <a href="#0" className="button">Read More<i className="fa fa-long-arrow-right"></i></a>
                        </div>
                        <div className="post-meta mt-5">
                            <ul>
                                <li>
                                    <i className="fa fa-tags"></i>
                                    <span>Web Design</span>
                                </li>
                                <li>
                                    <i className="fa fa-book"></i>
                                    <span>7 mins read</span>
                                </li>
                                <li>
                                    <i className="fa fa-comment"></i>
                                    <a href="#0">4</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
              
                <div className="blog-list col-lg-4 col-md-6 col-sm-10 mx-auto">
                    <div className="blog-img">
                        <div className="post-date">
                            <span className="date">13</span>
                            <span className="month">jul</span>
                        </div>
                        <img src="img/hero-04.jpg" alt="blog-image" />
                    </div>
                    <div className="blog-item">

                        <div className="post-title">
                            <a href="#0">
                                <h3> The Most Important Rule in UX Design </h3>
                            </a>
                        </div>
                        <div className="post-content mb-5">
                            <p className="mb-5">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod maxime in consectetur.
                            </p>
                            <a href="#0" className="button">Read More<i className="fa fa-long-arrow-right"></i></a>
                        </div>

                        <div className="post-meta mt-5">
                            <ul>
                                <li>
                                    <i className="fa fa-tags"></i>
                                    <span>User Experience</span>
                                </li>
                                <li>
                                    <i className="fa fa-book"></i>
                                    <span>3 mins read</span>
                                </li>
                                <li>
                                    <i className="fa fa-comment"></i>
                                    <a href="#0">8</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
               
                <div className="blog-list col-lg-4 col-md-6 col-sm-10 mx-auto">
                    <div className="blog-img">
                        <div className="post-date">
                            <span className="date">22</span>
                            <span className="month">apr</span>
                        </div>
                        <img src="img/hero-02.jpg" alt="blog-image" />
                    </div>
                    <div className="blog-item">

                        <div className="post-title">
                            <a href="#0">
                                <h3>5 Business Trends Set to Rule the Industry</h3>
                            </a>
                        </div>
                        <div className="post-content mb-5">
                            <p className="mb-5">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi repudiandae itaque
                                enim architecto.
                            </p>
                            <a href="#0" className="button">Read More<i className="fa fa-long-arrow-right"></i></a>
                        </div>

                        <div className="post-meta mt-5">
                            <ul>
                                <li>
                                    <i className="fa fa-tags"></i>
                                    <span>Business & Tech</span>
                                </li>
                                <li>
                                    <i className="fa fa-book"></i>
                                    <span>5 mins read</span>
                                </li>
                                <li>
                                    <i className="fa fa-comment"></i>
                                    <a href="#0">7</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                

            </div>
        </div>
    </section>
    </div>
  )
}

export default Blog
