import PropTypes from "prop-types";
import bookmark from "../../assets/images/bookmark.svg";

const Blog = ({ blog, handleBookmark, handleMarkAsRead }) => {
  const {
    cover,
    title,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="space-y-5 mb-10">
      <div>
        <img className="w-full rounded-md" src={cover} alt="" />
      </div>
      {/* 2nd */}
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <div>
            <img className="w-12" src={author_img} alt="" />
          </div>
          <div>
            <h5 className="text-xl font-bold">{author}</h5>
            <p className="text-gray-400">{posted_date}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <p className="text-gray-600">{reading_time} min read</p>
          <button onClick={() => handleBookmark(blog)}>
            <img src={bookmark} alt="" />
          </button>
        </div>
      </div>
      <h1 className="text-4xl font-bold">{title}</h1>
      <div className="flex gap-5 text-gray-400">
        {hashtags.map((hashtag, idx) => (
          <p key={idx}>#{hashtag}</p>
        ))}
      </div>
      <p
        onClick={() => handleMarkAsRead(reading_time)}
        className="underline cursor-pointer w-max"
      >
        Mark as read
      </p>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};

export default Blog;
