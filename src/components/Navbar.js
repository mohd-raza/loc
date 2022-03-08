import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <header className="text-white body-font bg-gray-800">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a
            className="flex title-font font-medium items-center mb-4 md:mb-0"
            href="/"
          >
            <span className="ml-3 text-xl">LOC</span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-xl justify-center">
            <a className="ml-12 mr-12 hover:text-rose-400" href="/">
              Home
            </a>
            <a className="mr-12 hover:text-rose-400" href="/">
              About
            </a>
            <a className="mr-12 hover:text-rose-400" href="/">
              Contacts
            </a>
            <a className="mr-12 hover:text-rose-400" href="/">
              Pricing
            </a>
          </nav>
          <Link to="/login">
            <button className="text-xl inline-flex items-center border-0 py-1 px-4 focus:outline-none hover:bg-rose-400 rounded  mt-4 lg:mr-8 md:mt-0">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="inline-flex items-center border-0 py-1 px-4 focus:outline-none hover:bg-rose-400 rounded text-xl mt-4 md:mt-0">
              Register
            </button>
          </Link>
        </div>
      </header>
    </>
    //   <nav className="bg-blue-300 text-zinc-600 font-sans">
    //     <div>
    //       <div className="flex justify-between items-center">
    //         <div className="flex space-x-36 px-3 ml-8">
    //           {/* logo */}
    //           <a href="/" className="text-3xl font-bold">
    //             Logo
    //           </a>
    //           {/* primary nav */}
    //           <div className="flex items-center space-x-20 text-zinc-600 text-lg font-semibold">
    //             <a href="/" className="hover:text-indigo-600">
    //               Home
    //             </a>
    //             <a href="/" className="hover:text-indigo-600">
    //               About
    //             </a>
    //             <a href="/" className="hover:text-indigo-600">
    //               Reviews
    //             </a>
    //             <a href="/" className="hover:text-indigo-600">
    //               Contact
    //             </a>
    //           </div>
    //         </div>
    //         <div className="md:flex p-2 ">
    //           <ul className="flex items-center">
    //             <li className="font-semibold text-xl bg-transparent text-black mr-12">
    //               <Link to="/login">Login</Link>
    //             </li>
    //             <li className="px-8 py-2 font-semibold text-xl ">
    //               <Link to="/signup">Sign Up</Link>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </nav>
    // );
  );
};

export default Navbar;
