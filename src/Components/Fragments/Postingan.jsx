import posts from "../../Data/posts";
import { FaPlus } from "react-icons/fa";

const Posts = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white items-center pb-24">
      {/* Header */}
      <header className="text-center py-6 text-3xl font-bold w-full">
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
            <p className="text-2xl text-gray-300 text-center mt-10">
              {post.description}
            </p>
            <div className="mt-4 flex flex-col items-start w-full">
              <div className="w-full my-2"></div>
              <a
                href="#"
                className="text-green-400 text-sm font-semibold text-left w-full"
              >
                Lihat
              </a>
              <div className="w-[20%] border-t border-green-700 my-2"></div>
              <a
                href="#"
                className="text-green-400 text-sm font-semibold text-left w-full"
              >
                Postingan
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-20 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg">
        <FaPlus size={20} />
      </button>
    </div>
  );
};
export default Posts;
