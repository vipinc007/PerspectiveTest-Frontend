import React, { Component } from "react";
import { useHistory, Link, NavLink } from "react-router-dom";
import AuthManager from "../Common/AuthManager";
import Logger from "../Common/Logger";

function Layout(props) {
  const history = useHistory();

  function handle_logout() {
    Logger.log(0, "Signout", "Signed Out");
    AuthManager.logoutUser();
    history.replace("/login");
  }

  function get_logged_User_name() {
    let userobj = null;
    if (AuthManager.isAuthenticated()) userobj = AuthManager.getAuthUser();
    if (
      userobj === null ||
      userobj === undefined ||
      userobj.profile === null ||
      userobj.profile === undefined
    )
      return "guest";
    return userobj.profile.first_name + " " + userobj.profile.last_name;
  }

  return (
    <React.Fragment>
      <nav className="navbar navbar-dark sticky-top bg-primary flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">
          DB Promoter&nbsp;
          <small className="text-muted">
            <span className="badge badge-warning badge-pill">v1.0</span>
          </small>
        </a>

        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* <input
          className="form-control form-control-dark w-100"
          type="text"
          placeholder="Search"
          aria-label="Search"
        /> */}
        <div className="float-left w-100 px-3 text-light">
          Welcome, <strong>{get_logged_User_name()}</strong>
          {AuthManager.getAuthUser_IsAdmin() && (
            <>
              &nbsp;
              <small className="text-muted">
                <span className="badge badge-danger badge-pill border border-light">
                  admin
                </span>
              </small>
            </>
          )}
        </div>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <a
              className="nav-link text-light"
              href="#"
              onClick={() => handle_logout()}
            >
              Logout
            </a>
          </li>
        </ul>
      </nav>

      <div className="container-fluid">
        <div className="row">
          <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
          >
            <div className="sidebar-sticky pt-3">
              <ul className="nav flex-column">
                <li className="nav-item">
                  {/* <a className="nav-link active" href="#">
                    <span data-feather="home"></span>
                    Dashboard <span className="sr-only">(current)</span>
                  </a> */}

                  <NavLink to={`/dashboard`} className="nav-link">
                    <span data-feather="home"></span>
                    Dashboard <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to={`/server/list`}
                    className="nav-link"
                    activeClassName="active"
                  >
                    <span data-feather="airplay"></span>
                    Servers
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to={`/database/dumps`}
                    className="nav-link"
                    activeClassName="active"
                  >
                    <span data-feather="database"></span>
                    DB Dumps
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to={`/task/list`}
                    className="nav-link"
                    activeClassName="active"
                  >
                    <span data-feather="list"></span>
                    Tasks
                  </NavLink>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="file"></span>
                    Orders
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="shopping-cart"></span>
                    Products
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="users"></span>
                    Customers
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="bar-chart-2"></span>
                    Reports
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="layers"></span>
                    Integrations
                  </a>
                </li> */}
              </ul>

              {/* <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                <span>Saved reports</span>
                <a
                  className="d-flex align-items-center text-muted"
                  href="#"
                  aria-label="Add a new report"
                >
                  <span data-feather="plus-circle"></span>
                </a>
              </h6>
              <ul className="nav flex-column mb-2">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="file-text"></span>
                    Current month
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="file-text"></span>
                    Last quarter
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="file-text"></span>
                    Social engagement
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="file-text"></span>
                    Year-end sale
                  </a>
                </li>
              </ul> */}
            </div>
          </nav>
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
            {props.children}
          </main>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Layout;
