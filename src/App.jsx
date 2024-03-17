import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Header from "./Components/Header/Header";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import { useState } from "react";

function App() {
  const [bookmark, setBookmark] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookmark = (blog) => {
    const newBookmark = [...bookmark, blog];
    const isExist = bookmark.find((item) => item.id === blog.id);
    if (isExist) {
      toast.warn(`"${blog.title}" already exist`);
    } else {
      setBookmark(newBookmark);
      toast.success(`"${blog.title}" added in your bookmark list`);
    }
  };

  const handleMarkAsRead = (time) => {
    const addingTime = readingTime + time;
    setReadingTime(addingTime);
  };

  return (
    <>
      <Header></Header>
      <div className="md:flex gap-6 mt-12">
        <Blogs
          handleBookmark={handleBookmark}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmarks bookmark={bookmark} readingTime={readingTime}></Bookmarks>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
