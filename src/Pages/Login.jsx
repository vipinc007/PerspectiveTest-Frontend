import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import AuthManager from "../Common/AuthManager";
import AppSettings from "../Settings/AppSettings";
import Utils from "../Common/Utils";
import ServiceWrapper from "../Services/ServiceWrapper";

function Login(props) {
  const history = useHistory();

  async function loadLogList() {
    var api_base_url = AppSettings.BACKEND_API_URL;
    let ret = await ServiceWrapper.doGet(api_base_url + "users/list", {});
    console.log(ret);
  }

  useEffect(() => {
    loadLogList();
  }, []);

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
