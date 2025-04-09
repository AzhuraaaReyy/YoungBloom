import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../Elements/Button";

const HalamanUtama = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white px-4">
      <div className="w-full max-w-md text-center p-6">
        {/* Logo */}
        <div className="mb-2">
          <img
            className="w-100 h-100 mx-auto rounded-full object-cover"
            src="images/Group9.png"
            alt="Young Bloom Studio Logo"
          />
        </div>

        {/* Deskripsi */}
        <h3 className="text-sm leading-relaxed opacity-80">
          "Young Bloom Studio" carries a deep and inspiring meaning. The word
          "Young" symbolizes energy, creativity, and a "fresh," youthful spirit.
          Meanwhile, the word "Bloom" represents the process of growth,
          development, and reaching one's full potential. Thus, the name "Young
          Bloom Studio" can be interpreted as a place where young creativity and
          innovation flourish and thrive.
        </h3>

        {/* Tombol Register & Login */}
        <div className="mt-10 space-y-6">
          <NavLink to="/login">
            <Button
              variant={
                " w-full border border-white py-3 rounded-md font-semibold transition mt-4 hover:bg-[#639F4E] hover:text-white hover:border-[#639F4E]"
              }
            >
              Log In
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HalamanUtama;
