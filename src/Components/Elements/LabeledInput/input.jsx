const Input = ({ name, type, placeholder, register }) => {
  const variant = "bg-special-mainbg border border-gray-03";
  const commonClasses =
    "py-3 ps-4 text-sm rounded-md w-full text-white placeholder-gray-01 focus:border-black focus:outline-none focus:ring-0 bg-[#9C9C9C60] border border-green-500";
  return type === "textarea" ? (
    <textarea
      className={`${variant} ${commonClasses} resize-none`}
      placeholder={placeholder}
      name={name}
      id={name}
      rows="4"
      {...register}
    />
  ) : (
    <input
      type={type}
      className={`${variant} ${commonClasses}`}
      placeholder={placeholder}
      name={name}
      id={name}
      {...register}
    />
  );
};
export default Input;
