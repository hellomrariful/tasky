import React from "react";
import banner from "../../assets/task-management-removebg-preview.png";

const Home = () => {
  return (
    <div className="grid grid-cols-2  justify-center rounded items-center mt-40 mx-auto">
      <div className="col-span-1">
        <h1 className="text-3xl font-bold">
          Best Way to Manage
          <br />
          Your Daily Task
        </h1>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eum
          quidem expedita! Explicabo, magni atque deserunt eligendi sit iusto
          dicta dolorem quasi deleniti maxime quas ab repellat quo sint
          voluptatum?
        </p>
        <button className="text-xl bg-white mt-3 px-3 py-4 rounded-md">
          Let’s Explore
        </button>
      </div>
      <div className="col-span-1">
        <img className="w-full h-full" src={banner} alt="" />
      </div>
    </div>
  );
};

export default Home;
