import React, { useState, useContext, useEffect } from "react";
import BlogContext from "../Context/BlogState";
import { useNavigate, useLocation } from "react-router-dom";

const Editblog = () => {
  const context = useContext(BlogContext);
  const { updateBlog, blogList } = context;
  const navigate = useNavigate();

  let location = useLocation();
  let id = location.pathname.split("/")[2];

  const [thiblog, setThisblog] = useState({});

  useEffect(() => {
    let cur = blogList.filter((blo) => blo._id === id);
    setThisblog(cur[0]);
    console.log(cur[0]);
    // eslint-disable-next-line
  }, []);

  const handleChange = (e) => {
    setThisblog({...thiblog, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBlog(id, thiblog)
    navigate("/");
  }

  return (
    <div>
      <form className="form">
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
            value={thiblog.title}
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
            name="description"
            value={thiblog.description}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
            onClick={(e) => handleSubmit(e)}
        >
          Edit Blog
        </button>
      </form>
    </div>
  );
};

export default Editblog;
