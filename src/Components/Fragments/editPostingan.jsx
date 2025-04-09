import posts from "../../Data/posts";
import { Link, useParams, useNavigate, NavLink } from "react-router-dom";
import Header from "./Header";
import { Icon } from "../Elements/Icon";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const EditPosts = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const { id } = useParams();
  const navigate = useNavigate();

  const post = posts.find((p) => p.id === parseInt(id));

  const [title] = useState(post?.title || "");
  const [description] = useState(post?.description || "");

  if (!post) {
    return (
      <div className="text-white text-center mt-10">
        Postingan Tidak Ditemukan
      </div>
    );
  }

  const handlesave = () => {
    post.title = title;
    post.description = description;
    navigate(`/edit/${id}`);
  };

  const handleDelete = () => {
    const index = posts.findIndex((p) => p.id === parseInt(id));
    if (index !== -1) {
      posts.splice(index, 1);
    }
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white pb-10">
      <Header />

      <div className="p-4 bg-black flex flex-col items-center mt-40">
        <Link to="/dashboard" className="absolute top-32 left-12 text-white">
          <Icon.arrow />
        </Link>

        {/* Header */}
        <div className="text-center text-4xl font-bold mt-7 mb-10">
          Postingan
        </div>

        {/* Postingan */}
        <div className="flex flex-col gap-6 px-4 w-full max-w-lg bg-black">
          <div key={post.id} className="pb-10 flex flex-col items-center">
            <img
              src={post.image}
              alt={post.title}
              className="w-80 rounded-lg object-cover"
            />
            <p className="text-[18px] text-gray-300 text-center mt-6">
              {post.description}
            </p>
          </div>
        </div>

        {/* Tombol Edit & Hapus */}
        <div className="flex space-x-6 mt-6">
          <button
            onClick={() => navigate(`/edit-form/${id}`)}
            className="border-2 border-[#639F4E] text-[#639F4E] px-6 py-2 rounded-lg hover:bg-[#639F4E] hover:text-white"
          >
            EDIT
          </button>
          <button
            //onClick={handleDelete}
            className="border-2 border-red-500 text-red-500 px-6 py-2 rounded-lg hover:bg-red-500 hover:text-white"
          >
            HAPUS
          </button>
        </div>
      </div>
    </div>
  );
};
export default EditPosts;
