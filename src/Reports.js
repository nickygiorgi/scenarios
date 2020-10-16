import React, { useState, useEffect } from "react";
import {NavBar} from "./NavBar";
import base from "./base";

const Reports = ({ history }) => {

  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const reportsData = await base.db.collection("reports").get();
      const scenariosData = await base.db.collection("scenarios").get();      
      const dbScenarios = scenariosData.docs.map(doc => {return {id: doc.id, ...doc.data()};});
      const dbReports = reportsData.docs.map(doc => {
        const reportData = doc.data();
        const reportedScenario = dbScenarios.find(s => s.id === reportData.scenarioId);
        return {id: doc.id, scenario: reportedScenario, ...reportData};
      });
      setReports(dbReports);
    }
    fetchData().catch((error) => {
      console.error(`Cannot fetch reports or reported scenarios: ${error}`);
    });
  }, []);

  return (
    <>
      <NavBar history={history} currentPage={'Reports'} />
      <h1>Reports here!</h1>
      <ul>
       {reports.map(r => (
          <li key={r.id}>
           {r.scenario.title}: {r.pass === true ? 'passed' : 'failed'}
          </li>
       ))}
       </ul>
    </>
  );
};

export default Reports;