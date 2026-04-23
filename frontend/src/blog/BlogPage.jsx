import React from "react";

const blogs = [
  {
    title: "Introduction to Artificial Intelligence",
    desc: "Learn the basics of AI and how it is transforming industries.",
    date: "April 2026",
    link: "https://www.w3schools.com/ai/",
  },
  {
    title: "Getting Started with React",
    desc: "A beginner-friendly guide to building modern web apps using React.",
    date: "March 2026",
    link: "https://www.w3schools.com/react/",
  },
  {
    title: "Why Learn Machine Learning?",
    desc: "Explore the importance of ML in today’s tech world.",
    date: "February 2026",
    link: "https://www.w3schools.com/python/python_ml_getting_started.asp",
  },
];

function Blog() {
  return (
    <div>
      {/* HERO */}
      <section className="bg-dark text-white text-center py-5">
        <div className="container">
          <h1 className="fw-bold">Our Blog</h1>
          <p className="mt-3">
            Insights, tutorials, and updates from Atmasamman Group.
          </p>
        </div>
      </section>

      {/* BLOG LIST */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            {blogs.map((blog, index) => (
              <div className="col-md-4" key={index}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body d-flex flex-column">
                    <small className="text-muted">{blog.date}</small>

                    <h5 className="fw-bold mt-2">{blog.title}</h5>

                    <p className="flex-grow-1">{blog.desc}</p>

                    <a
                      href={blog.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
