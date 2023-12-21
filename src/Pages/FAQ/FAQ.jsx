import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const FAQ = () => {
  const faqItems = [
    {
      question: (
        <p className="text-2xl">How can I add a new task to my task list?</p>
      ),
      answer: (
        <p className="text-xl">
         To add a new task, simply navigate to the task management dashboard and look for the 'Add Task' button. Click on it, and a form will appear where you can input the task title, set a deadline, and assign priority. Click 'Submit,' and your task will be added to the list.
        </p>
      ),
    },
    {
      question: (
        <p className="text-2xl">
          Can I set reminders for upcoming deadlines?</p>
      ),
      answer: (
        <p className="text-xl">
          Yes, our task management system allows you to set reminders for your tasks. When adding or editing a task, you can specify a deadline, and the system will automatically send you reminders leading up to the due date, helping you stay on track and meet your deadlines.
        </p>
      ),
    },
    {
      question: (
        <p className="text-2xl">
          Is it possible to categorize tasks into different projects or categories?
        </p>
      ),
      answer: (
        <p className="text-xl">
         Absolutely! Our task management platform provides the flexibility to categorize tasks into various projects or categories. When adding a task, you can assign it to a specific project or category, making it easier to organize and manage tasks related to different aspects of your life or work.
        </p>
      ),
    },
    {
      question: (
        <p className="text-2xl">
        How can I collaborate with others on a task or project?
        </p>
      ),
      answer: (
        <p className="text-xl">
         Collaborating with team members or colleagues is simple. For tasks that require collaboration, you can invite others to join the project or assign specific tasks to team members. Our platform facilitates seamless communication, file sharing, and progress tracking, ensuring everyone stays informed and contributes to the collective success of the project.
        </p>
      ),
    },
  ];
  const [activeItem, setActiveItem] = useState(null);

  const toggleItem = (index) => {
    setActiveItem(activeItem === index ? null : index);
  };
  return (
    <div className="mt-32">
      {faqItems.map((faqItem, index) => (
        <div key={index} className="relative mb-3">
          <h6 className="mb-0">
            <button
              className="border-slate-100 text-slate-700 rounded-t-1 group relative flex w-full cursor-pointer items-center border-b border-solid p-4 text-left font-semibold text-dark-500 transition-all ease-in"
              onClick={() => toggleItem(index)}
            >
              <span>{faqItem.question}</span>

              <i
                className={` absolute right-0 pt-1 text-base transition-transform ${
                  activeItem === index ? "rotate-180" : ""
                }`}
              >
                <FaChevronDown></FaChevronDown>
              </i>
            </button>
          </h6>
          <div
            className={`${
              activeItem === index ? "h-auto" : "h-0"
            } overflow-hidden transition-all duration-300 ease-in-out`}
          >
            <div className="p-4 text-xl text-descriptionColor">
              {faqItem.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
