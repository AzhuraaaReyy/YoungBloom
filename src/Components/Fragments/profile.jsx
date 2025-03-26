import { useState } from "react";
import Header from "./Header";

const ProfilePage = () => {
  const [image, setImage] = useState("/public/images/britop.png"); // Ganti dengan default gambar
  const [username, setUsername] = useState("paman san");
  const [email, setEmail] = useState("sanengineer@email.com");

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center pt-10">
      <div className="">
        <Header />
      </div>
      {/* Foto Profil */}
      <div className="mt-20"></div>

      <div className="relative w-32 h-32 mt-5 mb-10">
        <img
          src={image}
          alt="Profile"
          className="w-full h-full rounded-3xl border-2 border-black object-cover"
        />
        <button className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#716B6BDB] bg-opacity-50 text-white text-sm px-3 py-1 rounded-b-2xl w-full text-center">
          Edit
        </button>
      </div>

      {/* Informasi User */}
      <div className="flex flex-col mt-8 w-full max-w-md space-y-4">
        {/* Username */}
        <div className="flex items-center justify-between bg-gray-800 p-3 rounded-lg mb-3">
          <div>
            <p className="text-gray-400 text-sm">Username</p>
            <p className="font-semibold">{username}</p>
          </div>
          <button className="text-green-400 text-sm mr-3">Edit</button>
        </div>
        {/* Email */}
        <div className="flex items-center justify-between bg-gray-800 p-3 rounded-lg">
          <div>
            <p className="text-gray-400 text-sm">Email</p>
            <p className="font-semibold">{email}</p>
          </div>
          <button className="text-green-400 text-sm mr-3">Edit</button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
