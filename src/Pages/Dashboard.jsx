import React from "react";
import Layout from "../Components/Layout";
import Utils from "../Common/Utils";


function Dashboard(props) {
  React.useEffect(() => {
    Utils.enableFeatherPlugin();
    Utils.SetWindowTitle("Dashboard");
  });
  return (
    <React.Fragment>
      <Layout>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Dashboard</h1>
        </div>
       
      </Layout>
    </React.Fragment>
  );
}

export default Dashboard;
