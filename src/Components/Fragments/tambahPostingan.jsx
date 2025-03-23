import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, NavLink } from "react-router-dom";
import LabeledInput from "../Elements/LabeledInput";
import Button from "../Elements/Button";
const TambahPostingan = () => {
  const [gambar, setGambar] = useState(null);

  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setGambar(e.target.files[0]);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = () => {
    navigate("/dashboard");
  };

  const onErrors = (errors) => console.error(errors);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-10 px-4">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-10">Suntingan</h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit, onErrors)}
        className="w-80 max-w-md space-y-6"
      >
        <div className="mb-10 ">
          <LabeledInput
            label="Gambar"
            type="file"
            placeholder="no file chosen"
            name="gambar"
            register={{
              ...register("email", {
                required: "Email Tidak Boleh Kosong!",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Email tidak valid!",
                },
              }),
            }}
          />
          {errors?.email && (
            <div className="text-center text-red-500">
              {errors.email.message}
            </div>
          )}
        </div>

        <div className="mb-7">
          <LabeledInput
            label="Judul"
            type="text"
            placeholder="Masukkan judul"
            name="password"
            register={{
              ...register("password", {
                required: "Password harus diisi!",
              }),
            }}
          />
          {errors?.password && (
            <div className="text-center text-red-500">
              {errors.password.message}{" "}
            </div>
          )}
        </div>
        <div className="mb-7">
          <LabeledInput
            label="Isi"
            type="textarea"
            placeholder="Masukkan judul"
            name="password"
            register={{
              ...register("password", {
                required: "Password harus diisi!",
              }),
            }}
          />
          {errors?.password && (
            <div className="text-center text-red-500">
              {errors.password.message}{" "}
            </div>
          )}
        </div>

        {/* Tombol Login */}
        {/* Tombol Submit */}
        <button
          type="submit"
          className="w-full bg-black text-green-500 font-semibold py-2 rounded-lg hover:bg-green-700 transition border border-green-500 hover:border-white hover:text-white"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default TambahPostingan;
