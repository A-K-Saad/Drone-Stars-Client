import React, { useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import NotFound from "../../components/NotFound/NotFound";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import AddProduct from "./AddProduct/AddProduct";
import "./Dashboard.css";

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
            <div className="h-full flex align-center justify-center dashboard-contents">
              <Switch>
                <Route exact path={`${path}`}>
                  <h1 className="text-2xl">Dashboard</h1>
                </Route>
                <Route exact path={`${path}/manage-products`}>
                  <h1 className="text-2xl">Manage Products</h1>
                </Route>
                <Route exact path={`${path}/add-product`}>
                  <AddProduct></AddProduct>
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
