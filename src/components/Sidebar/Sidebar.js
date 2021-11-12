import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Sidebar = ({ isMenuOpen, setIsMenuOpen }) => {
  let { url } = useRouteMatch();
  const { isAdmin } = useAuth();

  return (
    <>
      {/* Sidebar starts */}
      {/* Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] */}
      <div
        className={`md:w-1/5 absolute sm:relative z-40 bg-white shadow md:h-full flex-col justify-between sm:flex min-h-screen ${
          isMenuOpen ? "flex w-auto" : "hidden"
        }`}
      >
        <div className="overflow-y-auto h-screen">
          <div className="flex align-center justify-between md:justify-center w-full px-2 md:px-0">
            <NavLink
              exact
              to="/"
              className="h-16 flex items-center justify-center py-9"
            >
              <img
                src="https://i.ibb.co/5GQ6Kjj/drone.png"
                alt="Drone_Logo"
                className="w-7 md:w-10"
              />
              <h1 className="text-xl md:text-2xl pl-3 text-gray-700">
                Drone Stars
              </h1>
            </NavLink>
            <button
              className="block md:hidden mr-3"
              onClick={() => setIsMenuOpen(false)}
            >
              <i className="fas fa-times text-2xl text-gray-600"></i>
            </button>
          </div>
          <hr />
          <ul className="mt-6">
            <NavLink
              exact
              to={`${url}`}
              className="flex w-full justify-between text-gray-600 hover:text-blue-700 hover:bg-blue-100 cursor-pointer items-center py-3 px-8 text-md"
              activeClassName="text-blue-700 bg-blue-100"
            >
              <div className="flex items-center">
                <i className="fab fa-dropbox w-6"></i>
                <span className="ml-2">Dashboard</span>
              </div>
            </NavLink>
            {isAdmin && (
              <>
                <NavLink
                  exact
                  to={`${url}/manage-products`}
                  className="flex w-full justify-between text-gray-600 hover:text-blue-700 hover:bg-blue-100 cursor-pointer items-center py-3 px-8 text-md"
                  activeClassName="text-blue-700 bg-blue-100"
                >
                  <div className="flex items-center">
                    <i className="far fa-folder-open w-6"></i>
                    <span className="ml-2">Manage Products</span>
                  </div>
                </NavLink>
                <NavLink
                  exact
                  to={`${url}/manage-orders`}
                  className="flex w-full justify-between text-gray-600 hover:text-blue-700 hover:bg-blue-100 cursor-pointer items-center py-3 px-8 text-md"
                  activeClassName="text-blue-700 bg-blue-100"
                >
                  <div className="flex items-center">
                    <i className="fas fa-pallet w-6"></i>
                    <span className="ml-2">Manage Orders</span>
                  </div>
                </NavLink>
                <NavLink
                  exact
                  to={`${url}/manage-users`}
                  className="flex w-full justify-between text-gray-600 hover:text-blue-700 hover:bg-blue-100 cursor-pointer items-center py-3 px-8 text-md"
                  activeClassName="text-blue-700 bg-blue-100"
                >
                  <div className="flex items-center">
                    <i className="fas fa-user-shield w-6"></i>
                    <span className="ml-2">Manage Users</span>
                  </div>
                </NavLink>
                <NavLink
                  exact
                  to={`${url}/add-product`}
                  className="flex w-full justify-between text-gray-600 hover:text-blue-700 hover:bg-blue-100 cursor-pointer items-center py-3 px-8 text-md"
                  activeClassName="text-blue-700 bg-blue-100"
                >
                  <div className="flex items-center">
                    <i className="fas fa-plus-square w-6"></i>
                    <span className="ml-2">Add Product</span>
                  </div>
                </NavLink>
              </>
            )}
            <NavLink
              exact
              to={`${url}/my-orders`}
              className="flex w-full justify-between text-gray-600 hover:text-blue-700 hover:bg-blue-100 cursor-pointer items-center py-3 px-8 text-md"
              activeClassName="text-blue-700 bg-blue-100"
            >
              <div className="flex items-center">
                <i className="fas fa-box-open w-6"></i>
                <span className="ml-2">My Orders</span>
              </div>
            </NavLink>
            <NavLink
              exact
              to={`${url}/payment`}
              className="flex w-full justify-between text-gray-600 hover:text-blue-700 hover:bg-blue-100 cursor-pointer items-center py-3 px-8 text-md"
              activeClassName="text-blue-700 bg-blue-100"
            >
              <div className="flex items-center">
                <i className="fab fa-bitcoin w-6"></i>
                <span className="ml-2">Payment</span>
              </div>
            </NavLink>
            <NavLink
              exact
              to={`${url}/reviews`}
              className="flex w-full justify-between text-gray-600 hover:text-blue-700 hover:bg-blue-100 cursor-pointer items-center py-3 px-8 text-md"
              activeClassName="text-blue-700 bg-blue-100"
            >
              <div className="flex items-center">
                <i className="fas fa-comment-dots w-6"></i>
                <span className="ml-2">Reviews</span>
              </div>
            </NavLink>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
