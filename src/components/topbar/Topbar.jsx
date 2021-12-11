import "./topbar.css";
import { Link } from "react-router-dom";

const Topobar = () => {
  const user = false;
  return (
    <div className="top">
      {/* The left side of topbar is going to be for social media icons */}
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
      {/* The center of the topbar is for the options in the blog */}
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/" className="link">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/" className="link">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/write" className="link">
              WRITE
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/" className="link">
              {user && "LOGOUT"}
            </Link>
          </li>
        </ul>
      </div>
      {/* The right side of topbar is for the user's photo and the seacrh icon */}
      <div className="topRight">
        {user ? (
          <img
            className="topImg"
            src="https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80"
            alt="User's profile"
          />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
};

export default Topobar;
