import React from "react";
import signup from "../assets/Sign up-amico.svg";
import { Link } from "react-router-dom";
const SignUpPage = () => {
  return (
    <div className="w-full h-screen flex">
      <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-400 sm:max-w-[900px] rounded-2xl">
        <div className="w-full h-[550px] hidden md:block border rounded-tl-2xl rounded-bl-2xl border-rose-500">
          <img src={signup} className="w-full h-full" alt="/" />
        </div>
        <div className="p-4 flex flex-col justify-center border border-rose-500 lg:rounded-tr-2xl  rounded-br-2xl">
          <form>
            <h2 className="text-4xl font-bold text-center mb-12">Register</h2>
            <div>
              <input
                className="border p-2 mr-2 w-full my-2 hover:border-rose-400"
                type="email"
                placeholder="Email"
                required
              />
              <input
                className="border p-2 my-2 flex w-full hover:border-rose-400"
                type="text"
                placeholder="Username"
                required
              />
              <input
                className="border p-2 w-full my-2 hover:border-rose-400"
                type="password"
                placeholder="Password"
                required
              />
            </div>
            <button
              className="w-full py-2 my-4 bg-rose-600 hover:bg-rose-500 text-white
           font-semibold"
            >
              Sign Up
            </button>
            <p
              className="text-center font-semibold text-lg
            "
            >
              Already a member?
            </p>
            <Link to="/login">
              <p className="hover:text-rose-600 font-semibold text-center text-base text-black">
                Login
              </p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
