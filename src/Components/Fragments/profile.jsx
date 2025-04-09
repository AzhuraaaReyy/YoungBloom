import { useState, useRef, useEffect } from "react";
import Header from "./Header";

const ProfilePage = () => {
  const [initialUsername, setInitialUsername] = useState("paman san");
  const [initialEmail, setInitialEmail] = useState("sanengineer@email.com");
  const [initialImage, setInitialImage] = useState("/images/britop.png");

  const [username, setUsername] = useState(initialUsername);
  const [email, setEmail] = useState(initialEmail);
  const [image, setImage] = useState(initialImage);

  const [tempUsername, setTempUsername] = useState(initialUsername);
  const [tempEmail, setTempEmail] = useState(initialEmail);

  const [isEditingUsername, setIsEditingUsername] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);

  const fileInputRef = useRef(null);
  const usernameInputRef = useRef(null);
  const emailInputRef = useRef(null);

  useEffect(() => {
    if (isEditingUsername && usernameInputRef.current) {
      usernameInputRef.current.focus();
    }
    if (isEditingEmail && emailInputRef.current) {
      emailInputRef.current.focus();
    }
  }, [isEditingUsername, isEditingEmail]);

  const handleEditClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleSaveChanges = () => {
    if (tempUsername.trim() === "") {
      alert("Username tidak boleh kosong");
      return;
    }

    if (!tempEmail.includes("@") || !tempEmail.includes(".")) {
      alert("Email tidak valid");
      return;
    }

    // Simpan perubahan
    setUsername(tempUsername);
    setEmail(tempEmail);
    setInitialUsername(tempUsername);
    setInitialEmail(tempEmail);
    setInitialImage(image);

    setIsEditingUsername(false);
    setIsEditingEmail(false);

    alert("Semua perubahan berhasil disimpan!");
  };

  const handleCancelUsernameEdit = () => {
    setTempUsername(username);
    setIsEditingUsername(false);
  };

  const handleCancelEmailEdit = () => {
    setTempEmail(email);
    setIsEditingEmail(false);
  };

  const hasChanges =
    tempUsername !== initialUsername ||
    tempEmail !== initialEmail ||
    image !== initialImage;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center pt-10">
      <div>
        <Header />
      </div>

      <div className="mt-20"></div>

      {/* Foto Profil */}
      <div className="relative w-32 h-32 mt-10 mb-10">
        <img
          src={image}
          alt="Profile"
          className="w-full h-full rounded-3xl border-2 border-black object-cover"
        />
        <button
          onClick={handleEditClick}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#716B6BDB] bg-opacity-50 text-white text-sm px-3 py-1 rounded-b-2xl w-full text-center"
        >
          Edit
        </button>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageChange}
          className="hidden"
        />
      </div>

      {/* Informasi User */}
      <div className="flex flex-col mt-8 w-full max-w-md space-y-4">
        {/* Username */}
        <div className="flex items-center justify-between bg-gray-800 p-3 rounded-lg mb-3">
          <div className="flex-1 mr-4">
            <p className="text-gray-400 text-sm">Username</p>
            {isEditingUsername ? (
              <input
                type="text"
                value={tempUsername}
                ref={usernameInputRef}
                onChange={(e) => setTempUsername(e.target.value)}
                className="bg-gray-700 text-white p-1 rounded w-full mt-1 border border-[#639F4E] focus:border-[#639F4E] focus:outline-none"
              />
            ) : (
              <p className="font-semibold">{username}</p>
            )}
          </div>
          <button
            onClick={
              isEditingUsername
                ? handleCancelUsernameEdit
                : () => setIsEditingUsername(true)
            }
            className="text-[#639F4E] text-sm"
          >
            {isEditingUsername ? "Batal" : "Edit"}
          </button>
        </div>

        {/* Email */}
        <div className="flex items-center justify-between bg-gray-800 p-3 rounded-lg">
          <div className="flex-1 mr-4">
            <p className="text-gray-400 text-sm">Email</p>
            {isEditingEmail ? (
              <input
                type="email"
                value={tempEmail}
                ref={emailInputRef}
                onChange={(e) => setTempEmail(e.target.value)}
                className="bg-gray-700 text-white p-1 rounded w-full mt-1 border border-[#639F4E] focus:border-[#639F4E] focus:outline-none"
              />
            ) : (
              <p className="font-semibold">{email}</p>
            )}
          </div>
          <button
            onClick={
              isEditingEmail
                ? handleCancelEmailEdit
                : () => setIsEditingEmail(true)
            }
            className="text-[#639F4E] text-sm"
          >
            {isEditingEmail ? "Batal" : "Edit"}
          </button>
        </div>

        {/* Tombol Simpan */}
        {hasChanges && (
          <button
            onClick={handleSaveChanges}
            className="bg-[#639F4E] hover:bg-[#639F4E] text-white px-4 py-2 rounded-xl text-sm transition mb-6"
          >
            Simpan Perubahan
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
