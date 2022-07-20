import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Loading from "./Loading";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe(
  "pk_test_51L0iDKSBFZnqx6xdVdFWvVW4s9csgDoBSmCXckrFaCyxuvOwSy57l4o9fJJCXfkjyzIYGz4qocMfTJRilKxWQxMb00POqmXBEi"
);

function App() {
  const [{ user }, dispatch] = useStateValue();
  const [load, setLoad] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
      setLoad(false);
    });
  }, []);

  return (
    <Router>
      {load ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div className="app">
          <Switch>
            <Route exact path="/">
              <Header />
              <Home />
              <Footer />
            </Route>
            <Route path="/orders">
              <Header />
              <Orders />
            </Route>
            <Route path="/load"></Route>
            <Route path="/checkout">
              <Header />
              <Checkout />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/payment">
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </Route>
          </Switch>
        </div>
      )}
    </Router>
  );
}

export default App;
