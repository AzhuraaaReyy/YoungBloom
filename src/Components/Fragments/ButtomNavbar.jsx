import {
  AiOutlineHome,
  AiOutlineFileText,
  AiOutlineUser,
} from "react-icons/ai";
const ButtomNavbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white text-gray-700 flex justify-around py-3 shadow-md">
      <button className="flex flex-col items-center text-black">
        <AiOutlineHome size={24} />
        <span className="text-sm">Home</span>
      </button>
      <button className="flex flex-col items-center text-gray-500">
        <AiOutlineFileText size={24} />
        <span className="text-sm">Postingan</span>
      </button>
      <button className="flex flex-col items-center text-gray-500">
        <AiOutlineUser size={24} />
        <span className="text-sm">Profile</span>
      </button>
    </nav>
  );
};
export default ButtomNavbar;
