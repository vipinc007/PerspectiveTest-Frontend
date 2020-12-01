import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import AppSettings from "../Settings/AppSettings";
import Utils from "../Common/Utils";
import ServiceWrapper from "../Services/ServiceWrapper";

function Landing(props) {
  const history = useHistory();
  var [questionList, setQuestionList] = React.useState([]);
  var [loading, setLoading] = React.useState(false);
  var [savinResults, setSavinResults] = React.useState(false);
  var [validationError, setValidationError] = React.useState(false);
  var [validationErrorMessage, setValidationErrorMessage] = React.useState(
    null
  );

  async function load_questions() {
    setLoading(true);
    var api_base_url = AppSettings.BACKEND_API_URL;
    let ret = await ServiceWrapper.doGet(api_base_url + "questions/list", {});
    // console.log(ret);
    if (!ret.errorfound && ret.data.status) setQuestionList(ret.data.data);
    setLoading(false);
  }

  async function save_survey_results() {
    if (!validate_form()) {
      setSavinResults(true);
      var api_base_url = AppSettings.BACKEND_API_URL;
      let ret = await ServiceWrapper.doPost(
        api_base_url + "result/save",
        questionList
      );
      console.log(ret);
      if (!ret.errorfound && ret.data.status) {
        history.push("/result/" + ret.data.data.userid);
      }
      setSavinResults(false);
    }
  }

  function update_rank(questionid, rank) {
    let tempVar = JSON.parse(JSON.stringify(questionList));
    let newlist = tempVar.questions.map((item, index) => {
      if (questionid === item.id) {
        item.selectedrank = rank;
      }
      return item;
    });
    tempVar.questions = newlist;
    // console.log(tempVar);
    setQuestionList(tempVar);
    // console.log(questionList);
  }

  function update_email(email) {
    let tempVar = JSON.parse(JSON.stringify(questionList));

    tempVar.email = email;
    setQuestionList(tempVar);
  }

  function validate_form() {
    setValidationError(false);
    let tempVar = JSON.parse(JSON.stringify(questionList));
    var hasFormError = false;
    tempVar.questions.every((item) => {
      if (Utils.isEmpty(item.selectedrank)) {
        setValidationError(true);
        setValidationErrorMessage("Please answer every question(s).");
        hasFormError = true;
        return false;
      }
    });

    if (!hasFormError) {
      if (Utils.isEmpty(tempVar.email)) {
        setValidationError(true);
        setValidationErrorMessage("Please enter an email.");
        hasFormError = true;
      } else if (!Utils.isValidEmail(tempVar.email)) {
        setValidationError(true);
        setValidationErrorMessage("Please enter a valid email");
        hasFormError = true;
      }
    }

    return hasFormError;

    // if (!hasFormError) {
    //   history.push("/result/10");
    // }
  }

  function range(start, end) {
    return Array.from({ length: end - start + 1 }, (_, i) => i);
  }

  useEffect(() => {
    load_questions();
  }, []);

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">&nbsp;</div>
        <div className="row">&nbsp;</div>
        <h5>Discover you Perspective</h5>
        <p>
          Complete the 7 min test and get a detailed report of your lenses on
          the world.
        </p>
        <div className="row">
          <div className="col min-vh-100 d-table">
            <div className="d-table-cell align-middle">
              {questionList.questions !== undefined && !loading && (
                <>
                  {questionList.questions.map((item) => (
                    <div key={item.id} className="row">
                      <div className="col-md-6 offset-md-3">
                        <div className="card col d-flex d-table-cell align-center">
                          <div
                            className="card-body justify-content-center"
                            style={{ width: "100%", alignContent: "center" }}
                          >
                            {item.question}
                            <div className="row">&nbsp;</div>
                            <p>
                              <span className="text-danger">
                                <strong>Disagree</strong>
                              </span>{" "}
                              &nbsp; &nbsp;
                              {range(1, 7).map((num) => (
                                <span key={num} className="form-check-inline">
                                  <input
                                    type="radio"
                                    value={num + 1}
                                    className="form-check-input"
                                    name={"optradio" + item.id}
                                    onChange={(e) =>
                                      update_rank(item.id, e.target.value)
                                    }
                                  />
                                </span>
                              ))}
                              &nbsp;{" "}
                              <span className="text-success">
                                <strong>Agree</strong>
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="row">
                    <div className="col-md-6 offset-md-3">
                      <div className="col d-flex d-table-cell align-center">
                        <div className="card-body justify-content-center">
                          Your email
                          <input
                            type="text"
                            className="form-control form-control-sm border border-secondary float-right"
                            placeholder="you@example.com"
                            onChange={(e) => update_email(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 offset-md-3">
                      <div className="col d-flex d-table-cell align-center">
                        <div className="card-body justify-content-center">
                          <button
                            type="button"
                            className="btn btn-primary btn-sm"
                            onClick={() => save_survey_results()}
                          >
                            Save & Continue
                          </button>
                          &nbsp;
                          {savinResults && (
                            <span className="alert alert-info" role="alert">
                              <span
                                className="spinner-grow spinner-grow-sm"
                                role="status"
                                aria-hidden="true"
                              ></span>{" "}
                              Saving Changes.
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  {validationError && (
                    <div className="row">
                      <div className="col-md-6 offset-md-3">
                        <div className="col d-flex d-table-cell align-center">
                          <div className="card-body justify-content-center">
                            <div className="alert alert-danger" role="alert">
                              {validationErrorMessage}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}

              {(questionList.questions === undefined || loading) && (
                <div className="alert alert-info" role="alert">
                  Loading questions
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Landing;
