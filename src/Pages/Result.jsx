import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import AppSettings from "../Settings/AppSettings";
import Utils from "../Common/Utils";
import ServiceWrapper from "../Services/ServiceWrapper";

function Result(props) {
  const { params } = props.match;
  const history = useHistory();

  useEffect(() => {}, []);

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">&nbsp;</div>
        <div className="row">&nbsp;</div>
        <h5>Results</h5>
        <p>
          Complete the 7 min test and get a detailed report of your lenses on
          the world.
        </p>
      </div>
    </React.Fragment>
  );
}

export default Result;
