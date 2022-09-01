import React, { useContext, useEffect, useState } from 'react'
import {useLocation, useNavigate, Link} from 'react-router-dom'
import BlogState from "../Context/BlogState";

const Fullblog = () => {
  const [blog, setblog] = useState({});
  let location = useLocation();
  let id = location.pathname.split("/")[2];

  const context = useContext(BlogState);
  const {deleteBlog, blogList} = context;
  const navigate = useNavigate();

  useEffect(() => {
      let cur = blogList.filter((blo) => blo._id === id);
      setblog(cur[0]);
      console.log(cur[0]);
      // eslint-disable-next-line
  }, [])

  const deleteFullBlog = (id) => {
    deleteBlog(id);
    navigate("/")
  }
 
  return (
    <div className='fullblog'>
      <h3 className='m-5'>{blog.title}</h3>

      <div className="container desc">
        <p>{blog.description}</p>
      </div>

      <button className='btn btn-primary edit m-5'><Link className='nav-link' to={`/edit/${id}`} >Edit</Link></button>
      <button className='btn btn-danger edit m-5' onClick={() => deleteFullBlog(id)}>Delete</button>

    </div>
  )
}

export default Fullblog
