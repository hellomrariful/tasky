import React, { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ToDo = () => {
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  const { data: task = [], refetch } = useQuery({
    queryKey: ["task"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/task/${user?.email}`);
      // console.log(res.data);
      return res.data;
    },
  });

  const [openDropdownMap, setOpenDropdownMap] = useState({});

  const toggleDropdown = (taskId) => {
    setOpenDropdownMap((prevMap) => ({
      ...prevMap,
      [taskId]: !prevMap[taskId],
    }));
  };

  const handelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/task/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="px-5">
      <h1 className="mx-auto text-center mt-5 text-3xl">
        {" "}
        Welcome Back <span>{user?.displayName}, Here Your Daily Task</span>
      </h1>

      <div className="grid lg:grid-cols-3 gap-5 mt-10">
        <div className="bg-[#EEF2F5] px-4">
          <h1 className="text-center mt-3 mb-3">To do</h1>
          {task?.map((task) => (
            <div
              key={task._id}
              className="w-full justify-center mx-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-5"
            >
              <div className="px-4 pt-4">
                <div className="relative">
                  <div className="flex justify-between items-center">
                    <h1>{task.priority}</h1>
                    <button
                      id={`dropdownButton-${task._id}`}
                      onClick={() => toggleDropdown(task._id)}
                      className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                      type="button"
                    >
                      <span className="sr-only">Open dropdown</span>
                      <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 3"
                      >
                        <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                      </svg>
                    </button>
                  </div>
                  {/* Dropdown menu */}
                  <div
                    id={`dropdown-${task._id}`}
                    className={`absolute right-0 z-50 ${
                      openDropdownMap[task._id] ? "" : "hidden"
                    } text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
                  >
                    <ul
                      className="py-2"
                      aria-labelledby={`dropdownButton-${task._id}`}
                    >
                      <li>
                        <Link
                          to={`/dashboard/updateTask/${task._id}`}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Update
                        </Link>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                          onClick={() => handelDelete(task._id)}
                        >
                          Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <h1 className="text-2xl">{task.Title}</h1>
                <p>{task.Description}</p>
                <div className="flex items-center justify-between mt-4">
                  <span>
                    <img
                      className="object-cover w-10 h-10 rounded-full"
                      src={user?.photoURL}
                      alt=""
                    />
                  </span>
                  <span>10 January</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h1>In progress</h1>
        </div>
        <div>
          <h1>Done</h1>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
