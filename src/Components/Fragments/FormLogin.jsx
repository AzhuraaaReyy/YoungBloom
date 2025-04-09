import LabeledInput from "../Elements/LabeledInput";
import { useForm } from "react-hook-form";
import Button from "../Elements/Button";
import { Link, useNavigate, NavLink } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

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
    <div className="flex items-center justify-center min-h-screen bg-black text-white px-4">
      <div className="w-full max-w-sm p-6 bg-black rounded-lg">
        {/* Judul */}
        <h2 className="text-2xl font-bold mb-6">Log In</h2>

        {/* Form Login */}
        <div className="mt-16">
          <form onSubmit={handleSubmit(onSubmit, onErrors)}>
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

            <div className="mb-7">
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

            {/* Lupa Password */}
            <div className="text-center mb-7">
              <NavLink
                to="/forgot-password"
                className="text-[#639F4E] text-sm underline"
              >
                Forgot password?
              </NavLink>
            </div>

            {/* Tombol Login */}
            <Button
              variant={`
                ${
                  !isValid
                    ? "bg-gray-05 text-[#58BC82] "
                    : "bg-[#639F4E] text-white"
                } w-full  border border-green-500 rounded-[50px] "`}
              type="submit"
              className="w-full bg-[#639F4E] text-white py-2 rounded-md font-semibold hover:bg-[#639F4E] transition"
            >
              Log in
            </Button>
          </form>

         
        </div>
      </div>
    </div>
  );
};
export default Login;
