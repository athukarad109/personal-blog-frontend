import "./App.css";
import Navbar from "./Components/Navbar";
import Blogs from "./Components/Blogs";
import Addblog from "./Components/Addblog";
import Fakeadd from "./Components/Fakeadd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fullblog from "./Components/Fullblog";
import Editblog from "./Components/Editblog";
import { BlogProvider } from "./Context/BlogState";

function App() {
  return (
    <div className="App">
      <BlogProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Blogs />} />
            <Route path="/addnew" element={<Fakeadd />} />
            <Route path="/add/athukarad" element={<Addblog />} />
            <Route path="/blog/:id" element={<Fullblog />} />
            <Route path="/edit/:id" element={<Editblog />} />
          </Routes>
        </BrowserRouter>
      </BlogProvider>
    </div>
  );
}

export default App;
