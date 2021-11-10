import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import AuthProvider from "./Contexts/AuthProvider";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";

const App = () => {
  return (
    <>
      <AuthProvider>
        <div className="min-h-screen flex flex-col justify-between">
          <BrowserRouter>
            <Navbar></Navbar>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route exact path="/login">
                <Login></Login>
              </Route>
              <Route exact path="/signup">
                <Signup></Signup>
              </Route>
            </Switch>
            <Footer></Footer>
          </BrowserRouter>
        </div>
      </AuthProvider>
    </>
  );
};

export default App;
