import React, { useContext } from "react";
import banner from "../../assets/task-management-removebg-preview.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="grid grid-cols-2  justify-center rounded items-center mt-40 mx-auto">
      <div className="col-span-1">
        <h1 className="text-3xl font-bold">
          Best Way to Manage
          <br />
          Your Daily Task
        </h1>
        <p className="my-1 text-gray-800">
          Efficiently organize and track your daily tasks with our user-friendly
          task management system. Prioritize assignments, set deadlines, and
          categorize tasks based on their urgency. Stay on top of your
          responsibilities effortlessly, ensuring a productive and stress-free
          day.
        </p>
        {user ? (
          <Link to={"/dashboard"}>
            <button className="text-xl bg-[#FEA946] bg-yea mt-3 px-3 py-4 rounded-md">
              Go Dashboard
            </button>
          </Link>
        ) : (
          <Link to={"/login"}>
            <button className="text-xl bg-[#FEA946] bg-yea mt-3 px-3 py-4 rounded-md">
              Let’s Explore
            </button>
          </Link>
        )}
      </div>
      <div className="col-span-1">
        <img className="w-full h-full" src={banner} alt="" />
      </div>
    </div>
  );
};

export default Home;
