const Input = ({ name, type, placeholder, register }) => {
  const variant =
    "bg-special-mainbg border border-[#639F4E] py-3 ps-4 text-sm rounded-md w-full text-white placeholder-gray-01 focus:border-black focus:outline-none focus:ring-0 bg-[#9C9C9C60] border border-[#639F4E]";

  return type === "textarea" ? (
    <textarea
      className={`${variant} resize-none`}
      placeholder={placeholder}
      name={name}
      id={name}
      rows="4"
      {...register}
    />
  ) : (
    <input
      type={type}
      className={`${variant} `}
      placeholder={placeholder}
      name={name}
      id={name}
      {...register}
    />
  );
};
export default Input;
