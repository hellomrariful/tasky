import React from "react";

const WhyTasky = () => {
  return (
    <div>
      <div className="p-8 bg-white rounded-lg shadow dark:bg-gray-800">
        <p className="text-3xl font-bold text-center text-gray-800 dark:text-white">
          Our Beneficially
        </p>
        <p className="mb-12 text-xl font-normal text-center text-gray-500 dark:text-gray-200">
          See who gets the best output using Tasky
        </p>
        <div className="flex flex-col items-center md:flex-row justify evenly">
          <div className="p-4">
            <div className="mb-4 text-center opacity-90">
              <a href="#" className="relative block">
                <img
                  alt="profile"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLIw2110oY8ktaTCB8kmPFPvgvZW_4tn0XA5KhxkicQI7jnbXUgHST0EZWGILl3AO28do&usqp=CAU"
                  className="mx-auto object-cover rounded-full h-40 w-40 "
                />
              </a>
            </div>
            <div className="text-center">
              <p className="text-2xl text-gray-800 dark:text-white">
                Benefit of Developer
              </p>

              <p className="max-w-xs  font-light text-gray-500 text-md dark:text-gray-400">
                Transform your task management with our intuitive platform,
                offering seamless organization and collaboration for developers.
                Prioritize coding tasks, streamline workflows. Elevate your
                development projects to new heights with our user-friendly and
                efficient task management solution.
              </p>
            </div>
          </div>
          <div className="p-4">
            <div className="mb-4 text-center opacity-90">
              <a href="#" className="relative block">
                <img
                  alt="profile"
                  src="https://logowik.com/content/uploads/images/student5651.jpg"
                  className="mx-auto object-cover rounded-full h-40 w-40 "
                />
              </a>
            </div>
            <div className="text-center">
              <p className="text-2xl text-gray-800 dark:text-white">
                Benefit of Student
              </p>

              <p className="max-w-xs  font-light text-gray-500 text-md dark:text-gray-400">
                Empower students with efficient task management, helping them
                organize assignments, track deadlines, and manage study
                schedules seamlessly. Enhance time management skills by
                prioritizing tasks and fostering a disciplined approach to
                coursework. Collaborative learning experiences, students to
                share resources.
              </p>
            </div>
          </div>
          <div className="p-4">
            <div className="mb-4 text-center opacity-90">
              <a href="#" className="relative block">
                <img
                  alt="profile"
                  src="https://img.freepik.com/premium-vector/banking-conceptual-logo-unique-vector-symbol-banking-system-banker-successful-businessman_570429-35811.jpg"
                  className="mx-auto object-cover rounded-full h-40 w-40 "
                />
              </a>
            </div>
            <div className="text-center">
              <p className="text-2xl text-gray-800 dark:text-white">
                Benefit of Bankers
              </p>

              <p className="max-w-xs  font-light text-gray-500 text-md dark:text-gray-400">
                Empower bankers with our platform's robust financial task
                management, allowing for seamless organization of transactions,
                deadlines. Efficiency by prioritizing tasks, ensuring timely
                responses, and enhancing overall productivity. Elevate banking
                operations with our user-friendly solution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyTasky;
