import React, { Component } from "react";
import { useHistory } from "react-router-dom";
import AuthManager from "../Common/AuthManager";
import AppSettings from "../Settings/AppSettings";
import Utils from "../Common/Utils";

function Login(props) {
  const history = useHistory();
  function handle_login() {
    AuthManager.setAuthUser("testing");
    history.push("/dashboard");
    // let rto = "rto=" + Utils.get_current_root_url() + "callback/login";
    // let redirect_url =
    //   AppSettings.SAMS_SSO_URL + "?storename=DBPromoter Web App&m=get&" + rto;
    // window.location.href = redirect_url;
  }

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col min-vh-100 d-table">
            <div className="d-table-cell align-middle">
              <div className="row align-items-center mx-auto">
                <img
                  className="mx-auto"
                  src={process.env.PUBLIC_URL + "/includes/images/logo1.png"}
                  width={"400px"}
                ></img>
              </div>
              <div className="row align-items-center mx-auto">
                <br />
                <br />
                <br />
                <button
                  type="submit"
                  className="btn btn-warning mx-auto w-50"
                  onClick={() => handle_login()}
                >
                  <strong>Sign in</strong>
                </button>
              </div>
            </div>
          </div>
          {/* <div className="col min-vh-100 d-table">
            <div className="d-table-cell align-middle">
              <button
                type="submit"
                className="btn btn-sm btn-warning align-middle"
                onClick={() => handle_login()}
              >
                Sign in
              </button>
            </div>
          </div> */}
        </div>
      </div>
      {/* <div className="container">
        <div className="row">
          <div className="col min-vh-100 d-table">
            <img
              className="align-middle"
              src={process.env.PUBLIC_URL + "/includes/images/logo.png"}
            ></img>
          </div>
          <div className="col  min-vh-100 d-table">
            <button
              type="submit"
              className="btn btn-sm btn-warning align-middle"
              onClick={() => handle_login()}
            >
              Sign in
            </button>
          </div>
        </div>
      </div> */}
    </React.Fragment>
  );
}

export default Login;
