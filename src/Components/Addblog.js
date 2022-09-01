import React, { useState, useContext} from 'react'
import BlogContext from '../Context/BlogState';
import { useNavigate} from 'react-router-dom'

const Addblog = () => {

  const context = useContext(BlogContext);
  const {addBlog} = context;
  const navigate = useNavigate();

  const [blog, setblog] = useState({});

  const handleChange = (e) => {
    setblog({...blog, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addBlog(blog.title, blog.description);
    navigate("/");
    console.log({"title": blog.title, "description": blog.description})
  }

  return (
    <div>
      <form className='form'>
        
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="title"
            onChange={(e) => handleChange(e)}
          />
          
        </div>
        
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Description
          </label>
          <textarea
            rows={15}
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            name='description'
            onChange={(e) => handleChange(e)}
          />
        </div>
        
        <button type="submit" className="btn btn-primary" onClick={(e) => handleSubmit(e)}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Addblog
