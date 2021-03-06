import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import AppSettings from "../Settings/AppSettings";
import Utils from "../Common/Utils";
import ServiceWrapper from "../Services/ServiceWrapper";

function Result(props) {
  const { params } = props.match;
  var [surveyResult, setSurveyResult] = React.useState([]);
  var [loading, setLoading] = React.useState(false);

  function get_user_id() {
    if (Utils.isEmpty(params.id)) return null;
    else if (Utils.isNumeric(params.id)) return null;
    return params.id;
  }

  async function load_result() {
    var userid = get_user_id();
    if (userid === null) return;
    setLoading(true);
    var api_base_url = AppSettings.BACKEND_API_URL;
    let ret = await ServiceWrapper.doGet(
      api_base_url + "result/get/" + userid,
      {}
    );
    // console.log(ret);
    if (!ret.errorfound && ret.data.status) setSurveyResult(ret.data.data);
    setLoading(false);
  }

  useEffect(() => {
    load_result();
  }, []);

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">&nbsp;</div>
        <div className="row">&nbsp;</div>
        {!loading && (
          <div className="row">
            <div className="col-sm-6 align-middle">
              <h5>Your Perceptective</h5>
              <p>
                Your Perspective Type is :&nbsp;
                {surveyResult.perspective !== undefined && !loading && (
                  <strong>
                    {surveyResult.perspective.map((item) => item.score)}
                  </strong>
                )}
              </p>
            </div>
            <div className="col-sm-6">
              {surveyResult.perspective !== undefined && !loading && (
                <>
                  <table className="table">
                    <tbody>
                      {surveyResult.perspective.map((item) => (
                        <tr key={item.pid}>
                          <td>{item.leftname}</td>
                          <td>&nbsp;</td>
                          <td>
                            {item.leftchar == item.score && (
                              <>
                                <span className="badge badge-primary">
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>
                                <span className="badge badge-light">
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>
                              </>
                            )}

                            {item.rightchar == item.score && (
                              <>
                                <span className="badge badge-light">
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>
                                <span className="badge badge-primary">
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>
                              </>
                            )}
                          </td>
                          <td>&nbsp;</td>
                          <td>{item.rightname}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </>
              )}
            </div>
          </div>
        )}

        {loading && (
          <div className="alert alert-info" role="alert">
            <span
              className="spinner-grow spinner-grow-sm"
              role="status"
              aria-hidden="true"
            ></span>{" "}
            Please wait, we are calculating your score....
          </div>
        )}

        {get_user_id() === null && (
          <div className="alert alert-danger" role="alert">
            Invalid ID
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

export default Result;
