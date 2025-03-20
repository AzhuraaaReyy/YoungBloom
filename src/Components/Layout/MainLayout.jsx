import Header from "../Fragments/Header";
import Posts from "../Fragments/Postingan";
import ButtomNavbar from "../Fragments/ButtomNavbar";
const MainLayout = () => {
  return (
    <div className="">
      <Header />
      <Posts />
      <ButtomNavbar/>
    </div>
  );
};
export default MainLayout;
