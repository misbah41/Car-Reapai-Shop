import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import { createContext, useState } from "react";
import LogIn from "./components/Home/Login/Login";
import PrivateRouter from "./components/Home/PrivateRoute/PrivateRoute";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import ServiceCheckout from "./components/Dashboard/ServiceCheckout/ServiceCheckout";
import OrderList from "./components/Dashboard/OrderList/OrderList";
import Review from "./components/Dashboard/Review/Review";
import AddServices from "./components/Dashboard/AddServices/AddServices";
import CreateAdmin from "./components/Dashboard/CreateAdmin/CreateAdmin";
import UsersOrder from "./components/Dashboard/UsersOrder/UsersOrder";
import ManageServices from "./components/Dashboard/ManageServices/ManageServices";
import EmtyCheckOut from "./components/Dashboard/EmtyCheckOut/EmtyCheckOut";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <div>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <LogIn />
            </Route>
            <PrivateRouter path="/dashboard">
              <Dashboard />
            </PrivateRouter>
            <PrivateRouter path="/servicecheckout/:id">
              <ServiceCheckout />
            </PrivateRouter>
            <PrivateRouter path="/emtycheckout">
              <EmtyCheckOut />
            </PrivateRouter>
            <PrivateRouter path="/orderlist">
              <OrderList />
            </PrivateRouter>
            <PrivateRouter path="/review">
              <Review />
            </PrivateRouter>
            <PrivateRouter path="/addservices">
              <AddServices />
            </PrivateRouter>
            <PrivateRouter path="/createadmin">
              <CreateAdmin />
            </PrivateRouter>
            <PrivateRouter path="/usersorder">
              <UsersOrder />
            </PrivateRouter>
            <PrivateRouter path="/manageservices">
              <ManageServices />
            </PrivateRouter>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;

