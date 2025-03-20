import MainLayout from "../Components/Layout/MainLayout";

import Posts from "../Components/Fragments/Postingan";
const DashboardPage = () => {
  return (
    <MainLayout type="dashboard">
      <Posts />
    </MainLayout>
  );
};
export default DashboardPage;
