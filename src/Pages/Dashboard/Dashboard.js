import React, { useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import AdminRoute from "../../components/AdminRoute/AdminRoute";
import NotFound from "../../components/NotFound/NotFound";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import AddProduct from "./AddProduct/AddProduct";
import "./Dashboard.css";
import ManageOrders from "./ManageOrders/ManageOrders";
import ManageUsers from "./ManageUsers/ManageUsers";
import MyOrders from "./MyOrders/MyOrders";

const Dashboard = () => {
  let { path } = useRouteMatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="flex flex-no-wrap">
        <Sidebar
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        ></Sidebar>
        <div className="container mx-auto md:w-4/5 w-full">
          <div className="w-full h-screen overflow-hidden">
            <Topbar
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
            ></Topbar>
            <div className="h-full flex items-center justify-center dashboard-contents">
              <Switch>
                <Route exact path={`${path}`}>
                  <h1 className="text-2xl">Dashboard</h1>
                </Route>
                <AdminRoute exact path={`${path}/manage-products`}>
                  <h1 className="text-2xl">Manage Products</h1>
                </AdminRoute>
                <AdminRoute exact path={`${path}/add-product`}>
                  <AddProduct></AddProduct>
                </AdminRoute>
                <AdminRoute exact path={`${path}/manage-orders`}>
                  <ManageOrders></ManageOrders>
                </AdminRoute>
                <AdminRoute exact path={`${path}/manage-users`}>
                  <ManageUsers></ManageUsers>
                </AdminRoute>
                <Route exact path={`${path}/my-orders`}>
                  <MyOrders></MyOrders>
                </Route>
                <Route exact path={`${path}/*`}>
                  <NotFound></NotFound>
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
