import React, { useContext } from "react";
import Blog from "./Blog";
import BlogState from "../Context/BlogState";
import Footer from "./Footer";

const Blogs = () => {
  const context = useContext(BlogState);

  if (context.blogList.length === 0) {
    return <h1>No items yet</h1>;
  } 
  
  else {
    return (
      <div>
        <div className="blogList">
          {context.blogList.map((blog) => {
            return <Blog blog={blog} key={blog._id} />;
          })}
        </div>
        <Footer />
      </div>
    );
  }
};

export default Blogs;
