import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../Elements/Button";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const HalamanUtama = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = () => {
    navigate("/dashboard"); // Ganti dengan halaman tujuan
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white px-4">
      <div className="w-full max-w-md text-center p-6">
        {/* Logo */}
        <div className="mb-5">
          <img
            className="w-100 h-100 mx-auto rounded-full object-cover"
            src="images/Group9.png"
            alt="Young Bloom Studio Logo"
          />
        </div>

        {/* Deskripsi */}
        <p className="text-sm leading-relaxed opacity-80">
          "Young Bloom Studio" carries a deep and inspiring meaning. The word
          "Young" symbolizes energy, creativity, and a "fresh," youthful spirit.
          Meanwhile, the word "Bloom" represents the process of growth,
          development, and reaching one's full potential. Thus, the name "Young
          Bloom Studio" can be interpreted as a place where young creativity and
          innovation flourish and thrive.
        </p>

        {/* Tombol Register & Login */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-10 space-y-4">
            <Button
              variant={`
          ${
            !isValid ? "bg-gray-05" : "bg-[#1e90ff] "
          } w-full border border-green-500 bg-white text-green-500 py-2 rounded-md font-semibold hover:bg-green-600 hover:text-white transition"`}
              type="submit"
              disabled={!isValid ? "disabled" : ""}
            >
              Register
            </Button>

            <Button
              variant={`
          ${
            !isValid ? "bg-gray-05" : " "
          } w-full border border-white py-2 rounded-md font-semibold hover:bg-green-600 hover:text-white transition"`}
              type="submit"
              disabled={!isValid ? "disabled" : ""}
            >
              Log In
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HalamanUtama;
