import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Reviews from "./components/Reviews/Reviews";
import AuthProvider from "./Contexts/AuthProvider";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Drones from "./Pages/Drones/Drones";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Purchase from "./Pages/Purchase/Purchase";
import Signup from "./Pages/Signup/Signup";

const App = () => {
  const FullContainer = ({ children }) => {
    return (
      <>
        <Navbar />
        {children}
        <Footer />
      </>
    );
  };
  return (
    <>
      <AuthProvider>
        <div className="min-h-screen flex flex-col justify-between">
          <BrowserRouter>
            <Switch>
              <Route exact path="/">
                <FullContainer>
                  <Home></Home>
                </FullContainer>
              </Route>
              <Route exact path="/login">
                <FullContainer>
                  <Login></Login>
                </FullContainer>
              </Route>
              <Route exact path="/signup">
                <FullContainer>
                  <Signup></Signup>
                </FullContainer>
              </Route>
              <PrivateRoute path="/dashboard">
                <Dashboard></Dashboard>
              </PrivateRoute>
              <Route exact path="/drones">
                <FullContainer>
                  <Drones></Drones>
                </FullContainer>
              </Route>
              <Route exact path="/reviews">
                <FullContainer>
                  <Reviews></Reviews>
                </FullContainer>
              </Route>
              <PrivateRoute path="/purchase/:droneId">
                <FullContainer>
                  <Purchase></Purchase>
                </FullContainer>
              </PrivateRoute>
              <PrivateRoute path="*">
                <FullContainer>
                  <NotFound></NotFound>
                </FullContainer>
              </PrivateRoute>
            </Switch>
          </BrowserRouter>
        </div>
      </AuthProvider>
    </>
  );
};

export default App;
