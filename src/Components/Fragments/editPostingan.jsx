import posts from "../../Data/posts";
import { FaPlus } from "react-icons/fa";
import { ArrowLeft, Home, FileText, User} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "./Header";
import { Icon } from "../Elements/Icon";
const EditPosts = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      <header className="p-4 flex items-center mt-40">
        <Link to="/" className="text-white">
          <Icon.arrow />
        </Link>
      </header>
      <div className="flex flex-col min-h-screen bg-black text-white items-center pb-24 ">
        {/* Header */}

        <header className="text-center py-6 text-5xl font-bold w-full mb-3 pb-20">
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
            </div>
          ))}
        </div>

        {/* Tombol Edit & Hapus */}
        <div className="flex space-x-10 mt-6">
          <button className="border-2 border-yellow-500 text-yellow-500 px-6 py-2 rounded-lg mr-10">
            EDIT
          </button>
          <button className="border-2 border-red-500 text-red-500 px-6 py-2 rounded-lg">
            HAPUS
          </button>
        </div>
      </div>
    </div>
  );
};
export default EditPosts;
