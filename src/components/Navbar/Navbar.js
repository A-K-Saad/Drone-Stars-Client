import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { user, primaryAvatar, logOut } = useAuth();

  return (
    <>
      <div className="flex flex-wrap place-items-center">
        <section className="mx-auto w-full bg-white shadow-sm">
          <nav className="flex justify-between text-gray-500 left-0 right-0 m-auto sticky">
            <div className="px-2 md:px-5 xl:px-12 py-1 flex w-full items-center justify-between">
              <NavLink to="/">
                <img
                  src="https://i.ibb.co/5GQ6Kjj/drone.png"
                  alt="Hogwarts"
                  width="70px"
                />
              </NavLink>
              <div className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/drones">Drones</NavLink>
                {user?.email && <NavLink to="/dashboard">Dashboard</NavLink>}
                <NavLink to="/reviews">Reviews</NavLink>
              </div>
              <div className="hidden md:flex items-center space-x-5">
                {user?.email ? (
                  <>
                    <button
                      to="/login"
                      className="inline-block py-2 px-5 mx-2 rounded-full text-white transition-colors duration-150 bg-red-500 focus:shadow-outline hover:bg-red-600 border border-transparent"
                      onClick={() => {
                        logOut();
                      }}
                    >
                      <i className="fas fa-sign-out-alt"></i> Sign Out
                    </button>
                    <div className="rounded-full p-0 w-10 h-10 border border-gray-300 overflow-hidden">
                      <img
                        src={
                          user?.photoURL ||
                          primaryAvatar ||
                          "https://i.ibb.co/qgbdqZ3/male.png"
                        }
                        onError={(e) => {
                          e.target.src = "https://i.ibb.co/qgbdqZ3/male.png";
                        }}
                        alt="Avatar"
                        className="w-auto h-auto"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <NavLink to="/signup">
                      <button
                        to="/signup"
                        className="inline-block py-2 px-7 text-indigo-400 transition-colors duration-150 border border-indigo-400 focus:shadow-outline hover:bg-indigo-500 hover:text-indigo-100 rounded-full"
                      >
                        Sign Up
                      </button>
                    </NavLink>
                    <NavLink to="/login">
                      <button
                        to="/login"
                        className="inline-block py-2 px-8 rounded-full text-indigo-100 transition-colors duration-150 bg-indigo-700 focus:shadow-outline hover:bg-indigo-800 border border-transparent"
                      >
                        Login
                      </button>
                    </NavLink>
                  </>
                )}
              </div>
              {/* Small Device */}
              <div className="flex md:hidden items-center hambargar-menu">
                <button
                  className="px-4 py-2 bg-gray-700 rounded-md border-gray-500 flex border"
                  onClick={(e) => {
                    setIsMenuOpen(!isMenuOpen);
                    e.target.classList.add("opened-shadow");
                  }}
                  onBlur={(e) => {
                    if (!isHovered) {
                      setIsMenuOpen(false);
                    }
                    e.target.classList.remove("opened-shadow");
                  }}
                >
                  <i className="fas fa-bars text-2xl m-0 bg-gray-700 pointer-events-none"></i>
                </button>
              </div>
            </div>
          </nav>
          {isMenuOpen && (
            <div
              onMouseOver={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="bg-gray-900 mx-auto font-semibold font-heading text-white flex-wrap flex justify-center py-4">
                <div className="flex-wrap flex justify-center py-4">
                  <NavLink to="/" className="py-1 px-4">
                    Home
                  </NavLink>
                  <NavLink to="/drones" className="py-1 px-4">
                    Drones
                  </NavLink>
                  <NavLink to="/dashboard" className="py-1 px-4">
                    Dasboard
                  </NavLink>
                  <NavLink to="/reviews" className="py-1 px-4">
                    Reviews
                  </NavLink>
                </div>
                {user?.email ? (
                  <>
                    <button
                      to="/login"
                      className="inline-block py-2 px-8 mx-2 rounded-full text-white transition-colors duration-150 bg-red-500 focus:shadow-outline hover:bg-red-600 border border-transparent"
                      onClick={() => {
                        logOut();
                      }}
                    >
                      <i className="fas fa-sign-out-alt"></i> Sign Out
                    </button>
                    <div className="rounded-full p-0 w-10 h-10 border border-gray-300 overflow-hidden">
                      <img
                        src={
                          user?.photoURL ||
                          primaryAvatar ||
                          "https://i.ibb.co/qgbdqZ3/male.png"
                        }
                        onError={(e) => {
                          e.target.src = "https://i.ibb.co/qgbdqZ3/male.png";
                        }}
                        alt="Avatar"
                        className="w-auto h-auto"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <NavLink to="/signup">
                      <button
                        to="/signup"
                        className="inline-block py-2 px-7 text-indigo-400 transition-colors duration-150 border border-indigo-400 focus:shadow-outline hover:bg-indigo-500 hover:text-indigo-100 rounded-full"
                      >
                        Sign Up
                      </button>
                    </NavLink>
                    <NavLink to="/login">
                      <button
                        to="/login"
                        className="inline-block py-2 px-8 rounded-full text-indigo-100 transition-colors duration-150 bg-indigo-700 focus:shadow-outline hover:bg-indigo-800 border border-transparent"
                      >
                        Login
                      </button>
                    </NavLink>
                  </>
                )}
              </div>
            </div>
          )}
        </section>
      </div>
    </>
  );
};

export default Navbar;
