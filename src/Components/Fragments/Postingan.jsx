import { NavLink } from "react-router-dom";
import posts from "../../Data/posts";
import { FaPlus } from "react-icons/fa";

const Posts = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white items-center pb-2 mt-10">
      {/* Header */}
      <header className="text-center py-6 text-5xl font-bold w-full mb-3 mt-20">
        Gallery
      </header>

      {/* Postingan */}
      <div className="flex flex-col gap-6 px-4 w-full max-w-md">
        {posts.map((post) => (
          <div key={post.id} className="pb-20">
            {" "}
            {/* Tambah padding bawah */}
            <img
              src={post.image}
              alt={post.title}
              className="w-full rounded-lg object-cover"
            />
            <p className="text-[20px] text-gray-300 text-left mt-10">
              {post.description}
            </p>
            <div className="mt-4 flex flex-col items-start w-full">
              <div className="w-full my-2"></div>
              <NavLink
                to="/edit"
                className="text-green-400 text-sm font-semibold text-left w-full"
              >
                Lihat
              </NavLink>
              <div className="w-[30%] border-t border-green-700 my-2"></div>
              <NavLink
                to={`/edit/${post.id}`}
                className="text-green-400 text-sm font-semibold text-left w-full"
              >
                Postingan
              </NavLink>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Action Button */}
      <NavLink to="/tambah">
        <button className="fixed bottom-10 right-10 bg-blue-600 text-white p-4 rounded-full shadow-lg">
          <FaPlus size={20} />
        </button>
      </NavLink>
    </div>
  );
};
export default Posts;
