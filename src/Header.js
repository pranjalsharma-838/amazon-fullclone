import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleSignOut = () => {
    if (user) {
      auth.signOut();
    }
  };
  const name = (email) => {
    return email.substring(0, email.lastIndexOf("@"));
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="headerLogo"
          src=" https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />
      </Link>
      <div className="headerSearch">
        <input className="headerInput" type="text" />
        <SearchIcon className="headerSearchIcon" />
      </div>
      <div className="headerNav">
        <Link to={!user && '/login'} style={{
          textDecoration:'none',
        }}>
          <div className="headerOption" onClick={handleSignOut}>
            <span className="headerOptionLineOne">{user?`Hello ${name(user.email)}`:'Hello Guest'}</span>
            <span className="headerOptionTwo">
              {user ? "SignOut" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to='/orders'>

        <div className="headerOption">
          <span className="headerOptionLineOne">Return</span>
          <span className="headerOptionTwo">& Orders</span>
        </div>
        </Link>
        <div className="headerOption">
          <span className="headerOptionLineOne">Your</span>
          <span className="headerOptionTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="headerOptionBasket">
            <ShoppingBasketIcon />
            <div className="headerOptionTwo headerBasketCount">
              {basket?.length}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
