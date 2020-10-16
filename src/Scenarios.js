import React, { useState, useEffect } from "react";
import {NavBar} from "./NavBar";
import base from "./base";

const Scenarios = ({ history }) => {

  const [scenarios, setScenarios] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await base.db.collection("scenarios").get();
      setScenarios(data.docs.map(doc => doc.data()));
    }
    fetchData().catch((error) => { console.error(`Cannot fetch scenarios: ${error}`); });
  }, []);

  return (
    <>
      <NavBar history={history} currentPage={'Scenarios'} />
      <h1>Scenarios here!</h1>
      <ul>
       {scenarios.map(s => (
         <li key={s.id}>{s.title}</li>
       ))}
       </ul>
    </>
  );
};

export default Scenarios;