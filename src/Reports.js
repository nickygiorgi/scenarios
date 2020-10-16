import React from "react";
import {NavBar} from "./NavBar";

const Reports = ({ history }) => {

  return (
    <>
      <NavBar history={history} currentPage={'Reports'} />
      <h1>Reports here!</h1>
    </>
  );
};

export default Reports;