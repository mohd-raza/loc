import React, { useState, useRef } from "react";
import logoImg from "../assets/Login-amico.svg";

import { Link } from "react-router-dom";
const LoginPage = () => {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState("");
  const emailRef = useRef("");
  const passRef = useRef("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailRef.current.value && passRef) {
      return alert("Please enter");
    }
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full bg-rose-200">
      <div className="hidden sm:block">
        <img className="w-full h-screen object-cover" src={logoImg} alt="" />
      </div>
      <div className="bg-gray-100 flex flex-col justify-center">
        <form className="max-w-[400px] w-full mx-auto bg-white p-4">
          <h2 className="text-center text-4xl font-bold py-6">LOGIN</h2>
          <div className="flex flex-col py-2">
            <label htmlFor="email">Email</label>
            <input
              ref={emailRef}
              type="email"
              className="border p-2 hover:border-rose-400"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              id="name"
              required
            />
          </div>
          <div className="flex flex-col py-2">
            <label>Password</label>
            <input
              ref={passRef}
              type="password"
              onChange={(e) => {
                setPass(e.target.value);
              }}
              className="border p-2 hover:border-rose-400"
              required
              minLength={8}
              maxLength={10}
            />
          </div>
          <button
            className="border w-full my-5 py-2 bg-rose-600 hover:bg-rose-500 text-white"
            onSubmit={handleSubmit}
          >
            Sign In
          </button>
          <div className="flex flex-col">
            <p className="flex items-center font-semibold">
              <input type="checkbox" className="mr-2 " />
              Remember Me
            </p>

            <p className="font-semibold text-center mt-4">
              Don't have an account?
              <Link to="/signup">
                <span className="mr-2 hover:text-rose-700"> Sign Up</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
