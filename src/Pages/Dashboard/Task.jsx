import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import toast, { Toaster } from "react-hot-toast";

const Task = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic()

//   const onSubmit = async (data) => {
//     console.log(data);

//     const taksiteam = {
//       email: data.email,
//       priority: data.priority,
//       titale: data.titale,
//       Descriptoin: data.Descriptoin,
//       Dedline: data.Dedline,
//       separatelists: data.separatelists,
//     };
//     const Taskres = await axios.post("http://localhost:5000/task", taksiteam);

//     console.log(Taskres.data);
//     if (Taskres.data.insertedId) {
//       // show  success popup
//       // reset();
//       Swal.fire({
//         position: "top-end",
//         icon: "success",
//         title: Add your task,
//         showConfirmButton: false,
//         timer: 1500,
//       });
   
//     }
//   };


  const onSubmit = async (data) => {

    const taksiteam = {
        email: user?.email,
        priority: data.priority,
        titale: data.titale,
        Descriptoin: data.Descriptoin,
        Dedline: data.Dedline,
        separatelists: data.separatelists,
      };

      console.log(taksiteam);

    axiosPublic.post("/task", taksiteam).then((res) => {
        console.log(res.data);
        // e.target.reset();
        if (res.data.insertedId) {
            const displayErrorToast = () => {
                toast.dismiss("error-toast");
                toast.success("Logged Successfully", {
                  id: "error-toast",
                  duration: 2000,
                  style: {
                    padding: "14px",
                    color: "#524FF5",
                  },
                  iconTheme: {
                    primary: "#A1F65E",
                    secondary: "#FFFFFF",
                  },
                });
              };
              displayErrorToast();
              reset()
        }
      });
  };



  return (
    <div>
      <h2 className="text-center md:mt-20 font-bold text-4xl font-heading md:mb-14 mb-10">
        Add Your Service
      </h2>
      <div className=" bg-backgroundColor lg:px-40 md:px-16 px-8 md:mx-10 pt-14 pb-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* titale  */}
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              placeholder="titale"
              {...register("titale", { required: true })}
              className="input input-bordered w-full "
            />
          </div>
          {/* dedline */}

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Deadline</span>
            </label>
            <input
              type="date"
              placeholder="Dedline"
              {...register("Dedline", { required: true })}
              className="input input-bordered w-full "
            />
          </div>
          {/* priority  */}
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">priority</span>
            </label>
            <select
              defaultValue="default"
              {...register("priority", { required: true })}
              className="select select-bordered w-full"
            >
              <option disabled value="default">
                Select a priority
              </option>
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="High">High</option>
            </select>
          </div>
          {/* separate lists  */}
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">separate lists</span>
            </label>
            <select
              defaultValue="default"
              {...register("separatelists", { required: true })}
              className="select select-bordered w-full"
            >
              <option disabled value="default">
                Select a separate lists
              </option>
              <option value="To-do">To-do</option>
              <option value="ongoing">ongoing</option>
              <option value="completed">completed</option>
            </select>
          </div>
          {/*  servay Descriptoins  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Descriptoin</span>
            </label>
            <textarea
              {...register("Descriptoin", { required: true })}
              className="textarea textarea-bordered h-24"
              placeholder="Bio"
            ></textarea>
          </div>

          <input
            className=" cursor-pointer btn mt-5 w-full text-white bg-[#00CBBD]"
            type="submit"
            value="Add Task"
          />
        </form>
      </div>
      <Toaster position="top-center" reverseOrder={true}></Toaster>
    </div>
  );
};

export default Task;
