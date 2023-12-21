import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";
import Navbar from "../Pages/Navbar/Navbar";

const Root = () => {
  return (
    <div className="font-inter min-h-screen flex flex-col">
      <div className="px-10 container mx-auto flex-grow">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
