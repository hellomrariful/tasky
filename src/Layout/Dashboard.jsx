import { useContext } from "react";
import { Link, NavLink, Navigate, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { FaBook } from "react-icons/fa";

const Dashboard = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handelSignOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="min-h-screen grid md:grid-cols-3 mt-10">
      {/* sidebar left */}
      <div className="md:col-span-1">
        <div className="flex items-center p-2 space-x-4 mx-auto justify-center ">
          <img
            src={user?.photoURL}
            className="w-12 h-12 rounded-full dark:bg-gray-500"
          />
          <div>
            <h2 className="text-2xl font-semibold">{user?.displayName}</h2>
            <span className="flex items-center space-x-1">
              <Link className=" hover:underline text-xl text-blue-500 underline" to="/profile">
                View profile
              </Link>
            </span>
          </div>
        </div>

        <div className="divide-y dark:divide-gray-700 mt-2 text-center mx-auto justify-center grid">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            <li className="dark:bg-gray-800 dark:text-gray-50">
              <NavLink className="flex items-center p-1 gap-1 rounded-md text-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-7 h-8 fill-current dark:text-gray-400"
                >
                  <path d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z"></path>
                </svg>
                Dashboard
              </NavLink>
            </li>

            <li>
              <NavLink
                to="addTask"
                className="flex items-center p-1 gap-1 rounded-md text-2xl "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                Add Task
              </NavLink>
            </li>
          </ul>
          <ul className="pt-4 pb-2 space-y-1 text-sm">
            <li>
              <NavLink
                to="/"
                className="flex items-center p-1 gap-1 rounded-md text-2xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
                Home
              </NavLink>
            </li>
            <li>
              <button
                onClick={handelSignOut}
                className="flex items-center  rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7 ml-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                  />
                </svg>
                <span className="text-2xl">Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* sidebar right */}
      <div className="md:col-span-2 border">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
