import React from "react";
import {NavBar} from "./NavBar";

const Scenarios = ({ history }) => {

  return (
    <>
      <NavBar history={history} currentPage={'Scenarios'} />
      <h1>Scenarios here!</h1>
    </>
  );
};

export default Scenarios;