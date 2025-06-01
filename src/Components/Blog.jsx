import React from 'react';
import BlogCard from './BlogCard';

function Blog() {
  return (
    <section className="blog padding" id="blog" data-scroll-index="6">
      <div className="container">
        <div className="row">
          <div className="text-center">
            <h2 className="heading-primary mb-5">Our Blog</h2>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              dolores! Iure perspiciatis, minus modi ratione est maiores.
              Perferendis, porro aperiam.
            </p>
          </div>

          <BlogCard
            date="20"
            month="Feb"
            image="public/img/hero-03.jpg"
            title="5 Best Responsive Web Design Practices"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit minima placeat aut obcaecati iusto qui."
            tags="Web Design"
            readTime="7 mins read"
            comments="4"
          />

          <BlogCard
            date="13"
            month="Jul"
            image="public/img/hero-04.jpg"
            title="The Most Important Rule in UX Design"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod maxime in consectetur."
            tags="User Experience"
            readTime="3 mins read"
            comments="8"
          />

          <BlogCard
            date="22"
            month="Apr"
            image="public/img/hero-02.jpg"
            title="5 Business Trends Set to Rule the Industry"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi repudiandae itaque enim architecto."
            tags="Business & Tech"
            readTime="5 mins read"
            comments="7"
          />
        </div>
      </div>
    </section>
  );
}

export default Blog;
