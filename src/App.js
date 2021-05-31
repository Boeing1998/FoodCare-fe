import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavigationBar from "./components/Navigation/NavigationBar/NavigationBar";
import About from "./components/About/About";

import FoodBrowser from "./containers/FoodBrowser/FoodBrowser";
import Homepage from "./containers/Homepage/Homepage";
import Login from "./containers/Login/Login";
import Register from "./containers/Register/Register";
import Collection from "./containers/Collection/Collection";

import "react-notifications/lib/notifications.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const isLogin = localStorage.getItem("token");

  if (isLogin)
    return (
      <Router>
        <NavigationBar />
        <main className="MainBackGroundColor">
          <Route path="/food-browser" component={FoodBrowser} />
          <Route path="/collection" component={Collection} />
          <Route path="/" component={Homepage} exact />
          {/* <Route path="/" component={Home} exact />

        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />

        <Route path="/listhouse" component={ListHouse} />
        <Route path="/housedetail/:id" component={HouseDetail} />

        <Route path="/about" component={About} />
        
        <Route path="/posthouse" component={AddHouse} />
        <Route path="/edithouse/:id" component={EditHouse} />    
        <Route path="/editprofile" component={EditProfile} />
        <Route path="/confirmcode" component={ConfirmCode} />
        <Route path="/notfoundpage" component={NotFoundPage} />
        <Route path="/bookinghistory" component={BookingHistory} />

        <Route path="/hostmanage" component={HostManage} /> */}
        </main>
        {/* <Footer /> */}
      </Router>
    );
  return (
    <Router>
      <NavigationBar />
      <main className="MainBackGroundColor">
        <Route path="/food-browser" component={FoodBrowser} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/" component={Homepage} exact />
      </main>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
