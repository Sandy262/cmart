import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { logout } from '../user/loginslice'

function Home() {
    var {isLoggedIn}=useSelector(state=>state.auth)
    var navigate=useNavigate()
    var dispatch=useDispatch()
  return (
    <div className="container">
      <h1>{}</h1>
      <nav class="navbar navbar-expand-lg navbar-light bg-light container p-3">
        <Link class="navbar-brand" to="/">
          Consmart
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Aboutus
              </a>
            </li>
            <li class="nav-item">
                {isLoggedIn&&(
                    <button to="/login" class="btn btn-info" onClick={()=>{dispatch(logout());navigate("/")}}>
                    Logout
                  </button>
                )}
                {!isLoggedIn&&(
                    <Link to="/login" class="btn btn-success" href="#">
                    Login
                  </Link>
                )}
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-inline my-2 my-lg-0"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>

      <Outlet></Outlet>
    </div>
  );
}

export default Home;
