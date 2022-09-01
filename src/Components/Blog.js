import React, { useContext } from "react";
import { Link } from "react-router-dom";
import BlogState from "../Context/BlogState";

const Blog = ({ blog }) => {
  const context = useContext(BlogState);
  const { getBlogByid, currBlog } = context;

  const getFullBlog = (id) => {
    getBlogByid(id);
    console.log(currBlog);
  };

  return (
    <div className="blog">
      <h1 className="title">{blog.title}</h1>
      <p className="description m-3">{blog.description.substring(0, 80)}...</p>
      <h5 className="date">{blog.date.toString().substring(0, 10)}</h5>
      <button
        className="btn btn-success m-3"
        style={{"width": "100px"}}
        onClick={() => getFullBlog(blog._id)}
      >
        <Link to={`/blog/${blog._id}`} className="nav-link">
          Read ...
        </Link>
      </button>
    </div>
  );
};

export default Blog;
