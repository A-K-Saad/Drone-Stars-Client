import React from "react";
import useAuth from "../../hooks/useAuth";

const Topbar = ({ setIsMenuOpen }) => {
  const { user, logOut } = useAuth();

  return (
    <>
      <div className="flex justify-between bg-white shadow-sm p-3">
        <button
          className="border px-3 text-2xl text-gray-600 block md:hidden"
          onClick={() => setIsMenuOpen(true)}
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="flex flex-col">
          <p className="text-gray-300 text-sm md:text-base">Welcome</p>
          <p className="text-sm text-red-500 md:text-md">{user?.displayName}</p>
        </div>
        <div className="flex items-center">
          <button
            to="/login"
            className="inline-block py-1 md:py-2 px-4 md:px-5 mx-2 rounded-full text-white transition-colors duration-150 bg-red-500 focus:shadow-outline hover:bg-red-600 border border-transparent"
            onClick={logOut}
          >
            <i className="fas fa-sign-out-alt"></i>{" "}
            <span className="hidden md:inline">Sign Out</span>
          </button>
          <img
            src={user?.photoURL || "https://i.ibb.co/qgbdqZ3/male.png"}
            onError={(e) => {
              e.target.src = "https://i.ibb.co/qgbdqZ3/male.png";
            }}
            alt="Avatar"
            className="rounded-full p-0 w-10"
          />
        </div>
      </div>
    </>
  );
};

export default Topbar;
