import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

function AppLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default AppLayout;
