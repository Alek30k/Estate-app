import { useContext, useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  console.log(query);

  const { currentUser } = useContext(AuthContext);

  const navLink = ["home", "about", "contact", "agents"];

  const switchType = (val) => {
    setQuery(val);
    setOpen(false);
  };

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="logo" />
          <span>AleEstate</span>
        </a>
        {/* <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Agents</a> */}
        {navLink.map((type) => (
          <Link key={type} to={`/${type === "home" ? "" : type}`}>
            <button
              onClick={() => switchType(type)}
              className={query === type ? "active" : ""}
            >
              {type}
            </button>
          </Link>
        ))}
      </div>
      <div className="right">
        {currentUser ? (
          <div className="user">
            <img src={currentUser.avatar || "/noavatar.jpeg"} alt="profile" />
            <span>{currentUser.username}</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <div className="logged">
            <a href="/login">Sign in</a>
            <a href="/register" className="register">
              Sign up
            </a>
          </div>
        )}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt="menu-icon"
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          {/* <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a> */}
          {navLink.map((type) => (
            <Link key={type} to={`/${type === "home" ? "" : type}`}>
              <button
                onClick={() => switchType(type)}
                className={query === type ? "active" : ""}
              >
                {type}
              </button>
            </Link>
          ))}
          <a href="/login">Sign in</a>
          <a href="/register">Sign up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
