import React from "react";
import { Link ,useNavigate} from "react-router-dom";
import { UserAuth } from "../Context/AuthContextProvider";

function Navbar() {
  const { user, logOut } = UserAuth();
  const navigator = useNavigate()
  const handleLogout = async () => {
    try {
      await logOut();
      navigator("/Login");
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div
      className="flex items-center justify-between p-4 absolute z-[100]
     w-full "
    >
      <Link to="/">
        <h1 className="text-red-700 text-4xl font-bold cursor-pointer">
          Netflix
        </h1>
      </Link>

      {user?.email ? (
        <div>
          <Link to="/Account">
            <button className="text-white pr-4">Profile</button>
          </Link>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-6 py-2 rounded cursor-pointer"
            >
              LogOut
            </button>
          
        </div>
      ) : (
        <div>
          <Link to="/Login">
            <button className="text-white pr-4 font-bold">Log In</button>
          </Link>
          <Link to="/SignUp">
            <button className="bg-red-600 text-white px-6 py-2 font-semibold rounded cursor-pointer">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
