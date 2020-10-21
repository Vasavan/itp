import React, { useState, useEffect } from "react";
import Axios from "axios";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Redirect, Switch,

import Login from "./account management/pages/Login";

import UserContext from "./context/UserContext";
import Grocerytbl from "./Kitchen management/grocerytbl";
import Adddiet from "./Kitchen management/adddiet";
import Kitchen from "./Kitchen management/kitchen";
import Dietplan from "./Kitchen management/dietplan";
import Diettbl from "./Kitchen management/diettbl";
import Addgrocery from "./Kitchen management/addgrocery";
import Editdiet from "./Kitchen management/editdiet";
import Editgrocery from "./Kitchen management/editgrocery";
import Groceryplan from "./Kitchen management/groceryplan";

const App = () => {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post(
        "http://localhost:5000/api/users/tokenIsValid",
        {},
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const userRes = await Axios.get("http://localhost:5000/api/users/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };

    checkLoggedIn();
  }, []);

  return (
    <Router>
      <UserContext.Provider value={{ userData, setUserData }}>
        <Switch>
          <Route path="/" exact component={Kitchen} />

          <Route path="/addDiet" exact component={Adddiet} />

          <Route path="/dietTable" exact component={Diettbl} />

          <Route path="/groceryTable" exact component={Grocerytbl} />

          <Route path="/dietPlan" exact component={Dietplan} />

          <Route path="/groceryPlan" exact component={Groceryplan} />

          <Route path="/addGrocery" exact component={Addgrocery} />
          
          <Route path="/editdiet/:id" exact component={Editdiet} />

          <Route path="/editgrocery/:id" exact component={Editgrocery} />

          
        </Switch>
      </UserContext.Provider>
    </Router>
  );
};

export default App;
