import LabeledInput from "../Elements/LabeledInput";
import { useForm } from "react-hook-form";
import Button from "../Elements/Button";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
const Register = () => {
  const [avatar, setAvatar] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setAvatar(URL.createObjectURL(file));
    }
  };
  const onErrors = (errors) => console.error(errors);
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white px-4">
      <div className="w-full max-w-sm p-6 bg-black rounded-lg">
        {/* Judul */}
        <h2 className="text-2xl font-bold mb-9">Register</h2>

        {/*upload Avatar*/}

        <div className="flex flex-col items-center mb-6">
          <label htmlFor="avatar" className="cursor-pointer">
            <div className="w-24 h-24 rounded-full bg-green-500 flex items-center justify-center text-white font-semibold text-sm">
              {avatar ? (
                <img
                  src={avatar}
                  alt="Avatar"
                  className="w-full h-full rounded-full"
                />
              ) : (
                "Add Avatar"
              )}
            </div>
          </label>
          <input
            type="file"
            id="avatar"
            className="hidden"
            onChange={handleAvatarChange}
          />
        </div>

        {/* Form Login */}
        <div className="mt-16">
          <form onSubmit={handleSubmit(onErrors)}>
            <div className="mb-9 ">
              <LabeledInput
                label="Username"
                type="text"
                placeholder="hello@example.com"
                name="username"
                register={{
                  ...register("username", {
                    required: "Username Tidak Boleh Kosong!",
                    pattern: {
                      value: /^(?=.*[a-zA-Z])[a-zA-Z0-9_]+$/,
                      message:
                        "Username harus mengandung minimal satu huruf dan hanya boleh berisi huruf, angka, serta underscore (_)",
                    },
                    minLength: {
                      value: 4,
                      message: "Username minimal 4 karakter",
                    },
                    maxLength: {
                      value: 16,
                      message: "Username maksimal 16 karakter",
                    },
                  }),
                }}
              />
              {errors?.username && (
                <div className="text-center text-red-500">
                  {errors.username.message}
                </div>
              )}
            </div>

            <div className="mb-10 ">
              <LabeledInput
                label="Email"
                type="email"
                placeholder="hello@example.com"
                name="email"
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

            <div className="mb-10">
              <LabeledInput
                label="password"
                type="password"
                placeholder="********"
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

            {/* Tombol register */}
            <Button
              variant={`
                    ${
                      !isValid
                        ? "bg-gray-05 text-[#58BC82] "
                        : "bg-green-500 text-white"
                    } w-full  border border-green-500 rounded-[50px] "`}
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-md font-semibold hover:bg-green-600 transition"
            >
              Register
            </Button>
          </form>

          {/* Link ke Sign Up */}
          <div className="text-center mt-8 text-sm">
            Already have an acount?{" "}
            <NavLink to="/login" className="text-green-400 underline">
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
