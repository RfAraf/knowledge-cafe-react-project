import PropTypes from "prop-types";
const Bookmarks = ({ bookmark, readingTime }) => {
  return (
    <div className="md:w-1/3 ">
      <div className="border border-purple-400 bg-purple-100 mb-6 text-center p-4 rounded-md">
        <h3 className="text-xl font-bold text-purple-600">
          Spent time on read : {readingTime} min
        </h3>
      </div>
      <div className="bg-gray-200 rounded-md p-4 space-y-4">
        <h1 className="text-xl font-bold">
          Bookmarked Blogs: {bookmark.length}
        </h1>
        <ul className="space-y-2 *:bg-white *:p-3 *:rounded-md *:font-semibold">
          {bookmark.map((item, idx) => (
            <li key={idx}>{item.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmark: PropTypes.array.isRequired,
  readingTime: PropTypes.number.isRequired,
};

export default Bookmarks;
