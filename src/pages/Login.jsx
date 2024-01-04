import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContextProvider";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, logIn } = UserAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.message)
    }
  };

  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://img.freepik.com/free-photo/abstract-red-background-vertical-lines-strips_1258-108652.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703894400&semt=ais"
          alt="Image"
        ></img>
        <div className="bg-black/50 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[550px] rounded-lg mx-auto bg-white/25 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold flex justify-center" >Log In</h1>
              {error ? <p className="p-3 bg-red-500 my-2">{error}</p> : null}
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col py-4"
              >
                <input
                  onChange={(eve) => setEmail(eve.target.value)}
                  className="p-3 my-2 bg-gray-300 rounded text-black"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                />
                <input
                  onChange={(eve) => setPassword(eve.target.value)}
                  className="p-3 my-2 bg-gray-300 rounded text-black"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <button className="bg-red-600 py-3 my-6 rounded font-bold">
                  Log In
                </button>
                <div className="flex justify-between items-center text-md text-gray-300 mt-5">
                  <p>
                    <input type="checkbox" className="mr-2" />
                    Remeber Me
                  </p>
                  <p>Need Help ?</p>
                </div>
                <p className="py-10">
                  <span className="text-gray-200 font-bold text-sm">
                    New member Please Sign Up?
                  </span>{" "}
                  <Link to="/SignUp" className="text-blue-500 font-extrabold">
                    Sign Up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
