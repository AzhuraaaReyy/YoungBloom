import { NavLink } from "react-router-dom";
import posts from "../../Data/posts";
import { FaPlus } from "react-icons/fa";

const AllPost = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white items-center pb-2 mt-10">
      {/* Header */}
      <header className="text-center py-6 text-5xl font-bold w-full mb-3 mt-20">
        Postingan
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
            <div className="mt-4 flex flex-row items-center justify-start w-full gap-4">
              <NavLink
                to={`/edit-form/${post.id}`}
                className="text-[#639F4E] text-sm font-semibold underline"
              >
                Edit
              </NavLink>

              <div className="h-4 border-l border-white"></div>

              <NavLink
                to={``}
                className="text-red-600 text-sm font-semibold underline"
              >
                Hapus
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AllPost;
