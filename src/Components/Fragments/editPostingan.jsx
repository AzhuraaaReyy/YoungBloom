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
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      <div className="p-4  items-center  mt-40 ml-1">
        <Link to="/dashboard" className="text-white">
          <Icon.arrow />
        </Link>

        <div className="flex flex-col min-h-screen bg-black text-white items-center    ">
          {/* Header */}

          <header className="text-center py-4 text-5xl font-bold w-full mb-7  ">
            Postingan
          </header>

          {/* Postingan */}
          <div className="flex flex-col gap-6 px-4 w-full max-w-md">
            <div key={post.id} className="pb-20">
              {" "}
              {/* Tambah padding bawah */}
              <img
                src={post.image}
                alt={post.title}
                className="w-80 rounded-lg object-cover mx-auto"
              />
              <p className="text-[18px] text-gray-300 text-left mt-12 ml-12 ">
                {post.description}
              </p>
            </div>
          </div>

          {/* Tombol Edit & Hapus */}
          <div className="flex space-x-10 ">
            <NavLink to="">
              <button className="border-2 border-yellow-500 text-yellow-500 px-6 py-2 rounded-lg mr-10">
                EDIT
              </button>
            </NavLink>
            <button className="border-2 border-red-500 text-red-500 px-6 py-2 rounded-lg">
              HAPUS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditPosts;
