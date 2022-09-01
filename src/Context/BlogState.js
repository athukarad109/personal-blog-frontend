import { createContext, useState, useEffect } from "react";

const BlogContext = createContext();

const url = 'https://ak-personal-blog.herokuapp.com/api/blog';

export function BlogProvider({children}){

  const blogs = [
    
  ];


  const [blogList, setblogList] = useState(blogs);
  const [currBlog, setCurrBlog] = useState({});

  useEffect(() => {
    getBlogs();
  }, [blogList]);


  //Get all blogs
  const getBlogs = async () => {
    const response = await fetch(`${url}/allblogs`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
      // body: JSON.stringify(data)
    })
    const data = await response.json();
    setblogList(data);
  }


  //Add a new blog
  const addBlog = async(title, description) => {
    const response = await fetch(`${url}/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({title, description})
    })
    const data = await response.json();
    console.log(data);
  }

  
  //Get a blog by id
  const getBlogByid = async(id) => {
    const response = await fetch(`${url}/getblog/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
      // body: JSON.stringify({title, description})
    })
    const data = await response.json();
    setCurrBlog(data);
  }

  //delete blog by id
  const deleteBlog = async(id) => {
    const response = await fetch(`${url}/deleteblog/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
      // body: JSON.stringify({title, description})
    })
    const data = await response.json();
    console.log(data);
  }

  //update blog by id
  const updateBlog = async(id, blog) => {
    const {title, description} = blog;
    const response = await fetch(`${url}/updateblog/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({title, description})
    })
    const data = await response.json();
    console.log(data);
  }

  return(
    <BlogContext.Provider value={{blogList, addBlog, currBlog, getBlogByid, deleteBlog, updateBlog}}>
      {children}
    </BlogContext.Provider>
  )
}

export default BlogContext;

