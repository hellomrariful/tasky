import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const Profile = () => {
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
    <div>
      <div className="w-96 bg-white shadow-lg rounded-2xl dark:bg-gray-800 mx-auto mt-10">
        <img
          alt="profile"
          src="https://www.jacadatravel.com/wp-content/uploads/fly-images/366978/Switzerland-cover-1280x560-cc.jpg"
          className="w-full mb-4 rounded-t-lg"
        />

        <div className="flex flex-col items-center justify-center p-4 -mt-20">
          <img
            src={user?.photoURL}
            alt=""
            className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
          />

          <p className="mt-2 text-xl font-medium text-gray-800 dark:text-white">
            {user?.displayName}
          </p>
          <p className="flex items-center text-xs text-gray-400">
            {user?.email}
          </p>
          {/* <p className="text-xs text-gray-400">FullStack dev.</p> */}
          <div className="flex items-center justify-between w-full gap-4 mt-3">
            <Button onClick={handelSignOut} className="mx-auto">
              Log Out
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
